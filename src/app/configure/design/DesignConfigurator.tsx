'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import React, { useState } from 'react';
import phoneImage from '@/assets/images/phone-template.png';
import { cn } from '@/lib/utils';
import { Rnd } from 'react-rnd';
import HandleResizeComponent from '@/components/HandleResizeComponent';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RadioGroup } from '@headlessui/react';
import { COLORS, MODELS } from '@/constants';
import { Label } from '@/components/ui/label';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Check, ChevronsUpDown } from 'lucide-react';

interface DesignConfiguratorProps {
	imageUrl: string;
	configId: string;
	imageDimensions: {
		width: number;
		height: number;
	};
}

const DesignConfigurator = ({ configId, imageUrl, imageDimensions }: DesignConfiguratorProps) => {
	const [options, setOptions] = useState<{
		color: (typeof COLORS)[number];
		model: (typeof MODELS.options)[number];
	}>({
		color: COLORS[0],
		model: MODELS.options[0],
	});

	return (
		<div className='relative mt-20 grid grid-cols-1 lg:grid-cols-3 mb-20 pb-20'>
			<div className='relative h-[37.5rem] overflow-hidden col-span-2 w-full max-w-4xl flex items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'>
				<div className='relative w-60 bg-opacity-50 pointer-events-none aspect-[896/1831]'>
					<AspectRatio
						ratio={896 / 1831}
						className='pointer-events-none relative z-50 aspect-[896 / 1831]'
					>
						<Image
							alt='phone image'
							src={phoneImage}
						/>
					</AspectRatio>
					<div className='absolute z-40 inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]' />
					<div
						className={cn(
							'absolute inset-0 left-[3px] top-px right-[3px] bottom-px rounded-[32px]',
							`bg-${options.color.tw}`,
						)}
					/>
				</div>
				<Rnd
					className='absolute z-20 border-[3px] border-primary'
					default={{
						x: 150,
						y: 205,
						height: imageDimensions.height / 4,
						width: imageDimensions.width / 4,
					}}
					lockAspectRatio={true}
					resizeHandleComponent={{
						bottomRight: <HandleResizeComponent />,
						bottomLeft: <HandleResizeComponent />,
						topRight: <HandleResizeComponent />,
						topLeft: <HandleResizeComponent />,
					}}
				>
					<div className='relative w-full h-full'>
						<Image
							fill={true}
							src={imageUrl}
							alt='your image'
							className='pointer-events-none'
						/>
					</div>
				</Rnd>
			</div>

			<div className='h-[37.5rem] flex flex-col bg-white'>
				<ScrollArea className='relative flex-1 overflow-auto'>
					<div
						aria-hidden='true'
						className='absolute z-10 inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white pointer-events-none'
					/>
					<div className='px-8 pb-12 pt-8'>
						<h2 className='tracking-tight font-bold text-3xl'>Customize your case</h2>
						<div className='w-full h-px bg-zinc-200 my-6' />
						<div className='relative mt-4 h-full flex flex-col justify-between'>
							<div className='flex flex-col gap-6'>
								<RadioGroup
									value={options.color}
									onChange={(value) => {
										setOptions((prev) => ({
											...prev,
											color: value,
										}));
									}}
								>
									<Label>Color: {options.color.label}</Label>
									<div className='mt-3 flex items-center space-x-3'>
										{COLORS.map((color) => {
											const borderColor = `border-${color.tw}`;
											const bgColor = `bg-${color.tw}`;

											return (
												<RadioGroup.Option
													key={color.label}
													value={color}
													className={({ active, checked }) =>
														cn(
															'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 active:ring-0 focus:ring-0 active:outline-none focus:outline-noe border-2 border-transparent',
															{
																[borderColor]: active || checked,
															},
														)
													}
												>
													<span className={cn(bgColor, 'h-8 w-8 rounded-full border border-black border-opacity-10')} />
												</RadioGroup.Option>
											);
										})}
									</div>
								</RadioGroup>

								<div className='relative flex flex-col gap-3 w-full'>
									<Label>Model</Label>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button
												variant='outline'
												role='combobox'
												className='w-full justify-between'
											>
												{options.model.label}
												<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
												<DropdownMenuContent
													align='start'
													className='popover-content-width-full'
												>
													{MODELS.options.map((model) => (
														<DropdownMenuItem
															key={model.label}
															className={cn(
																'flex text-sm gap-1 items-center p-1.5 cursor-default hover:bg-zinc-100 w-full',
																{
																	'bg-zinc-100': model.label === options.model.label,
																},
															)}
															onClick={() => setOptions((prev) => ({ ...prev, model }))}
														>
															<Check
																className={cn(
																	'mr-2 h-4 w-4',
																	model.label === options.model.label ? 'opacity-100' : 'opacity-0',
																)}
															/>
															{model.label}
														</DropdownMenuItem>
													))}
												</DropdownMenuContent>
											</Button>
										</DropdownMenuTrigger>
									</DropdownMenu>
								</div>
							</div>
						</div>
					</div>
				</ScrollArea>
			</div>
		</div>
	);
};

export default DesignConfigurator;