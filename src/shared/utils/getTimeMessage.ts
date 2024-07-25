
export const getCurrentTime = (data: string): string => {
    const timezone = 'Europe/Moscow'; // Задайте нужную временную зону
    const utcDate = new Date(data); // Текущее время для тестирования
    const options: Intl.DateTimeFormatOptions = {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
    };
    const formattedTime = new Intl.DateTimeFormat('ru-RU', options).format(
      utcDate,
    );

    return formattedTime;
  };

