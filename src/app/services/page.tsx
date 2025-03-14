import ServicesPage from '@/components/screens/ServicesPage/ServicesPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Aski | Сервисы',
	description:
		'Узнайте, что мы предлагаем, чтобы сделать командную работу продуктивнее',

	openGraph: {
		title: 'Aski | Сервисы',
		description:
			'Узнайте, что мы предлагаем, чтобы сделать командную работу продуктивнее',
		url: 'https://www.aski.site',
		type: 'website',
		siteName: 'Aski',
		images: [
			{
				url: '/Services.png',
				width: 1200,
				height: 630,
				alt: 'Aski',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Aski | Сервисы',
		description:
			'Узнайте, что мы предлагаем, чтобы сделать командную работу продуктивнее',
		images: [
			{
				url: '/Services.png',
				width: 1200,
				height: 630,
				alt: 'Aski',
			},
		],
	},
}

export default function Services() {
	return <ServicesPage />
}
