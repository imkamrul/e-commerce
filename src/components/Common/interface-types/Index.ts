import { ChangeEvent } from "react";

export interface ModalProps {
  children: React.ReactNode;
  title: string;
  toggleModal: () => void;
  isOpen: boolean;
  isLoading: boolean;
  customStyleClass?: string; // Use "?" for optional props
}
export interface CommonInputWithLabelProps {
  label: string;
  id?: string; // Optional, with a default value
  required?: boolean; // Optional, with a default value
  name: string;
  type?: string; // Optional, with a default value
  placeholder?: string; // Optional, with a default value
}
export interface CommonFilterProps {
  content: {
    title: string;
    options: any; // Replace 'any' with the actual type of 'options'
  };
}

export interface ProfileTitleProps {
  title: string;
  btn?: {
    link: string;
    text: string;
  };
}
export interface InputWithLabelProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  errorMessage: string;
  getValue: (e: ChangeEvent<HTMLInputElement>) => void;
}
export interface CustomImageFieldWithLabelProps {
  label: string;
  required: boolean;
  name?: string;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
  getValue?: (e: ChangeEvent<HTMLInputElement>) => void;
}
