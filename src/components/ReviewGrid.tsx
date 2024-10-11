import { PHONE } from '@/constants';
import { cn } from '@/lib/utils';
import { splitArray } from '@/utils';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ReviewColumn from './ReviewColumn';

const ReviewGrid = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(containerRef, { once: true, amount: 0.4 });
	const columns = splitArray(PHONE, 3);
	const col1 = columns[0];
	const col2 = columns[1];
	const col3 = splitArray(columns[2], 2);

	return (
		<div
			ref={containerRef}
			className='relative -mx-4 mt-16 grid h-[49rem] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3'
		>
			{isInView ? (
				<>
					<ReviewColumn
						reviews={[...col1, ...col3.flat(), ...col2]}
						reviewClassName={(reviewIndex) =>
							cn({
								'md:hidden': reviewIndex >= col1.length + col3.length,
								'lg:hidden': reviewIndex >= col1.length,
							})
						}
						msPerPixel={10}
					/>
					<ReviewColumn
						reviews={[...col1, ...col3[1]]}
						className='hidden md:block'
						reviewClassName={(reviewIndex) => (reviewIndex >= col2.length ? 'lg:hidden' : '')}
						msPerPixel={15}
					/>
					<ReviewColumn
						reviews={col3.flat()}
						className='hidden md:block'
						msPerPixel={10}
					/>
				</>
			) : null}

			<div className='pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100' />
			<div className='pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100' />
		</div>
	);
};

export default ReviewGrid;
