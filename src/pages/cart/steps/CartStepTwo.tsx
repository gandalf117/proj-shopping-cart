import React, { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import FormComponent from 'components/Form';
import step2FormSpecs from 'pages/cart/specs/forms/step2FormSpecs';
import { useNavigate } from 'react-router-dom';
import { setUserData } from 'store/cartSlice';

import { FormOptionPosition, FormOptionType, FormOption } from 'components/Form/types';
import { Country, UserData } from 'types';
import { StyledActions, ValidPromoCode } from '../styles';
import Modal, { ModalHandle } from 'components/Modal';
import { StyledButton } from 'styles';

const CartStepTwo: React.FC = () => {
  const theme = useAppSelector((state) => state.theme.value);
  const countries = useAppSelector((state) => state.country.countries);
  const cities = useAppSelector((state) => state.city.cities);
  const userData = useAppSelector((state) => state.cart.userData);
  const validCodes = useAppSelector((state) => state.cart.validCodes);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isCodeValid, setIsCodeValid] = useState(false);
  const [formData, setFormData] = useState<UserData>({} as UserData);

  const modalRef = useRef<ModalHandle>(null);

  const promptForConfirmation = (data: UserData) => {
    setFormData(data);
    modalRef?.current?.toggleModal(true);
  };

  const goToNextStep = () => {
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
      clickHandler: promptForConfirmation,
    },
    {
      position: FormOptionPosition.LEFT,
      label: 'Go back',
      clickHandler: goBackToPreviousStep,
    },
  ];

  const validatePromoCode = (formData: UserData) => {
    if (validCodes.includes(formData.promoCode)) {
      setIsCodeValid(true);
    } else {
      setIsCodeValid(false);
    }
  }

  const country = countries.find(i => i.id == userData.country)?.name;

  const city = cities.find(i => i.id == userData.city)?.name;

  return (
    <>
      <h2>Complete the order</h2>
      <h3>List of valid promo codes: {validCodes.join(', ')}</h3>
      <FormComponent
        formOpts={{actions: formActions, onChange: validatePromoCode }}
        formSpecs={step2FormSpecs}
        formData={{...userData, country, city}}
      />
      {isCodeValid && 
        <ValidPromoCode>The Promo CODE is valid! You will get a discount.</ValidPromoCode>
      }
      <Modal
        ref={modalRef}
      >
        <p>Are you sure you want to submit this order?</p>
        <StyledActions>
          <StyledButton
            theme={theme}
            className={'action-left'}
            onClick={goToNextStep}
          >
            Yes
          </StyledButton>
          <StyledButton
            theme={theme}
            className={'action-right'}
            onClick={() => modalRef?.current?.toggleModal(false)}
          >
            No
          </StyledButton>
        </StyledActions>
      </Modal>
    </>
  );
};

export default CartStepTwo;
