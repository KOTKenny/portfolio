# Portfolio V2 — направление «Slate»

Вторая версия сайта: новый дизайн, обновлённые данные и проекты. Светлая и тёмная темы,
переключатель темы и языка, все кейсы внутри. Оригинал (`/index.html`, `/styles.css`, `/cases`)
не изменялся.

**Production:** https://kotkenny.vercel.app

## Как открыть

`portfolioV2/index.html` — главная. Кейсы: `portfolioV2/cases/*.html`.
Статический сайт, сборка не нужна. Шрифты Inter / JetBrains Mono лежат в `assets/fonts/`
и подключены локально — внешних зависимостей нет.

## Позиционирование

- **Роль:** Senior Software Engineer — .NET · React / React Native.
- **Факты:** 7+ лет .NET, 5+ лет React Native, 6 000+ пользователей Studhub, 3 приложения в сторах.
- **Резюме в шапке:** два PDF — `.NET + AI` и `React Native` (EN/RU).
- В About добавлены образование (BSUIR, 2018–2022) и английский (B2).
- Python как язык нигде не указан; у KnowYourPartner в стеке только FastAPI как фреймворк.

## Проекты

Карточки с реальными ссылками и стеком:

| Проект | Тип | Ссылки |
|---|---|---|
| Studhub | продукт | studhub.by, App Store, Google Play |
| KnowYourPartner | продукт · AI | knowyourpartner.vercel.app |
| Blizhe | продукт · web | blizhe-virid.vercel.app |
| Kyde (ex-Cadence) | коммерческий · mobile | App Store |
| Medical records | коммерческий · NDA | без публичных ссылок |
| Elinext | коммерческий · NDA | без публичных ссылок |
| BSEU Schedule | mobile | Google Play, GitLab (открытый код) |
| BSATU Schedule | mobile | Google Play |

В блоке «Also built»: FitTracker, VibePlace, JobSearcher, KSD, TESIB — только стек, без внешних ссылок.

**AI-delivered** — метка на проектах, где выстроен AI workflow: KnowYourPartner, Blizhe, Kyde,
Medical records, Elinext. В кейсах это отдельный блок «AI workflow»: маршрутизация моделей,
structured JSON, валидация, fallback, guardrails, контроль стоимости. Не «интегрировал AI».

**Ачивки** — только внутри кейсов, не на карточках.

## Метрики

- Studhub — **6 000+ активных пользователей** (внутренние данные).
- BSEU — **5 000+ установок, 3.5★** (82 отзыва) в Google Play.
- BSATU — **500+ установок, 4.2★** (6 отзывов) в Google Play.
- Коммерческие проекты — только производительность: API 160 → 96 мс, БД 110 → 50 мс,
  ручные операции 8 → 5 ч/нед. Пользовательские метрики на коммерческих проектах не показываем.
- Цифры по сторам сняты с публичных страниц Google Play; Studhub — внутренняя аналитика.

## Структура

```
portfolioV2/
  index.html           главная
  styles.css           токены и компоненты
  script.js            язык, тема, подсветка раздела
  404.html             кастомная 404
  vercel.json          headers: security + cache
  robots.txt
  sitemap.xml
  cases/
    studhub.html       статические кейсы (studhub, elinext, ksd, tesib, bsatu, bseu)
    project.html       шаблон новых кейсов (?p=knowyourpartner|blizhe|kyde|medical-records)
    project-data.js    контент новых кейсов на EN/RU
    project.js         рендер кейса и переключение языка
  assets/
    ilya-panko-new.png
    og.png             OG 1200×630
    favicon.svg
    fonts/             self-hosted Inter + JetBrains Mono (latin + cyrillic)
  favicon.ico
  cv-dotnet-ai.pdf     CV .NET + AI (EN / RU)
  cv-react-native.pdf  CV React Native (EN / RU)
  README.md
  TODO.md
  DEPLOY.md
```

## Деплой

Vercel, проект `vort-studio/kotkenny`, репозиторий
[KOTKenny/portfolio](https://github.com/KOTKenny/portfolio). Push в `main` деплоит автоматически.
Подробности и откат — в [`DEPLOY.md`](./DEPLOY.md).

## Дизайн

| токен | light | dark |
|---|---|---|
| bg | `#F5F6F8` | `#0D1117` |
| surface | `#FFFFFF` | `#121923` |
| ink | `#10151C` | `#E6EBF2` |
| muted | `#5B6777` | `#94A1B2` |
| line / line-strong | `#E2E7EE` / `#C9D2DE` | `#212B39` / `#33404F` |
| accent | `#3F51D6` | `#8B9BFF` |
| support | `#0E7C66` | `#4FD1B3` |

- Inter + JetBrains Mono, радиус 10–12 px, hairline-границы, без теней.
- Тема и язык применяются до первой отрисовки (`<head>`), хранятся в `localStorage`.
- Графики в кейсах: старая SVG-палитра переназначена на токены через CSS-атрибуты,
  поэтому диаграммы работают в обеих темах.

## Проверено

- 1440 / 820 / 390: горизонтального скролла нет на главной, во всех статических кейсах и в новых кейсах.
- Переключение темы и языка без перезагрузки; динамические кейсы перерисовываются на EN/RU.
- Внешние ссылки отдают 200: studhub.by, App Store и Google Play Studhub, knowyourpartner.vercel.app,
  blizhe-virid.vercel.app, App Store Kyde, Google Play BSEU/BSATU, GitLab BSEU.
- Production `https://kotkenny.vercel.app`: главная, кейсы, PDF, OG и шрифты отдают 200;
  неизвестный URL — кастомная 404; неизвестный `?p=` редиректит на `/404.html`.
- PDF-резюме, портрет, OG и шрифты лежат внутри V2; внешних зависимостей нет.
- Контраст текста и акцентов ≥ 4.5:1 в обеих темах, фокус с клавиатуры виден,
  `prefers-reduced-motion` учтён.

## Нюансы

- EN-резюме (`cv-dotnet-ai.pdf`, `cv-react-native.pdf`) пересобраны из MAIN 27.10.2026
  локальным скриптом `_internal/build-cv.ps1` (вне репозитория); RU-версии — старые экспорты и ждут RU-MAIN.
- Отложенные задачи и следующие шаги — в [`TODO.md`](./TODO.md), деплой — в [`DEPLOY.md`](./DEPLOY.md).
- Kyde: ссылка ведёт на приложение с bundle id `ai.joincadence.app` — подтверждено, что это
  переименованный Cadence.
- Medical records: NDA, без названия клиента, публичных ссылок и скриншотов.
- Старые SVG в статических кейсах оставлены как есть (контент не переписывался), палитра
  адаптирована CSS-ом.
- `canonical`, `og:url`, `og:image` и `sitemap.xml` содержат `https://kotkenny.vercel.app`;
  при переименовании проекта или подключении домена их нужно обновить.
