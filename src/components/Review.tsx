import { POSSIBLE_ANIMATION_DELAY } from '@/constants';
import { cn } from '@/lib/utils';
import { StaticImageData } from 'next/image';
import { HTMLAttributes } from 'react';
import Phone from './Phone';

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
	imgSrc: StaticImageData;
}

const Review = ({ imgSrc, className, ...props }: ReviewProps) => {
	const animationDelay = POSSIBLE_ANIMATION_DELAY[Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAY.length)];

	return (
		<div
			className={cn('animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5', className)}
			style={{ animationDelay }}
			{...props}
		>
			<Phone imgSrc={imgSrc} />
		</div>
	);
};

export default Review;
