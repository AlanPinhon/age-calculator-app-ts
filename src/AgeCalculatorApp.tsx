import { FormButton } from "./components/FormButton"
import { FormCalculator } from "./components/FormCalculator"
import { FormResult } from "./components/FormResult"

export const AgeCalculatorApp = () => {
  return (
    <>
      <FormCalculator/>
      <FormButton/>
      <FormResult/>
    </>
  )
}