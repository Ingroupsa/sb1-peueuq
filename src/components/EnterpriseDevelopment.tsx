import React from 'react';
import { AlertCircle } from 'lucide-react';

interface EnterpriseDevelopmentProps {
  data: {
    bbbeeCompliantProcurement: number;
    blackOwnedProcurement: number;
    supplierDevelopment: number;
    qseEmeProcurement: number;
    blackOwnedSupport: number;
  };
  setData: React.Dispatch<React.SetStateAction<{
    bbbeeCompliantProcurement: number;
    blackOwnedProcurement: number;
    supplierDevelopment: number;
    qseEmeProcurement: number;
    blackOwnedSupport: number;
  }>>;
  onNext: () => void;
  onPrev: () => void;
}

const EnterpriseDevelopment: React.FC<EnterpriseDevelopmentProps> = ({ data, setData, onNext, onPrev }) => {
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
        <label htmlFor="bbbeeCompliantProcurement" className="block text-sm font-medium text-gray-700">B-BBEE Compliant Procurement (%)</label>
        <input
          type="number"
          id="bbbeeCompliantProcurement"
          name="bbbeeCompliantProcurement"
          value={data.bbbeeCompliantProcurement}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="0.01"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="blackOwnedProcurement" className="block text-sm font-medium text-gray-700">Black-Owned Business Procurement (%)</label>
        <input
          type="number"
          id="blackOwnedProcurement"
          name="blackOwnedProcurement"
          value={data.blackOwnedProcurement}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="0.01"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="supplierDevelopment" className="block text-sm font-medium text-gray-700">Supplier Development (% of NPAT)</label>
        <input
          type="number"
          id="supplierDevelopment"
          name="supplierDevelopment"
          value={data.supplierDevelopment}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="0.01"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="qseEmeProcurement" className="block text-sm font-medium text-gray-700">QSE/EME Procurement (%)</label>
        <input
          type="number"
          id="qseEmeProcurement"
          name="qseEmeProcurement"
          value={data.qseEmeProcurement}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="0.01"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="blackOwnedSupport" className="block text-sm font-medium text-gray-700">Black-Owned Business Support (%)</label>
        <input
          type="number"
          id="blackOwnedSupport"
          name="blackOwnedSupport"
          value={data.blackOwnedSupport}
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
          <span className="font-medium">Tip:</span> Enterprise and Supplier Development is a significant contributor to your B-BBEE score. Focus on increasing procurement from B-BBEE compliant and Black-owned businesses, as well as supporting supplier development initiatives.
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

export default EnterpriseDevelopment;