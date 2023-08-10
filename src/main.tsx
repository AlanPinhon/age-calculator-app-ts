import React from 'react';
import ReactDOM from 'react-dom/client';
import { AgeCalculatorApp } from './AgeCalculatorApp';
import '../src/styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AgeCalculatorApp/>
  </React.StrictMode>
)