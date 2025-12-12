import React, { useState } from 'react';
import { Percent, X } from 'lucide-react';

interface PercentageCalculatorProps {
  onClose: () => void;
}

export function PercentageCalculator({ onClose }: PercentageCalculatorProps) {
  const [value, setValue] = useState('');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const v = parseFloat(value);
    const p = parseFloat(percentage);
    
    if (v && p) {
      const res = (v * p) / 100;
      setResult(parseFloat(res.toFixed(2)));
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
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
            <Percent className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-gray-900">Percentage Calculator</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Value</label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="1000"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">Percentage (%)</label>
            <input
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              placeholder="25"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            onClick={calculate}
            className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Calculate
          </button>

          {result !== null && (
            <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
              <h3 className="text-gray-900 mb-2">Result:</h3>
              <div className="text-4xl font-bold text-green-600">{result}</div>
              <div className="text-sm text-gray-600 mt-2">
                {percentage}% of {value} = {result}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
