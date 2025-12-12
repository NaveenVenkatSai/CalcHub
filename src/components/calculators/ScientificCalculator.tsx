import React, { useState } from 'react';
import { Calculator, X } from 'lucide-react';

interface ScientificCalculatorProps {
  onClose: () => void;
}

export function ScientificCalculator({ onClose }: ScientificCalculatorProps) {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handleNumber = (num: string) => {
    setDisplay(display === '0' ? num : display + num);
  };

  const handleOperator = (op: string) => {
    setEquation(display + ' ' + op + ' ');
    setDisplay('0');
  };

  const handleEquals = () => {
    try {
      const result = eval(equation + display);
      setDisplay(String(result));
      setEquation('');
    } catch (error) {
      setDisplay('Error');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  const handleScientific = (func: string) => {
    const value = parseFloat(display);
    let result: number;
    
    switch(func) {
      case 'sin':
        result = Math.sin(value * Math.PI / 180);
        break;
      case 'cos':
        result = Math.cos(value * Math.PI / 180);
        break;
      case 'tan':
        result = Math.tan(value * Math.PI / 180);
        break;
      case 'sqrt':
        result = Math.sqrt(value);
        break;
      case 'square':
        result = value * value;
        break;
      case 'log':
        result = Math.log10(value);
        break;
      default:
        result = value;
    }
    
    setDisplay(String(result));
  };

  const Button = ({ children, onClick, className = '' }: any) => (
    <button
      onClick={onClick}
      className={`p-4 rounded-xl bg-white/60 border border-gray-200 hover:bg-white/80 transition-all duration-200 hover:shadow-md ${className}`}
    >
      {children}
    </button>
  );

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
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-gray-900">Scientific Calculator</h2>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100">
            <div className="text-sm text-gray-600 mb-1 h-6">{equation}</div>
            <div className="text-3xl font-bold text-gray-900 text-right">{display}</div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            <Button onClick={() => handleScientific('sin')}>sin</Button>
            <Button onClick={() => handleScientific('cos')}>cos</Button>
            <Button onClick={() => handleScientific('tan')}>tan</Button>
            <Button onClick={() => handleScientific('sqrt')}>√</Button>
            
            <Button onClick={() => handleNumber('7')}>7</Button>
            <Button onClick={() => handleNumber('8')}>8</Button>
            <Button onClick={() => handleNumber('9')}>9</Button>
            <Button onClick={() => handleOperator('/')}>÷</Button>
            
            <Button onClick={() => handleNumber('4')}>4</Button>
            <Button onClick={() => handleNumber('5')}>5</Button>
            <Button onClick={() => handleNumber('6')}>6</Button>
            <Button onClick={() => handleOperator('*')}>×</Button>
            
            <Button onClick={() => handleNumber('1')}>1</Button>
            <Button onClick={() => handleNumber('2')}>2</Button>
            <Button onClick={() => handleNumber('3')}>3</Button>
            <Button onClick={() => handleOperator('-')}>-</Button>
            
            <Button onClick={() => handleNumber('0')}>0</Button>
            <Button onClick={() => handleNumber('.')}>.</Button>
            <Button onClick={handleEquals} className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">=</Button>
            <Button onClick={() => handleOperator('+')}>+</Button>
            
            <Button onClick={handleClear} className="col-span-2 bg-red-500 text-white">Clear</Button>
            <Button onClick={() => handleScientific('square')}>x²</Button>
            <Button onClick={() => handleScientific('log')}>log</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
