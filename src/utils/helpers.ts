/**
 * Helper function to convert a date string to a time ago string
 * @param dateString - The js date string to convert
 * @returns The time ago string ex. "2 days ago"
 */
export function timeAgo(dateString: string): string {
  const givenDate = new Date(dateString);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - givenDate.getTime();

  const millisecondsInADay = 24 * 60 * 60 * 1000;
  const millisecondsInAMonth = 30 * millisecondsInADay;

  const daysDifference = Math.floor(timeDifference / millisecondsInADay);
  const monthsDifference = Math.floor(timeDifference / millisecondsInAMonth);

  if (daysDifference < 30) {
    if (daysDifference === 0) return "Today";
    if (daysDifference === 1) return "Yesterday";
    return `${daysDifference} days ago`;
  } else {
    return `${monthsDifference} months ago`;
  }
}

/**
 * Turns a UTC date to a localized readable format
 * @param utcDate - utc date string
 * @returns The date in readable format ex "May 7, 2024"
 */

export function UTCtoDate(utcDate: string): string {
  const givenDate = new Date(utcDate);
  const formattedDate = givenDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
}
