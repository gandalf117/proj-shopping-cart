
import React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';

const CartStepOne: React.FC = () => {
	const theme = useAppSelector((state) => state.theme.value);
	const dispatch = useAppDispatch();
  
	return (
		<p>Cart Step One</p>
	);
}

export default CartStepOne;
