'use client'

import useWindowWidth from '@/hooks/useWindowWidth'
import cn from 'classnames'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { FC, ReactNode } from 'react'
import styles from './Feedback.module.css'

interface IFeedback {
	path: string | StaticImport
	person: string
	post: string
	children: ReactNode
	className?: string
}

const Feedback: FC<IFeedback> = ({
	path,
	person,
	post,
	children,
	className,
}) => {
	const windowWidth = useWindowWidth()

	return (
		<div className={cn(styles.wrapper, className)}>
			<div className={styles.person}>
				<Image src={path} alt='' className={styles.personImg} />
				<div className={styles.wrapperInfo}>
					<h2 className={styles.infoHeader}>{person}</h2>
					<p className={styles.infoText}>{post}</p>
				</div>
			</div>
			<div className={styles.wrapperText}>
				{windowWidth > 480 && (
					<div className={styles.quotes}>
						<p className={styles.quote}>„</p>
					</div>
				)}
				<p className={styles.quoteText}>{children}</p>
				{windowWidth > 480 && (
					<div className={styles.quotesSecond}>
						<p className={styles.quoteSecond}>“</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default Feedback
