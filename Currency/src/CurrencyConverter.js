// src/CurrencyConverter.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CurrencyConverter.css'; // Importing CSS for styling

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        setCurrencies(Object.keys(response.data.rates));
      } catch (err) {
        setError('Error fetching currency data');
      }
    };

    fetchCurrencies();
  }, []);

  useEffect(() => {
    const fetchConversion = async () => {
      try {
        if (fromCurrency && toCurrency) {
          const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
          const rate = response.data.rates[toCurrency];
          setConvertedAmount((amount * rate).toFixed(2));
        }
      } catch (err) {
        setError('Error fetching conversion data');
      }
    };

    fetchConversion();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="converter-container">
      <h1>Currency Converter</h1>
      {error && <p className="error">{error}</p>}
      <div className="converter">
        <div className="input-group">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0"
          />
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <input type="text" value={convertedAmount} readOnly />
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
