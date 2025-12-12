import React, { useState } from 'react';
import { GraduationCap, X, Plus, Trash2 } from 'lucide-react';

interface CGPACalculatorProps {
  onClose: () => void;
}

interface Subject {
  grade: string;
  credits: string;
}

export function CGPACalculator({ onClose }: CGPACalculatorProps) {
  const [subjects, setSubjects] = useState<Subject[]>([
    { grade: '', credits: '' },
    { grade: '', credits: '' },
  ]);
  const [result, setResult] = useState<{ cgpa: number; percentage: number } | null>(null);

  const gradePoints: { [key: string]: number } = {
    'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5, 'D': 4, 'F': 0
  };

  const addSubject = () => {
    setSubjects([...subjects, { grade: '', credits: '' }]);
  };

  const removeSubject = (index: number) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter((_, i) => i !== index));
    }
  };

  const updateSubject = (index: number, field: 'grade' | 'credits', value: string) => {
    const updated = [...subjects];
    updated[index][field] = value;
    setSubjects(updated);
  };

  const calculateCGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    subjects.forEach(subject => {
      if (subject.grade && subject.credits) {
        const points = gradePoints[subject.grade] || 0;
        const credits = parseFloat(subject.credits);
        totalPoints += points * credits;
        totalCredits += credits;
      }
    });

    if (totalCredits > 0) {
      const cgpa = totalPoints / totalCredits;
      const percentage = cgpa * 9.5;
      setResult({
        cgpa: parseFloat(cgpa.toFixed(2)),
        percentage: parseFloat(percentage.toFixed(2))
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl max-w-2xl w-full p-8 relative border border-white/40 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-gray-900">CGPA Calculator</h2>
        </div>

        <div className="space-y-4">
          {subjects.map((subject, index) => (
            <div key={index} className="flex gap-3 items-end">
              <div className="flex-1">
                <label className="block text-sm text-gray-700 mb-2">Grade</label>
                <select
                  value={subject.grade}
                  onChange={(e) => updateSubject(index, 'grade', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  <option value="">Select</option>
                  <option value="O">O (10)</option>
                  <option value="A+">A+ (9)</option>
                  <option value="A">A (8)</option>
                  <option value="B+">B+ (7)</option>
                  <option value="B">B (6)</option>
                  <option value="C">C (5)</option>
                  <option value="D">D (4)</option>
                  <option value="F">F (0)</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-700 mb-2">Credits</label>
                <input
                  type="number"
                  value={subject.credits}
                  onChange={(e) => updateSubject(index, 'credits', e.target.value)}
                  placeholder="3"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>
              <button
                onClick={() => removeSubject(index)}
                className="w-12 h-12 rounded-xl bg-red-100 hover:bg-red-200 flex items-center justify-center transition-colors"
              >
                <Trash2 className="w-5 h-5 text-red-600" />
              </button>
            </div>
          ))}

          <button
            onClick={addSubject}
            className="w-full py-3 border-2 border-dashed border-violet-300 rounded-xl text-violet-600 hover:bg-violet-50 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Add Subject</span>
          </button>

          <button
            onClick={calculateCGPA}
            className="w-full py-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Calculate CGPA
          </button>

          {result && (
            <div className="p-6 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-100">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">CGPA</div>
                  <div className="text-4xl font-bold text-violet-600">{result.cgpa}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">Percentage</div>
                  <div className="text-4xl font-bold text-purple-600">{result.percentage}%</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
