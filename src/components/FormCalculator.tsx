import { useState } from "react";
import { FormInput } from "./FormInput";
import { calculateAge } from "../helpers/calculateAge";
import { TDate } from "../types/TDate";

export const FormCalculator = () => {
  
  const [date, setDate] = useState<TDate | null>(null);
  
  const handleCalculateAge = () => {
    calculateAge(date!);
  };

  const handleDateValue = (property: keyof TDate, value:string) => {
    setDate( oldDate => ({ ...oldDate, [property]: value } as TDate) ) 
  };

  return (
    <>
      <FormInput
        placeholderText="DD"
        inputId="Day"
        setInputValue={ value => handleDateValue("day", value) }
      />
      <FormInput
        placeholderText="MM"
        inputId="Month"
        setInputValue={ value => handleDateValue("month", value) }
      />
      <FormInput
        placeholderText="YYYY"
        inputId="Year"
        setInputValue={ value => handleDateValue("year", value) }
      />
      <button onClick={handleCalculateAge}>
        <img className="arrow-btn" src="../src/assets/images/icon-arrow.svg" alt="icon-arrow"/>
      </button>
    </>
  )
};