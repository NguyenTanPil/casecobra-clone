import testimonials1Image from '@/assets/images/testimonials/1.jpg';
import testimonials2Image from '@/assets/images/testimonials/2.jpg';
import testimonials3Image from '@/assets/images/testimonials/3.jpg';
import testimonials4Image from '@/assets/images/testimonials/4.jpg';
import testimonials5Image from '@/assets/images/testimonials/5.jpg';
import testimonials6Image from '@/assets/images/testimonials/6.jpg';
import snack1Image from '@/assets/images/snake-1.png';
import snack2Image from '@/assets/images/snake-2.png';
import snack3Image from '@/assets/images/snake-3.png';
import { OrderStatus } from '@prisma/client';

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

export const COLORS = [
	{
		label: 'Black',
		value: 'black',
		tw: 'zinc-900',
	},
	{
		label: 'Blue',
		value: 'blue',
		tw: 'blue-950',
	},
	{
		label: 'Rose',
		value: 'rose',
		tw: 'rose-950',
	},
] as const;

export const MODELS = {
	name: 'models',
	options: [
		{
			label: 'iPhoneX',
			value: 'iphonex',
		},
		{
			label: 'iPhone11',
			value: 'iphone11',
		},
		{
			label: 'iPhone12',
			value: 'iphone12',
		},
		{
			label: 'iPhone13',
			value: 'iphone13',
		},
		{
			label: 'iPhone14',
			value: 'iphone14',
		},
		{
			label: 'iPhone15',
			value: 'iphone15',
		},
	],
} as const;

export const PRODUCT_PRICES = {
	material: {
		silicone: 0,
		polycarbonate: 5_00,
	},
	finish: {
		smooth: 0,
		textured: 3_00,
	},
} as const;

export const MATERIALS = {
	name: 'material',
	options: [
		{
			label: 'Silicone',
			value: 'silicone',
			description: undefined,
			price: PRODUCT_PRICES.material.silicone,
		},
		{
			label: 'Soft Polycarbonate',
			value: 'polycarbonate',
			description: 'Scratch-resistant coating',
			price: PRODUCT_PRICES.material.polycarbonate,
		},
	],
} as const;

export const FINISHES = {
	name: 'finish',
	options: [
		{
			label: 'Smooth Finish',
			value: 'smooth',
			description: undefined,
			price: PRODUCT_PRICES.finish.smooth,
		},
		{
			label: 'Textured Finish',
			value: 'textured',
			description: 'Soft grippy texture',
			price: PRODUCT_PRICES.finish.textured,
		},
	],
} as const;

export const BASE_PRICE = 14_00;
export const WEEK_GOAL = 500;
export const MONTH_GOAL = 2500;

export const LABEL_MAP: Record<keyof typeof OrderStatus, string> = {
	awaiting_shipment: 'Awaiting Shipment',
	fulfilled: 'Fulfilled',
	shipped: 'Shipped',
};
