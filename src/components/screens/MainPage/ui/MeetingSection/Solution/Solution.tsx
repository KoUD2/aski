import DataBaseMeeting from '@/shared/images/DataBaseMeeting.svg'
import IntegrationsMeeting from '@/shared/images/IntegrationsMeeting.svg'
import MeetingSolution from '@/shared/images/MeetingSolution.svg'
import TranscribeMeeting from '@/shared/images/TranscribeMeeting.svg'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Solution.module.css'

const Solution: FC = () => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>У aski есть решение</h2>
			<div className={styles.cards}>
				<div className={styles.card}>
					<Image src={MeetingSolution} alt='' className={styles.cardImg} />
					<div className={styles.wrapperText}>
						<h3 className={styles.cardTitle}>Интеграции с Notion</h3>
						<p className={styles.cardText}>
							Автоматически переносите задачи, краткие выжимки и транскрипты
							встреч из Aski в другие сервисы
						</p>
					</div>
				</div>

				<div className={styles.wrapperMiniCards}>
					<div className={styles.minCards}>
						<Image
							src={IntegrationsMeeting}
							alt=''
							className={styles.cardMiniImg}
						/>
						<div className={styles.wrapperText}>
							<h3 className={styles.cardTitle}>Быстрый поиск</h3>
							<p className={styles.cardText}>
								Получайте подробные ответы от Aski AI на любые вопросы из базы
								данных
							</p>
						</div>
					</div>
					<div className={styles.minCards}>
						<Image
							src={DataBaseMeeting}
							alt=''
							className={styles.cardMiniImg}
						/>
						<div className={styles.wrapperText}>
							<h3 className={styles.cardTitle}>Сортировка и организация</h3>
							<p className={styles.cardText}>
								Сортировка встреч по алфавиту, по дате, по ролям для быстрого
								поиска и эффективного управления
							</p>
						</div>
					</div>
				</div>
				<div className={styles.card}>
					<Image src={TranscribeMeeting} alt='' className={styles.cardImg} />
					<div className={styles.wrapperText}>
						<h3 className={styles.cardTitle}>Удобное хранение</h3>
						<p className={styles.cardText}>
							Все транскрипты и отчеты теперь сохраняются в базе данных и
							доступны всегда
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Solution
