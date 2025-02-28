import Team1 from '@/shared/images/Team1.svg'
import Team2 from '@/shared/images/Team2.svg'
import Team3 from '@/shared/images/Team3.svg'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Solution.module.css'

const Solution: FC = () => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Как всё начиналось</h2>
			<div className={styles.cards}>
				<div className={styles.card}>
					<Image src={Team1} alt='' className={styles.cardImg} />
					<div className={styles.wrapperText}>
						<h3 className={styles.cardTitle}>Проблема</h3>
						<p className={styles.cardText}>
							Мы не первый год знакомы и участвуем в хакатонах, кейс-чемпионатах
							и командных олимпиадах. Во время участия в кейс-чемпионате
							НИУ ВШЭ мы столкнулись с проблемой: во время мозговых штурмов
							некоторые наши идеи и удачные формулировки попросту терялись
							из-за того, что мы их не фиксировали
						</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.wrapperText}>
						<h3 className={styles.cardTitle}>Идея!</h3>
						<p className={styles.cardText}>
							Для нас потеря идей стала реальной проблемой и снижала нашу
							эффективность. Я начал фиксировать все идеи вручную, и здесь
							мне пришло озарение: а что, если использовать в этом искусственный
							интеллект? Ведь такая проблема всегда актуальна для проектных
							работ
						</p>
					</div>
					<Image src={Team2} alt='' className={styles.cardImg} />
				</div>
				<div className={styles.card}>
					<Image src={Team3} alt='' className={styles.cardImg} />
					<div className={styles.wrapperText}>
						<h3 className={styles.cardTitle}>Решение</h3>
						<p className={styles.cardText}>
							Я рассказал идею друзьям, и мы решили, что после кейс-чемпионата
							наша главная цель — создание этого проекта. Так и родился на свет
							Aski, наш AI-помощник, который выручает нас каждый день
							на совместных созвонах
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Solution
