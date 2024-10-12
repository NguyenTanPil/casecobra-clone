import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Steps from '@/components/Steps';
import { ReactNode } from 'react';

type ConfigureLayoutProps = {
	children: ReactNode;
};

const ConfigureLayout = ({ children }: ConfigureLayoutProps) => {
	return (
		<MaxWidthWrapper className='flex-1 flex flex-col'>
			<Steps />
			{children}
		</MaxWidthWrapper>
	);
};

export default ConfigureLayout;
