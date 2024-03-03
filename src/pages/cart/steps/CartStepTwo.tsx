
import React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';

const CartStepTwo: React.FC = () => {
	const theme = useAppSelector((state) => state.theme.value);
	const dispatch = useAppDispatch();
  
	return (
		<p>Cart Step Two</p>
	);
}

export default CartStepTwo;