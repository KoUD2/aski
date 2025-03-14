import MainPage from '@/components/screens/MainPage/MainPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
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
}

export default function Home() {
	return <MainPage />
}
