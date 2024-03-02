import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home';
import CartPage from '../pages/cart';
import NotFoundPage from '../pages/notFound';

const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/shopping-cart" element={<CartPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default MainRoutes;
