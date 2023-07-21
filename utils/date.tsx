// form 작성 시 날짜 데이터를 가공하는 util 함수

export const getDate: any = (beforeDate: string) => {
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

export const countDday = (dDay: any) => {
  const setDate = new Date(dDay);
  // D-day 날짜의 연,월,일 구하기
  // const setDateYear = setDate.getFullYear();
  // getMonth 메서드는 0부터 세기 때문에 +1 해준다.
  // 현재 날짜를 new 연산자를 사용해서 Date 객체를 생성
  const now = new Date();

  // D-Day 날짜에서 현재 날짜의 차이를 getTime 메서드를 사용해서 밀리초의 값으로 가져온다.
  const distance = setDate.getTime() - now.getTime();

  // Math.floor 함수를 이용해서 근접한 정수값을 가져온다.
  // 밀리초 값이기 때문에 1000을 곱한다.
  // 1000*60 => 60초(1분)*60 => 60분(1시간)*24 = 24시간(하루)
  // 나머지 연산자(%)를 이용해서 시/분/초를 구한다.
  const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  return day;
};
