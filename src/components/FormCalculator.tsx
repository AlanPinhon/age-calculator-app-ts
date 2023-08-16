import { useState } from "react";
import { FormInput } from "./FormInput";
import { calculateAge } from "../helpers/calculateAge";


export const FormCalculator = () => {

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleCalculateAge = () => {
    calculateAge(day,month,year);
  }
  

  return (
    <>
      <FormInput setInputValue={setDay} placeholderText="DD" inputId="Day"/>
      <FormInput setInputValue={setMonth} placeholderText="MM" inputId="Month"/>
      <FormInput setInputValue={setYear} placeholderText="YYYY" inputId="Year"/>
      <button onClick={handleCalculateAge}>
        <img className="arrow-btn" src="../src/assets/images/icon-arrow.svg" alt="icon-arrow"/>
      </button>
    </>
  )
}