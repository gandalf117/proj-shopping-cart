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

	if (validation.format && isValid && currValue) {
		var re = new RegExp(validation.format);
		isValid = re.test(currValue);
		if (!isValid) {
			message = validation.msg_invalid || 'This field is ivalid!';
		}
	}

	setIsValid(isValid);
	setValidationText(message);
	return isValid;
};

let timeout;

export const debounce = (func, wait) => {
	const delayedFunc = (...args) => {
		clearTimeout(timeout);
		func(...args);
	};
	clearTimeout(timeout);
	timeout = setTimeout(delayedFunc, wait);
}
