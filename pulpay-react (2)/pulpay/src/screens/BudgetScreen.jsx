// import React from 'react';
// import BottomNav from '../components/BottomNav';
// import { budgetCategories, savingGoals, debts } from '../data';
// import './BudgetScreen.css';

// function fmt(n) {
//   return Math.abs(n).toLocaleString('ru-RU');
// }

// export default function BudgetScreen({ onSwitch }) {
//   return (
//     <div className="screen">
//       <div className="scroll-area">
//         <div className="page-pad">
//           <div className="page-label">ПЛАНИРОВАНИЕ</div>
//           <div className="page-title">Бюджет</div>
//         </div>

//         {/* Overview hero */}
//         <div className="budget-hero">
//           <div className="bh-glow" />
//           <div className="bh-label">Потрачено в августе</div>
//           <div className="bh-amount">
//             3 850 000 <span className="bh-of">/ 5 200 000</span>
//           </div>
//           <div className="bh-bar-out">
//             <div className="bh-bar-in" style={{ width: '74%' }} />
//           </div>
//           <div className="bh-foot">
//             <span>74% использовано</span>
//             <span>26% осталось</span>
//           </div>
//         </div>

//         {/* Categories */}
//         <div className="sec-header">
//           <div className="sec-title">По категориям</div>
//         </div>
//         <div className="budget-cats">
//           {budgetCategories.map((c, i) => {
//             const pct = Math.min(100, Math.round((c.spent / c.limit) * 100));
//             const over = pct >= 100;
//             return (
//               <div className="bc-item" key={i}>
//                 <div className="bc-row">
//                   <div className="bc-left">
//                     <span className="bc-ico">{c.ico}</span>
//                     <span className="bc-name">{c.name}</span>
//                   </div>
//                   <div className="bc-right">
//                     <div className="bc-spent">{fmt(c.spent)}</div>
//                     <div className="bc-of">из {fmt(c.limit)}</div>
//                   </div>
//                 </div>
//                 <div className="bc-bar-out">
//                   <div className={`bc-bar-in${over ? ' over' : ''}`} style={{ width: `${pct}%` }} />
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Saving goals */}
//         <div className="sec-header">
//           <div className="sec-title">Цели накоплений</div>
//           <div className="sec-link">+ Добавить</div>
//         </div>
//         <div className="goals-section">
//           {savingGoals.map((g, i) => {
//             const pct = Math.round((g.saved / g.goal) * 100);
//             return (
//               <div className="goal-card" key={i}>
//                 <div className="goal-header">
//                   <div>
//                     <div className="goal-name">{g.name}</div>
//                     <div className="goal-amount">{fmt(g.saved)} / {fmt(g.goal)} UZS</div>
//                   </div>
//                   <div className="goal-emoji">{g.emoji}</div>
//                 </div>
//                 <div className="goal-bar-out">
//                   <div className="goal-bar-in" style={{ width: `${pct}%` }} />
//                 </div>
//                 <div className="goal-foot">
//                   <span>{pct}%</span>
//                   <span>ещё ~{g.months} мес.</span>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Debts */}
//         <div className="sec-header">
//           <div className="sec-title">Долги</div>
//         </div>
//         <div className="debts-section">
//           {debts.map((d, i) => (
//             <div className="debt-card" key={i}>
//               <span className="debt-ico">{d.ico}</span>
//               <div className="debt-info">
//                 <div className="d-name">{d.name}</div>
//                 <div className="d-due">{d.due}</div>
//               </div>
//               <div className="debt-right">
//                 <div className="d-amount">{d.amt}</div>
//                 <div className={`d-badge ${d.status === 'open' ? 'd-open' : 'd-closed'}`}>
//                   {d.status.toUpperCase()}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <BottomNav active="budget" onSwitch={onSwitch} />
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import BottomNav from '../components/BottomNav';
import { budgetCategories, savingGoals, debts } from '../data';
import './BudgetScreen.css';

// Функция форматирования с поддержкой валюты
function fmt(n) {
  return Math.abs(n).toLocaleString('ru-RU');
}

export default function BudgetScreen({ onSwitch }) {
  const [mounted, setMounted] = useState(false);

  // Для запуска анимации прогресс-баров после рендера
  useEffect(() => {
    setMounted(true);
  }, []);

  // Динамический подсчет для Hero-блока
  const totalSpent = budgetCategories.reduce((acc, c) => acc + c.spent, 0);
  const totalLimit = budgetCategories.reduce((acc, c) => acc + c.limit, 0);
  const totalPct = totalLimit > 0 ? Math.min(100, Math.round((totalSpent / totalLimit) * 100)) : 0;
  
  // Текущий месяц для заголовка
  const currentMonth = new Date().toLocaleString('ru-RU', { month: 'long' });

  return (
    <div className="screen budget-screen">
      <div className="scroll-area">
        <header className="page-pad fade-in">
          <div className="page-label">ПЛАНИРОВАНИЕ</div>
          <h1 className="page-title">Бюджет</h1>
        </header>

        {/* Overview hero (Динамический) */}
        <section className="budget-hero slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="bh-glow" />
          <div className="bh-label">Потрачено в {currentMonth}e</div>
          <div className="bh-amount">
            {fmt(totalSpent)} <span className="bh-of">/ {fmt(totalLimit)} UZS</span>
          </div>
          <div className="bh-bar-out">
            <div 
              className={`bh-bar-in ${totalPct >= 100 ? 'danger' : ''}`} 
              style={{ width: mounted ? `${totalPct}%` : '0%' }} 
            />
          </div>
          <div className="bh-foot">
            <span>{totalPct}% использовано</span>
            <span>{Math.max(0, 100 - totalPct)}% осталось</span>
          </div>
        </section>

        {/* Categories */}
        <div className="sec-header slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="sec-title">По категориям</h2>
        </div>
        <section className="budget-cats slide-up" style={{ animationDelay: '0.3s' }}>
          {budgetCategories.map((c, i) => {
            const pct = Math.min(100, Math.round((c.spent / c.limit) * 100));
            const over = c.spent >= c.limit;

            return (
              <div className="bc-item" key={i}>
                <div className="bc-row">
                  <div className="bc-left">
                    <span className="bc-ico">{c.ico}</span>
                    <span className="bc-name">{c.name}</span>
                  </div>
                  <div className="bc-right">
                    <div className={`bc-spent ${over ? 'text-danger' : ''}`}>
                      {fmt(c.spent)}
                    </div>
                    <div className="bc-of">из {fmt(c.limit)}</div>
                  </div>
                </div>
                <div className="bc-bar-out">
                  <div 
                    className={`bc-bar-in ${over ? 'over' : ''}`} 
                    style={{ width: mounted ? `${pct}%` : '0%' }} 
                  />
                </div>
              </div>
            );
          })}
        </section>

        {/* Saving goals */}
        <div className="sec-header slide-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="sec-title">Цели накоплений</h2>
          <button className="sec-link">+ Добавить</button>
        </div>
        <section className="goals-section slide-up" style={{ animationDelay: '0.5s' }}>
          {savingGoals.map((g, i) => {
            const pct = Math.min(100, Math.round((g.saved / g.goal) * 100));
            return (
              <div className="goal-card" key={i}>
                <div className="goal-header">
                  <div>
                    <div className="goal-name">{g.name}</div>
                    <div className="goal-amount">{fmt(g.saved)} / {fmt(g.goal)} UZS</div>
                  </div>
                  <div className="goal-emoji">{g.emoji}</div>
                </div>
                <div className="goal-bar-out">
                  <div 
                    className="goal-bar-in" 
                    style={{ width: mounted ? `${pct}%` : '0%' }} 
                  />
                </div>
                <div className="goal-foot">
                  <span>{pct}%</span>
                  <span>ещё ~{g.months} мес.</span>
                </div>
              </div>
            );
          })}
        </section>

        {/* Debts */}
        <div className="sec-header slide-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="sec-title">Долги</h2>
        </div>
        <section className="debts-section slide-up" style={{ animationDelay: '0.7s' }}>
          {debts.map((d, i) => (
            <div className="debt-card" key={i}>
              <span className="debt-ico">{d.ico}</span>
              <div className="debt-info">
                <div className="d-name">{d.name}</div>
                <div className="d-due">{d.due}</div>
              </div>
              <div className="debt-right">
                <div className="d-amount">{fmt(d.amt)} UZS</div>
                <div className={`d-badge ${d.status === 'open' ? 'd-open' : 'd-closed'}`}>
                  {d.status === 'open' ? 'АКТИВЕН' : 'ЗАКРЫТ'}
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
      <BottomNav active="budget" onSwitch={onSwitch} />
    </div>
  );
}