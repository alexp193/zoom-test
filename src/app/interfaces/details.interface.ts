import { Location } from './location.interface';
import { TechProducts } from './techProducts.interface';


export interface Details {
    id: number;
    industry: Array<string>,
    employees: number,
    revenue: string,
    techProducts: Array<TechProducts>;
    companyDescription: string;
    name: string;
    companyName: boolean;
    picture: string;
    companyLogo: string;
    location: Array<Location>;
    website: boolean;
    title: string;
    lastUpdated: string;
    phone: string;
    email: string;
}


