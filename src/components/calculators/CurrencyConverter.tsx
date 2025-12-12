import React, { useState } from 'react';
import { DollarSign, X, ArrowRightLeft } from 'lucide-react';

interface CurrencyConverterProps {
  onClose: () => void;
}

export function CurrencyConverter({ onClose }: CurrencyConverterProps) {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [result, setResult] = useState<number | null>(null);

  // Mock exchange rates (in real app, use API)
  const rates: { [key: string]: number } = {
    'USD': 1,
    'EUR': 0.85,
    'GBP': 0.73,
    'INR': 83.12,
    'JPY': 110.5,
    'AUD': 1.35,
    'CAD': 1.25,
    'CNY': 6.45
  };

  const convert = () => {
    const amt = parseFloat(amount);
    if (amt) {
      const usdAmount = amt / rates[fromCurrency];
      const converted = usdAmount * rates[toCurrency];
      setResult(parseFloat(converted.toFixed(2)));
    }
  };

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setResult(null);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl max-w-md w-full p-8 relative border border-white/40">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-gray-900">Currency Converter</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="100"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-[1fr,auto,1fr] gap-3 items-end">
            <div>
              <label className="block text-sm text-gray-700 mb-2">From</label>
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Object.keys(rates).map(currency => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
            </div>

            <button
              onClick={swap}
              className="w-12 h-12 rounded-xl bg-blue-100 hover:bg-blue-200 flex items-center justify-center transition-all mb-0"
            >
              <ArrowRightLeft className="w-5 h-5 text-blue-600" />
            </button>

            <div>
              <label className="block text-sm text-gray-700 mb-2">To</label>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Object.keys(rates).map(currency => (
                  <option key={currency} value={currency}>{currency}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={convert}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Convert
          </button>

          {result !== null && (
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">Converted Amount</div>
                <div className="text-4xl font-bold text-blue-600">{result} {toCurrency}</div>
                <div className="text-sm text-gray-600 mt-2">
                  {amount} {fromCurrency} = {result} {toCurrency}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
