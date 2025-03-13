'use client'

import useWindowWidth from '@/hooks/useWindowWidth'
import ShortTextsImage from '@/shared/images/ShortTextsImage.svg'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Review.module.css'

const Review: FC = () => {
	const windowWidth = useWindowWidth()

	return (
		<div className={styles.wrapperCard4Card5Card6}>
			<div className={styles.wrapperDesc}>
				<h1 className={styles.mainTitle}>Конспекты встреч</h1>
				<p className={styles.mainDesc}>
					Используйте один из 12 готовых шаблонов конспекта, и Aski
					автоматически заполнит его на основе записи встречи
				</p>
			</div>
			{windowWidth > 480 && (
				<Image
					src={ShortTextsImage}
					alt=''
					className={styles.shortTextsImage}
				></Image>
			)}
		</div>
	)
}

export default Review
