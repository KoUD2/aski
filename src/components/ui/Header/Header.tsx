'use client'

import Logo from '@/shared/images/Logo.svg'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FC } from 'react'
import styles from './Header.module.css'

const Header: FC = () => {
	const router = useRouter()

	const location = usePathname()

	const handleScrollToContact = (e: React.MouseEvent) => {
		e.preventDefault()

		if (window.location.pathname !== '/') {
			router.push('/#contact')
			setTimeout(() => {
				const section = document.getElementById('contact')
				if (section) {
					const offset = window.innerHeight / 3
					window.scrollTo({
						top: section.offsetTop - offset,
						behavior: 'smooth',
					})
				}
			}, 500)
		} else {
			const section = document.getElementById('contact')
			if (section) {
				const offset = window.innerHeight / 3
				window.scrollTo({
					top: section.offsetTop - offset,
					behavior: 'smooth',
				})
			}
		}
	}

	return (
		<div className={styles.header}>
			<Link href='/'>
				<Image src={Logo} alt='Логотип' className={styles.logo} />
			</Link>
			<div className={styles.linksWrapper}>
				<Link
					href='/services'
					className={cn(styles.link, {
						[styles.activeLink]: location === '/services',
					})}
				>
					Сервисы
				</Link>
				<Link
					href='/cases'
					className={cn(styles.link, {
						[styles.activeLink]: location === '/cases',
					})}
				>
					Кейсы
				</Link>
				<Link
					href='/plans'
					className={cn(styles.link, {
						[styles.activeLink]: location === '/plans',
					})}
				>
					Тарифы
				</Link>
				<Link
					href='/team'
					className={cn(styles.link, {
						[styles.activeLink]: location === '/team',
					})}
				>
					Компания
				</Link>
			</div>
			<button className={styles.button} onClick={handleScrollToContact}>
				Связаться
			</button>
		</div>
	)
}

export default Header
