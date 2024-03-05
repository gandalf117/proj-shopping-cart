import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import FormComponent from 'components/Form';
import step2FormSpecs from 'pages/cart/specs/forms/step2FormSpecs';
import { useNavigate } from 'react-router-dom';
import { setUserData } from 'store/cartSlice';

import { FormOptionPosition, FormOptionType, FormOption } from 'components/Form/types';
import { Country, UserData } from 'types';
import { ValidPromoCode } from '../styles';

const CartStepTwo: React.FC = () => {
  const countries = useAppSelector((state) => state.country.countries);
  const cities = useAppSelector((state) => state.city.cities);
  const userData = useAppSelector((state) => state.cart.userData);
  const validCodes = useAppSelector((state) => state.cart.validCodes);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isCodeValid, setIsCodeValid] = useState(false);

  const goToNextStep = (formData: UserData) => {
    dispatch(setUserData(formData));
    navigate('/shopping-cart/receipt');
  };

  const goBackToPreviousStep = () => {
    navigate('/shopping-cart/step1');
  };

  const formActions: FormOption[] = [
    {
      type: FormOptionType.REGULAR,
      position: FormOptionPosition.RIGHT,
      label: 'Next step',
      clickHandler: goToNextStep,
    },
    {
      position: FormOptionPosition.LEFT,
      label: 'Go back',
      clickHandler: goBackToPreviousStep,
    },
  ];

  const validatePromoCode = (formData: UserData) => {
	console.log(formData)
	if (validCodes.includes(formData.promoCode)) {
		setIsCodeValid(true);
	} else {
		setIsCodeValid(false);
	}
  }

  return (
    <>
		<h2>Review your information</h2>
		<h3>List of valid promo codes: {validCodes.join(', ')}</h3>
		<FormComponent
			formOpts={{actions: formActions, onChange: validatePromoCode }}
			formSpecs={step2FormSpecs}
			formData={userData as any}
		/>
		{isCodeValid && 
			<ValidPromoCode>The Promo CODE is valid! You will get a discount.</ValidPromoCode>
		}
    </>
  );
};

export default CartStepTwo;
