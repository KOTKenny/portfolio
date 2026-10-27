# DEPLOY — portfolioV2

План деплоя статического сайта. Ничего ещё не задеплоено; ниже — текущее состояние,
рекомендуемая схема и пошаговый чек-лист.

## 1. Текущее состояние

- `portfolioV2/` — самодостаточная статика: своих `styles.css`, `script.js`, `cases/`, `assets/`,
  PDF-резюме. Ссылок за пределы папки нет (все `../` — внутри V2).
- Локальный репозиторий **не инициализирован**: `D:\Job_Search\CV\portfolio` — не git.
- Живой GitHub Pages сейчас: **https://kotkenny.github.io/CV/** (репозиторий `KOTKenny/CV`,
  default `main`, обновлялся в 2022). Это отдельный CV-сайт, не портфолио.
- `https://kotkenny.github.io/portfolio/` и `/portfolioV2/` — 404. Портфолио не опубликовано.
- Конфигов деплоя нет: ни `CNAME`, ни `.nojekyll`, ни workflow, ни 404, ни favicon.
- В корне проекта лежит лишнее для артефакта: `design/`, `export/`, `_internal/`,
  `.playwright-mcp/`, `_export.js`, старые `index.html` / `styles.css`.

## 2. Куда деплоить

### Рекомендация: GitHub Pages, новый репозиторий `portfolio`

- Бесплатно, HTTPS, статика без сборки.
- URL на старте: **https://kotkenny.github.io/portfolio/**
- Старый `/CV/` не трогаем.
- Деплой только `portfolioV2/` через GitHub Actions — корневой мусор и v1 в артефакт не попадают.

### Альтернативы

| Вариант | Плюсы | Минусы |
|---|---|---|
| **Cloudflare Pages** | preview на каждый PR, свои заголовки кеша, аналитика, быстрый CDN | нужен аккаунт Cloudflare, ещё один сервис |
| **Vercel** | знаком вам (Blizhe, KnowYourPartner), preview-деплои | лимиты бесплатного плана, реклама/аналитика |
| **GitHub Pages + custom domain** | свой домен, всё в одном месте | домен и DNS на вас; headers недоступны |

Если нужен собственный домен — сначала запускаем на `github.io/portfolio`, потом добавляем
`CNAME` и DNS. Это позволяет не блокировать запуск.

## 3. Схема репозитория

```
portfolio/                 ← репозиторий
  index.html               v1 (не деплоится, остаётся в истории)
  styles.css
  cases/
  design/                  прототипы (можно не коммитить)
  portfolioV2/             ← артефакт деплоя
  _internal/build-cv.ps1   пересборка PDF
  .github/workflows/pages.yml
  .gitignore
```

Позже, когда V2 станет основной, можно перенести содержимое `portfolioV2/` в корень и
поменять `path` в workflow на `.` — URL станет `https://kotkenny.github.io/portfolio/`
без `/portfolioV2` в ссылках. Структура внутри V2 уже готова к корню.

## 4. Что сделать до деплоя (блокеры)

- [ ] **`.nojekyll`** в артефакте (пустой файл) — отключает Jekyll.
- [ ] **404.html** — общая страница для неизвестных URL.
- [ ] **`project.html?p=unknown`** — сейчас fallback на KnowYourPartner; сделать мягкий 404/редирект.
- [ ] **favicon** (`favicon.svg` + `favicon.ico`) и `<meta name="theme-color">`.
- [ ] **meta description** на главной и кейсах.
- [ ] **OG/Twitter meta** + картинка 1200×630 (`assets/og.png`) — иначе в Telegram/LinkedIn
      будет пустая карточка.
- [ ] **`robots.txt`** и **`sitemap.xml`** (после выбора домена).
- [ ] **Шрифты**: сейчас Google Fonts. Для Беларуси/офлайна лучше положить Inter и
      JetBrains Mono в `assets/fonts/` и подключить `@font-face` (убирает внешнюю зависимость
      и ускоряет первый рендер). Если оставляем CDN — окей, но это единственная внешняя зависимость.
- [ ] **Проверить ссылки** перед публикацией: App Store, Google Play, GitLab, Vercel.
- [ ] **Проверить PDF**: `cv-dotnet-ai.pdf`, `cv-react-native.pdf`, RU-версии.
- [ ] **Убрать из артефакта** `_internal/`, `design/`, `export/`, `.playwright-mcp/`.

## 5. GitHub Actions

`.github/workflows/pages.yml`:

```yaml
name: Deploy portfolio

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: portfolioV2
      - id: deployment
        uses: actions/deploy-pages@v4
```

После первого пуша: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
Никаких сборок, секретов и Node не нужно.

## 6. Инициализация репозитория

```powershell
cd D:\Job_Search\CV\portfolio

git init
git branch -M main

# .gitignore (пример)
@"
_internal/cv-build/
.playwright-mcp/
export/
"@ | Set-Content .gitignore -Encoding utf8

git add .
git commit -m "Portfolio v2: new design, projects and CVs"

git remote add origin git@github.com:KOTKenny/portfolio.git
git push -u origin main
```

Если установлен `gh`:

```powershell
gh repo create KOTKenny/portfolio --public --source=. --remote=origin --push
```

Репозиторий должен быть **public** для бесплатного GitHub Pages.
Старый `KOTKenny/CV` и живой `/CV/` не трогаем.

## 7. Проверка после деплоя

```powershell
$base = "https://kotkenny.github.io/portfolio"
@(
  "$base/",
  "$base/cases/studhub.html",
  "$base/cases/project.html?p=kyde",
  "$base/cases/project.html?p=medical-records",
  "$base/cv-dotnet-ai.pdf",
  "$base/assets/ilya-panko-new.png"
) | ForEach-Object {
  try { "$_ -> " + (Invoke-WebRequest -UseBasicParsing $_ -Method Head).StatusCode }
  catch { "$_ -> ERR " + $_.Exception.Response.StatusCode.value__ }
}
```

- [ ] открывается главная, 8 карточек, оба кейс-типа (статические и `project.html?p=`);
- [ ] тема и язык сохраняются после перехода между страницами;
- [ ] PDF скачиваются;
- [ ] 404 отдаёт свою страницу;
- [ ] мобильный 390, планшет 820, десктоп 1440;
- [ ] внешние ссылки 200;
- [ ] OG-карточка корректна (Telegram: отправить ссылку себе; или opengraph.xyz);
- [ ] Lighthouse: Performance / Accessibility / SEO — без критичных ошибок.

## 8. Кастомный домен (позже)

1. Купить домен (например, `panko.dev`) — если нужен.
2. В репозитории: Settings → Pages → Custom domain → добавить, создать `CNAME` в артефакте.
3. DNS:
   - apex: A `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`;
   - AAAA: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`;
   - `www` → CNAME `kotkenny.github.io`.
4. Enforce HTTPS.
5. После домена обновить canonical, OG URL, `sitemap.xml`.

## 9. Откат

- GitHub Pages хранит историю деплоев: Settings → Pages → последний деплой → **Re-run** предыдущего.
- В git: `git revert <commit>` или вернуться на тег `v2.0`.
- Если что-то сломается на `/portfolio/`, старый `/CV/` не затрагивается.

## 10. Обновления после запуска

- CV: `powershell -ExecutionPolicy Bypass -File _internal\build-cv.ps1` → закоммитить PDF.
- Метрики и проекты: правки в `portfolioV2/index.html` → пуш → автодеплой.
- Раз в квартал: проверить стор-метрики и внешние ссылки.

## 11. Что нужно решить

1. **Хостинг**: GitHub Pages (рекомендую) / Cloudflare Pages / Vercel.
2. **URL**: сначала `kotkenny.github.io/portfolio/` или сразу свой домен?
3. **Имя репозитория**: `portfolio` (рекомендую) или другой.
4. **Шрифты**: self-host (надёжнее) или оставить Google Fonts.
5. **OG-картинка**: сделать из hero-скриншота или сверстать отдельную 1200×630.

После ответов: добавляю `404.html`, favicon, meta/OG, workflow и `.nojekyll`, затем первый деплой.
