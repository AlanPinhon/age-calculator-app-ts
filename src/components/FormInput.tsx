import { ChangeEvent, useState } from "react";

type inputProps = {
  labelId: string;
  placeholderText:string;
  setInputValue: (value:string) => void;
}

export const FormInput = ({labelId, placeholderText, setInputValue}:inputProps) => {

  const [isValid, setIsValid] = useState(true);

  const handleInputValue = ({target}:ChangeEvent<HTMLInputElement>) => {    
    let regexValidator:RegExp;

    if(labelId === 'Day') regexValidator = /^(0?[1-9]|[12][0-9]|3[01])$/;
    if(labelId === 'Month') regexValidator = /^(0?[1-9]|1[0-2])$/;
    if(labelId === 'Year') regexValidator = /^\d{1,4}$/;

    setIsValid(regexValidator!.test(target.value));
    setInputValue(target.value);
  }

  return (
    <>
      <label htmlFor={labelId}>{labelId}</label>
      <input
        type="text"
        id={labelId}
        onChange={handleInputValue}
        placeholder={placeholderText}
      />
      {!isValid && <p className="msg-error">This field is required</p>}
    </>
  )
};