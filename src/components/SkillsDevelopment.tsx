import React from 'react';
import { AlertCircle } from 'lucide-react';

interface SkillsDevelopmentProps {
  data: {
    blackEmployeeTraining: number;
    accreditedTraining: number;
    blackInternships: number;
    blackWomenTraining: number;
  };
  setData: React.Dispatch<React.SetStateAction<{
    blackEmployeeTraining: number;
    accreditedTraining: number;
    blackInternships: number;
    blackWomenTraining: number;
  }>>;
  onNext: () => void;
  onPrev: () => void;
}

const SkillsDevelopment: React.FC<SkillsDevelopmentProps> = ({ data, setData, onNext, onPrev }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: parseFloat(value) || 0 }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="blackEmployeeTraining" className="block text-sm font-medium text-gray-700">Black Employee Training (% of payroll)</label>
        <input
          type="number"
          id="blackEmployeeTraining"
          name="blackEmployeeTraining"
          value={data.blackEmployeeTraining}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="0.01"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="accreditedTraining" className="block text-sm font-medium text-gray-700">Accredited Training (% of employees)</label>
        <input
          type="number"
          id="accreditedTraining"
          name="accreditedTraining"
          value={data.accreditedTraining}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="0.01"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="blackInternships" className="block text-sm font-medium text-gray-700">Black Internships/Learnerships (number)</label>
        <input
          type="number"
          id="blackInternships"
          name="blackInternships"
          value={data.blackInternships}
          onChange={handleChange}
          required
          min="0"
          step="1"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="blackWomenTraining" className="block text-sm font-medium text-gray-700">Black Women Training (% of skills development spend)</label>
        <input
          type="number"
          id="blackWomenTraining"
          name="blackWomenTraining"
          value={data.blackWomenTraining}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="0.01"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50" role="alert">
        <AlertCircle className="flex-shrink-0 inline w-4 h-4 mr-3" />
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">Tip:</span> Skills Development is a crucial element of B-BBEE. Investing in training and development programs for Black employees, especially Black women, can significantly boost your score.
        </div>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Previous
        </button>
        <button
          type="submit"
          className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default SkillsDevelopment;