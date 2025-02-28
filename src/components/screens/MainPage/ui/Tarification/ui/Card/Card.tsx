import { FC, ReactNode } from 'react'
import styles from './Card.module.css'

interface ICard {
	name: string
	price: string
	desc: string
	buttonText: string
	children: ReactNode
	isCentred: boolean
	period?: '/месяц' | '/год' | null
}

const Card: FC<ICard> = ({
	name,
	price,
	buttonText,
	desc,
	children,
	isCentred,
	period,
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperHeader}>
				<h2 className={styles.headerName}>{name}</h2>
				<div className={styles.wrapperPrice}>
					<h2 className={styles.headerPrice}>{price}</h2>
					{period && <p className={styles.periodText}>{period}</p>}
				</div>
				<p className={styles.headerDesc}>{desc}</p>
				<button className={styles.headerButton}>{buttonText}</button>
			</div>
			<div>{children}</div>
			{isCentred && <div className={styles.circle}></div>}
		</div>
	)
}

export default Card
