import TeamPage from '@/components/screens/TeamPage/TeamPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Aski | Компания',
	description: 'Мы — молодая команда, которая смотрит на рынок без стереотипов',

	openGraph: {
		title: 'Aski | Компания',
		description:
			'Мы — молодая команда, которая смотрит на рынок без стереотипов',
		url: 'https://www.aski.site',
		type: 'website',
		siteName: 'Aski',
		images: [
			{
				url: '/Company.png',
				width: 1200,
				height: 630,
				alt: 'Aski',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Aski | Компания',
		description:
			'Мы — молодая команда, которая смотрит на рынок без стереотипов',
		images: [
			{
				url: '/Company.png',
				width: 1200,
				height: 630,
				alt: 'Aski',
			},
		],
	},
}

export default function Plans() {
	return <TeamPage />
}
