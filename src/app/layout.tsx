import Footer from '@/components/ui/Footer/Footer'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../assets/styles/globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Aski',
	description: 'Aski зафиксирует все важные детали созвона в единой системе',
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
	formatDetection: {
		telephone: false,
	},

	openGraph: {
		title: 'Aski',
		description: 'Aski зафиксирует все важные детали созвона в единой системе',
		url: 'https://www.aski.site',
		type: 'website',
		siteName: 'Aski',
		images: [
			{
				url: '/Main.png',
				width: 1200,
				height: 630,
				alt: 'Aski',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Aski',
		description: 'Aski зафиксирует все важные детали созвона в единой системе',
		images: [
			{
				url: '/Main.png',
				width: 1200,
				height: 630,
				alt: 'Aski',
			},
		],
	},

	metadataBase: new URL('https://www.aski.site'),
	verification: {
		google: 'oOSepLbNQnHESUoF2Pv5O63eJQxlDJe_XOjkOatBb9g',
		yandex: '3fb36e2ff994b1fd',
	},
}

export const viewport: Viewport = {
	themeColor: '#0c0c0c',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' style={{ overflowX: 'hidden' }}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} mainWrapper`}
			>
				{children}
				<Footer />
			</body>
		</html>
	)
}
