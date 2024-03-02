
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleTheme } from '../../store/themeSlice';

const AboutPage: React.FC = () => {
	const theme = useAppSelector((state) => state.theme.value);
	const dispatch = useAppDispatch();
  
	return (
	  <div>
		<p>Current theme: {theme.name}</p>
		<button onClick={() => dispatch(toggleTheme())}>Toggle Theme123</button>
	  </div>
	);
}

export default AboutPage;
