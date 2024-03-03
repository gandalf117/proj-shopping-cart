type Size = {
	small: string;
	medium: string;
	large: string;
};
  
const size: Size = {
	small: '480px',
	medium: '768px',
	large: '1024px',
};
  
type Devices = {
	small: string;
	medium: string;
	large: string;
};
  
export const devices: Devices = {
	small: `(max-width: ${size.small})`,
	medium: `(max-width: ${size.medium})`,
	large: `(max-width: ${size.large})`,
};