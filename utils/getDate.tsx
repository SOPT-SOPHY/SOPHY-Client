const getDate: object = (beforeDate: string) => {
  const yearMonthDate = beforeDate.slice(0, 10).split('-'); // ['2023','07','18']

  const hourMinute = beforeDate.slice(11, 16).split(':'); // ['16','00','00']

  const fullDate = {
    year: Number(yearMonthDate[0]),
    month: Number(yearMonthDate[1]),
    date: Number(yearMonthDate[2]),
    hour: Number(hourMinute[0]),
    minute: Number(hourMinute[1]),
  };
  return fullDate;
};

export default getDate;
