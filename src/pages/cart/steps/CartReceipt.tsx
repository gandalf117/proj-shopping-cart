import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import FormComponent from 'components/Form';
import step2FormSpecs from 'pages/cart/specs/forms/step2FormSpecs';
import { useNavigate } from 'react-router-dom';
import { setUserData } from 'store/cartSlice';

import { FormOptionPosition, FormOptionType, FormOption } from 'components/Form/types';
import { Country, UserData } from 'types';
import { StyledTable, ValidPromoCode } from '../styles';
import { roundUpAndFormat } from 'utils';
import { StyledButton } from 'styles';

const CartReceipt: React.FC = () => {
  const theme = useAppSelector((state) => state.theme.value);
  const cartItems = useAppSelector((state) => state.cart.items);
  const userData = useAppSelector((state) => state.cart.userData);
  const validCodes = useAppSelector((state) => state.cart.validCodes);

  const navigate = useNavigate();

  const IMG_PATH = '../assets/images/cocktails';

  const cartTotal = cartItems.reduce((result, item) => {
    return result += item.price * item.count;
  }, 0);

  const isPromoCodeValid = validCodes.includes(userData.promoCode);

  const discount = isPromoCodeValid ? cartTotal * 0.2 : 0;

  const goBackToHomePage = () => {
    navigate('/');
  };

  return (
    <>
		<h2>Here is your receipt</h2>
		<StyledTable>
			<thead>
				<tr>
					<th>Picture</th>
					<th>Name</th>
					<th>Price</th>
					<th>Count</th>
					<th>Total</th>
				</tr>
			</thead>
			<tbody>
				{cartItems.map((item, index) => (
					<tr key={index}>
						<td>
							<img alt={`picture of ${item.name}`} src={`${IMG_PATH}/${item.image}`} />
						</td>
						<td>{item.name}</td>
						<td>{roundUpAndFormat(item.price)} lv</td>
						<td>{item.count}</td>
						<td>{roundUpAndFormat(item.count * item.price)} lv</td>
					</tr>
				))}
        {discount ?
          <>
            <tr>
              <td colSpan={5} className="cart-total">
                Subtotal: {roundUpAndFormat(cartTotal)} lv
              </td>
            </tr>
            <tr>
              <td colSpan={5} className="cart-total">
                Applied discount: (20%) -{roundUpAndFormat(discount)} lv
              </td>
            </tr>
          </>
        : null}
				<tr>
					<td colSpan={5} className="cart-total">
						Total: {roundUpAndFormat(cartTotal - discount)} lv
					</td>
				</tr>
        <tr>
          <td className="cart-button">
              <StyledButton
                theme={theme}
                onClick={goBackToHomePage}
              >
                Go home
            </StyledButton>
          </td>
        </tr>
			</tbody>
		</StyledTable>
    </>
  );
};

export default CartReceipt;
