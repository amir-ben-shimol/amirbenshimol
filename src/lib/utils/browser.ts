export const isFirefox = () => {
	return typeof navigator !== 'undefined' && /firefox/i.test(navigator.userAgent);
};
