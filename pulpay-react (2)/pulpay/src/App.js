import React, { useState } from 'react';
import './styles/global.css';

import HomeScreen     from './screens/HomeScreen';
import PaymentScreen  from './screens/PaymentScreen';
import TransferScreen from './screens/TransferScreen';
import ReportsScreen  from './screens/ReportsScreen';
import BudgetScreen   from './screens/BudgetScreen';

export default function App() {
  const [screen, setScreen] = useState('home');

  const screens = {
    home:     <HomeScreen     onSwitch={setScreen} />,
    payment:  <PaymentScreen  onSwitch={setScreen} />,
    transfer: <TransferScreen onSwitch={setScreen} />,
    reports:  <ReportsScreen  onSwitch={setScreen} />,
    budget:   <BudgetScreen   onSwitch={setScreen} />,
  };

  return (
    <div className="device">
      <div className="notch" />
      <div className="status-bar">
        <span>9:41</span>
        <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <span>●●●●</span><span>5G</span><span>🔋</span>
        </span>
      </div>
      {screens[screen]}
    </div>
  );
}
