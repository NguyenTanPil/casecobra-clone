import testimonials1Image from '@/assets/images/testimonials/1.jpg';
import testimonials2Image from '@/assets/images/testimonials/2.jpg';
import testimonials3Image from '@/assets/images/testimonials/3.jpg';
import testimonials4Image from '@/assets/images/testimonials/4.jpg';
import testimonials5Image from '@/assets/images/testimonials/5.jpg';
import testimonials6Image from '@/assets/images/testimonials/6.jpg';
import snack1Image from '@/assets/images/snake-1.png';
import snack2Image from '@/assets/images/snake-2.png';
import snack3Image from '@/assets/images/snake-3.png';

export const PHONE = [
	testimonials1Image,
	testimonials2Image,
	testimonials3Image,
	testimonials4Image,
	testimonials5Image,
	testimonials6Image,
];

export const POSSIBLE_ANIMATION_DELAY = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s'];

export const STEPS = [
	{
		name: 'Step 1: Add image',
		description: 'Choose an image for your case',
		url: '/upload',
		imgSrc: snack1Image,
	},
	{
		name: 'Step 2: Custom design',
		description: 'Make the case yours',
		url: '/design',
		imgSrc: snack2Image,
	},
	{
		name: 'Step 2: Summary',
		description: 'Review your final design',
		url: '/preview',
		imgSrc: snack3Image,
	},
];
