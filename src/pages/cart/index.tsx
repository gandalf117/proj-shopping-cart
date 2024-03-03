
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import CartLayout from 'layouts/CartLayout';
import { Outlet } from 'react-router-dom';

const CartPage: React.FC = () => {
	const theme = useAppSelector((state) => state.theme.value);
	const dispatch = useAppDispatch();
  
	return (
	  <CartLayout>
		  <Outlet />
	  </CartLayout>
	);
}

export default CartPage;
