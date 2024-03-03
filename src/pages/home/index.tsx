import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks';
import { fetchCocktails } from 'store/cocktailSlice';
import { LoadingStates } from 'consts';
import HomeLayout from 'layouts/HomeLayout';
import CocktailListItem from 'components/CocktailListItem';
import { addToCart } from 'store/cartSlice';
import { getRandomInt } from 'utils';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const { cocktails, status, error } = useAppSelector((state) => state.cocktail);
  
  useEffect(() => {
    dispatch(fetchCocktails());;
  }, [dispatch]);
  
  const preAddToCart = (count: number) => {
    for (let i=0; i<count; i++) {
      const rand = getRandomInt(0, cocktails.length - 1);
      setTimeout(() => {dispatch(addToCart(cocktails[rand]))}, 100);
    }
  }

  // preload some random items to the cart if the cart is empty
  if (cocktails.length) {
    if (!cartItems.length)
    preAddToCart(5);
  }

  return (
    <HomeLayout>
      {status === LoadingStates.Loading && 
        <div>Loading...</div>
      }
      {status === LoadingStates.Fail && 
        <div>Error: {error}</div>
      }
      {status === LoadingStates.Success && cocktails.map((item) => (
        <CocktailListItem key={item.id} {...item} />
      ))}
    </HomeLayout>
  );
}

export default HomePage;