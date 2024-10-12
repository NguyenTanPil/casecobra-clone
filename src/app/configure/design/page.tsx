import { notFound } from 'next/navigation';

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

	return <div>{id}</div>;
};

export default Design;
