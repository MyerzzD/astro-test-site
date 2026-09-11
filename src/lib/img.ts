/** Resolve a class/testimonial image: a number is a placedog.net stock photo id, a string is a URL/path. */
export const dogImg = (img: number | string, w = 800, h = 560) =>
	typeof img === 'number' ? `https://placedog.net/${w}/${h}?id=${img}` : img;

export const levelLabel: Record<string, string> = {
	puppy: 'Puppy',
	adolescent: 'Teenager',
	adult: 'Adult',
	behaviour: '1-2-1',
};
