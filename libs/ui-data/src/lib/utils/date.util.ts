export const isMonday = (date: Date) => {
  return date.getDay() === 1;
};

export const getPrevMonday = (date: Date) => {
  if (isMonday(date)) {
    return date;
  }
  // Sunday is represented as 0, but for our algorithm we treat it as 7
  const currentDay = date.getDay() || 7;
  const prevMonday = new Date(date.getTime());
  prevMonday.setDate(date.getDate() - (currentDay - 1));
  return prevMonday;
};

export const getDateYYYYMMDD = (date: Date) => {
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  return `${year}${month}${day}`;
};

export const getDateDDMMM = (date: Date) => {
  const day = ('0' + date.getDate()).slice(-2);
  const month = getMonthName(date);
  return `${day} ${month}`;
};

export const getSelectedDateString = (date: Date) => {
  const weekday = getWeekDayName(date);
  const month = getMonthName(date);
  const time = `${('0' + date.getHours()).slice(-2)}:${(
    '0' + date.getMinutes()
  ).slice(-2)}`;
  return `${weekday}, ${date.getDate()} ${month} ${date.getFullYear()} at ${time}`;
};

export const isToday = (date1: Date, date2: Date) => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

export const isTomorrow = (date: Date) => {
  return (
    date.getDate() === addDays(new Date(), 1).getDate() &&
    date.getMonth() === addDays(new Date(), 1).getMonth() &&
    date.getFullYear() === addDays(new Date(), 1).getFullYear()
  );
};

export const addDays = (date: Date, days: number) => {
  const newDate = new Date(date.getTime());
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

export const getWeekDayName = (date: Date) => {
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return weekdays[date.getDay()];
};

export const getMonthName = (date: Date) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Oct',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return months[date.getMonth()];
};

export const getNextDays = (nDays: number, date: Date) => {
  const days: string[] = [];
  for (let i = 0; i < nDays; i++) {
    const day = addDays(date, i);
    days.push(day.toISOString().split('T')[0]);
  }
  return days;
};
