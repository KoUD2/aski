import IntegrationsTasks from '@/shared/images/IntegrationsTasks.svg'
import TasksSolution from '@/shared/images/TasksSolution.svg'
import TranscribeTasks from '@/shared/images/TranscribeTasks.svg'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Solution.module.css'

const Solution: FC = () => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>У aski есть решение</h2>
			<div className={styles.cards}>
				<div className={styles.card}>
					<Image src={IntegrationsTasks} alt='' className={styles.cardImg} />
					<div className={styles.wrapperText}>
						<h3 className={styles.cardTitle}>Быстрое редактирование</h3>
						<p className={styles.cardText}>
							Исправляйте и улучшайте заметки без ограничений с Aski AI
						</p>
					</div>
				</div>

				<div className={styles.card}>
					<Image src={TasksSolution} alt='' className={styles.cardImg} />
					<div className={styles.wrapperText}>
						<h3 className={styles.cardTitle}>Мнгновенные ответы</h3>
						<p className={styles.cardText}>
							Aski проанализирует всю базу данных и выдаст подробный ответ с
							цитатой из встречи
						</p>
					</div>
				</div>

				<div className={styles.card}>
					<Image src={TranscribeTasks} alt='' className={styles.cardImg} />
					<div className={styles.wrapperText}>
						<h3 className={styles.cardTitle}>Генерация документов</h3>
						<p className={styles.cardText}>
							Aski AI помогает в создании технических заданий и брифов,
							освобождая время для командной работы
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Solution
