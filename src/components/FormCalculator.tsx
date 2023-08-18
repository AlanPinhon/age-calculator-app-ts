import { useState } from "react";
import { FormInput } from "./FormInput";
import { calculateAge } from "../helpers/calculateAge";
import { TDate } from "../types/TDate";

export const FormCalculator = () => {
  
  const [date, setDate] = useState<TDate | null>(null);
  const [isValid, setIsValid] = useState(true);
  const [errors, setErrors] = useState({day:false, month:false, year:false})
  
  const handleCalculateAge = () => {  
    if(!isValid) return;
    calculateAge(date!);
  };

  const handleDateValue = (property: keyof TDate, value:string) => {

    let regexValidator:RegExp;

    //Asigna la expresión regular de acuerdo a la propiedad del input.
    if(property === 'day') regexValidator = /^(0?[1-9]|[12][0-9]|3[01])$/;
    if(property === 'month') regexValidator = /^(0?[1-9]|1[0-2])$/;
    if(property === 'year') regexValidator = /^\d{1,4}$/;

    //Valida la expresión regular
    const isFieldValid = regexValidator!.test(value);

    // Garantiza de que "isValid" siga siendo true si todos los campos son válidos.
    setIsValid(isValid && isFieldValid);
    
    //Actualiza el estado de errores si el valor de un campo no es válido.
    setErrors(prevError => ({...prevError, [property]: !isFieldValid}));

    // Actualiza el estado de la fecha con el valor ingresado
    setDate( oldDate => ({ ...oldDate, [property]: value } as TDate) ); 
  };

  return (
    <>
      <FormInput
        placeholderText="DD"
        labelId="Day"
        setInputValue={ value => handleDateValue("day", value) }
      />
      {errors.day && <p className="msg-error">Must be a valid day</p>}
      <FormInput
        placeholderText="MM"
        labelId="Month"
        setInputValue={ value => handleDateValue("month", value) }
      />
      {errors.month && <p className="msg-error">Must be a valid month</p>}
      <FormInput
        placeholderText="YYYY"
        labelId="Year"
        setInputValue={ value => handleDateValue("year", value) }
      />
      {errors.year && <p className="msg-error">Must be a valid year</p>}

      <button onClick={handleCalculateAge}>
        <img className="arrow-btn" src="../src/assets/images/icon-arrow.svg" alt="icon-arrow"/>
      </button>
    </>
  )
};