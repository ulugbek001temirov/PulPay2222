// import React, { useState } from 'react';
// import BottomNav from '../components/BottomNav';
// import { recentPayments, payServices } from '../data';
// import './PaymentScreen.css';

// const CATEGORIES = [
//   {
//     ico: '🏠',
//     name: 'Коммуналка',
//     desc: 'gas, water, electric',
//     color: 'rgba(255,160,80,0.12)',
//     border: 'rgba(255,160,80,0.25)',
//   },
//   {
//     ico: '📱',
//     name: 'Связь',
//     desc: 'Ucell, Beeline, UMS',
//     color: 'rgba(130,100,255,0.12)',
//     border: 'rgba(130,100,255,0.25)',
//   },
//   {
//     ico: '🌐',
//     name: 'Интернет',
//     desc: 'Humans, Sarkor',
//     color: 'rgba(61,150,241,0.12)',
//     border: 'rgba(61,150,241,0.25)',
//   },
//   {
//     ico: '📋',
//     name: 'Налоги',
//     desc: 'штрафы, госуслуги',
//     color: 'rgba(255,200,60,0.12)',
//     border: 'rgba(255,200,60,0.25)',
//   },
// ];

// export default function PaymentScreen({ onSwitch }) {
//   const [selectedCat, setSelectedCat] = useState(null);

//   const CAT_MAP = {
//     'Коммуналка': 'Коммунальные',
//     'Связь': 'Связь',
//     'Интернет': 'Интернет',
//     'Налоги': 'Налоги',
//   };

//   const servicesFor = (catName) => {
//     const mapped = CAT_MAP[catName] || catName;
//     return payServices.filter(s => (s.cat || '').toLowerCase().includes(mapped.toLowerCase()));
//   };
//   return (
//     <div className="screen">
//       <div className="scroll-area">

//         {/* Header with back arrow style */}
//         <div className="pay-header">
//           <div className="pay-back" onClick={() => onSwitch('home')}>←</div>
//           <div className="pay-header-title">Оплата услуг</div>
//           <div style={{ width: 36 }} />
//         </div>

//         {/* Category grid or services (drill-down) */}
//         {selectedCat ? (
//           <div className="service-list">
//             {servicesFor(selectedCat).map((s, i) => (
//               <div key={i} className="service-item" onClick={() => onSwitch('transfer')}>
//                 <div className="si-ico">{s.ico}</div>
//                 <div className="si-name">{s.name}</div>
//               </div>
//             ))}
//             {!servicesFor(selectedCat).length && (
//               <div className="service-empty">Нет доступных сервисов в этой категории</div>
//             )}
//           </div>
//         ) : (
//           <div className="cat-grid">
//             {CATEGORIES.map((c, i) => (
//               <div
//                 className="cat-tile"
//                 key={i}
//                 style={{ background: c.color, borderColor: c.border }}
//                 onClick={() => setSelectedCat(c.name)}
//               >
//                 <div className="cat-tile-icon">{c.ico}</div>
//                 <div className="cat-tile-name">{c.name}</div>
//                 <div className="cat-tile-desc">{c.desc}</div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Recent payments */}
//         <div className="sec-header">
//           <div className="sec-title" style={{ fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--text3)', fontFamily: 'var(--mono)' }}>
//             ИСТОРИЯ ОПЛАТ
//           </div>
//         </div>
//         <div className="recent-list">
//           {recentPayments.map((r, i) => (
//             <div className="recent-item" key={i}>
//               <div className="ri-ico">{r.ico}</div>
//               <div className="ri-info">
//                 <div className="ri-name">{r.name}</div>
//                 <div className="ri-date">{r.date}</div>
//               </div>
//               <div className="ri-amt">{r.amt}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <BottomNav active="payment" onSwitch={onSwitch} />
//     </div>
//   );
// }
import React, { useState } from 'react';
import BottomNav from '../components/BottomNav';
import { recentPayments, payServices } from '../data';
import './PaymentScreen.css';

const CATEGORIES = [
  {
    ico: '🏠',
    name: 'Коммуналка',
    desc: 'gas, water, electric',
    color: 'rgba(255,160,80,0.12)',
    border: 'rgba(255,160,80,0.25)',
  },
  {
    ico: '📱',
    name: 'Связь',
    desc: 'Ucell, Beeline, UMS',
    color: 'rgba(130,100,255,0.12)',
    border: 'rgba(130,100,255,0.25)',
  },
  {
    ico: '🌐',
    name: 'Интернет',
    desc: 'Humans, Sarkor',
    color: 'rgba(61,150,241,0.12)',
    border: 'rgba(61,150,241,0.25)',
  },
  {
    ico: '📋',
    name: 'Налоги',
    desc: 'штрафы, госуслуги',
    color: 'rgba(255,200,60,0.12)',
    border: 'rgba(255,200,60,0.25)',
  },
];

export default function PaymentScreen({ onSwitch }) {
  const [selectedCat, setSelectedCat] = useState(null);

  const CAT_MAP = {
    'Коммуналка': 'Коммунальные',
    'Связь': 'Связь',
    'Интернет': 'Интернет',
    'Налоги': 'Налоги',
  };

  const servicesFor = (catName) => {
    const mapped = CAT_MAP[catName] || catName;
    return payServices.filter(s => (s.cat || '').toLowerCase().includes(mapped.toLowerCase()));
  };

  // Улучшенный UX: Назад возвращает в категории, а если уже там — то на главную
  const handleBack = () => {
    if (selectedCat) {
      setSelectedCat(null);
    } else {
      onSwitch('home');
    }
  };

  return (
    <div className="screen payment-screen">
      <div className="scroll-area">
        
        {/* Header */}
        <div className="pay-header fade-in">
          <button className="pay-back" onClick={handleBack}>←</button>
          <div className="pay-header-title">
            {selectedCat ? selectedCat : 'Оплата услуг'}
          </div>
          <div style={{ width: 32 }} /> {/* Балансир для центрирования текста */}
        </div>

        {/* Dynamic Content (Grid or List) */}
        {selectedCat ? (
          <div className="service-list slide-up">
            {servicesFor(selectedCat).map((s, i) => (
              <div key={i} className="service-item" onClick={() => onSwitch('transfer')}>
                <div className="si-ico">{s.ico}</div>
                <div className="si-name">{s.name}</div>
                <div className="si-arrow">›</div>
              </div>
            ))}
            {!servicesFor(selectedCat).length && (
              <div className="service-empty">Нет доступных сервисов в этой категории</div>
            )}
          </div>
        ) : (
          <div className="cat-grid slide-up" style={{ animationDelay: '0.05s' }}>
            {CATEGORIES.map((c, i) => (
              <div
                className="cat-tile"
                key={i}
                style={{ background: c.color, borderColor: c.border }}
                onClick={() => setSelectedCat(c.name)}
              >
                <div className="cat-tile-icon">{c.ico}</div>
                <div className="cat-tile-name">{c.name}</div>
                <div className="cat-tile-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        )}

        {/* Recent payments: показываем ТОЛЬКО если не выбрана категория */}
        {!selectedCat && (
          <>
            <div className="sec-header slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="sec-title">История оплат</div>
              <button className="sec-link">Все</button>
            </div>
            
            <div className="recent-list slide-up" style={{ animationDelay: '0.2s' }}>
              {recentPayments.map((r, i) => (
                <div className="recent-item" key={i}>
                  <div className="ri-ico">{r.ico}</div>
                  <div className="ri-info">
                    <div className="ri-name">{r.name}</div>
                    <div className="ri-date">{r.date}</div>
                  </div>
                  <div className="ri-amt">{r.amt}</div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
      <BottomNav active="payment" onSwitch={onSwitch} />
    </div>
  );
}