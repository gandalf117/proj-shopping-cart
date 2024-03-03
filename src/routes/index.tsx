import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home';
import NotFoundPage from '../pages/notFound';
import CartPage from '../pages/cart';
import CartStepOne from '../pages/cart/steps/CartStepOne';
import CartStepTwo from '../pages/cart/steps/CartStepTwo';
import CartReceipt from '../pages/cart/steps/CartReceipt';

const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/shopping-cart" element={<CartPage />} >
				<Route path="step1" element={<CartStepOne />} />
				<Route path="step2" element={<CartStepTwo />} />
				<Route path="receipt" element={<CartReceipt />} />
			</Route>
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};

export default MainRoutes;
