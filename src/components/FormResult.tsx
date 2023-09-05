type resultsProps = {
  ageResults: { years: number; months: number; days: number } | null;
}

export const FormResult = ({ageResults}:resultsProps) => {

  const years = ageResults?.years;
  const months = ageResults?.months;
  const days = ageResults?.days;

  return (
    <>
      <h2>{years ? years : (years === 0 ? '0' : '--')} years
      </h2>
      <h2>{months ? months : (months === 0 ? '0' : '--')} months
      </h2>
      <h2>{days ? days : (days === 0 ? '0' : '--')} days
      </h2>
    </>
  )
}