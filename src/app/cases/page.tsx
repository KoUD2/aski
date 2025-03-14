import CasesPage from '@/components/screens/CasesPage/CasesPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Aski | Кейсы',
	description: 'Aski для разных задач',

	openGraph: {
		title: 'Aski | Кейсы',
		description: 'Aski для разных задач',
		url: 'https://www.aski.site',
		type: 'website',
		siteName: 'Aski',
		images: [
			{
				url: '/Cases.png',
				width: 1200,
				height: 630,
				alt: 'Aski',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Aski | Кейсы',
		description: 'Aski для разных задач',
		images: [
			{
				url: '/Cases.png',
				width: 1200,
				height: 630,
				alt: 'Aski',
			},
		],
	},
}

export default function Cases() {
	return <CasesPage />
}
