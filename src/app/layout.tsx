import Footer from '@/components/ui/Footer/Footer'
import type { Metadata, Viewport } from 'next'
import { Inter_Tight } from 'next/font/google'
import '../assets/styles/globals.css'

const interTight = Inter_Tight({
	subsets: ['cyrillic'],
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
			<body className={`${interTight} mainWrapper`}>
				{children}
				<Footer />
			</body>
		</html>
	)
}
