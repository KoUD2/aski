import { useEffect, useState } from 'react'

const useIsMobile = (breakpoint = 480) => {
	const [isMobile, setIsMobile] = useState<boolean>(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`)
		const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)

		setIsMobile(mediaQuery.matches)

		mediaQuery.addEventListener('change', handleChange)

		return () => {
			mediaQuery.removeEventListener('change', handleChange)
		}
	}, [breakpoint])

	return isMobile
}

export default useIsMobile
