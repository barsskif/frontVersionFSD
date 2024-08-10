const TIMEZONE = 'Europe/Moscow';
const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  timeZone: TIMEZONE,
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
};

export const getCurrentTime = (data: string): string => {
  const utcDate = new Date(data);
  return new Intl.DateTimeFormat('ru-RU', DATE_FORMAT_OPTIONS).format(utcDate);
};