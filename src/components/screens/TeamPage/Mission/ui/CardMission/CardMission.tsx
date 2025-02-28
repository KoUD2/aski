import cn from 'classnames'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { FC } from 'react'
import styles from './CardMission.module.css'

interface ICardMission {
	path: string | StaticImport
	text: string
	className?: string
}

const CardMission: FC<ICardMission> = ({ path, text, className }) => {
	return (
		<div className={styles.wrapper}>
			<Image src={path} alt='' className={cn(styles.img, className)} />
			<p className={styles.text}>{text}</p>
		</div>
	)
}

export default CardMission
