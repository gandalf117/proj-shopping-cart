import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import FormComponent from 'components/Form';
import step1FormSpecs from 'pages/cart/specs/forms/step1FormSpecs';
import { useNavigate } from 'react-router-dom';
import { setUserData } from 'store/cartSlice';

import { FormOptionPosition, FormOptionType, FormOption } from 'components/Form/types';
import { Country, UserData } from 'types';

const CartStepOne: React.FC = () => {
  const countries = useAppSelector((state) => state.country.countries);
  const cities = useAppSelector((state) => state.city.cities);
  const userData = useAppSelector((state) => state.cart.userData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialCountry = countries.find(i=> i.id === userData.country) || countries[0];
    
  const [selectedCountry, setSelectedCountry] = useState(initialCountry);

  const goToNextStep = (formData: UserData) => {
    console.log('formData:::', formData)
    dispatch(setUserData(formData));
    navigate('/shopping-cart/step2');
  };

  const goBackToHomePage = () => {
    navigate('/');
  };

  // populate the countries dropdown and establish dependency with cities dropdown
  const countrySpec = step1FormSpecs.find(i => i.ckey === "country") as any;
  countrySpec.optionValues = countries.map(i => { return { value: i.id, name: i.name }});
  // add an empty option
  countrySpec.optionValues.unshift({ name: '---', value: '' });
  countrySpec.changeCallback = (countryId: number) => {
	  const country = countries.find(i => i.id === countryId) as Country;
	  setSelectedCountry(country);
  }

	// populate the cities dropdown
	const citiesSpec = step1FormSpecs.find(i => i.ckey === "city") as any;
	citiesSpec.optionValues = cities.filter(i => i.ctry_code === selectedCountry.code)
		.map(i => { return { value: i.id, name: i.name }});
  // add an empty option
  citiesSpec.optionValues.unshift({ name: '---', value: '' });

  const formOptions: FormOption[] = [
    {
      type: FormOptionType.REGULAR,
      position: FormOptionPosition.RIGHT,
      label: 'Next step',
      clickHandler: goToNextStep,
    },
    {
      position: FormOptionPosition.LEFT,
      label: 'Go back',
      clickHandler: goBackToHomePage,
    },
  ];

  return (
    <>
      <h2>Enter your information</h2>
      <FormComponent
        formOpts={{actions: formOptions }}
        formSpecs={step1FormSpecs}
        formData={userData as any}
      />
    </>
  );
};

export default CartStepOne;
