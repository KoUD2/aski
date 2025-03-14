'use client'

import Hamburger from '@/shared/images/Hamburger.svg'
import Logo from '@/shared/images/Logo.svg'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import styles from './Header.module.css'

const Header: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const router = useRouter()

	const location = usePathname()

	const scrollToContact = () => {
		const section = document.getElementById('contact')
		if (section) {
			const offset = window.innerHeight / 3
			window.scrollTo({
				top: section.offsetTop - offset,
				behavior: 'smooth',
			})
		}
	}

	const handleScrollToContact = (e: React.MouseEvent) => {
		e.preventDefault()

		if (window.location.pathname !== '/') {
			router.push('/#contact')
			setTimeout(scrollToContact, 500)
		} else {
			scrollToContact()
		}
	}

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<header
			className={styles.header}
			itemScope
			itemType='https://schema.org/Organization'
		>
			<Link href='/' itemProp='url'>
				<Image
					src={Logo}
					alt='Логотип'
					className={styles.logo}
					itemProp='logo'
					priority
				/>
			</Link>

			<nav
				className={styles.linksWrapper}
				itemScope
				itemType='https://schema.org/SiteNavigationElement'
			>
				<Link
					href='/services'
					className={cn(styles.link, {
						[styles.activeLink]: location === '/services',
					})}
					itemProp='url'
				>
					<span itemProp='name'>Сервисы</span>
				</Link>
				<Link
					href='/cases'
					className={cn(styles.link, {
						[styles.activeLink]: location === '/cases',
					})}
					itemProp='url'
				>
					<span itemProp='name'>Кейсы</span>
				</Link>
				<Link
					href='/plans'
					className={cn(styles.link, {
						[styles.activeLink]: location === '/plans',
					})}
					itemProp='url'
				>
					<span itemProp='name'>Тарифы</span>
				</Link>
				<Link
					href='/team'
					className={cn(styles.link, {
						[styles.activeLink]: location === '/team',
					})}
					itemProp='url'
				>
					<span itemProp='name'>Компания</span>
				</Link>
			</nav>
			<button className={styles.button} onClick={handleScrollToContact}>
				Связаться
			</button>

			<button className={styles.wrapperButton} onClick={toggleMenu}>
				<Image
					src={Hamburger}
					alt='Меню'
					className={styles.buttonBurgerMenuImage}
				></Image>
			</button>

			{isMenuOpen && <BurgerMenu onClick={toggleMenu} />}
		</header>
	)
}

export default Header
