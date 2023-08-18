import { useState } from "react";
import { FormInput } from "./FormInput";
import { calculateAge } from "../helpers/calculateAge";
import { TDate } from "../types/TDate";

export const FormCalculator = () => {
  
  const [date, setDate] = useState<TDate | null>(null);
  const [errors, setErrors] = useState({day:'', month:'', year:''})
  
  const handleCalculateAge = () => {  
    calculateAge(date!);
  };

  const handleDateValue = (property: keyof TDate, value:string) => {

    if(property === 'day') {
      // Matches numbers 01-31, leading 0 is optional
      const isValidDay = /^(0?[1-9]|[12][0-9]|3[01])$/.test(value);
      setErrors( prevError => ( {...prevError, day: !isValidDay ? 'Must be a valid day' : ''} ) );
    } 
    if(property === 'month') {
      // Matches numbers 01-12, leading 0 is optional
      const isValidMonth = /^(0?[1-9]|1[0-2])$/.test(value);
      setErrors( prevError => ( {...prevError, month: !isValidMonth ? 'Must be a valid month' : ''} ) );
    } 
    if(property === 'year') {
      // Matches 1 to 4 digits for year
      const isValidYear = /^\d{1,4}$/.test(value);
      setErrors( prevError => ( {...prevError, year: !isValidYear ? 'Must be a valid year' : ''} ) );
    } 

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