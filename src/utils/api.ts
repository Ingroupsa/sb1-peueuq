import { SectorData } from '../types';

// This is a mock API function. In a real-world scenario, this would make an actual API call.
export const fetchSectorData = async (): Promise<SectorData> => {
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Mock data for the ICT sector
  const mockSectorData: SectorData = {
    sector: 'ICT',
    version: '1.0',
    lastUpdated: '2023-04-01',
    ownership: {
      blackOwnershipTarget: 30,
      blackOwnershipPoints: 25,
      blackWomenOwnershipTarget: 10,
      blackWomenOwnershipPoints: 10,
      // Add other ownership targets and points
    },
    managementControl: {
      blackBoardMembersTarget: 50,
      blackBoardMembersPoints: 2,
      blackExecutivesTarget: 50,
      blackExecutivesPoints: 2,
      // Add other management control targets and points
    },
    skillsDevelopment: {
      blackEmployeeTrainingTarget: 6,
      blackEmployeeTrainingPoints: 8,
      accreditedTrainingTarget: 80,
      accreditedTrainingPoints: 4,
      // Add other skills development targets and points
    },
    enterpriseDevelopment: {
      bbbeeCompliantProcurementTarget: 80,
      bbbeeCompliantProcurementPoints: 5,
      blackOwnedProcurementTarget: 40,
      blackOwnedProcurementPoints: 9,
      // Add other enterprise development targets and points
    },
    socioEconomicDevelopment: {
      npatSpentTarget: 1,
      npatSpentPoints: 5,
      // Add other socio-economic development targets and points
    },
  };

  return mockSectorData;
};