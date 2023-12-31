import { ChangeEvent} from "react";
import '../FormInput/FormInputStyles.css';

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
    <section className="container-input">
      <label className={error && "label-error"} htmlFor={labelId}>{labelId}</label>
      <input
        className={error && "input-error"}
        type="text"
        id={labelId}
        onChange={handleInputValue}
        placeholder={placeholderText}
      />
      {error && <p className="msg-error">{error}</p>}
    </section>
  )
};