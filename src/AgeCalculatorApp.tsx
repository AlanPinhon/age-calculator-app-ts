import { useState } from 'react';
import { FormCalculator } from "./components/FormCalculator"
import { FormResult } from "./components/FormResult"

export const AgeCalculatorApp = () => {

  const [ageResults, setAgeResults] = useState<{ years: number; months: number; days: number } | null>(null);
  
  return (
    <>
      <FormCalculator setAgeResults={setAgeResults}/>
      <FormResult ageResults={ageResults}/>
    </>
  )
}