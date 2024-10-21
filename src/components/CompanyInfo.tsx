import React from 'react';
import { AlertCircle } from 'lucide-react';

interface CompanyInfoProps {
  data: {
    name: string;
    sector: string;
    classification: string;
    employees: number;
  };
  setData: React.Dispatch<React.SetStateAction<{
    name: string;
    sector: string;
    classification: string;
    employees: number;
  }>>;
  onNext: () => void;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ data, setData, onNext }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Company Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="sector" className="block text-sm font-medium text-gray-700">Industry Sector</label>
        <select
          id="sector"
          name="sector"
          value={data.sector}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select a sector</option>
          <option value="ICT">ICT</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Retail">Retail</option>
          <option value="Construction">Construction</option>
          <option value="Finance">Finance</option>
          <option value="Mining">Mining</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Transport">Transport</option>
        </select>
      </div>
      <div>
        <label htmlFor="classification" className="block text-sm font-medium text-gray-700">Enterprise Classification</label>
        <select
          id="classification"
          name="classification"
          value={data.classification}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select classification</option>
          <option value="Generic Enterprise">Generic Enterprise</option>
          <option value="QSE">Qualifying Small Enterprise (QSE)</option>
          <option value="EME">Exempted Micro Enterprise (EME)</option>
        </select>
      </div>
      <div>
        <label htmlFor="employees" className="block text-sm font-medium text-gray-700">Number of Employees</label>
        <input
          type="number"
          id="employees"
          name="employees"
          value={data.employees}
          onChange={handleChange}
          required
          min="1"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50" role="alert">
        <AlertCircle className="flex-shrink-0 inline w-4 h-4 mr-3" />
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">Note:</span> Your company information helps us tailor the B-BBEE calculation to your specific sector and size.
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default CompanyInfo;