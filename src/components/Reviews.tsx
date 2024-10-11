'use client';

import whatPeopleImage from '@/assets/images/what-people-are-buying.png';
import Image from 'next/image';
import MaxWidthWrapper from './MaxWidthWrapper';
import ReviewGrid from './ReviewGrid';

const Reviews = () => {
	return (
		<MaxWidthWrapper>
			<Image
				src={whatPeopleImage}
				alt='what people image'
				className='absolute select-none hidden xl:block -left-32 top-1/3'
			/>

			<ReviewGrid />
		</MaxWidthWrapper>
	);
};

export default Reviews;
