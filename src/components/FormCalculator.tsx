import { useState } from "react";
import { FormInput } from "./FormInput";
import { calculateAge, validateFutureDate } from "../helpers/index";
import { TDate } from "../types/TDate";

export const FormCalculator = () => {
  
  const [date, setDate] = useState<TDate>({ day: '', month: '', year: ''});
  const [errors, setErrors] = useState({day:'', month:'', year:''});

  const handleDateValue = (property: keyof TDate, value:string) => {

    const validateDate = (dateValue:string, regEx:RegExp, msgError:string) => {
      const isValidDate = regEx.test(dateValue);
      
      if(dateValue === '') {
        setErrors( prevError => ( {...prevError, [property]: 'This field is required'} ) );
        return false;
      }
      if(!isValidDate) {
        setErrors( prevError => ( {...prevError, [property]: msgError} ) );
        return false;
      }
      setErrors( prevError => ( {...prevError, [property]: ''} ) );
      return true;
    }

    if(property === 'day') validateDate(value, /^(0?[1-9]|[12][0-9]|3[01])$/, 'Must be a valid day'); // RegEx matches numbers 01-31, leading 0 is optional

    if(property === 'month') validateDate(value, /^(0?[1-9]|1[0-2])$/, 'Must be a valid month'); // RegEx matches numbers 01-12, leading 0 is optional
       
    if(property === 'year') validateDate(value, /^\d{1,4}$/, 'Must be a valid year'); //RegEx matches 1 to 4 digits for year

    setDate( oldDate => ( { ...oldDate, [property]: value } as TDate) );
  };

  const handleCalculateAge = () => {     
    const futureDateErrors = validateFutureDate(date.day, date.month, date.year);

    if(futureDateErrors){
      return setErrors({
        day: futureDateErrors,
        month:futureDateErrors,
        year: futureDateErrors
      })
    }

    calculateAge(date!);
    setErrors({day:'', month:'', year:''});
  }

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