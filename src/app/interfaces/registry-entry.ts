import { CrisisArea } from "./crisis-area";

export interface RegistryEntry{
    Pickup: string;
    Name: string;
    Adress: string;
    Plz: number | undefined;
    City: string;
    CrisisArea: CrisisArea | string;
    ClothingType: string;
  }