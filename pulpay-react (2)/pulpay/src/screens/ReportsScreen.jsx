// import React, { useState } from 'react';
// import BottomNav from '../components/BottomNav';
// import { historyData, donutSlices } from '../data';
// import './ReportsScreen.css';

// function fmt(n) {
//   return Math.abs(n).toLocaleString('ru-RU');
// }

// export default function ReportsScreen({ onSwitch }) {
//   const [period, setPeriod] = useState('Месяц');

//   return (
//     <div className="screen">
//       <div className="scroll-area">
//         <div className="page-pad">
//           <div className="page-label">АНАЛИТИКА</div>
//           <div className="page-title">Отчёты</div>
//         </div>

//         {/* Period tabs */}
//         <div className="period-tabs">
//           {['Неделя', 'Месяц'].map(p => (
//             <button key={p} className={`ptab${period === p ? ' on' : ''}`} onClick={() => setPeriod(p)}>
//               {p}
//             </button>
//           ))}
//         </div>

//         {/* Summary cards */}
//         <div className="summary-row">
//           <div className="sum-card">
//             <div className="sum-lbl">Доходы</div>
//             <div className="sum-val">5 200 000</div>
//             <div className="sum-tag up-green">↑ +12%</div>
//           </div>
//           <div className="sum-card">
//             <div className="sum-lbl">Расходы</div>
//             <div className="sum-val">3 850 000</div>
//             <div className="sum-tag up-red">↑ +4%</div>
//           </div>
//         </div>

//         {/* Chart removed as per design — summary + history remain */}

//         {/* History */}
//         <div className="sec-header">
//           <div className="sec-title">История</div>
//         </div>
//         <div className="hist-list">
//           {historyData.map((h, i) => (
//             <div className="hist-item" key={i}>
//               <div className="h-ico">{h.ico}</div>
//               <div className="h-info">
//                 <div className="h-name">{h.name}</div>
//                 <div className="h-cat">{h.cat}</div>
//               </div>
//               <div className={`h-amt${h.amount < 0 ? ' neg' : ' pos'}`}>
//                 {h.amount < 0 ? '−' : '+'}{fmt(h.amount)}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <BottomNav active="reports" onSwitch={onSwitch} />
//     </div>
//   );
// }
import React, { useState } from 'react';
import BottomNav from '../components/BottomNav';
import { historyData } from '../data';
import './ReportsScreen.css';

function fmt(n) {
  return Math.abs(n).toLocaleString('ru-RU');
}

export default function ReportsScreen({ onSwitch }) {
  const [period, setPeriod] = useState('Месяц');

  // Моковые данные для сумм
  const income = 5200000;
  const expense = 3850000;
  
  // Вычисляем процент расходов от доходов для наглядной полоски
  const expensePct = Math.min(100, Math.round((expense / income) * 100));
  const incomePct = 100 - expensePct;

  return (
    <div className="screen reports-screen">
      <div className="scroll-area">
        <header className="page-pad fade-in">
          <div className="page-label">АНАЛИТИКА</div>
          <h1 className="page-title">Отчёты</h1>
        </header>

        {/* Period tabs */}
        <div className="period-tabs-wrap slide-up" style={{ animationDelay: '0.05s' }}>
          <div className="period-tabs">
            {['Неделя', 'Месяц'].map(p => (
              <button 
                key={p} 
                className={`ptab ${period === p ? 'on' : ''}`} 
                onClick={() => setPeriod(p)}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Summary cards */}
        <div className="summary-row slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="sum-card income">
            <div className="sum-header">
              <span className="sum-lbl">Доходы</span>
              <div className="sum-ico">↓</div>
            </div>
            <div className="sum-val">{fmt(income)}</div>
            <div className="sum-tag up-green">↑ +12% к прошлому</div>
          </div>
          
          <div className="sum-card expense">
            <div className="sum-header">
              <span className="sum-lbl">Расходы</span>
              <div className="sum-ico">↑</div>
            </div>
            <div className="sum-val">{fmt(expense)}</div>
            <div className="sum-tag up-red">↑ +4% к прошлому</div>
          </div>
        </div>

        {/* Наглядная полоса соотношения доходов и расходов */}
        <div className="ratio-section slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="ratio-bar">
            <div className="rb-income" style={{ width: `${incomePct}%` }} />
            <div className="rb-expense" style={{ width: `${expensePct}%` }} />
          </div>
          <div className="ratio-labels">
            <span>Свободно {incomePct}%</span>
            <span>Потрачено {expensePct}%</span>
          </div>
        </div>

        {/* History */}
        <div className="sec-header slide-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="sec-title">История операций</h2>
          <button className="sec-link">Все</button>
        </div>
        
        <div className="hist-list slide-up" style={{ animationDelay: '0.4s' }}>
          {historyData.map((h, i) => {
            const isExpense = h.amount < 0;
            return (
              <div className="hist-item" key={i}>
                <div className="h-ico">{h.ico}</div>
                <div className="h-info">
                  <div className="h-name">{h.name}</div>
                  <div className="h-cat">{h.cat}</div>
                </div>
                <div className="h-right">
                  <div className={`h-amt ${isExpense ? 'neg' : 'pos'}`}>
                    {isExpense ? '−' : '+'}{fmt(h.amount)}
                  </div>
                  <div className="h-currency">UZS</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <BottomNav active="reports" onSwitch={onSwitch} />
    </div>
  );
}