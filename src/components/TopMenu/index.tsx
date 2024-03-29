import React from 'react';
import { StyledTopMenu, StyledMenuLogo } from './styles';
import { useAppSelector, useAppDispatch } from 'hooks';
import { toggleTheme } from '../../store/themeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart  } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import ToggleSwitch from 'components/ToggleSwitch';

const MENU_TITLE = 'SHOPPING CART PROJECT';

const TopMenu: React.FC = () => {
	const theme = useAppSelector((state) => state.theme.value);
	const cartItemCount = useAppSelector((state) => state.cart.itemCount);
	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const goHome = () => {
		navigate('/');
	};

	const goToShoppingCart = () => {
		navigate('/shopping-cart/step1');
	};

	const toggleThemeF = (themeSwitch: boolean) => {
		dispatch(toggleTheme());
	  };

	return <StyledTopMenu theme={theme}>
		<StyledMenuLogo>
			<FontAwesomeIcon
				onClick={goHome}
				className="menu-link"
				icon={faHome}
			/>
			<span className="menu-title">{MENU_TITLE}</span>
		</StyledMenuLogo>
		<div className="menu-switch">
			<div>{theme.name} theme </div>
			<div>
				<ToggleSwitch onChange={toggleThemeF} />
			</div>
		</div>
		<div onClick={goToShoppingCart} className="menu-link">
			<FontAwesomeIcon icon={faShoppingCart} /> ({cartItemCount})
		</div>
	</StyledTopMenu>;
}

export default TopMenu;
