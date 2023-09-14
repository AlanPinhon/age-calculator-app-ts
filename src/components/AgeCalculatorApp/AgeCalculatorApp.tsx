import { useState } from 'react';
import { FormCalculator } from "../FormCalculator/FormCalculator"
import { FormResult } from "../FormResult/FormResult"
import '../AgeCalculatorApp/AgeCalculatorAppStyles.css';

export const AgeCalculatorApp = () => {

  const [ageResults, setAgeResults] = useState<{ years: number; months: number; days: number } | null>(null);
  
  return (
    <section className="container-app">
      <FormCalculator setAgeResults={setAgeResults}/>
      <FormResult ageResults={ageResults}/>
    </section>
  )
}