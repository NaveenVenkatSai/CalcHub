import React, { useState } from 'react';
import { Receipt, X } from 'lucide-react';

interface GSTCalculatorProps {
  onClose: () => void;
}

export function GSTCalculator({ onClose }: GSTCalculatorProps) {
  const [amount, setAmount] = useState('');
  const [gstRate, setGstRate] = useState('18');
  const [result, setResult] = useState<{ gst: number; total: number } | null>(null);

  const calculateGST = () => {
    const baseAmount = parseFloat(amount);
    const rate = parseFloat(gstRate);
    
    if (baseAmount && rate) {
      const gstAmount = (baseAmount * rate) / 100;
      const totalAmount = baseAmount + gstAmount;
      
      setResult({
        gst: parseFloat(gstAmount.toFixed(2)),
        total: parseFloat(totalAmount.toFixed(2))
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
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
            <Receipt className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-gray-900">GST Calculator</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Base Amount (₹)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="1000"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">GST Rate (%)</label>
            <select
              value={gstRate}
              onChange={(e) => setGstRate(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="5">5%</option>
              <option value="12">12%</option>
              <option value="18">18%</option>
              <option value="28">28%</option>
            </select>
          </div>

          <button
            onClick={calculateGST}
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Calculate GST
          </button>

          {result && (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Base Amount:</span>
                  <span className="font-medium text-gray-900">₹{amount}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">GST ({gstRate}%):</span>
                  <span className="font-medium text-purple-600">₹{result.gst}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-purple-200">
                  <span className="font-medium text-gray-900">Total Amount:</span>
                  <span className="text-xl font-bold text-purple-600">₹{result.total}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
