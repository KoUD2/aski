import BackgroundBlur from '@/shared/images/BackgroundBlur.png'
import meetBlock from '@/shared/images/meetBlock.png'
import notionBlock from '@/shared/images/notionBlock.png'
import telemostBlock from '@/shared/images/telemostBlock.png'
import zoomBlock from '@/shared/images/zoomBlock.png'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
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
					src={zoomBlock}
					alt=''
					draggable={false}
					className={cn(styles.imageBlock, styles.rightFirst)}
				/>
				<Image
					src={telemostBlock}
					alt=''
					draggable={false}
					className={cn(styles.imageBlock, styles.rightSecond)}
				/>
				<Image
					src={meetBlock}
					alt=''
					draggable={false}
					className={cn(styles.imageBlock, styles.rightThird)}
				/>
			</div>
			<div className={styles.wrapperIntegration}>
				<p className={styles.integrationText}>
					Повышайте эффективность и ускоряйте процессы с привычными
					инструментами <br />
					<span className={styles.integrationTextGrey}>
						Легкая интеграция поможет автоматически перенести расшифровки из
						Aski
					</span>
				</p>
				<Link href='/beta-test'>
					<button className={styles.integrationButton}>
						<p className={styles.integrationButtonText}>
							Участвовать в бета-тесте
						</p>
					</button>
				</Link>
			</div>
		</div>
	)
}

export default Integrations
