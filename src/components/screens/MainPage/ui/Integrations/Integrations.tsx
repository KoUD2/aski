import ArrowRight from '@/shared/images/Arrow_Right.svg'
import BackgroundBlur from '@/shared/images/BackgroundBlur.png'
import amoBlock from '@/shared/images/amoBlock.png'
import notionBlock from '@/shared/images/notionBlock.png'
import trackerBlock from '@/shared/images/trackerBlock.png'
import yoBlock from '@/shared/images/yoBlock.png'
import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Integrations.module.css'

const Integrations: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Image src={BackgroundBlur} alt='' className={styles.imgBlur} />
			<div className={styles.wrapperImages}>
				<Image
					src={notionBlock}
					alt=''
					draggable={false}
					className={styles.imageBlock}
				/>
				<Image
					src={yoBlock}
					alt=''
					draggable={false}
					className={cn(styles.imageBlock, styles.rightFirst)}
				/>
				<Image
					src={trackerBlock}
					alt=''
					draggable={false}
					className={cn(styles.imageBlock, styles.rightSecond)}
				/>
				<Image
					src={amoBlock}
					alt=''
					draggable={false}
					className={cn(styles.imageBlock, styles.rightThird)}
				/>
			</div>
			<div className={styles.wrapperIntegration}>
				<p className={styles.integrationText}>
					Повышайте эффективность продаж и ускоряйте процессы с привычными
					инструментами <br />
					<span className={styles.integrationTextGrey}>
						Легкая интеграция поможет автоматически перенести расшифровки из
						Aski
					</span>
				</p>
				<button className={styles.integrationButton}>
					<p className={styles.integrationButtonText}>Попробовать</p>
					<Image
						src={ArrowRight}
						alt='Попробовать'
						className={styles.integrationButtonImg}
					/>
				</button>
			</div>
		</div>
	)
}

export default Integrations
