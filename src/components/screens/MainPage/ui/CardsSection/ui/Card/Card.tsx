'use client'

import useWindowWidth from '@/hooks/useWindowWidth'
import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Card.module.css'

interface ICard {
	path: string
	pathActive: string
	title: string
	desc: string
	isActive: boolean
	onClick: () => void
}

const Card: FC<ICard> = ({
	path,
	pathActive,
	title,
	desc,
	isActive,
	onClick,
}) => {
	const windowWidth = useWindowWidth()

	return (
		<button
			className={cn(styles.cardWrapper, { [styles.activeWrapper]: isActive })}
			onClick={onClick}
		>
			{isActive ? (
				<Image
					src={pathActive}
					alt='Уникальное торговое предложение'
					className={styles.cardImg}
				/>
			) : (
				<Image
					src={path}
					alt='Уникальное торговое предложение'
					className={styles.cardImg}
				/>
			)}

			{windowWidth <= 480 && !isActive ? (
				<></>
			) : (
				<>
					<h3
						className={cn(styles.cardTitle, { [styles.activeCard]: isActive })}
					>
						{title}
					</h3>
					<p className={cn(styles.cardDesc, { [styles.activeCard]: isActive })}>
						{desc}
					</p>
				</>
			)}
		</button>
	)
}

export default Card
