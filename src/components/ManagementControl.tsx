import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ManagementControlProps {
  data: {
    blackBoardMembers: number;
    blackExecutives: number;
    blackWomenSeniorManagement: number;
    blackSeniorManagement: number;
  };
  setData: React.Dispatch<React.SetStateAction<{
    blackBoardMembers: number;
    blackExecutives: number;
    blackWomenSeniorManagement: number;
    blackSeniorManagement: number;
  }>>;
  onNext: () => void;
  onPrev: () => void;
}

const ManagementControl: React.FC<ManagementControlProps> = ({ data, setData, onNext, onPrev }) => {
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
        <label htmlFor="blackBoardMembers" className="block text-sm font-medium text-gray-700">Black Board Members (%)</label>
        <input
          type="number"
          id="blackBoardMembers"
          name="blackBoardMembers"
          value={data.blackBoardMembers}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="0.01"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="blackExecutives" className="block text-sm font-medium text-gray-700">Black Executives (%)</label>
        <input
          type="number"
          id="blackExecutives"
          name="blackExecutives"
          value={data.blackExecutives}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="0.01"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="blackWomenSeniorManagement" className="block text-sm font-medium text-gray-700">Black Women in Senior Management (%)</label>
        <input
          type="number"
          id="blackWomenSeniorManagement"
          name="blackWomenSeniorManagement"
          value={data.blackWomenSeniorManagement}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="0.01"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="blackSeniorManagement" className="block text-sm font-medium text-gray-700">Black Senior Management (%)</label>
        <input
          type="number"
          id="blackSeniorManagement"
          name="blackSeniorManagement"
          value={data.blackSeniorManagement}
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
          <span className="font-medium">Tip:</span> Management control is a key factor in B-BBEE scoring. Higher percentages of Black representation in management positions contribute significantly to your overall score.
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

export default ManagementControl;