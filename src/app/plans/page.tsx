import PlansPage from '@/components/screens/PlansPage/PlansPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Aski | Тарифы',
	description: 'Выберите план, который подойдет вашей команде',

	openGraph: {
		title: 'Aski | Тарифы',
		description: 'Выберите план, который подойдет вашей команде',
		url: 'https://www.aski.site',
		type: 'website',
		siteName: 'Aski',
		images: [
			{
				url: '/Tarification.png',
				width: 1200,
				height: 630,
				alt: 'Aski',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Aski | Тарифы',
		description: 'Выберите план, который подойдет вашей команде',
		images: [
			{
				url: '/Tarification.png',
				width: 1200,
				height: 630,
				alt: 'Aski',
			},
		],
	},
}

export default function Plans() {
	return <PlansPage />
}
