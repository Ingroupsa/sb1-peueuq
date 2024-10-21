import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import CompanyInfo from './components/CompanyInfo';
import Ownership from './components/Ownership';
import ManagementControl from './components/ManagementControl';
import SkillsDevelopment from './components/SkillsDevelopment';
import EnterpriseDevelopment from './components/EnterpriseDevelopment';
import SocioEconomicDevelopment from './components/SocioEconomicDevelopment';
import Results from './components/Results';
import { calculateBBBEEScore, getBBBEELevel } from './utils/bbbeeCalculations';
import { fetchSectorData } from './utils/api';

const App: React.FC = () => {
  const [step, setStep] = useState(1);
  const [companyInfo, setCompanyInfo] = useState({
    name: '',
    sector: '',
    classification: '',
    employees: 0,
  });
  const [ownership, setOwnership] = useState({
    blackOwnership: 0,
    blackWomenOwnership: 0,
    blackYouthOwnership: 0,
    blackDisabledOwnership: 0,
    blackVeteranOwnership: 0,
  });
  const [managementControl, setManagementControl] = useState({
    blackBoardMembers: 0,
    blackExecutives: 0,
    blackWomenSeniorManagement: 0,
    blackSeniorManagement: 0,
  });
  const [skillsDevelopment, setSkillsDevelopment] = useState({
    blackEmployeeTraining: 0,
    accreditedTraining: 0,
    blackInternships: 0,
    blackWomenTraining: 0,
  });
  const [enterpriseDevelopment, setEnterpriseDevelopment] = useState({
    bbbeeCompliantProcurement: 0,
    blackOwnedProcurement: 0,
    supplierDevelopment: 0,
    qseEmeProcurement: 0,
    blackOwnedSupport: 0,
  });
  const [socioEconomicDevelopment, setSocioEconomicDevelopment] = useState({
    npatSpent: 0,
    blackCommunitySupport: '',
    geographicFocus: '',
  });
  const [sectorData, setSectorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadSectorData = async () => {
      try {
        const data = await fetchSectorData();
        setSectorData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load sector data. Please try again later.');
        setLoading(false);
      }
    };
    loadSectorData();
  }, []);

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <CompanyInfo data={companyInfo} setData={setCompanyInfo} onNext={handleNext} />;
      case 2:
        return <Ownership data={ownership} setData={setOwnership} onNext={handleNext} onPrev={handlePrev} />;
      case 3:
        return <ManagementControl data={managementControl} setData={setManagementControl} onNext={handleNext} onPrev={handlePrev} />;
      case 4:
        return <SkillsDevelopment data={skillsDevelopment} setData={setSkillsDevelopment} onNext={handleNext} onPrev={handlePrev} />;
      case 5:
        return <EnterpriseDevelopment data={enterpriseDevelopment} setData={setEnterpriseDevelopment} onNext={handleNext} onPrev={handlePrev} />;
      case 6:
        return <SocioEconomicDevelopment data={socioEconomicDevelopment} setData={setSocioEconomicDevelopment} onNext={handleNext} onPrev={handlePrev} />;
      case 7:
        return (
          <Results
            companyInfo={companyInfo}
            ownership={ownership}
            managementControl={managementControl}
            skillsDevelopment={skillsDevelopment}
            enterpriseDevelopment={enterpriseDevelopment}
            socioEconomicDevelopment={socioEconomicDevelopment}
            sectorData={sectorData}
            onPrev={handlePrev}
          />
        );
      default:
        return null;
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                  B-BBEE Level 1 Projection Calculator
                </h2>
                {renderStep()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;