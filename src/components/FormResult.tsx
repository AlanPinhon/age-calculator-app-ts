type resultsProps = {
  ageResults: { years: number; months: number; days: number } | null;
}

export const FormResult = ({ageResults}:resultsProps) => {

  return (
    <>
      <h2>{
        ageResults?.years
          ? ageResults.years
          : (ageResults?.years === 0 ? '0' : '--')} years
      </h2>
      <h2>{
        ageResults?.months
          ? ageResults.months
          : (ageResults?.months === 0 ? '0' : '--')} months
      </h2>
      <h2>{
        ageResults?.days
          ? ageResults.days
          : (ageResults?.days === 0 ? '0' : '--')} days
      </h2>
    </>
  )
}