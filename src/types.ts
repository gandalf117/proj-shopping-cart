export interface CocktailsResponse {
  cocktails: Cocktail[];
}

export interface Cocktail {
  id: number;
  name: string;
  image: string;
  price: number;
  ingredients: string[];
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
