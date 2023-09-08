type resultsProps = {
  ageResults: { years: number; months: number; days: number } | null;
}

export const FormResult = ({ageResults}:resultsProps) => {

  const years = ageResults?.years;
  const months = ageResults?.months;
  const days = ageResults?.days;

  return (
    <>
      <section className="container-result">
        <h2>{years ?? '--'} years</h2>
        <h2>{months ?? '--'} months</h2>
        <h2>{days ?? '--'} days</h2>
      </section>
    </>
  )
}