import styled from 'styled-components';
import { devices } from 'assets/themes/breakpoints';

export const StyledCocktailListItem = styled.div`
  position: relative;
  margin: 1%;
  width: 18%;
  height: auto;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 5px;
  img {
    width: 100%;
    height: 70%;
  }
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  .label {
    position: absolute;
    top: 55%;
    right: 0;
    width: 80%;
    padding: 0.5rem;
    border-radius: 10px;
    background: white;
    font-size: 1.2rem;
    color: black;
  }
  .price {
    margin: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
  .cart-button {
    position: absolute;
    width: 90%;
    bottom: 0.5rem;
    background-image: linear-gradient(to right, #cba011 0%, #fcf825 100%);
  }

	@media ${devices.medium} {
		width: 46%;
    margin: 2%;
	}

	@media ${devices.small} {
		width: 90%;
    margin: 5%;
	}
`;

export const Slider = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transition: transform 0.2s ease-in-out;
`;
