// import React from 'react';
// import './BottomNav.css';

// const NAV_ITEMS = [
//   { id: 'home',     icon: <i class="fi fi-bs-home"></i>, label: 'Главная'  },
//   { id: 'payment',  icon: '⊡', label: 'Оплата'   },
//   { id: 'transfer', icon: '⇄', label: 'Переводы' },
//   { id: 'reports',  icon: '◎', label: 'Отчёты'   },
//   { id: 'budget',   icon: '◈', label: 'Бюджет'   },
// ];

// export default function BottomNav({ active, onSwitch }) {
//   return (
//     <nav className="bottom-nav">
//       {NAV_ITEMS.map(it => (
//         <button
//           key={it.id}
//           className={`nav-btn${active === it.id ? ' active' : ''}`}
//           onClick={() => onSwitch(it.id)}
//         >
//           <span className="nav-icon">{it.icon}</span>
//           <span className="nav-label">{it.label}</span>
//         </button>
//       ))}
//     </nav>
//   );
// }

import React from 'react';
import './BottomNav.css';
import '@flaticon/flaticon-uicons/css/all/all.css';
const NAV_ITEMS = [
  { id: 'home',     icon: <i className="fi fi-bs-home"></i>, label: 'Главная'  },
  { id: 'payment',  icon: <i className="fi fi-bs-credit-card"></i>, label: 'Оплата'   },
  { id: 'transfer', icon: <i className="fi fi-bs-exchange"></i>, label: 'Переводы' },
  { id: 'reports',  icon: <i className="fi fi-bs-chart-pie"></i>, label: 'Отчёты'   },
  { id: 'budget',   icon: <i className="fi fi-bs-wallet"></i>, label: 'Бюджет'   },
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