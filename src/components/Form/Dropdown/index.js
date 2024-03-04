import { useState, useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledSelect } from './styles';
import { LABEL_SAME_ROW } from 'components/Form/constants';
import { validationHandler } from 'components/Form/utils';

const DropdownComponent = forwardRef(
	(
		{
			uuid,
			ckey,
			label,
			disabled = false,
			options = [],
			styles = {},
			value = '',
			optionValues = [],
			validation = {},
			onChange,
			changeCallback,
		},
		ref,
	) => {
		const isSameRow = options.includes(LABEL_SAME_ROW);
		const [currValue, setCurrValue] = useState(value);
		const [isValid, setIsValid] = useState(true);
		const [validationText, setValidationText] = useState('');

		const onChangeHandler = (e) => {
			const val = e.target.value;
			setCurrValue(val);
			// send the change to the parent component to update the payload
			onChange(ckey, val, changeCallback);
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
				<StyledSelect className="custom-input">
					<select name={ckey} id={ckey} disabled={disabled} style={styles} onChange={onChangeHandler}>
						{optionValues.map((item, index) => {
							return <option key={index} value={item.value}>{item.name}</option>
						})}
					</select>
					{!isValid && (
						<div className="custom-error">{validationText}</div>
					)}
				</StyledSelect>
			</StyledContainer>
		);
	},
);

DropdownComponent.propTypes = {
	uuid: PropTypes.string.isRequired,
	ckey: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool,
	options: PropTypes.array,
	styles: PropTypes.object,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	optionValues: PropTypes.array.isRequired,
	validation: PropTypes.object,
	onChange: PropTypes.func,
};

export default DropdownComponent;
