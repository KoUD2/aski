import DataBaseSolution from '@/shared/images/DataBaseSolution.svg'
import IntegrationsSolution from '@/shared/images/IntegrationsSolution.png'
import SummarySolution from '@/shared/images/SummarySolution.svg'
import TranscribeSolution from '@/shared/images/TranscribeSolution.svg'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Solution.module.css'

const Solution: FC = () => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>У aski есть решение</h2>
			<div className={styles.cards}>
				<div className={styles.card}>
					<Image src={SummarySolution} alt='' className={styles.cardImg} />
					<div className={styles.wrapperText}>
						<h3 className={styles.cardTitle}>Конспект встречи</h3>
						<p className={styles.cardText}>
							Автоматическая генерация конспекта встречи с&nbsp;ключевыми идеями
							на&nbsp;основе 12&nbsp;готовых шаблонов
						</p>
					</div>
				</div>
				<div className={styles.card}>
					<Image src={TranscribeSolution} alt='' className={styles.cardImg} />
					<div className={styles.wrapperText}>
						<h3 className={styles.cardTitle}>Точный транскрипт</h3>
						<p className={styles.cardText}>
							Транскрипт встречи с&nbsp;учетом специфичных терминов
							и&nbsp;разделением по&nbsp;спикерам и&nbsp;тайм-кодам точностью
							от&nbsp;98%
						</p>
					</div>
				</div>
				<div className={styles.wrapperMiniCards}>
					<div className={styles.minCards}>
						<Image
							src={DataBaseSolution}
							alt=''
							className={styles.cardMiniImg}
						/>
						<div className={styles.wrapperText}>
							<h3 className={styles.cardTitle}>База данных</h3>
							<p className={styles.cardText}>
								Удобное сохранение конспектов в единую базу данных
							</p>
						</div>
					</div>
					<div className={styles.minCards}>
						<Image
							src={IntegrationsSolution}
							alt=''
							className={styles.cardMiniImg}
						/>
						<div className={styles.wrapperText}>
							<h3 className={styles.cardTitle}>Интеграции</h3>
							<p className={styles.cardText}>
								Автоматическая рассылка конспектов в&nbsp;Telegram
								и&nbsp;интеграция с&nbsp;CRM
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Solution
