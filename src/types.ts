export interface CocktailsResponse {
  cocktails: Cocktail[];
}

export interface Cocktail {
  id: number;
  name: string;
  image: string;
  price: number;
  ingredients: string[];
  count: number;
}

export interface CountryResponse {
  countries: Country[];
}

export interface Country {
  id: number;
  name: string;
  code: string;
}

export interface CityResponse {
  cities: City[];
}

export interface City {
  id: number;
  name: string;
  ctry_code: string;
}

export interface UserData {
  fname: string;
  lname: string;
  email: string;
  country: number | null;
  city: number | null;
  street: string;
  promoCode: string;
}

export type statusTypes = 'idle' | 'loading' | 'success' | 'fail';

export interface CocktailsState {
    cocktails: Cocktail[];
    status: statusTypes;
    error: string | null | undefined;
}

export interface CountryState {
  countries: Country[];
  status: statusTypes;
  error: string | null | undefined;
}

export interface CityState {
  cities: City[];
  status: statusTypes;
  error: string | null | undefined;
}
