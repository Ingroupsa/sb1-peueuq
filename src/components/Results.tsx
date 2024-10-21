import React from 'react';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { calculateBBBEEScore, getBBBEELevel } from '../utils/bbbeeCalculations';

interface ResultsProps {
  companyInfo: {
    name: string;
    sector: string;
    classification: string;
    employees: number;
  };
  ownership: {
    blackOwnership: number;
    blackWomenOwnership: number;
    blackYouthOwnership: number;
    blackDisabledOwnership: number;
    blackVeteranOwnership: number;
  };
  managementControl: {
    blackBoardMembers: number;
    blackExecutives: number;
    blackWomenSeniorManagement: number;
    blackSeniorManagement: number;
  };
  skillsDevelopment: {
    blackEmployeeTraining: number;
    accreditedTraining: number;
    blackInternships: number;
    blackWomenTraining: number;
  };
  enterpriseDevelopment: {
    bbbeeCompliantProcurement: number;
    blackOwnedProcurement: number;
    supplierDevelopment: number;
    qseEmeProcurement: number;
    blackOwnedSupport: number;
  };
  socioEconomicDevelopment: {
    npatSpent: number;
    blackCommunitySupport: string;
    geographicFocus: string;
  };
  sectorData: any;
  onPrev: () => void;
}

const Results: React.FC<ResultsProps> = ({
  companyInfo,
  ownership,
  managementControl,
  skillsDevelopment,
  enterpriseDevelopment,
  socioEconomicDevelopment,
  sectorData,
  onPrev
}) => {
  const score = calculateBBBEEScore(
    companyInfo,
    ownership,
    managementControl,
    skillsDevelopment,
    enterpriseDevelopment,
    socioEconomicDevelopment,
    sectorData
  );

  const level = getBBBEELevel(score);

  const renderScoreCard = () => {
    return (
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">B-BBEE Scorecard</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Detailed breakdown of your B-BBEE score</p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Total Score</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{score.toFixed(2)}</dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">B-BBEE Level</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{level}</dd>
            </div>
            {/* Add more detailed breakdowns here */}
          </dl>
        </div>
      </div>
    );
  };

  const renderRecommendations = () => {
    // This is a placeholder. In a real implementation, you would analyze the scores
    // and provide specific recommendations based on the areas that need improvement.
    return (
      <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Recommendations</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Areas for improvement to reach Level 1</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Ownership</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Consider increasing Black ownership to at least 51% to maximize points in this category.
              </dd>
            </div>
            {/* Add more recommendations for other categories */}
          </dl>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">B-BBEE Projection Results</h2>
      {renderScoreCard()}
      {renderRecommendations()}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => {/* Implement export functionality */}}
          className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Export Results
        </button>
      </div>
    </div>
  );
};

export default Results;