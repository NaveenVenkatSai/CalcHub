import React, { useState } from 'react';
import { Calendar, X } from 'lucide-react';

interface AgeCalculatorProps {
  onClose: () => void;
}

export function AgeCalculator({ onClose }: AgeCalculatorProps) {
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculateAge = () => {
    if (!birthDate) return;
    
    const birth = new Date(birthDate);
    const today = new Date();
    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    
    if (months < 0) {
      years--;
      months += 12;
    }
    
    setResult({ years, months, days });
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
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-gray-900">Age Calculator</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Date of Birth</label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={calculateAge}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Calculate Age
          </button>

          {result && (
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <h3 className="text-gray-900 mb-3">Your Age:</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{result.years}</div>
                  <div className="text-xs text-gray-600">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{result.months}</div>
                  <div className="text-xs text-gray-600">Months</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{result.days}</div>
                  <div className="text-xs text-gray-600">Days</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
