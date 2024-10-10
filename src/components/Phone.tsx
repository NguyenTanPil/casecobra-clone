import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import React, { HTMLAttributes } from 'react';
import phoneDarkImage from '@/assets/images/phone-template-dark-edges.png';
import phoneWhiteImage from '@/assets/images/phone-template-white-edges.png';

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
	imgSrc: StaticImageData;
	dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
	return (
		<div
			className={cn('relative pointer-events-none z-50 overflow-hidden', className)}
			{...props}
		>
			<Image
				src={dark ? phoneDarkImage : phoneWhiteImage}
				className='pointer-events-none z-50 select-none'
				alt='phone image'
			/>
			<div className='absolute -z-10 inset-0'>
				<Image
					src={imgSrc}
					alt='overlay phone image'
					className='object-cover'
				/>
			</div>
		</div>
	);
};

export default Phone;
