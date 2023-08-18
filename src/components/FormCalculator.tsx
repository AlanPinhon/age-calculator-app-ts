import { useState } from "react";
import { FormInput } from "./FormInput";
import { calculateAge } from "../helpers/calculateAge";
import { TDate } from "../types/TDate";

export const FormCalculator = () => {
  
  const [date, setDate] = useState<TDate | null>(null);
  const [isValid, setIsValid] = useState(true);
  const [errors, setErrors] = useState({day:false, month:false, year:false})
  
  const handleCalculateAge = () => {  
    calculateAge(date!);
  };

  const handleDateValue = (property: keyof TDate, value:string) => {

    let regexValidator:RegExp;

    if(property === 'day') regexValidator = /^(0?[1-9]|[12][0-9]|3[01])$/; // Matches numbers 01-31, leading 0 is optional
    if(property === 'month') regexValidator = /^(0?[1-9]|1[0-2])$/; // Matches numbers 01-12, leading 0 is optional
    if(property === 'year') regexValidator = /^\d{1,4}$/; // Matches 1 to 4 digits for year

    const isFieldValid = regexValidator!.test(value);

    setIsValid(isValid && isFieldValid);
    
    setErrors( prevError => ( {...prevError, [property]: !isFieldValid} ) );

    setDate( oldDate => ( { ...oldDate, [property]: value } as TDate) ); 
  };

  return (
    <>
      <FormInput
        placeholderText="DD"
        labelId="Day"
        setInputValue={ value => handleDateValue("day", value) }
        error={errors.day}
      />
      <FormInput
        placeholderText="MM"
        labelId="Month"
        setInputValue={ value => handleDateValue("month", value) }
        error={errors.month}
      />
      <FormInput
        placeholderText="YYYY"
        labelId="Year"
        setInputValue={ value => handleDateValue("year", value) }
        error={errors.year}
      />

      <button onClick={handleCalculateAge}>
        <img className="arrow-btn" src="../src/assets/images/icon-arrow.svg" alt="icon-arrow"/>
      </button>
    </>
  )
};