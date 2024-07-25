src/
├── app/
│   ├── index.tsx           # Entry point приложения
│   ├── App.tsx             # Главный компонент приложения
│   ├── store.ts            # Конфигурация хранилища (store)
│   ├── providers/          # Директория для различных провайдеров
│   │   ├── StoreProvider.tsx   # Провайдер для Redux состояния
│   │   └── RouterProvider.tsx  # Провайдер для роутера
│   └── styles/             # Директория для глобальных стилей
│       └── index.css       # Основные стили приложения
├── pages/                  # Страницы (views)
│   ├── LoginPage/
│   │   ├── components/     # Компоненты страницы
│   │   ├── index.tsx       # Главный файл страницы
│   │   └── styles.css      # Стили для страницы
│   ├── SignupPage/
│   │   ├── components/
│   │   ├── index.tsx
│   │   └── styles.css
│   └── DashboardPage/
│       ├── components/
│       ├── index.tsx
│       └── styles.css
├── features/               # Фичи приложения
│   ├── Auth/
│   │   ├── api/            # Логика взаимодействия с API
│   │   ├── components/     # Компоненты фичи
│   │   ├── hooks/          # Пользовательские хуки
│   │   ├── model/          # Управление состоянием (Redux Toolkit слайсы)
│   │   │   ├── authSlice.ts    # Слайс для Auth
│   │   │   └── authActions.ts  # Экшены для Auth (если отдельно)
│   │   └── utils/          # Утилиты и вспомогательные функции
│   ├── Tasks/
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── model/
│   │   │   ├── tasksSlice.ts   # Слайс для Tasks
│   │   │   └── tasksActions.ts # Экшены для Tasks (если отдельно)
│   │   └── utils/
│   ├── Chat/
│   │   ...
│   └── Notifications/
│       ...
├── shared/                 # Общие компоненты, хуки и утилиты
│   ├── components/         # Общие переиспользуемые компоненты (например, кнопки инпуты)
│   ├── hooks/              # Общие хуки
│   ├── hocs/              # Общие компоненты высшего порядка
│   ├── utils/              # Общие утилиты
│   └── styles/             # Общие стили
│       └── index.css       # Общие стили (если необходимы)
└── assets/                 # Статичные ресурсы (изображения, иконки и т.д.)
