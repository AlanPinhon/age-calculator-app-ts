import { ChangeEvent, useState } from "react";

type inputProps = {
  forName: string
  placeholderInput:string
}

export const FormInput = ({forName, placeholderInput}:inputProps) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e:ChangeEvent<HTMLInputElement>) => {

    if(e.target.value === '') console.log('This field is required');

    setInputValue((e.target.value))
    
  }

  return (
    <>
      <label htmlFor={forName}>{forName}</label>
      <input
        type="text"
        id={forName}
        value={inputValue}
        onChange={handleInputValue}
        placeholder={placeholderInput}
      />
    </>
  )
};