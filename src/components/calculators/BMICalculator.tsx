import React, { useState } from 'react';
import { Heart, X } from 'lucide-react';

interface BMICalculatorProps {
  onClose: () => void;
}

export function BMICalculator({ onClose }: BMICalculatorProps) {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100; // convert cm to meters
    
    if (w && h) {
      const bmiValue = w / (h * h);
      setBmi(parseFloat(bmiValue.toFixed(1)));
      
      if (bmiValue < 18.5) setCategory('Underweight');
      else if (bmiValue < 25) setCategory('Normal');
      else if (bmiValue < 30) setCategory('Overweight');
      else setCategory('Obese');
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
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-gray-900">BMI Calculator</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="70"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="170"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <button
            onClick={calculateBMI}
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Calculate BMI
          </button>

          {bmi && (
            <div className="p-6 rounded-xl bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100">
              <h3 className="text-gray-900 mb-2">Your BMI:</h3>
              <div className="text-4xl font-bold text-pink-600 mb-2">{bmi}</div>
              <div className="text-lg text-gray-700">Category: <span className="font-medium">{category}</span></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
