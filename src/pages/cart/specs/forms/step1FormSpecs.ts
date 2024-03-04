import { v4 as uuidv4 } from 'uuid';
import {
	INPUT,
	DROPDOWN,
	LABEL_SAME_ROW,
	EMAIL,
} from 'components/Form/constants';

export interface FarmData {
	fname: string;
	lname: string;
	country: number;
    city: number;
    email: string;
    street: string;
}

export default [
	{
		uuid: uuidv4(),
		type: INPUT,
		ckey: 'fname',
		label: 'First name:',
		options: [LABEL_SAME_ROW],
		validation: {
			required: true,
		},
	},
	{
		uuid: uuidv4(),
		type: INPUT,
		ckey: 'lname',
		label: 'Last name:',
		options: [LABEL_SAME_ROW],
		validation: {},
	},
	{
		uuid: uuidv4(),
		type: EMAIL,
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
		type: DROPDOWN,
		ckey: 'country',
		label: 'Country:',
		options: [LABEL_SAME_ROW],
		optionValues: [],
		validation: {
			required: true
		},
	},
	{
		uuid: uuidv4(),
		type: DROPDOWN,
		ckey: 'city',
		label: 'City:',
		options: [LABEL_SAME_ROW],
		optionValues: [],
		validation: {
			required: true
		},
	},
	{
		uuid: uuidv4(),
		type: INPUT,
		ckey: 'street',
		label: 'Street:',
		options: [LABEL_SAME_ROW],
		validation: {
			required: true,
		},
	},
];
