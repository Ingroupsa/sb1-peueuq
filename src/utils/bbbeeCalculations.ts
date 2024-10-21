import { SectorData } from '../types';

export const calculateBBBEEScore = (
  companyInfo: any,
  ownership: any,
  managementControl: any,
  skillsDevelopment: any,
  enterpriseDevelopment: any,
  socioEconomicDevelopment: any,
  sectorData: SectorData
) => {
  let totalScore = 0;

  // Ownership calculation
  const ownershipScore = calculateOwnershipScore(ownership, sectorData.ownership);
  totalScore += ownershipScore;

  // Management Control calculation
  const managementControlScore = calculateManagementControlScore(managementControl, sectorData.managementControl);
  totalScore += managementControlScore;

  // Skills Development calculation
  const skillsDevelopmentScore = calculateSkillsDevelopmentScore(skillsDevelopment, sectorData.skillsDevelopment);
  totalScore += skillsDevelopmentScore;

  // Enterprise and Supplier Development calculation
  const enterpriseDevelopmentScore = calculateEnterpriseDevelopmentScore(enterpriseDevelopment, sectorData.enterpriseDevelopment);
  totalScore += enterpriseDevelopmentScore;

  // Socio-Economic Development calculation
  const socioEconomicDevelopmentScore = calculateSocioEconomicDevelopmentScore(socioEconomicDevelopment, sectorData.socioEconomicDevelopment);
  totalScore += socioEconomicDevelopmentScore;

  return totalScore;
};

const calculateOwnershipScore = (ownership: any, ownershipData: any) => {
  let score = 0;
  score += (ownership.blackOwnership / ownershipData.blackOwnershipTarget) * ownershipData.blackOwnershipPoints;
  score += (ownership.blackWomenOwnership / ownershipData.blackWomenOwnershipTarget) * ownershipData.blackWomenOwnershipPoints;
  // Add calculations for other ownership elements
  return score;
};

const calculateManagementControlScore = (managementControl: any, managementControlData: any) => {
  let score = 0;
  score += (managementControl.blackBoardMembers / managementControlData.blackBoardMembersTarget) * managementControlData.blackBoardMembersPoints;
  score += (managementControl.blackExecutives / managementControlData.blackExecutivesTarget) * managementControlData.blackExecutivesPoints;
  // Add calculations for other management control elements
  return score;
};

const calculateSkillsDevelopmentScore = (skillsDevelopment: any, skillsDevelopmentData: any) => {
  let score = 0;
  score += (skillsDevelopment.blackEmployeeTraining / skillsDevelopmentData.blackEmployeeTrainingTarget) * skillsDevelopmentData.blackEmployeeTrainingPoints;
  score += (skillsDevelopment.accreditedTraining / skillsDevelopmentData.accreditedTrainingTarget) * skillsDevelopmentData.accreditedTrainingPoints;
  // Add calculations for other skills development elements
  return score;
};

const calculateEnterpriseDevelopmentScore = (enterpriseDevelopment: any, enterpriseDevelopmentData: any) => {
  let score = 0;
  score += (enterpriseDevelopment.bbbeeCompliantProcurement / enterpriseDevelopmentData.bbbeeCompliantProcurementTarget) * enterpriseDevelopmentData.bbbeeCompliantProcurementPoints;
  score += (enterpriseDevelopment.blackOwnedProcurement / enterpriseDevelopmentData.blackOwnedProcurementTarget) * enterpriseDevelopmentData.blackOwnedProcurementPoints;
  // Add calculations for other enterprise development elements
  return score;
};

const calculateSocioEconomicDevelopmentScore = (socioEconomicDevelopment: any, socioEconomicDevelopmentData: any) => {
  let score = 0;
  score += (socioEconomicDevelopment.npatSpent / socioEconomicDevelopmentData.npatSpentTarget) * socioEconomicDevelopmentData.npatSpentPoints;
  // Add calculations for other socio-economic development elements
  return score;
};

export const getBBBEELevel = (score: number) => {
  if (score >= 100) return 1;
  if (score >= 95) return 2;
  if (score >= 90) return 3;
  if (score >= 80) return 4;
  if (score >= 75) return 5;
  if (score >= 70) return 6;
  if (score >= 55) return 7;
  if (score >= 40) return 8;
  return 'Non-Compliant';
};