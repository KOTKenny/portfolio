window.PROJECTS = {
  knowyourpartner: {
    title: "KnowYourPartner",
    ai: true,
    kicker: { en: "Product · AI · live", ru: "Продукт · AI · live" },
    lead: {
      en: "Relationship product for couples: an LLM quiz builds a partner profile and turns it into gift, leisure and travel ideas, with a calendar of dates and one-click ordering.",
      ru: "Продукт для пар: LLM-опрос строит профиль партнёра и превращает его в идеи подарков, досуга и поездок, с календарём дат и заказом в один клик."
    },
    meta: [
      { label: { en: "Role", ru: "Роль" }, value: { en: "Product & engineering", ru: "Продукт и разработка" } },
      { label: { en: "Type", ru: "Тип" }, value: { en: "Personal product", ru: "Личный продукт" } },
      { label: { en: "Platforms", ru: "Платформы" }, value: { en: "Web · iOS · Android", ru: "Web · iOS · Android" } },
      { label: { en: "Period", ru: "Период" }, value: { en: "2026", ru: "2026" } }
    ],
    task: {
      en: "Build a product for couples that helps them discover each other and turns answers into concrete ideas — gifts, leisure, trips. Not a chat and not a feed: a private experience for two.",
      ru: "Сделать продукт для пар, который помогает узнавать друг друга и превращает ответы в конкретные идеи: подарки, досуг, поездки. Не чат и не лента — приватный опыт для двоих."
    },
    points: {
      en: [
        "Built the product end-to-end: LLM quiz, partner profile, recommendations, date calendar and ordering.",
        "Monorepo: backend, mobile client for iOS/Android/web on Expo, and an admin panel.",
        "LLM layer: model routing, structured JSON, schema validation and fallbacks.",
        "Infrastructure: PostgreSQL, Redis, Celery, JWT; deployed on Vercel and Render."
      ],
      ru: [
        "Собрал продукт целиком: LLM-опрос, профиль партнёра, рекомендации, календарь дат и заказ.",
        "Монорепо: backend, мобильный клиент iOS/Android/web на Expo и админ-панель.",
        "LLM-слой: маршрутизация моделей, structured JSON, валидация схем и fallbacks.",
        "Инфраструктура: PostgreSQL, Redis, Celery, JWT; деплой на Vercel и Render."
      ]
    },
    aiFlow: {
      en: [
        "Model routing through OpenRouter by task and budget.",
        "Structured JSON with schema validation: the model never writes to the database directly.",
        "Fallback model and graceful degradation to templates on error or timeout.",
        "Cost and latency guardrails; prompt and result logging for review."
      ],
      ru: [
        "Маршрутизация моделей через OpenRouter под задачу и бюджет.",
        "Structured JSON с валидацией схемы: модель не пишет в базу напрямую.",
        "Fallback-модель и деградация к шаблонам при ошибке или таймауте.",
        "Guardrails по стоимости и задержке; логирование промптов и результатов."
      ]
    },
    achievements: {
      en: [
        "Live product: knowyourpartner.vercel.app.",
        "One codebase for web, iOS and Android — no separate native team.",
        "AI workflow in production with validation, fallback and predictable cost.",
        "Admin panel for content and moderation."
      ],
      ru: [
        "Живой продукт: knowyourpartner.vercel.app.",
        "Один код на web, iOS и Android — без отдельной нативной команды.",
        "AI workflow в продакшене: валидация, fallback и предсказуемая стоимость.",
        "Админ-панель для контента и модерации."
      ]
    },
    stack: "FastAPI · PostgreSQL · Redis · Celery · OpenRouter · React Native · Expo · React + Vite",
    links: [{ label: "knowyourpartner.vercel.app", href: "https://knowyourpartner.vercel.app" }],
    note: null,
    next: "blizhe"
  },

  blizhe: {
    title: "Blizhe",
    ai: true,
    kicker: { en: "Product · Web · live", ru: "Продукт · Web · live" },
    lead: {
      en: "Web game for couples: private rooms, ten questions, a match report and topics worth discussing. No profiles, no feed, no audience.",
      ru: "Веб-игра для пар: приватные комнаты, десять вопросов, отчёт о совпадениях и темы для разговора. Без профилей, ленты и аудитории."
    },
    meta: [
      { label: { en: "Role", ru: "Роль" }, value: { en: "Product & engineering", ru: "Продукт и разработка" } },
      { label: { en: "Type", ru: "Тип" }, value: { en: "Personal product", ru: "Личный продукт" } },
      { label: { en: "Stack", ru: "Стек" }, value: { en: "Next.js 16 · Supabase · Vercel", ru: "Next.js 16 · Supabase · Vercel" } },
      { label: { en: "Period", ru: "Период" }, value: { en: "2026", ru: "2026" } }
    ],
    task: {
      en: "Ship a private game for two: room creation, questions with hidden answers, a reveal and a report. Everything must work on mobile web without an account.",
      ru: "Запустить приватную игру для двоих: создание комнаты, вопросы со скрытыми ответами, раскрытие и отчёт. Всё должно работать в мобильном вебе без аккаунта."
    },
    points: {
      en: [
        "Rooms by code: lobby, ten questions, answers hidden until both partners are ready.",
        "Report with matches, guesses, topics to discuss and a new round of questions.",
        "Next.js 16 with server routes and PostgreSQL on Supabase; cron cleanup of stale rooms.",
        "Deployed on Vercel with ad fallback; typecheck, lint, unit and e2e checks in one pipeline."
      ],
      ru: [
        "Комнаты по коду: лобби, десять вопросов, ответы скрыты до готовности обоих.",
        "Отчёт: совпадения, угадывания, темы для разговора и новый раунд вопросов.",
        "Next.js 16 с серверными роутами и PostgreSQL на Supabase; cron-очистка старых комнат.",
        "Деплой на Vercel с fallback для рекламы; typecheck, lint, unit и e2e в одном пайплайне."
      ]
    },
    aiFlow: {
      en: [
        "AI-delivered: spec, prototype and implementation built through an AI-assisted workflow (Cursor / OpenCode).",
        "Generated code was accepted only after typecheck, tests and e2e — not on trust.",
        "Database schema, room privacy and auth flows reviewed manually."
      ],
      ru: [
        "AI-delivered: спека, прототип и реализация собраны через AI-assisted workflow (Cursor / OpenCode).",
        "Сгенерированный код принимался только после typecheck, тестов и e2e — не на веру.",
        "Схему БД, приватность комнат и авторизацию проверял вручную."
      ]
    },
    achievements: {
      en: [
        "Live product: blizhe-virid.vercel.app.",
        "Full game loop shipped: room → questions → reveal → report → next round.",
        "Typecheck, lint, test, e2e and build gated before every deploy."
      ],
      ru: [
        "Живой продукт: blizhe-virid.vercel.app.",
        "Полный игровой цикл: комната → вопросы → раскрытие → отчёт → новый раунд.",
        "Перед каждым деплоем проходят typecheck, lint, test, e2e и build."
      ]
    },
    stack: "Next.js 16 · React · TypeScript · PostgreSQL · Supabase · Vercel",
    links: [{ label: "blizhe-virid.vercel.app", href: "https://blizhe-virid.vercel.app" }],
    note: null,
    next: "kyde"
  },

  kyde: {
    title: "Kyde (ex-Cadence)",
    ai: true,
    kicker: { en: "Commercial · Mobile · App Store", ru: "Коммерческий · Mobile · App Store" },
    lead: {
      en: "AI running coach live on the App Store: workouts, BLE heart rate, Apple Watch and GPS in the background, streaming coach replies and voice prompts.",
      ru: "AI running coach в App Store: тренировки, BLE-пульс, Apple Watch и GPS в фоне, потоковые ответы тренера и голосовые подсказки."
    },
    meta: [
      { label: { en: "Role", ru: "Роль" }, value: { en: "Senior React Native Engineer", ru: "Senior React Native Engineer" } },
      { label: { en: "Type", ru: "Тип" }, value: { en: "Contract", ru: "Контракт" } },
      { label: { en: "Period", ru: "Период" }, value: { en: "Aug 2025 — Mar 2026", ru: "авг 2025 — мар 2026" } },
      { label: { en: "Platforms", ru: "Платформы" }, value: { en: "iOS live · Android internal", ru: "iOS live · Android internal" } }
    ],
    task: {
      en: "Take AI coaching to production on iOS: workouts that keep running in the background, native sensors, streaming coach replies and offline storage that survives a killed app.",
      ru: "Довести AI-коучинг до продакшена на iOS: тренировки, которые работают в фоне, нативные сенсоры, потоковые ответы тренера и офлайн-хранение, переживающее закрытие приложения."
    },
    points: {
      en: [
        "Custom native module in Swift and Kotlin: BLE heart rate, Apple Watch, GPS and background tasks, with unit tests on both platforms.",
        "AI coaching on LangGraph: streaming, cancellation and ElevenLabs voice without blocking the JS thread mid-workout.",
        "Feature modules api → cache → state → hooks → ui with TanStack Query and Zustand.",
        "Offline-first workouts on SQLite + Drizzle: migrations, cache hydration and background sync.",
        "EAS Workflows: label-gated builds, store submission and OTA across sandbox and production."
      ],
      ru: [
        "Нативный модуль на Swift и Kotlin: BLE-пульс, Apple Watch, GPS и background tasks, с unit-тестами на обеих платформах.",
        "AI-коучинг на LangGraph: стриминг, отмена и голос ElevenLabs без блокировки JS-потока во время тренировки.",
        "Feature-модули api → cache → state → hooks → ui на TanStack Query и Zustand.",
        "Offline-first тренировки на SQLite + Drizzle: миграции, гидратация кэша и background sync.",
        "EAS Workflows: label-gated сборки, сабмит в стор и OTA для sandbox и production."
      ]
    },
    aiFlow: {
      en: [
        "Streaming and cancellable AI responses, so a workout never waits for the model.",
        "Prompt and session state orchestrated on the backend; the client only renders validated chunks.",
        "Voice prompts through ElevenLabs with latency guardrails and graceful fallback to text.",
        "Failure handling: retries, timeouts and offline continuation without losing the session."
      ],
      ru: [
        "Потоковые и отменяемые ответы AI: тренировка не ждёт модель.",
        "Промпты и состояние сессии оркестрируются на backend; клиент рендерит только валидные чанки.",
        "Голосовые подсказки через ElevenLabs с guardrails по задержке и fallback на текст.",
        "Обработка сбоев: retry, таймауты и продолжение офлайн без потери сессии."
      ]
    },
    achievements: {
      en: [
        "App live on the App Store: Kyde (ex-Cadence).",
        "Native module covered by unit tests on iOS and Android.",
        "Workouts survive app kills and poor connectivity.",
        "Token-based design system cut routine feature work by ~20%."
      ],
      ru: [
        "Приложение в App Store: Kyde (ex-Cadence).",
        "Нативный модуль покрыт unit-тестами на iOS и Android.",
        "Тренировки переживают закрытие приложения и плохую сеть.",
        "Дизайн-токены ускорили рутинную разработку примерно на 20%."
      ]
    },
    stack: "React Native 0.81 · React 19 · Expo 54 · Swift/Kotlin · LangGraph · ElevenLabs · SQLite + Drizzle · EAS",
    links: [
      {
        label: "App Store — Kyde",
        href: "https://apps.apple.com/us/app/kyde-realtime-running-coach/id6745837881"
      }
    ],
    note: null,
    next: "medical-records"
  },

  "medical-records": {
    title: "Medical records (NDA)",
    ai: true,
    kicker: { en: "Commercial · NDA · Healthcare", ru: "Коммерческий · NDA · Healthcare" },
    lead: {
      en: "Healthcare records product under NDA: record a visit, transcribe audio and generate SOAP notes; a browser extension pushes the result into EMR fields.",
      ru: "Медицинские записи под NDA: запись приёма, транскрипция аудио и генерация SOAP-заметок; расширение браузера переносит результат в поля EMR."
    },
    meta: [
      { label: { en: "Role", ru: "Роль" }, value: { en: "Senior Software Engineer · Elinext", ru: "Senior Software Engineer · Elinext" } },
      { label: { en: "Type", ru: "Тип" }, value: { en: "Commercial · NDA", ru: "Коммерческий · NDA" } },
      { label: { en: "Period", ru: "Период" }, value: { en: "2025 — 2026", ru: "2025 — 2026" } },
      { label: { en: "Platforms", ru: "Платформы" }, value: { en: "iOS · Android · Chrome", ru: "iOS · Android · Chrome" } }
    ],
    task: {
      en: "Cut the manual documentation load for clinicians: record a visit, turn audio into structured notes, then move the text into the EMR without retyping.",
      ru: "Сократить ручную документацию врача: записать приём, превратить аудио в структурированную заметку и перенести текст в EMR без повторного набора."
    },
    points: {
      en: [
        "Mobile app: in-app recording and audio upload, recording history, profile and plan screens.",
        "Clinical note templates: remarks, note, summary and full transcript.",
        "Firebase authentication: email/SSO, password reset and two-factor authentication.",
        "Chrome extension: floating panel inside the EHR, configurable field mapping and push to EMR.",
        "Template-based SOAP generation and section parsing shared between mobile and extension."
      ],
      ru: [
        "Мобильное приложение: запись в приложении и загрузка аудио, история записей, профиль и тарифы.",
        "Шаблоны клинических заметок: remarks, note, summary и полный транскрипт.",
        "Аутентификация на Firebase: email/SSO, сброс пароля и двухфакторная аутентификация.",
        "Chrome-расширение: панель внутри EHR, настраиваемый маппинг полей и перенос в EMR.",
        "Генерация SOAP по шаблонам и разбор секций, общие для мобильного приложения и расширения."
      ]
    },
    aiFlow: {
      en: [
        "Audio transcription followed by template-based SOAP note generation.",
        "Structured section parsing (SOAP / remarks) with validation of empty and malformed output.",
        "Fallback and regeneration while keeping the original transcript intact.",
        "Data minimisation in prompts and explicit control over what is sent to the model."
      ],
      ru: [
        "Транскрипция аудио и генерация SOAP-заметки по шаблону.",
        "Структурный разбор секций (SOAP / remarks) с проверкой пустых и невалидных ответов.",
        "Fallback и повторная генерация с сохранением исходного транскрипта.",
        "Минимизация данных в промптах и явный контроль того, что уходит в модель."
      ]
    },
    achievements: {
      en: [
        "End-to-end flow: recording → transcription → SOAP note → EMR.",
        "Browser extension with configurable field mapping for different EHR layouts.",
        "Note templates for multiple clinical scenarios.",
        "Under NDA: no public links, screenshots or client name."
      ],
      ru: [
        "End-to-end сценарий: запись → транскрипция → SOAP-заметка → EMR.",
        "Расширение браузера с настраиваемым маппингом под разные EHR.",
        "Шаблоны заметок под разные клинические сценарии.",
        "Под NDA: без публичных ссылок, скриншотов и названия клиента."
      ]
    },
    stack: "Expo · React Native · Firebase · Chrome Extension · REST · SOAP templates",
    links: [],
    note: {
      en: "Under NDA: no public links, screenshots or client name.",
      ru: "Под NDA: без публичных ссылок, скриншотов и названия клиента."
    },
    next: "knowyourpartner"
  }
};
