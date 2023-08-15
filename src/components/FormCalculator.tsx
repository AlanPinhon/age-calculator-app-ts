import { useState } from "react";
import { FormInput } from "./FormInput";


export const FormCalculator = () => {

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const calculateAge = () => {
    const birthDate = new Date(Number(year), Number(month) - 1, Number(day));
    const currentDate = new Date();

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
      const lastMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      );
      days += lastMonth.getDate(); // Ajustamos los días negativos
      months--;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    console.log(`${years} años, ${months} meses y ${days} días`);
  };

  return (
    <>
      <FormInput setInputValue={setDay} placeholderText="DD" inputId="Day"/>
      <FormInput setInputValue={setMonth} placeholderText="MM" inputId="Month"/>
      <FormInput setInputValue={setYear} placeholderText="YYYY" inputId="Year"/>
      <button onClick={calculateAge}>
        <img className="arrow-btn" src="../src/assets/images/icon-arrow.svg" alt="icon-arrow"/>
      </button>
    </>
  )
}