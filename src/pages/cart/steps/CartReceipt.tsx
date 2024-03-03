
import React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';

const CartReceipt: React.FC = () => {
	const theme = useAppSelector((state) => state.theme.value);
	const dispatch = useAppDispatch();
  
	return (
		<p>Cart Receipt</p>
	);
}

export default CartReceipt;
