/**
 * Formats a Date object to a string in the format "Month Day, Year".
 * For example, October 24, 2023.
 *
 * @param {Date} date - The date to format.
 * @returns {string} - The formatted date string.
 *
 * @example
 * const date = new Date('2023-10-24');
 * console.log(formatDate(date)); // Output: "October 24, 2023"
 */
export const formatDate = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
	return date.toLocaleDateString('en-US', options);
};
