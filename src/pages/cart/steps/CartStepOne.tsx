import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import FormComponent from 'components/Form';
import step1FormSpecs from 'pages/cart/specs/forms/step1FormSpecs';
import { useNavigate } from 'react-router-dom';
import { FormOptionPosition, FormOptionType, FormOption } from 'components/Form/types';
import { Country } from 'types';

const CartStepOne: React.FC = () => {
  const countries = useAppSelector((state) => state.country.countries);
  const cities = useAppSelector((state) => state.city.cities);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const goToNextStep = () => {
    navigate('/shopping-cart/step2');
  };

  const goBackToHomePage = () => {
    navigate('/');
  };

  // populate the countries dropdown and establish dependency with cities dropdown
  const countrySpec = step1FormSpecs.find(item => item.ckey === "country") as any;
  countrySpec.optionValues = countries.map(i => { return { value: i.id, name: i.name }});
  countrySpec.changeCallback = (countryId: number) => {
	const country = countries.find(i => i.id === countryId) as Country;
	setSelectedCountry(country);
  }

	// populate the cities dropdown
	const citiesSpec = step1FormSpecs.find(item => item.ckey === "city") as any;
	citiesSpec.optionValues = cities.filter(i => i.ctry_code === selectedCountry.code)
		.map(i => { return { value: i.id, name: i.name }});

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
        // formData={data} // Uncomment and ensure `data` is defined and typed if used
      />
    </>
  );
};

export default CartStepOne;