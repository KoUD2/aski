import Header from '@/components/ui/Header/Header'
import Arrow_Right_LG from '@/shared/images/Arrow_Right_LG.svg'
import Telegram from '@/shared/images/Telegram.png'
import Telemost from '@/shared/images/Telemost.png'
import Zoom from '@/shared/images/Zoom.png'
import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import styles from './HeaderSection.module.css'

interface IHeaderSection {
	isMainPage: boolean
	title: string
	desc: string
	isTarification?: boolean
	className?: string
}

const HeaderSection: FC<IHeaderSection> = ({
	isMainPage,
	title,
	desc,
	isTarification,
	className,
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
									src={Telegram}
									alt='Возможные интеграции'
									className={styles.integrationsImg}
								/>
							</div>
						</div>
					)}

					<div className={styles.texts}>
						<h1 className={styles.title}>{title}</h1>
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
						<button className={styles.button}>
							<p className={styles.buttonText}>Попробовать</p>
							<Image
								src={Arrow_Right_LG}
								alt='Попробовать'
								className={styles.buttonImg}
							/>
						</button>
					)}
				</div>

				{isMainPage && (
					<p className={styles.mainInfo}>
						<span className={styles.spanMainInfo}>
							Aski присоединяется к онлайн-звонку
						</span>
						<br />
						запоминает все идеи · готовит конспект и рассылает интегрирует в CRM
						· отвечает на вопросы
					</p>
				)}
			</div>
		</div>
	)
}

export default HeaderSection
