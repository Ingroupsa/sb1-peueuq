export interface SectorData {
  sector: string;
  version: string;
  lastUpdated: string;
  ownership: {
    blackOwnershipTarget: number;
    blackOwnershipPoints: number;
    blackWomenOwnershipTarget: number;
    blackWomenOwnershipPoints: number;
    // Add other ownership fields
  };
  managementControl: {
    blackBoardMembersTarget: number;
    blackBoardMembersPoints: number;
    blackExecutivesTarget: number;
    blackExecutivesPoints: number;
    // Add other management control fields
  };
  skillsDevelopment: {
    blackEmployeeTrainingTarget: number;
    blackEmployeeTrainingPoints: number;
    accreditedTrainingTarget: number;
    accreditedTrainingPoints: number;
    // Add other skills development fields
  };
  enterpriseDevelopment: {
    bbbeeCompliantProcurementTarget: number;
    bbbeeCompliantProcurementPoints: number;
    blackOwnedProcurementTarget: number;
    blackOwnedProcurementPoints: number;
    // Add other enterprise development fields
  };
  socioEconomicDevelopment: {
    npatSpentTarget: number;
    npatSpentPoints: number;
    // Add other socio-economic development fields
  };
}