# DEPLOY — portfolioV2 (Vercel)

Статус: **задеплоено**.

| | |
|---|---|
| Production | **https://kotkenny.vercel.app** |
| Vercel project | `vort-studio/kotkenny` (team `VortStudio`) |
| Repo | **https://github.com/KOTKenny/portfolio** (корень = `portfolioV2`) |
| Framework preset | Other, без сборки, output `.` |
| Git | подключён: push в `main` → production deploy |
| Старый сайт | `https://kotkenny.github.io/CV/` не тронут |

## Что уже сделано

- [x] Self-hosted Inter + JetBrains Mono (latin + cyrillic), без Google Fonts.
- [x] `404.html` + редирект `project.html?p=unknown` на 404.
- [x] `favicon.svg`, `favicon.ico`, `theme-color` для обеих тем.
- [x] OG/Twitter meta и отдельный макет `assets/og.png` 1200×630.
- [x] `robots.txt`, `sitemap.xml`.
- [x] `vercel.json`: security headers + кеш шрифтов и PDF.
- [x] `.vercelignore`: документация и env не попадают в артефакт.
- [x] Git-репозиторий и подключение к Vercel.

## Как деплоить

```powershell
cd D:\Job_Search\CV\portfolio\portfolioV2

# обычный деплой из CLI
npx vercel@latest deploy --prod --yes

# или просто
git push origin main
```

Git-интеграция Vercel собирает пуш в `main` автоматически.

### Первичная настройка (уже выполнена)

```powershell
npx vercel@latest login
npx vercel@latest link --yes --project kotkenny
npx vercel@latest deploy --prod --yes --project kotkenny --create-if-missing
npx vercel@latest git connect https://github.com/KOTKenny/portfolio
```

## Домен

- Бесплатный домен Vercel: **https://kotkenny.vercel.app** (по имени проекта).
- `ilya.panko` как `*.vercel.app` невозможен: в поддомене нельзя точку.
  Резервный вариант — `ilya-panko.vercel.app` (переименовать проект или добавить домен).
- Технические deployment-URL вида `kotkenny-xxxx-vort-studio.vercel.app` закрыты
  Vercel Authentication; публичный адрес — только production alias.
- Свой домен подключается позже: Vercel → Project → Domains → DNS.
  После смены домена обновить canonical, `og:url`, `og:image` и `sitemap.xml`.

## Проверка после деплоя

```powershell
$base = "https://kotkenny.vercel.app"
@(
  "/",
  "/cases/studhub.html",
  "/cases/project.html?p=kyde",
  "/cases/project.html?p=medical-records",
  "/cv-dotnet-ai.pdf",
  "/assets/og.png",
  "/assets/fonts/fonts.css",
  "/robots.txt",
  "/sitemap.xml",
  "/favicon.ico",
  "/nope"
) | ForEach-Object {
  try {
    $r = Invoke-WebRequest -Uri ($base + $_) -MaximumRedirection 5 -UseBasicParsing
    "$_ -> $($r.StatusCode)"
  } catch {
    "$_ -> ERR $($_.Exception.Response.StatusCode.value__)"
  }
}
```

Чеклист:

- [x] главная 200, 8 карточек, шрифты загружаются локально;
- [x] статические кейсы и `project.html?p=` открываются;
- [x] PDF и OG-картинка отдаются;
- [x] неизвестный URL отдаёт кастомную 404;
- [x] неизвестный `?p=` редиректит на `/404.html`;
- [x] security headers и кеш из `vercel.json` применяются;
- [ ] прогнать Lighthouse и проверить OG в Telegram/LinkedIn;
- [ ] проверить на реальном телефоне (390) и в Safari.

## Откат

- Vercel → Project → Deployments → предыдущий → **Promote to Production**.
- Или CLI: `npx vercel@latest rollback <deployment-url>`.
- Git: `git revert <commit>` и push; Vercel задеплоит откат.

## Ограничения и заметки

- Vercel не даёт управлять кешем HTML (max-age=0, must-revalidate) — это нормально.
- Шрифты кешируются на год (`immutable`), PDF — на сутки.
- `README.md`, `TODO.md`, `DEPLOY.md` исключены из публичного артефакта.
- `sitemap.xml` и OG-мета содержат `kotkenny.vercel.app`; при переименовании проекта
  или подключении домена их нужно обновить.
- RU-резюме всё ещё из старых экспортов: ждут RU-MAIN.

## Что осталось

- [ ] Свой домен (опционально).
- [ ] Lighthouse / accessibility / SEO.
- [ ] OG-превью в Telegram и LinkedIn.
- [ ] RU-версии MAIN → пересборка PDF.
- [ ] Кейсы FitTracker / VibePlace / JobSearcher.
