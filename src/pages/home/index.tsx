import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks';
import { Country } from 'types';
import { fetchCocktails } from 'store/cocktailSlice';
import { fetchCountries } from 'store/countrySlice';
import { fetchCities } from 'store/citySlice';
import { LoadingStates } from 'consts';
import HomeLayout from 'layouts/HomeLayout';

const HomePage: React.FC = () => {
  // const [countries, setCountries] = useState<Country[]>([]);

  const dispatch = useAppDispatch();
  //const { cocktails, status, error } = useAppSelector((state) => state.cocktail);
  // const { countries, status, error } = useAppSelector((state) => state.country);
  const { cities, status, error } = useAppSelector((state) => state.city);

  useEffect(() => {
    dispatch(fetchCocktails());
    dispatch(fetchCountries());
    dispatch(fetchCities());
  }, [dispatch]);

  if (status === LoadingStates.Loading) return <div>Loading...</div>;
  if (status === LoadingStates.Fail) return <div>Error: {error}</div>;

  return (
    <HomeLayout>
      <ul>
        {cities.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </HomeLayout>
  );
}

export default HomePage;