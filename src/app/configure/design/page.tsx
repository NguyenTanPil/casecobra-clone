import { db } from '@/db';
import { notFound } from 'next/navigation';
import DesignConfigurator from './DesignConfigurator';

interface DesignProps {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
}

const Design = async ({ searchParams }: DesignProps) => {
	const { id } = searchParams;

	if (!id || typeof id !== 'string') {
		return notFound();
	}

	const configuration = await db.configuration.findUnique({
		where: {
			id,
		},
	});

	if (!configuration) {
		return notFound();
	}

	const { imageUrl, width, height } = configuration;

	return (
		<DesignConfigurator
			configId={configuration.id}
			imageUrl={imageUrl}
			imageDimensions={{ width, height }}
		/>
	);
};

export default Design;
