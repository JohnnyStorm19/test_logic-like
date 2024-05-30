# Тестовое задание LogicLike

### [Ссылка на техническое задание](https://docs.google.com/document/d/1nac_dVRto6Fr7d3qZC9opjYIqCDx9L1zC-4CNyq91e0/edit)

Инструменты:
- **React**
- **Typescript**
- **FSD** - архитектурная методология проекта
- **Vite** - сборка
- **React-router** - роутинг
- **Tailwind** - стили
- **twMerge** - читабельность стилей в tailwind
- **ky** - формирование fetch-запросов 
- **react-query** - работа с запросами на сервер, кеширование, обработка ошибок, лоадеров
- **nanoid** - уникальные ID для реакт-компонентов

## Выполнение:
Проект адаптивен, выполнен по макету, верстка семантична. 
Для хранения состояний фильтров выбрал подход с поисковыми url-параметрами. Параметры формируются с помощью URLSearchParams API. Роутинг осуществляется с помощью **React-router**
В качестве архитектурной методологии выбрал **FSD**, т.к. проект проще поддерживать, дебажить, декомпозировать на логические компоненты и будет удобен для проверки.

