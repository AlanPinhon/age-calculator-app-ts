import { TDate } from "../types/TDate";

export const calculateAge = ({day, month, year}:TDate) => {

  // Calculate the difference in age from the current date

  const birthDate = new Date(Number(year), Number(month) - 1, Number(day));
  const currentDate = new Date();

  let years = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() - birthDate.getMonth();
  let days = currentDate.getDate() - birthDate.getDate();

  if (days < 0) {
    const lastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    days += lastMonth.getDate();
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return console.log(`${years} years, ${months} months y ${days} days`);
};