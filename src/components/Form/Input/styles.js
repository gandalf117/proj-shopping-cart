import styled from 'styled-components';
import { devices } from 'assets/themes/breakpoints';

export const StyledContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: ${(props) => (props.$isSameRow ? 'row' : 'column')};
	width: 100%;
	padding: 1.2rem 0;
	color: black;
	.custom-label {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: ${(props) => (props.$isSameRow ? '30%' : '100%')};
	}
	.custom-input {
		width: ${(props) => (props.$isSameRow ? '70%' : '100%')};
	}
	.custom-error {
		position: absolute;
		bottom: 0;
		font-size: 0.7rem;
		font-weight: bold;
		color: #e31a1a;
	}
	@media ${devices.medium} {
		flex-direction: column;
		.custom-label,
		.custom-input {
			width: 100%;
		}
	}
`;

export const StyledInput = styled.div`
	input {
		width: 100%;
		display: inline-block;
		border: 1px solid gray;
		padding: 0.2rem 0.5rem;
		line-height: 1.8rem;
		font-size: 1rem;
		color: black;
	}
`;
