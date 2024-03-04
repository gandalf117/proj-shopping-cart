import { FarmData } from "pages/cart/specs/forms/step1FormSpecs";

export enum FormOptionType {
    REGULAR = "TYPE_REGULAR",
    NO_VALIDATION = "TYPE_NO_VALIDATION",
    TYPE_NO_VALIDATION_NO_DATA = "TYPE_NO_VALIDATION_NO_DATA", // to be implemented
}
  
export enum FormOptionPosition {
    LEFT = "POS_LEFT",
    RIGHT = "POS_RIGHT",
}
  
export interface FormOption {
    type?: FormOptionType;
    position: FormOptionPosition;
    label: string;
    clickHandler: (formData: FarmData) => void;
}