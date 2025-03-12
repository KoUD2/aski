import Header from '@/components/ui/Header/Header'
import Meet from '@/shared/images/meet.png'
import Telemost from '@/shared/images/Telemost.png'
import Zoom from '@/shared/images/Zoom.png'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './HeaderSection.module.css'

interface IHeaderSection {
	isMainPage: boolean
	title: string
	desc: string
	isTarification?: boolean
	className?: string
	classNameTitle?: string
}

const HeaderSection: FC<IHeaderSection> = ({
	isMainPage,
	title,
	desc,
	isTarification,
	className,
	classNameTitle,
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div
					className={cn(styles.content, {
						[styles.tarification]: isTarification,
					})}
				>
					<Header />
					{isMainPage && (
						<div className={styles.integrationsWrapper}>
							<div className={styles.integrations}>
								<p className={styles.integrationsText}>Используйте с</p>
								<Image
									src={Zoom}
									alt='Возможные интеграции'
									className={styles.integrationsImg}
								/>
								<Image
									src={Telemost}
									alt='Возможные интеграции'
									className={styles.integrationsImg}
								/>
								<Image
									src={Meet}
									alt='Возможные интеграции'
									className={styles.integrationsImg}
								/>
							</div>
						</div>
					)}

					<div className={styles.texts}>
						<h1 className={cn(styles.title, classNameTitle)}>{title}</h1>
						<p
							className={cn(
								styles.description,
								{
									[styles.descriptionTarification]: isTarification,
								},
								className
							)}
						>
							{desc}
						</p>
					</div>
					{isMainPage && (
						<Link href='/beta-test'>
							<button className={styles.button}>
								<p className={styles.buttonText}>Участвовать в бета-тесте</p>
							</button>
						</Link>
					)}
				</div>

				{isMainPage && (
					<p className={styles.mainInfo}>
						<span className={styles.spanMainInfo}>
							Aski присоединяется к онлайн-звонку
						</span>
						<br />
						запоминает все идеи · готовит конспект и рассылает отвечает на
						вопросы
					</p>
				)}
			</div>
		</div>
	)
}

export default HeaderSection
