import { ISitemapField, getServerSideSitemap } from 'next-sitemap'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) {
	const url = 'https://www.aski.site'

	const fields: ISitemapField[] = [
		{
			loc: url,
			lastmod: new Date().toISOString(),
			changefreq: 'weekly',
			priority: 1,
		},
		{
			loc: `${url}/services`,
			lastmod: new Date().toISOString(),
			changefreq: 'weekly',
			priority: 0.8,
		},
		{
			loc: `${url}/cases`,
			lastmod: new Date().toISOString(),
			changefreq: 'weekly',
			priority: 0.7,
		},
		{
			loc: `${url}/plans`,
			lastmod: new Date().toISOString(),
			changefreq: 'weekly',
			priority: 0.8,
		},
		{
			loc: `${url}/team`,
			lastmod: new Date().toISOString(),
			changefreq: 'weekly',
			priority: 0.7,
		},
		{
			loc: `${url}/beta-test`,
			lastmod: new Date().toISOString(),
			changefreq: 'weekly',
			priority: 0.6,
		},
	]

	// request -> push -> fields

	return getServerSideSitemap(fields)
}
