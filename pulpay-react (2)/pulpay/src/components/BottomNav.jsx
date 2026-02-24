import React from 'react';
import './BottomNav.css';

const NAV_ITEMS = [
  { id: 'home',     icon: '⊞', label: 'Главная'  },
  { id: 'payment',  icon: '⊡', label: 'Оплата'   },
  { id: 'transfer', icon: '⇄', label: 'Переводы' },
  { id: 'reports',  icon: '◎', label: 'Отчёты'   },
  { id: 'budget',   icon: '◈', label: 'Бюджет'   },
];

export default function BottomNav({ active, onSwitch }) {
  return (
    <nav className="bottom-nav">
      {NAV_ITEMS.map(it => (
        <button
          key={it.id}
          className={`nav-btn${active === it.id ? ' active' : ''}`}
          onClick={() => onSwitch(it.id)}
        >
          <span className="nav-icon">{it.icon}</span>
          <span className="nav-label">{it.label}</span>
        </button>
      ))}
    </nav>
  );
}
