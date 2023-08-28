export const validateFutureDate = (day:string, month:string, year:string) => {
  //Check if dates are in the future
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();

  const isFutureYear = Number(year) > currentYear;
  const isFutureMonth = Number(year) === currentYear && Number(month) > currentMonth;
  const isFutureDay = Number(year) === currentYear && Number(month) === currentMonth && Number(day) > currentDay;

  const has30Days = [4, 6, 9, 11].includes(Number(month)); // Check months with 30 days
  const has31Days = [1, 3, 5, 7, 8, 10, 12].includes(Number(month)); // Check months with 31 days
  const isLeapYear = (Number(year) % 4 === 0 && Number(year) % 100 !== 0) || (Number(year) % 400 === 0); // Check if the year is a leap year

  const isDayInvalid = () => (has30Days && Number(day) > 30) || (has31Days && Number(day) > 31);
  const isMonthInvalid = () => Number(month) < 1 || Number(month) > 12;
  const isLeapYearInvalid = () => Number(month) === 2 && Number(day) > 29 && isLeapYear;
  const isNonLeapYearInvalid = () => Number(month) === 2 && Number(day) > 28 && !isLeapYear;

  let errorMsg = '';

  if (isFutureYear || isFutureMonth || isFutureDay) return errorMsg = 'Must be in the past';

  if (isDayInvalid() || isMonthInvalid() || isLeapYearInvalid() || isNonLeapYearInvalid()) return errorMsg = 'Must be a valid date';

  return errorMsg;
};