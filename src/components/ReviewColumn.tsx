'use client';

import { cn } from '@/lib/utils';
import { StaticImageData } from 'next/image';
import { CSSProperties, useEffect, useRef, useState } from 'react';
import Review from './Review';

interface ReviewColumnProps {
	reviews: StaticImageData[];
	className?: string;
	reviewClassName?: (reviewIndex: number) => string;
	msPerPixel?: number;
}

const ReviewColumn = ({ reviews, className, reviewClassName, msPerPixel = 0 }: ReviewColumnProps) => {
	const columnRef = useRef<HTMLDivElement | null>(null);
	const [columnHeight, setColumnHeight] = useState(0);
	const duration = `${columnHeight * msPerPixel}ms`;

	useEffect(() => {
		if (!columnRef.current) return;

		const resizeObserver = new window.ResizeObserver(() => {
			setColumnHeight(columnRef.current?.offsetHeight ?? 0);
		});

		resizeObserver.observe(columnRef.current);

		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	return (
		<div
			ref={columnRef}
			className={cn('animate-marquee space-y-8 py-4', className)}
			style={{ '--marquee-duration': duration } as CSSProperties}
		>
			{reviews.concat(reviews).map((srcImage: StaticImageData, reviewIndex: number) => (
				<Review
					key={reviewIndex}
					imgSrc={srcImage}
					className={reviewClassName?.(reviewIndex % reviews.length)}
				/>
			))}
		</div>
	);
};

export default ReviewColumn;
