import React, { useState } from 'react';
import { Cocktail } from 'types';
import { StyledCocktailListItem } from './styles';
import Button from 'components/Button';
import { faCartPlus  } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from 'hooks';
import { addToCart } from '../../store/cartSlice';

const IMG_PATH = 'assets/images/cocktails';

const CocktailListItem: React.FC<Cocktail> = (props) => {
  const {
    name,
    image,
    price,
  } = props;

  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(addToCart(props));
  }

  return (
    <StyledCocktailListItem>
      <img alt={`picture of ${name}`} src={`${IMG_PATH}/${image}`} />
      <div className="label">
        {name}
      </div>
      <div className="price">
        Price: {price} lv
      </div>
      <Button label="Add to cart" icon={faCartPlus} onClick={clickHandler} className="cart-button" />
    </StyledCocktailListItem>
  );
};

export default CocktailListItem;
