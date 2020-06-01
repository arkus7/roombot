export enum DateFormat {
  /**
   * Displayed as 2014-02-18. It will include leading zeros before the month and date and is probably best for more technical integrations that require a developer-friendly date format.
   */
  DateNum = '{date_num}',
  /**
   * Displayed as February 18th, 2014
   */
  Date = '{date}',
  /**
   * Displayed as Feb 18, 2014
   */
  DateShort = '{date_short}',
  /**
   * Displayed as Tuesday, February 18th, 2014.
   */
  DateLong = '{date_long}',
  /**
   * Displays the same as {date} but uses "yesterday", "today", or "tomorrow" where appropriate.
   */
  DatePretty = '{date_pretty}',
  /**
   * Displays the same as {date_short} but uses "yesterday", "today", or "tomorrow" where appropriate.
   */
  DateShortPretty = '{date_short_pretty}',
  /**
   * Displays the same as {date_long} but uses "yesterday", "today", or "tomorrow" where appropriate.
   */
  DateLongPretty = '{date_long_pretty}',
  /**
   * Displayed as 6:39 AM or 6:39 PM in 12-hour format. If the client is set to show 24-hour format, it is displayed as 06:39 or 18:39.
   */
  Time = '{time}',
  /**
   * Displayed as 6:39:45 AM 6:39:42 PM in 12-hour format. In 24-hour format it is displayed as 06:39:45 or 18:39:42.
   */
  TimeSecs = '{time_secs}'
}
