# PulPay — Fintech Mobile App UI

React-приложение мобильного fintech-приложения PulPay.

## Стек
- React 18
- CSS Modules (обычные .css файлы с переменными)
- Шрифты: Outfit + DM Mono (Google Fonts)

## Запуск

```bash
npm install
npm start
```

Откроется на http://localhost:3000

## Структура

```
src/
├── data/
│   └── index.js          # Все данные (транзакции, контакты, бюджет...)
├── components/
│   ├── BottomNav.jsx      # Нижняя навигация
│   └── BottomNav.css
├── screens/
│   ├── HomeScreen.jsx     # Главная (карточка, транзакции, AI)
│   ├── HomeScreen.css
│   ├── PaymentScreen.jsx  # Оплата услуг
│   ├── PaymentScreen.css
│   ├── TransferScreen.jsx # Переводы (ввод карты + суммы)
│   ├── TransferScreen.css
│   ├── ReportsScreen.jsx  # Отчёты (неделя/месяц, диаграммы)
│   ├── ReportsScreen.css
│   ├── BudgetScreen.jsx   # Бюджет, накопления, долги
│   └── BudgetScreen.css
├── styles/
│   └── global.css         # Глобальные стили и CSS переменные
├── App.js                 # Корневой компонент, роутинг по экранам
└── index.js
```

## Экраны

| Экран | Описание |
|-------|----------|
| Главная | Банковская карточка, быстрые действия, AI-аналитика, транзакции |
| Оплата | Категории услуг, поиск, история платежей |
| Переводы | Ввод номера карты (4×4), сумма, быстрые суммы, контакты |
| Отчёты | Период Неделя/Месяц, donut-диаграмма, бар-чарт, история |
| Бюджет | Прогресс бюджета, категории, цели накоплений, долги |
