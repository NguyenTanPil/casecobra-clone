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

export const base64ToBlob = (base64: string, mimeType: string) => {
	const byteCharacters = atob(base64);
	const byteNumbers = new Array(byteCharacters.length);
	for (let i = 0; i < byteCharacters.length; i++) {
		byteNumbers[i] = byteCharacters.charCodeAt(i);
	}

	const byteArray = new Uint8Array(byteNumbers);
	return new Blob([byteArray], { type: mimeType });
};

export const constructMetadata = ({
	title = 'CaseCobra - custom high-quality phone cases',
	description = 'Create custom high-quality phone cases in seconds',
	image = '/thumbnail.png',
	icons = '/favicon.ico',
}: {
	title?: string;
	description?: string;
	image?: string;
	icons?: string;
} = {}) => {
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			images: [{ url: image }],
		},
		icons,
		metadataBase: new URL('https://casecobra-clone.vercel.app/'),
	};
};
