import React, { useState } from 'react';
import { CalculatorCard } from './CalculatorCard';
import {
  Calendar,
  Heart,
  Receipt,
  Percent,
  Calculator,
  Wallet,
  Tag,
  GraduationCap,
  DollarSign,
  Thermometer
} from 'lucide-react';
import { AgeCalculator } from './calculators/AgeCalculator';
import { BMICalculator } from './calculators/BMICalculator';
import { GSTCalculator } from './calculators/GSTCalculator';
import { PercentageCalculator } from './calculators/PercentageCalculator';
import { ScientificCalculator } from './calculators/ScientificCalculator';
import { EMICalculator } from './calculators/EMICalculator';
import { DiscountCalculator } from './calculators/DiscountCalculator';
import { CGPACalculator } from './calculators/CGPACalculator';
import { CurrencyConverter } from './calculators/CurrencyConverter';
import { TemperatureConverter } from './calculators/TemperatureConverter';

const calculators = [
  {
    id: 1,
    title: 'Age Calculator',
    description: 'Calculate your exact age in years, months, days.',
    icon: Calendar,
    gradient: 'from-blue-500 to-cyan-500',
    glowColor: 'blue',
    component: 'age'
  },
  {
    id: 2,
    title: 'BMI Calculator',
    description: 'Check your Body Mass Index instantly.',
    icon: Heart,
    gradient: 'from-pink-500 to-rose-500',
    glowColor: 'pink',
    component: 'bmi'
  },
  {
    id: 3,
    title: 'GST Calculator',
    description: 'Compute GST amount and final price.',
    icon: Receipt,
    gradient: 'from-purple-500 to-indigo-500',
    glowColor: 'purple',
    component: 'gst'
  },
  {
    id: 4,
    title: 'Percentage Calculator',
    description: 'Quick percentage calculations made easy.',
    icon: Percent,
    gradient: 'from-green-500 to-emerald-500',
    glowColor: 'green',
    component: 'percentage'
  },
  {
    id: 5,
    title: 'Scientific Calculator',
    description: 'Perform scientific & advanced math operations.',
    icon: Calculator,
    gradient: 'from-orange-500 to-amber-500',
    glowColor: 'orange',
    component: 'scientific'
  },
  {
    id: 6,
    title: 'Loan / EMI Calculator',
    description: 'Find monthly EMI and total payable amount.',
    icon: Wallet,
    gradient: 'from-teal-500 to-cyan-500',
    glowColor: 'teal',
    component: 'emi'
  },
  {
    id: 7,
    title: 'Discount Calculator',
    description: 'Get price after discount in one click.',
    icon: Tag,
    gradient: 'from-red-500 to-pink-500',
    glowColor: 'red',
    component: 'discount'
  },
  {
    id: 8,
    title: 'CGPA / SGPA Calculator',
    description: 'Convert marks into CGPA/SGPA effortlessly.',
    icon: GraduationCap,
    gradient: 'from-violet-500 to-purple-500',
    glowColor: 'violet',
    component: 'cgpa'
  },
  {
    id: 9,
    title: 'Currency Converter',
    description: 'Convert currencies with real-time rates.',
    icon: DollarSign,
    gradient: 'from-blue-600 to-indigo-600',
    glowColor: 'blue',
    component: 'currency'
  },
  {
    id: 10,
    title: 'Temperature Converter',
    description: 'Convert Celsius, Fahrenheit, Kelvin.',
    icon: Thermometer,
    gradient: 'from-cyan-500 to-blue-500',
    glowColor: 'cyan',
    component: 'temperature'
  }
];

export function CalculatorGrid() {
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);

  const handleOpenCalculator = (component: string) => {
    setActiveCalculator(component);
  };

  const handleCloseCalculator = () => {
    setActiveCalculator(null);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {calculators.map((calculator) => (
            <CalculatorCard 
              key={calculator.id} 
              {...calculator} 
              onOpen={() => handleOpenCalculator(calculator.component)}
            />
          ))}
        </div>
      </div>

      {/* Render active calculator */}
      {activeCalculator === 'age' && <AgeCalculator onClose={handleCloseCalculator} />}
      {activeCalculator === 'bmi' && <BMICalculator onClose={handleCloseCalculator} />}
      {activeCalculator === 'gst' && <GSTCalculator onClose={handleCloseCalculator} />}
      {activeCalculator === 'percentage' && <PercentageCalculator onClose={handleCloseCalculator} />}
      {activeCalculator === 'scientific' && <ScientificCalculator onClose={handleCloseCalculator} />}
      {activeCalculator === 'emi' && <EMICalculator onClose={handleCloseCalculator} />}
      {activeCalculator === 'discount' && <DiscountCalculator onClose={handleCloseCalculator} />}
      {activeCalculator === 'cgpa' && <CGPACalculator onClose={handleCloseCalculator} />}
      {activeCalculator === 'currency' && <CurrencyConverter onClose={handleCloseCalculator} />}
      {activeCalculator === 'temperature' && <TemperatureConverter onClose={handleCloseCalculator} />}
    </section>
  );
}