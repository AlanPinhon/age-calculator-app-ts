import { FormInput } from "./FormInput";

export const FormCalculator = () => {
  return (
    <>
      <FormInput placeholderInput="DD" forName="Day"/>
      <FormInput placeholderInput="MM" forName="Month"/>
      <FormInput placeholderInput="YYYY" forName="Year"/>
    </>
  )
}