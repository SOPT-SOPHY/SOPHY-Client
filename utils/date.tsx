// form 작성 시 날짜 데이터를 가공하는 util 함수

export const getDate: object = (beforeDate: string) => {
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

export const getFullDate: any = (userDate: string, userTime: string) => {
  const date = userDate.replace(/\//g, '-');
  const time = `${userTime.slice(0, 2)}:${userTime.slice(2, 5)}`;
  const fullTime = `20${date}T${time}:00`;
  return fullTime;
};
