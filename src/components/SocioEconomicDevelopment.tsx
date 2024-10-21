import React from 'react';
import { AlertCircle } from 'lucide-react';

interface SocioEconomicDevelopmentProps {
  data: {
    npatSpent: number;
    blackCommunitySupport: string;
    geographicFocus: string;
  };
  setData: React.Dispatch<React.SetStateAction<{
    npatSpent: number;
    blackCommunitySupport: string;
    geographicFocus: string;
  }>>;
  onNext: () => void;
  onPrev: () => void;
}

const SocioEconomicDevelopment: React.FC<SocioEconomicDevelopmentProps> = ({ data, setData, onNext, onPrev }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: name === 'npatSpent' ? parseFloat(value) || 0 : value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="npatSpent" className="block text-sm font-medium text-gray-700">NPAT Spent on Socio-Economic Development (%)</label>
        <input
          type="number"
          id="npatSpent"
          name="npatSpent"
          value={data.npatSpent}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="0.01"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="blackCommunitySupport" className="block text-sm font-medium text-gray-700">Black Community Support Programs</label>
        <textarea
          id="blackCommunitySupport"
          name="blackCommunitySupport"
          value={data.blackCommunitySupport}
          onChange={handleChange}
          required
          rows={3}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Briefly describe your socio-economic programs supporting Black communities"
        />
      </div>
      <div>
        <label htmlFor="geographicFocus" className="block text-sm font-medium text-gray-700">Geographic Focus of Initiatives</label>
        <select
          id="geographicFocus"
          name="geographicFocus"
          value={data.geographicFocus}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select geographic focus</option>
          <option value="Rural">Rural Areas</option>
          <option value="Urban">Urban Townships</option>
          <option value="Mixed">Mixed (Both Rural and Urban)</option>
        </select>
      </div>
      <div className="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50" role="alert">
        <AlertCircle className="flex-shrink-0 inline w-4 h-4 mr-3" />
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">Tip:</span> Socio-Economic Development initiatives that focus on benefiting Black communities, especially in rural areas or urban townships, can significantly contribute to your B-BBEE score.
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

export default SocioEconomicDevelopment;