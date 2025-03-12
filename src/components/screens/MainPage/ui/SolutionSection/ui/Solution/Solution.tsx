import SummaryBase from '@/shared/images/SummaryBase.svg'
import SummarySolution from '@/shared/images/SummarySolution.svg'
import TranscribeSolution from '@/shared/images/TranscribeSolution.svg'
import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Solution.module.css'

const Solution: FC = () => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>У aski есть решение</h2>
			<div className={styles.cards}>
				<div className={styles.card}>
					<Image
						src={SummarySolution}
						alt=''
						className={styles.cardImg}
						draggable={false}
					/>
					<div className={styles.wrapperText}>
						<h3 className={styles.cardTitle}>Конспект встречи</h3>
						<p className={styles.cardText}>
							Автоматическая генерация конспекта встречи с&nbsp;ключевыми идеями
							на&nbsp;основе 12&nbsp;готовых шаблонов
						</p>
					</div>
				</div>
				<div className={styles.card}>
					<Image
						src={TranscribeSolution}
						alt=''
						className={styles.cardImg}
						draggable={false}
					/>
					<div className={styles.wrapperText}>
						<h3 className={styles.cardTitle}>Точный транскрипт</h3>
						<p className={styles.cardText}>
							Транскрипт встречи с&nbsp;учетом специфичных терминов
							и&nbsp;разделением по&nbsp;спикерам и&nbsp;тайм-кодам точностью
							от&nbsp;98%
						</p>
					</div>
				</div>
				<div className={cn(styles.card, styles.cardBig)}>
					<Image
						src={SummaryBase}
						alt=''
						className={styles.cardImg}
						draggable={false}
					/>
					<div className={styles.wrapperText}>
						<h3 className={styles.cardTitle}>База знаний</h3>
						<p className={styles.cardText}>
							Удобное сохранение конспектов в единую базу знаний
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Solution
