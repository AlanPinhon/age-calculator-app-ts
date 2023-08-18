import { ChangeEvent} from "react";

type inputProps = {
  labelId: string;
  placeholderText:string;
  setInputValue: (value:string) => void;
  error:string
}

export const FormInput = ({labelId, placeholderText, setInputValue, error}:inputProps) => {

  const handleInputValue = ({target}:ChangeEvent<HTMLInputElement>) => {
    const newValue = target.value;
    setInputValue(newValue);
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
      {error && <p className="msg-error">{error}</p>}
    </>
  )
};