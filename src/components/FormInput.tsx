import { ChangeEvent } from "react";

type inputProps = {
  inputId: string;
  placeholderText:string;
  setInputValue: (value:string) => void;
}

export const FormInput = ({inputId, placeholderText, setInputValue}:inputProps) => {

  const handleInputValue = ({target}:ChangeEvent<HTMLInputElement>) => {    
    const newValue = target.value;
    setInputValue(newValue);
  }

  return (
    <>
      <label htmlFor={inputId}>{inputId}</label>
      <input
        type="text"
        id={inputId}
        onChange={handleInputValue}
        placeholder={placeholderText}
      />
    </>
  )
};