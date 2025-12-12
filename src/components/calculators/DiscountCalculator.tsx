import React, { useState } from 'react';
import { Tag, X } from 'lucide-react';

interface DiscountCalculatorProps {
  onClose: () => void;
}

export function DiscountCalculator({ onClose }: DiscountCalculatorProps) {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [result, setResult] = useState<{ savings: number; finalPrice: number } | null>(null);

  const calculate = () => {
    const price = parseFloat(originalPrice);
    const disc = parseFloat(discount);
    
    if (price && disc) {
      const savings = (price * disc) / 100;
      const finalPrice = price - savings;
      
      setResult({
        savings: parseFloat(savings.toFixed(2)),
        finalPrice: parseFloat(finalPrice.toFixed(2))
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
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
            <Tag className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-gray-900">Discount Calculator</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Original Price (₹)</label>
            <input
              type="number"
              value={originalPrice}
              onChange={(e) => setOriginalPrice(e.target.value)}
              placeholder="1000"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">Discount (%)</label>
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              placeholder="20"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <button
            onClick={calculate}
            className="w-full py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Calculate Discount
          </button>

          {result && (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-gradient-to-br from-red-50 to-pink-50 border border-red-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Original Price:</span>
                  <span className="font-medium text-gray-900">₹{originalPrice}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">You Save:</span>
                  <span className="font-medium text-green-600">₹{result.savings}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-red-200">
                  <span className="font-medium text-gray-900">Final Price:</span>
                  <span className="text-2xl font-bold text-red-600">₹{result.finalPrice}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
