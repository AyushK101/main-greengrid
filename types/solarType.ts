export type ApplianceListType = {
  id: string;
  appliance: string;
  quantity: number;
  usageHours: number;
};

export type AddedApplianceType = {
  applianceList: ApplianceListType[];
  setApplianceList: React.Dispatch<React.SetStateAction<ApplianceListType[]>>;
};

export type SolarResType = {city: string,solar_requirement: number}