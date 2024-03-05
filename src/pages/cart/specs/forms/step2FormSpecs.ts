import { v4 as uuidv4 } from 'uuid';
import {
	INPUT,
	READONLY,
	LABEL_SAME_ROW,
	WAIT_FOR_TYPING_TO_FINISH,
} from 'components/Form/constants';

export default [
	{
		uuid: uuidv4(),
		type: READONLY,
		ckey: 'fname',
		label: 'First name:',
		options: [LABEL_SAME_ROW],
		validation: {
			required: true,
		},
	},
	{
		uuid: uuidv4(),
		type: READONLY,
		ckey: 'lname',
		label: 'Last name:',
		options: [LABEL_SAME_ROW],
		validation: {},
	},
	{
		uuid: uuidv4(),
		type: READONLY,
		ckey: 'email',
		label: 'Email:',
		options: [LABEL_SAME_ROW],
		validation: {
			required: true,
			format: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
			msg_invalid: 'You have entered an invalid email!'
		},
	},
	{
		uuid: uuidv4(),
		type: READONLY,
		ckey: 'country',
		label: 'Country:',
		options: [LABEL_SAME_ROW],
		validation: {
			required: true
		},
	},
	{
		uuid: uuidv4(),
		type: READONLY,
		ckey: 'city',
		label: 'City:',
		options: [LABEL_SAME_ROW],
		validation: {
			required: true
		},
	},
	{
		uuid: uuidv4(),
		type: READONLY,
		ckey: 'street',
		label: 'Street:',
		options: [LABEL_SAME_ROW],
		validation: {
			required: true,
		},
	},
	{
		uuid: uuidv4(),
		type: INPUT,
		ckey: 'promoCode',
		label: 'Promo CODE:',
		options: [LABEL_SAME_ROW, WAIT_FOR_TYPING_TO_FINISH],
		validation: {
			format: '^[A-Za-z0-9]+$', // allows only numbers and letters
			msg_invalid: 'Please, enter only letters and numbers!'
		},
	},
];
