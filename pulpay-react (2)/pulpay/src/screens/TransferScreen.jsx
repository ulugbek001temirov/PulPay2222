import React, { useState, useRef, useCallback } from 'react';
import BottomNav from '../components/BottomNav';
import { contacts } from '../data';
import './TransferScreen.css';

const MAX_AMOUNT = 200000000;

function applyCardFormat(raw, cursorPos) {
  const digits = raw.replace(/\D/g, '').slice(0, 16);
  let digitsBeforeCursor = 0;
  for (let i = 0; i < cursorPos && i < raw.length; i++) {
    if (/\d/.test(raw[i])) digitsBeforeCursor++;
  }
  let formatted = '';
  for (let i = 0; i < digits.length; i++) {
    if (i > 0 && i % 4 === 0) formatted += ' ';
    formatted += digits[i];
  }
  let newCursor = 0;
  let counted = 0;
  for (let i = 0; i < formatted.length; i++) {
    if (counted === digitsBeforeCursor) { newCursor = i; break; }
    if (/\d/.test(formatted[i])) counted++;
    newCursor = i + 1;
  }
  return { formatted, newCursor };
}

function applyAmountFormat(raw, cursorPos) {
  let digitsBeforeCursor = 0;
  for (let i = 0; i < cursorPos && i < raw.length; i++) {
    if (/\d/.test(raw[i])) digitsBeforeCursor++;
  }
  const digits = raw.replace(/\D/g, '');
  if (!digits) return { formatted: '', newCursor: 0, num: 0 };
  const num = Number(digits);
  const formatted = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  let newCursor = 0;
  let counted = 0;
  for (let i = 0; i < formatted.length; i++) {
    if (counted === digitsBeforeCursor) { newCursor = i; break; }
    if (/\d/.test(formatted[i])) counted++;
    newCursor = i + 1;
  }
  return { formatted, newCursor, num };
}

export default function TransferScreen({ onSwitch }) {
  const [step, setStep] = useState('recipient');
  
  const [cardNumber, setCardNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [activeTab, setActiveTab] = useState('card');

  const cardRef = useRef(null);
  const amountRef = useRef(null);

  // --- ШАГ 1 ---
  const handleCardChange = useCallback((e) => {
    const input = e.target;
    const { formatted, newCursor } = applyCardFormat(input.value, input.selectionStart);
    setCardNumber(formatted);
    requestAnimationFrame(() => {
      if (cardRef.current) cardRef.current.setSelectionRange(newCursor, newCursor);
    });
  }, []);

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
    setCardNumber(contact.card || '8600 1234 5678 9012');
    setStep('amount');
  };

  const handleManualCardSubmit = () => {
    if (cardNumber.replace(/\s/g, '').length === 16) {
      setSelectedContact({ name: 'Неизвестный получатель', card: cardNumber, bank: 'Уточняется' });
      setStep('amount');
    }
  };

  // --- ШАГ 2 ---
  const handleAmountChange = useCallback((e) => {
    const input = e.target;
    const { formatted, newCursor, num } = applyAmountFormat(input.value, input.selectionStart);
    if (num > MAX_AMOUNT) return;
    setAmount(formatted);
    requestAnimationFrame(() => {
      if (amountRef.current) amountRef.current.setSelectionRange(newCursor, newCursor);
    });
  }, []);

  const goBack = () => {
    setStep('recipient');
    setAmount('');
  };

  // --- РЕНДЕР: ШАГ 1 ---
  if (step === 'recipient') {
    const isCardComplete = cardNumber.replace(/\s/g, '').length === 16;
    
    return (
      <div className="screen transfer-screen">
        <div className="scroll-area">
          <div className="tf-header fade-in">
            <button className="back-btn" onClick={() => onSwitch('home')}>←</button>
            <div className="tf-tabs">
              <span className={activeTab === 'phone' ? 'active' : ''} onClick={() => setActiveTab('phone')}>По телефону</span>
              <span className={activeTab === 'card' ? 'active' : ''} onClick={() => setActiveTab('card')}>По карте</span>
            </div>
          </div>

          <div className="tf-search-wrap fade-in">
            <input
              ref={cardRef}
              className="tf-search-input"
              placeholder="Номер карты или имя"
              value={cardNumber}
              onChange={handleCardChange}
              inputMode="numeric"
            />
            <button className="tf-scan-btn">⛶</button>
          </div>

          {isCardComplete && (
            <button className="tf-continue-btn slide-up" onClick={handleManualCardSubmit}>
              Продолжить
            </button>
          )}

          <div className="tf-horizontal-list slide-up" style={{ animationDelay: '0.1s' }}>
            {contacts.slice(0, 4).map(c => (
              <div key={`h-${c.id}`} className="h-contact-card" onClick={() => handleContactSelect(c)}>
                <div className="h-avatar">{c.name.charAt(0)}</div>
                <div className="h-name">{c.name.split(' ')[0]}</div>
                <div className="h-card-end">{c.last || '0000'}</div>
              </div>
            ))}
          </div>

          <div className="tf-contacts-vertical slide-up" style={{ animationDelay: '0.2s' }}>
            {contacts.map(c => (
              <div key={`v-${c.id}`} className="v-contact-row" onClick={() => handleContactSelect(c)}>
                <div className="v-avatar-wrap">
                  <div className="v-bar" />
                  <div className="v-avatar">{c.em || c.name.charAt(0)}</div>
                </div>
                <div className="v-info">
                  <div className="v-name">{c.name}</div>
                  <div className="v-desc">···· {c.last || '0000'} • сум</div>
                </div>
                <div className="v-arrow">›</div>
              </div>
            ))}
          </div>
        </div>
        <BottomNav active="transfer" onSwitch={onSwitch} />
      </div>
    );
  }

  // --- РЕНДЕР: ШАГ 2 ---
  return (
    <div className="screen transfer-screen">
      <div className="scroll-area amount-step">
        <div className="tf-header fade-in">
          <button className="back-btn" onClick={goBack}>←</button>
          <h1 className="tf-title">Перевод</h1>
        </div>

        <div className="tf-cards-block slide-up">
          {/* Откуда */}
          <div className="tf-block-card">
            <div className="tfc-logo from-logo">💳</div>
            <div className="tfc-info">
              <div className="tfc-balance">8 450 000 UZS</div>
              <div className="tfc-desc">Humo • 4872</div>
            </div>
            <div className="tfc-arrow-down">▼</div>
          </div>

          <div className="tf-connector-arrow">↓</div>

          {/* Куда */}
          <div className="tf-block-card">
            <div className="tfc-logo to-logo">🏦</div>
            <div className="tfc-info">
              <div className="tfc-name">{selectedContact?.name}</div>
              <div className="tfc-desc">{selectedContact?.card?.slice(-4) || '0000'} • Uzcard</div>
            </div>
          </div>
        </div>

        {/* Ввод суммы */}
        <div className="tf-amount-input-wrap slide-up" style={{ animationDelay: '0.1s' }}>
          <input
            ref={amountRef}
            className="tf-amount-input"
            placeholder="0"
            value={amount}
            onChange={handleAmountChange}
            inputMode="numeric"
            autoFocus
          />
          <span className={`tf-amount-currency ${amount ? 'active' : ''}`}>UZS</span>
        </div>
      </div>

      <div className="tf-bottom-action slide-up" style={{ animationDelay: '0.2s' }}>
        <button 
          className={`tf-main-btn ${!amount ? 'disabled' : ''}`} 
          disabled={!amount}
        >
          {amount ? `Перевести ${amount} UZS →` : 'Перевести →'}
        </button>
      </div>
    </div>
  );
}