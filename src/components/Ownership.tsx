import React from 'react';
import { AlertCircle } from 'lucide-react';

interface OwnershipProps {
  data: {
    blackOwnership: number;
    blackWomenOwnership: number;
    blackYouthOwnership: number;
    blackDisabledOwnership: number;
    blackVeteranOwnership: number;
  };
  setData: React.Dispatch<React.SetStateAction<{
    blackOwnership: number;
    blackWomenOwnership: number;
    blackYouthOwnership: number;
    blackDisabledOwnership: number;
    blackVeteranOwnership: number;
  }>>;
  onNext: () => void;
  onPrev: () => void;
}

const Ownership: React.FC<OwnershipProps> = ({ data, setData, onNext, onPrev }) => {
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
        <label htmlFor="blackOwnership" className="block text-sm font-medium text-gray-700">Black Ownership (%)</label>
        <input
          type="number"
          id="blackOwnership"
          name="blackOwnership"
          value={data.blackOwnership}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="0.01"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="blackWomenOwnership" className="block text-sm font-medium text-gray-700">Black Women Ownership (%)</label>
        <input
          type="number"
          id="blackWomenOwnership"
          name="blackWomenOwnership"
          value={data.blackWomenOwnership}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="0.01"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="blackYouthOwnership" className="block text-sm font-medium text-gray-700">Black Youth Ownership (%)</label>
        <input
          type="number"
          id="blackYouthOwnership"
          name="blackYouthOwnership"
          value={data.blackYouthOwnership}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="0.01"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="blackDisabledOwnership" className="block text-sm font-medium text-gray-700">Black Disabled Ownership (%)</label>
        <input
          type="number"
          id="blackDisabledOwnership"
          name="blackDisabledOwnership"
          value={data.blackDisabledOwnership}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="0.01"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="blackVeteranOwnership" className="block text-sm font-medium text-gray-700">Black Veteran Ownership (%)</label>
        <input
          type="number"
          id="blackVeteranOwnership"
          name="blackVeteranOwnership"
          value={data.blackVeteranOwnership}
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
          <span className="font-medium">Note:</span> Ownership percentages are crucial for B-BBEE scoring. Ensure accuracy for the best projection.
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

export default Ownership;