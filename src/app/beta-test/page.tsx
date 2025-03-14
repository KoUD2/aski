import BetaTestPage from '@/components/screens/BetaTestPage/BetaTestPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Aski | Бета-тест',
	description: 'Получите ранний доступ к продукту. Это бесплатно',

	openGraph: {
		title: 'Aski | Бета-тест',
		description: 'Получите ранний доступ к продукту. Это бесплатно',
		url: 'https://www.aski.site',
		type: 'website',
		siteName: 'Aski',
		images: [
			{
				url: '/Beta.png',
				width: 1200,
				height: 630,
				alt: 'Aski',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Aski | Бета-тест',
		description: 'Получите ранний доступ к продукту. Это бесплатно',
		images: [
			{
				url: '/Beta.png',
				width: 1200,
				height: 630,
				alt: 'Aski',
			},
		],
	},
}

export default function BetaTest() {
	return <BetaTestPage />
}
