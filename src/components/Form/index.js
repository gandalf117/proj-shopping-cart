import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { READONLY, INPUT, EMAIL, TEXTAREA, DROPDOWN } from 'components/Form/constants';
import InputComponent from 'components/Form/Input';
import TextareaComponent from 'components/Form/Textarea';
import DropdownComponent from 'components/Form/Dropdown';
import { StyledButton } from 'styles';
import { StyledForm, StyledButtonContainer } from './styles';
import { FormOptionPosition, FormOptionType } from 'components/Form/types';
import { useAppSelector } from 'hooks';

function FormComponent({ formOpts = {}, formSpecs, formData = {} }) {
	const theme = useAppSelector((state) => state.theme.value);
	// stores all the fields as an array of refs so that they can be validated on the go
	// each field type can contain its own validaiton, which can be invoked from the child component
	const fieldRefs = useRef([]);
	// stores all the form data as a ref so that it doesn't generate extra component rerenders
	// TODO: there may be a better way to do this
	const modifiedFormData = useRef({ ...formData });

	const handleChange = (key, val, changeCallback) => {
		modifiedFormData.current[key] = val;
		if (changeCallback) {
			changeCallback(val);
		}
		if (formOpts.onChange) {
			formOpts.onChange(modifiedFormData.current);
		}
	};

	const handleValidation = () => {
		let result = true;
		for (const spec of formSpecs) {
			if (fieldRefs.current[spec.ckey]) {
				if (fieldRefs.current[spec.ckey].validate() === false) {
					result = false;
				}
			}
		}
		return result;
	};

	const getFormBody = (specs, data) => {
		return specs.map((item) => {
			// add the value from the formData to the specs
			item.value = data[item.ckey];
			switch (item.type) {
				case READONLY:
					return (
						<InputComponent
							key={item.uuid}
							ref={(el) => (fieldRefs.current[item.ckey] = el)}
							{...item}
							disabled
						/>
					);
				case INPUT:
				case EMAIL:
					return (
						<InputComponent
							key={item.uuid}
							ref={(el) => (fieldRefs.current[item.ckey] = el)}
							{...item}
							onChange={handleChange}
						/>
					);
				case TEXTAREA:
					return (
						<TextareaComponent
							key={item.uuid}
							ref={(el) => (fieldRefs.current[item.ckey] = el)}
							{...item}
							onChange={handleChange}
						/>
					);
					case DROPDOWN:
						return (
							<DropdownComponent
								key={item.uuid}
								ref={(el) => (fieldRefs.current[item.ckey] = el)}
								{...item}
								onChange={handleChange}
							/>
						);
			}
		});
	};

	const getFormActions = (actions) => {
		return actions.map((action, index) => {
			const type = action.type;
			let label = '';
			let className = '';
			if (action.position === FormOptionPosition.RIGHT) {
				className = 'align-btn-right';
			} else if (action.position === FormOptionPosition.LEFT) {
				className = 'align-btn-left';
			}
			let clickHandler = () => {};
			switch (type) {
				case FormOptionType.REGULAR: {
					label = action.label || 'CUSTOM ACTION';
					clickHandler = () => {
						if (handleValidation()) {
							action.clickHandler(modifiedFormData.current);
						}
					};
					break;
				}
				case FormOptionType.NO_VALIDATION: {
					label = action.label || 'CUSTOM ACTION';
					clickHandler = () => {
						action.clickHandler(modifiedFormData.current);
					};
					break;
				}
				default: {
					// doesn't depend on action.type and doesn't pass any data
					// used for entirely custom handler that don't depent on the form in any way
					label = action.label;
					clickHandler = action.clickHandler;
				}
			}
			return (
				<StyledButton
					theme={theme}
					key={`action-${index}`}
					className={className}
					onClick={clickHandler}
				>
					{label}
				</StyledButton>
			);
		});
	};

	return (
		<StyledForm>
			{getFormBody(formSpecs, formData)}
			{formOpts.actions && 
				<StyledButtonContainer>
					{getFormActions(formOpts.actions)}
				</StyledButtonContainer>
			}
		</StyledForm>
	);
}

FormComponent.propTypes = {
	formOpts: PropTypes.object,
	formSpecs: PropTypes.array.isRequired,
	formData: PropTypes.object,
};

export default FormComponent;
