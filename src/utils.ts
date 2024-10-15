export const splitArray = <T>(array: T[], numParts: number): T[][] => {
	const result: T[][] = [];
	for (let i = 0; i < array.length; i++) {
		const index = i % numParts;
		if (!result[index]) {
			result[index] = [];
		}
		result[index].push(array[i]);
	}
	return result;
};

export const formatPrice = (price: number) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	return formatter.format(price);
};
