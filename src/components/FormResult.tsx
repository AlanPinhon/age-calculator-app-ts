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
        <h2 className="date-result"><span className="date-number">{years ?? '--'}</span> years</h2>
        <h2 className="date-result"><span className="date-number">{months ?? '--'}</span> months</h2>
        <h2 className="date-result"><span className="date-number">{days ?? '--'}</span> days</h2>
      </section>
    </>
  )
}