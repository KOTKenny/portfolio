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

- [x] `project.html`: неизвестный `?p` редиректит на `/404.html`.
- [ ] Синхронизировать `lang` у `<html>` с `data-lang` (сейчас статически `en`).
- [ ] Заменить legacy SVG в статических кейсах (studhub, elinext) на компоненты графиков.
- [x] favicon (`favicon.svg`, `favicon.ico`) и `theme-color`.
- [x] OG/Twitter meta и картинка 1200×630 (`assets/og.png`).
- [x] Self-hosted Inter + JetBrains Mono (latin + cyrillic).
- [ ] Lighthouse: accessibility, performance, SEO.
- [ ] Проверить печатную версию страниц и PDF-кейсов.
- [x] Все внешние ссылки проверены перед деплоем (App Store, Play, Vercel, GitLab).

## Деплой

- [x] Vercel + CLI: проект `vort-studio/kotkenny`, production **https://kotkenny.vercel.app**.
- [x] Репозиторий `KOTKenny/portfolio` (корень = V2), push в `main` → production.
- [x] `404.html`, `robots.txt`, `sitemap.xml`, `vercel.json`, `.vercelignore`.
- [x] PDF, шрифты, OG и `assets/` в артефакте.
- [x] Security headers и кеш шрифтов/PDF.
- [ ] Свой домен (опционально); после него обновить canonical, OG, sitemap.
- [ ] Проверить OG-превью в Telegram/LinkedIn на production.
- [ ] Прогнать Lighthouse на production.

## Идеи на потом

- [ ] Фильтр проектов: All / .NET / Mobile / AI.
- [ ] Переключатель профиля в шапке (Backend / Mobile / AI) — только если не ломает повествование.
- [ ] Английская версия кейсов KSD/TESIB.
