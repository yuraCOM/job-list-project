export interface ILocation {
  lat: number;
  long: number;
}

export interface IJobItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  title: string;
  salary: string;
  address: string;
  benefits: string[];
  location: ILocation;
  pictures: string[];
  createdAt: string;
  updatedAt: string;
  description: string;
  employment_type: string[];
  stars?: number;
}

export interface JobsLisrProps {
  jobs: IJobItem[];
}
