'use client'

import Close_MD from '@/shared/images/Close_MD.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './BurgerMenu.module.css'

const BurgerMenu: FC<{ onClick: any }> = ({ onClick }) => {
	return (
		<div className={styles.wrapper}>
			<ul className={styles.allLinks}>
				<Link href='/services'>
					<li className={styles.link}>О сервисах</li>
				</Link>
				<Link href='/cases'>
					<li className={styles.link}>Кейсы</li>
				</Link>
				<Link href='/plans'>
					<li className={styles.link}>Тарифы</li>
				</Link>
				<Link href='/team'>
					<li className={styles.link}>Компания</li>
				</Link>
			</ul>
			<button onClick={onClick} className={styles.closeButton}>
				<Image
					src={Close_MD}
					alt='Закрыть меню'
					className={styles.closeButtonImage}
				/>
			</button>
		</div>
	)
}

export default BurgerMenu
