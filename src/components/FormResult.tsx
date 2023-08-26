type resultsProps = {
  ageResults: { years: number; months: number; days: number } | null;
}

export const FormResult = ({ageResults}:resultsProps) => {

  return (
    <>
      <h2>{ageResults?.years ? ageResults.years : '--'} years</h2>
      <h2>{ageResults?.months ? ageResults.months : '--'} months</h2>
      <h2>{ageResults?.days ? ageResults.days : '--'} days</h2>
    </>
  )
}