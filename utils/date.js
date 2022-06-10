const { DateTime } = require('luxon');

const ZONE = 'utc';

module.exports = {
  dateToFormat: (date, format) => {
    return DateTime.fromJSDate(date, { zone: ZONE }).toFormat(
      String(format),
    );
  },

  dateToISO: (date) => {
    return DateTime.fromJSDate(date, { zone: ZONE }).toISO({
      includeOffset: false,
      suppressMilliseconds: true,
    });
  },
};
