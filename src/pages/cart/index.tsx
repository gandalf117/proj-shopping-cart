import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import CartLayout from 'layouts/CartLayout';
import { fetchCountries } from 'store/countrySlice';
import { fetchCities } from 'store/citySlice';
import { Outlet } from 'react-router-dom';
import { LoadingStates } from 'consts';

const CartPage: React.FC = () => {
	const dispatch = useAppDispatch();
  
	const { countries, status: statusCountry, error: errCountry } = useAppSelector((state) => state.country);
	const { cities, status: statusCity, error: errCity } = useAppSelector((state) => state.city);

	useEffect(() => {
		dispatch(fetchCountries());
		dispatch(fetchCities());
	  }, [dispatch]);

	const isLoading = statusCountry === LoadingStates.Loading || statusCity === LoadingStates.Loading;
	
	const isSuccess = statusCountry === LoadingStates.Success && statusCity === LoadingStates.Success;

	return (
	  <CartLayout>
		{isLoading && 
			<div>Loading...</div>
		}
		{statusCountry === LoadingStates.Fail && 
			<div>Error: {errCountry}</div>
		}
		{statusCity === LoadingStates.Fail && 
			<div>Error: {errCity}</div>
		}
		{isSuccess && <Outlet />}
	  </CartLayout>
	);
}

export default CartPage;
