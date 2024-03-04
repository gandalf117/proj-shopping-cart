import { isObjEmpty } from 'utils';

export const validationHandler = (
	currValue,
	validation,
	setIsValid,
	setValidationText,
) => {
	if (isObjEmpty(validation)) {
		return true;
	}

	let isValid = true;
	let message = '';

	if (validation.required) {
		isValid = !!currValue;
		if (!isValid) {
			message = validation.msg_required || 'This field is required!';
		}
	}

	if (validation.format && isValid) {
		
		var re = new RegExp(validation.format);
		isValid = re.test(currValue);
		console.log('validation.format:::', currValue, validation.format, re.test(currValue))
		if (!isValid) {
			message = validation.msg_invalid || 'This email is ivalid!';
		}
	}

	setIsValid(isValid);
	setValidationText(message);
	return isValid;
};
