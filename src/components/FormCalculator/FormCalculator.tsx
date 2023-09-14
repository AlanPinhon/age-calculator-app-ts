import { useState } from "react";
import { FormInput } from "../FormInput/FormInput";
import { calculateAge, validateFutureDate } from "../../helpers/index";
import { TDate } from "../../types/TDate";
import '../FormCalculator/FormCalculatorStyles.css';

type formProps = {
  setAgeResults: (results:{ years: number; months: number; days: number }) => void;
}

export const FormCalculator = ({setAgeResults}:formProps) => {
  
  const [date, setDate] = useState<TDate>({ day: '', month: '', year: ''});
  const [errors, setErrors] = useState({day:'', month:'', year:''});


  const handleDateValue = (property: keyof TDate, value:string) => {   
    setDate( oldDate => ( { ...oldDate, [property]: value } as TDate) );
  };

  const validateDate = (dateValue:string, regEx:RegExp, msgError:string, property:string) => {
    const isValidDate = regEx.test(dateValue);
    
    if(dateValue === '') {
      setErrors( prevError => ( {...prevError, [property]: 'This field is required'} ) );
    }else if(!isValidDate) {
      setErrors( prevError => ( {...prevError, [property]: msgError} ) );
    } else setErrors( prevError => ( {...prevError, [property]: ''} ) );

    return isValidDate;
  }

  const handleCalculateAge = () => {
    const dayIsValid = validateDate(date.day, /^(0?[1-9]|[12][0-9]|3[01])$/, 'Must be a valid day','day'); // RegEx matches numbers 01-31, leading 0 is optional
    const monthIsValid = validateDate(date.month, /^(0?[1-9]|1[0-2])$/, 'Must be a valid month','month'); // RegEx matches numbers 01-12, leading 0 is optional
    const yearIsValid = validateDate(date.year, /^\d{4}$/, 'Must be a valid year','year'); //RegEx matches only 4 digits for year

    if(dayIsValid && monthIsValid && yearIsValid){
      const futureDateErrors = validateFutureDate(date.day, date.month, date.year);

      if(futureDateErrors){
        return setErrors({
          day: futureDateErrors,
          month:futureDateErrors,
          year: futureDateErrors
        })
      }

      const results = calculateAge(date!);
      setAgeResults(results);
      setErrors({day:'', month:'', year:''});
    }
  }

  return (
    <section className="container-form">
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
        <img className="arrow-btn" src="/images/icon-arrow.svg" alt="icon-arrow"/>
      </button>
    </section>
  )
};