import React, { useState } from 'react';
import { Thermometer, X } from 'lucide-react';

interface TemperatureConverterProps {
  onClose: () => void;
}

export function TemperatureConverter({ onClose }: TemperatureConverterProps) {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('Celsius');
  const [toUnit, setToUnit] = useState('Fahrenheit');
  const [result, setResult] = useState<number | null>(null);

  const convert = () => {
    const temp = parseFloat(value);
    if (isNaN(temp)) return;

    let celsius: number;

    // Convert to Celsius first
    switch (fromUnit) {
      case 'Celsius':
        celsius = temp;
        break;
      case 'Fahrenheit':
        celsius = (temp - 32) * 5 / 9;
        break;
      case 'Kelvin':
        celsius = temp - 273.15;
        break;
      default:
        celsius = temp;
    }

    // Convert from Celsius to target unit
    let converted: number;
    switch (toUnit) {
      case 'Celsius':
        converted = celsius;
        break;
      case 'Fahrenheit':
        converted = celsius * 9 / 5 + 32;
        break;
      case 'Kelvin':
        converted = celsius + 273.15;
        break;
      default:
        converted = celsius;
    }

    setResult(parseFloat(converted.toFixed(2)));
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
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
            <Thermometer className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-gray-900">Temperature Converter</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-2">Temperature Value</label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="0"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-gray-700 mb-2">From</label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="Celsius">Celsius (°C)</option>
                <option value="Fahrenheit">Fahrenheit (°F)</option>
                <option value="Kelvin">Kelvin (K)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">To</label>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="Celsius">Celsius (°C)</option>
                <option value="Fahrenheit">Fahrenheit (°F)</option>
                <option value="Kelvin">Kelvin (K)</option>
              </select>
            </div>
          </div>

          <button
            onClick={convert}
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Convert
          </button>

          {result !== null && (
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">Result</div>
                <div className="text-4xl font-bold text-cyan-600">
                  {result}° {toUnit === 'Kelvin' ? 'K' : toUnit === 'Celsius' ? 'C' : 'F'}
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  {value}° {fromUnit === 'Kelvin' ? 'K' : fromUnit === 'Celsius' ? 'C' : 'F'} = {result}° {toUnit === 'Kelvin' ? 'K' : toUnit === 'Celsius' ? 'C' : 'F'}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
