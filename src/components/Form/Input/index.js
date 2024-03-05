import { useState, useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledInput } from './styles';
import {
	INPUT,
	EMAIL,
	READONLY,
	LABEL_SAME_ROW,
	WAIT_FOR_TYPING_TO_FINISH
} from 'components/Form/constants';
import { validationHandler, debounce } from 'components/Form/utils';

const InputComponent = forwardRef(
	(
		{
			uuid,
			ckey,
			type,
			label,
			placeholder,
			disabled = false,
			options = [],
			styles = {},
			value = '',
			validation = {},
			onChange,
		},
		ref,
	) => {
		const isSameRow = options.includes(LABEL_SAME_ROW);
		const hasDebounce = options.includes(WAIT_FOR_TYPING_TO_FINISH);

		const [currValue, setCurrValue] = useState(value || '');
		const [isValid, setIsValid] = useState(true);
		const [validationText, setValidationText] = useState('');

		const onChangeHandler = (e) => {
			const val = e.target.value;
			setCurrValue(val);
			// send the change to the parent component to update the payload
			if (hasDebounce) {
				debounce(() => onChange(ckey, val), 1000);
			} else {
				onChange(ckey, val);
			}
			
		};

		// TODO: maybe should use a hook
		useImperativeHandle(ref, () => ({
			validate() {
				return validationHandler(
					currValue,
					validation,
					setIsValid,
					setValidationText,
				);
			},
		}));

		return (
			<StyledContainer $isSameRow={isSameRow}>
				<div className="custom-label">
					<label htmlFor={ckey}>{label}</label>
				</div>
				<StyledInput className="custom-input">
					<input
						type={type}
						id={ckey}
						name={ckey}
						disabled={disabled}
						placeholder={placeholder}
						onChange={onChangeHandler}
						style={styles}
						value={currValue}
					/>
					{!isValid && (
						<div className="custom-error">{validationText}</div>
					)}
				</StyledInput>
			</StyledContainer>
		);
	},
);

InputComponent.propTypes = {
	uuid: PropTypes.string.isRequired,
	ckey: PropTypes.string.isRequired,
	type: PropTypes.oneOf([INPUT, EMAIL, READONLY]),
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	options: PropTypes.array,
	styles: PropTypes.object,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	validation: PropTypes.object,
	onChange: PropTypes.func,
};

export default InputComponent;
