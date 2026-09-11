/** Resolve a class/testimonial image: a number is a placedog.net stock photo id, a string is a URL/path. */
export const dogImg = (img: number | string, w = 800, h = 560) =>
	typeof img === 'number' ? `https://placedog.net/${w}/${h}?id=${img}` : img;

export const levelLabel: Record<string, string> = {
	puppy: 'Puppy',
	adolescent: 'Teenager',
	adult: 'Adult',
	behaviour: '1-2-1',
};

/** Where a class's Book button should go: its online booking link if set, else the enquiry form. */
export const bookLink = (id: string, bookingUrl: string | undefined, base: string) =>
	bookingUrl?.trim() ? bookingUrl.trim() : `${base}book/?class=${id}`;
