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
