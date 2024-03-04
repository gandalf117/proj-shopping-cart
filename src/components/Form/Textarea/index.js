import { useState, useImperativeHandle, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledTextarea } from './styles';
import { LABEL_SAME_ROW } from 'components/Form/constants';
import { validationHandler } from 'components/Form/utils';

const TextareaComponent = forwardRef(
	(
		{
			uuid,
			ckey,
			label,
			placeholder,
			options = [],
			styles = {},
			value = '',
			validation = {},
			onChange,
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
			onChange(ckey, val);
		};

		// TODO: maybe should use a hook
		useImperativeHandle(ref, () => ({
			validate() {
				validationHandler(
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
				<StyledTextarea className="custom-input">
					<textarea
						id={ckey}
						name={ckey}
						style={styles}
						onChange={onChangeHandler}
						value={currValue}
						placeholder={placeholder}
					></textarea>
					{!isValid && (
						<div className="custom-error">{validationText}</div>
					)}
				</StyledTextarea>
			</StyledContainer>
		);
	},
);

TextareaComponent.propTypes = {
	uuid: PropTypes.string.isRequired,
	ckey: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	options: PropTypes.array,
	styles: PropTypes.object,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	validation: PropTypes.object,
	onChange: PropTypes.func,
};

export default TextareaComponent;
