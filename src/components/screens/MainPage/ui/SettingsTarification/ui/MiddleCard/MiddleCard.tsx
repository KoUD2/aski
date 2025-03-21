import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import ButtonToggle from '../ButtonToggle/ButtonToggle'
import styles from './MiddleCard.module.css'

interface IMiddleCard {
	path: string
	text: string
	isActive: boolean
	onToggleChange: () => void
	className?: string
}

const MiddleCard: FC<IMiddleCard> = ({
	path,
	text,
	isActive,
	onToggleChange,
	className,
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperTexts}>
				<Image
					src={path}
					alt='Настройка тарифа'
					className={cn(styles.img, className)}
				/>
				<p className={styles.text}>{text}</p>
			</div>
			<ButtonToggle
				isActive={isActive}
				onToggle={onToggleChange}
				disabled={false}
			/>
		</div>
	)
}

export default MiddleCard
