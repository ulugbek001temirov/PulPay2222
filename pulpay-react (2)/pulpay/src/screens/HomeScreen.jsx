import React from 'react';
import BottomNav from '../components/BottomNav';
import { transactions } from '../data';
import './HomeScreen.css';

function fmt(n) {
  return Math.abs(n).toLocaleString('ru-RU');
}

export default function HomeScreen({ onSwitch }) {
  return (
    <div className="screen">
      <div className="scroll-area">

        {/* Header - Profile Section */}
        <div className="home-header">
          <div className="profile-avatar">
            <img src="/avatar.jpg" alt="Profile" className="profile-pic" />
          </div>
          <div className="profile-info">
            <div className="greeting">Welcome back,</div>
            <div className="profile-name">Aimal Naseem</div>
          </div>
        </div>

        {/* Bank Card */}
        <div className="card-wrapper">
          <div className="card-image-container">
            <img src="/card.png" alt="card" className="card-image" />
            <div className="card-overlay">
              <div className="overlay-card-number">4562&nbsp;&nbsp;1122&nbsp;&nbsp;4595&nbsp;&nbsp;7852</div>
              <div className="overlay-card-bottom">
                <div className="overlay-field">
                  <div className="overlay-label">Card Holder</div>
                  <div className="overlay-value">Aimal Naseem</div>
                </div>
                <div className="overlay-field">
                  <div className="overlay-label">Expiry Date</div>
                  <div className="overlay-value">24/2000</div>
                </div>
                <div className="overlay-field">
                  <div className="overlay-label">CVV</div>
                  <div className="overlay-value">6986</div>
                </div>
                <div className="overlay-mastercard">
                  <div className="mc mc-red" />
                  <div className="mc mc-orange" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="actions-section">
          {[
            { icon: '↑', label: 'Sent',    action: () => onSwitch('transfer') },
            { icon: '↓', label: 'Receive', action: null },
            { icon: '💲', label: 'Loan',   action: () => onSwitch('payment') },
            { icon: '⊕', label: 'Topup',  action: null },
          ].map((a, i) => (
            <div className="action-item" key={i} onClick={a.action}>
              <div className="action-circle">{a.icon}</div>
              <div className="action-lbl">{a.label}</div>
            </div>
          ))}
        </div>

        {/* AI Block */}
        <div className="ai-block">
          <div className="ai-block-glow" />
          <div className="ai-badge-row">
            <span className="ai-badge">AI · PULPAY</span>
          </div>
          <div className="ai-text">
            До конца месяца останется{' '}
            <span className="ai-hl">~1 350 000 UZS</span> при текущем темпе трат.
            Расходы на кафе — <span className="ai-hl">22% бюджета</span>.
          </div>
          <div className="ai-chips">
            {['📊 Прогноз', '🔔 Подписки ×3', '💡 Экономия'].map(c => (
              <span className="ai-chip" key={c}>{c}</span>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div className="sec-header">
          <div className="sec-title">Transaction</div>
          <div className="sec-link" onClick={() => onSwitch('reports')}>See All</div>
        </div>
        <div className="tx-list">
          {transactions.map(tx => (
            <div className="tx-item" key={tx.id}>
              <div className="tx-ico">{tx.icon}</div>
              <div className="tx-info">
                <div className="tx-name">{tx.name}</div>
                <div className="tx-cat">{tx.cat}</div>
              </div>
              <div className={`tx-amount ${tx.neg ? 'neg' : 'pos'}`}>
                {tx.neg ? '−' : '+'}{fmt(tx.amount)}
              </div>
            </div>
          ))}
        </div>

      </div>
      <BottomNav active="home" onSwitch={onSwitch} />
    </div>
  );
}
