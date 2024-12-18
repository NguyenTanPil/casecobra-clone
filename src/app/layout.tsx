import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';
import { Toaster } from '@/components/ui/toaster';
import { constructMetadata } from '@/utils';
import { Recursive } from 'next/font/google';
import './globals.css';

const inter = Recursive({ subsets: ['latin'] });

export const metadata = constructMetadata();

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} antialiased`}>
				<Navbar />
				<main className='grainy-light flex flex-col min-h-[calc(100vh-3.5rem-1px)]'>
					<div className='flex-1 flex flex-col h-full'>
						<Providers>{children}</Providers>
					</div>
					<Footer />
				</main>
				<Toaster />
			</body>
		</html>
	);
}
