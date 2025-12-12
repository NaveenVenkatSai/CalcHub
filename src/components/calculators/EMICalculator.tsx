import React, { useState } from 'react';
import { Wallet, X } from 'lucide-react';

interface EMICalculatorProps {
  onClose: () => void;
}

export function EMICalculator({ onClose }: EMICalculatorProps) {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [result, setResult] = useState<{ emi: number; total: number; interest: number } | null>(null);

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100; // monthly rate
    const n = parseFloat(tenure) * 12; // months
    
    if (p && r && n) {
      const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const total = emi * n;
      const interest = total - p;
      
      setResult({
        emi: parseFloat(emi.toFixed(2)),
        total: parseFloat(total.toFixed(2)),
        interest: parseFloat(interest.toFixed(2))
      });
    }
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
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
            <Wallet className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-gray-900">EMI Calculator</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Loan Amount (₹)</label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="500000"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">Interest Rate (% per annum)</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="10"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">Tenure (years)</label>
            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              placeholder="5"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <button
            onClick={calculateEMI}
            className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Calculate EMI
          </button>

          {result && (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100">
                <div className="mb-3">
                  <div className="text-sm text-gray-600">Monthly EMI</div>
                  <div className="text-3xl font-bold text-teal-600">₹{result.emi}</div>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-teal-200">
                  <div>
                    <div className="text-xs text-gray-600">Total Interest</div>
                    <div className="text-lg font-medium text-gray-900">₹{result.interest}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Total Amount</div>
                    <div className="text-lg font-medium text-gray-900">₹{result.total}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
