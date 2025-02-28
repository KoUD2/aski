import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { FC, ReactNode } from 'react'
import styles from './CaseCard.module.css'

interface ICaseCard {
	path: string | StaticImport
	name: string
	position: string
	children: ReactNode
}

const CaseCard: FC<ICaseCard> = ({ path, name, position, children }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperTitle}>
				<Image src={path} alt='' className={styles.personImg} />
				<div className={styles.wrapperPersonTexts}>
					<h2 className={styles.personTitle}>{name}</h2>
					<p className={styles.personText}>{position}</p>
				</div>
			</div>
			<div className={styles.wrapperDescription}>
				<div className={styles.wrapperQuoteFirst}>
					<p className={styles.quoteFirst}>„</p>
				</div>
				{children}
				<div className={styles.wrapperQuoteSecond}>
					<p className={styles.quoteFirst}>“</p>
				</div>
			</div>
		</div>
	)
}

export default CaseCard
