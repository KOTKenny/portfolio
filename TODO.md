# TODO — portfolioV2

Обновлено: 27.10.2026

## Отложено

- [ ] **FitTracker** — полноценный кейс: .NET 10, 8 сервисов, gRPC, RabbitMQ + outbox,
      SQL Server, GCP, Expo offline-first, Telegram Mini App, React admin.
      Публичной ссылки нет — только внутренний кейс.
- [ ] **VibePlace** — кейс: .NET 10, PostgreSQL + pgvector, Redis, Hangfire, MinIO,
      OpenRouter, Playwright, Expo. Публичной ссылки нет.
- [ ] **JobSearcher** — кейс: React/TS/Vite, .NET 9, SignalR, SQLite, OpenRouter,
      парсеры hh/rabota/park/LinkedIn. Публичной ссылки нет.
- [ ] После кейсов добавить ссылки из блока «Also built» и решить, выносить ли их в карточки.

## Резюме

- [ ] **RU-версии MAIN отсутствуют**: `cv-dotnet-ai-ru.pdf` и `cv-react-native-ru.pdf`
      собраны из старых RU-экспортов (сентябрь 2026). Нужен RU-MAIN → пересборка.
- [x] EN-резюме пересобраны из MAIN 27.10.2026 (`_internal/build-cv.ps1`).
- [ ] После правок MAIN пересобрать: `powershell -ExecutionPolicy Bypass -File _internal\build-cv.ps1`.
- [ ] Проверить, что версии `cv .NET + AI` и `cv Senior Frontend` не разошлись по датам.

## Контент

- [ ] Решить, добавлять ли Telegram в контакты.
- [ ] Раз в квартал обновлять метрики: Studhub 6K+, BSEU 5K+, BSATU 500+, рейтинги.
- [ ] Medical records: уточнить, можно ли раскрыть тип клиента или сегмент (сейчас только NDA).
- [ ] Проверить, не устарели ли цифры Elinext (160 → 96 мс, 110 → 50 мс, 8 → 5 ч/нед).
- [ ] Добавить даты/периоды для личных продуктов (KnowYourPartner, Blizhe).

## Инженерия

- [ ] `project.html`: состояние 404 для неизвестного `?p` (сейчас fallback на KnowYourPartner).
- [ ] Синхронизировать `lang` у `<html>` с `data-lang` (сейчас статически `en`).
- [ ] Заменить legacy SVG в статических кейсах (studhub, elinext) на компоненты графиков.
- [ ] Добавить favicon и `theme-color`.
- [ ] OG/Twitter meta и картинка 1200×630 для шаринга.
- [ ] Lighthouse: accessibility, performance, SEO.
- [ ] Проверить печатную версию страниц и PDF-кейсов.
- [ ] Прогнать все внешние ссылки перед деплоем (App Store, Play, Vercel, GitLab).

## Деплой

- [ ] Выбрать хостинг и URL — план в [`DEPLOY.md`](./DEPLOY.md).
- [ ] Решить: заменить корневой сайт или деплоить `/portfolioV2` как отдельную папку.
- [ ] Проверить относительные пути при деплое в подпапку GitHub Pages.
- [ ] `404.html`, `robots.txt`, `sitemap.xml`.
- [ ] Проверить, что PDF и `assets/` попадают в артефакт деплоя.

## Идеи на потом

- [ ] Фильтр проектов: All / .NET / Mobile / AI.
- [ ] Переключатель профиля в шапке (Backend / Mobile / AI) — только если не ломает повествование.
- [ ] Английская версия кейсов KSD/TESIB.
