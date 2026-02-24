export const transactions = [
  { id: 1, icon: "🍎", name: "Apple Store",     cat: "Entertainment", amount: -77870,   neg: true  },
  { id: 2, icon: "🎵", name: "Spotify",          cat: "Music",         amount: -168870,  neg: true  },
  { id: 3, icon: "💸", name: "Money Transfer",   cat: "Transaction",   amount: 3900000,  neg: false },
  { id: 4, icon: "🛒", name: "Korzinka.uz",      cat: "Groceries",     amount: -340000,  neg: true  },
  { id: 5, icon: "☕", name: "Coffee Boom",      cat: "Café",          amount: -45000,   neg: true  },
  { id: 6, icon: "🚕", name: "Yandex Taxi",      cat: "Transport",     amount: -22000,   neg: true  },
  { id: 7, icon: "🎬", name: "Netflix",          cat: "Subscription",  amount: -55000,   neg: true  },
];

export const contacts = [
  { id: 1, em: "👤", name: "Бобур А.",    phone: "+998 90 123 45 67", last: "1 дн." },
  { id: 2, em: "👤", name: "Малика Т.",   phone: "+998 91 987 65 43", last: "3 дн." },
  { id: 3, em: "👤", name: "Жасур К.",    phone: "+998 93 456 78 90", last: "7 дн." },
  { id: 4, em: "👤", name: "Нилуфар И.",  phone: "+998 94 321 09 87", last: "14 дн." },
];

export const payServices = [
  { ico: "💡", name: "Электро-энергия", cat: "Коммунальные" },
  { ico: "🌊", name: "Водоснаб.",        cat: "Коммунальные" },
  { ico: "🔥", name: "Газ",              cat: "Коммунальные" },
  { ico: "📱", name: "Ucell",            cat: "Связь"        },
  { ico: "📡", name: "Uztelecom",        cat: "Интернет"     },
  { ico: "🌐", name: "Beeline",          cat: "Связь"        },
  { ico: "🏛️", name: "Налоги",           cat: "Налоги"       },
  { ico: "🏠", name: "Ипотека",          cat: "Коммунальные" },
  { ico: "➕", name: "Ещё",              cat: "Все"          },
];

export const recentPayments = [
  { ico: "💡", name: "Электричество",       date: "18 фев · Автоматически", amt: "−85 000" },
  { ico: "📱", name: "Ucell — 998 90 123 45", date: "15 фев · Вручную",        amt: "−30 000" },
  { ico: "🌐", name: "Sarkor Telecom",       date: "10 фев · Автоматически", amt: "−60 000" },
  { ico: "🔥", name: "Газ",                  date: "05 фев · Автоматически", amt: "−42 000" },
];

export const historyData = [
  { ico: "🍕", name: "Domino's Pizza",  cat: "Еда · 14 авг",        amount: -85000   },
  { ico: "💰", name: "Зарплата",        cat: "Доход · 13 авг",      amount: 5200000  },
  { ico: "🚕", name: "Yandex Taxi",     cat: "Транспорт · 13 авг",  amount: -22000   },
  { ico: "🛒", name: "Korzinka.uz",     cat: "Продукты · 12 авг",   amount: -340000  },
  { ico: "🎬", name: "Netflix",         cat: "Подписка · 10 авг",   amount: -55000   },
  { ico: "☕", name: "Coffee Boom",     cat: "Кафе · 9 авг",        amount: -45000   },
];

export const budgetCategories = [
  { ico: "🍕", name: "Еда и кафе",    spent: 1330000, limit: 1500000 },
  { ico: "🚕", name: "Транспорт",     spent: 760000,  limit: 800000  },
  { ico: "🎬", name: "Развлечения",   spent: 620000,  limit: 500000  },
  { ico: "🛒", name: "Покупки",       spent: 1140000, limit: 2000000 },
];

export const savingGoals = [
  { name: "Новый ноутбук",   emoji: "💻", saved: 1150000, goal: 4500000, months: 7  },
  { name: "Отпуск в Дубае",  emoji: "✈️", saved: 820000,  goal: 8000000, months: 18 },
];

export const debts = [
  { ico: "🏦", name: "Бобур А. (мне должен)", due: "Срок: 25 авг 2025", amt: "+300 000", status: "open"   },
  { ico: "💸", name: "Малика Т. (я должен)",  due: "Срок: 1 сен 2025",  amt: "−150 000", status: "open"   },
  { ico: "✅", name: "Жасур К. (закрыт)",     due: "Закрыт 5 авг 2025", amt: "200 000",  status: "closed" },
];

export const chartData = [
  { label: "ФЕВ", income: 55, expense: 42 },
  { label: "МАР", income: 65, expense: 50 },
  { label: "АПР", income: 45, expense: 60 },
  { label: "МАЙ", income: 72, expense: 48 },
  { label: "ИЮН", income: 80, expense: 58 },
  { label: "ИЮЛ", income: 68, expense: 45 },
  { label: "АВГ", income: 60, expense: 40, faded: true },
];

export const donutSlices = [
  { color: "#3d5af1", name: "Еда и кафе",    pct: "35%", dash: 110, offset: 0    },
  { color: "#5ce68a", name: "Транспорт",     pct: "20%", dash: 63,  offset: -110 },
  { color: "#ffb800", name: "Развлечения",   pct: "15%", dash: 47,  offset: -173 },
  { color: "rgba(255,255,255,0.18)", name: "Остальное", pct: "30%", dash: 94, offset: -220 },
];
