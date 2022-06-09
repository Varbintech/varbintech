import { DateTime } from 'luxon';

const ZONE = 'utc';

export const dateToFormat = (date, format) => {
  return DateTime.fromJSDate(date, { zone: ZONE }).toFormat(
    String(format),
  );
};

export const dateToISO = (date) => {
  return DateTime.fromJSDate(date, { zone: ZONE }).toISO({
    includeOffset: false,
    suppressMilliseconds: true,
  });
};
