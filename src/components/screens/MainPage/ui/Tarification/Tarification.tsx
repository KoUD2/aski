'use client'

import CircleCheck from '@/shared/images/Circle_Check.svg'
import Image from 'next/image'
import { FC, useState } from 'react'
import styles from './Tarification.module.css'
import Card from './ui/Card/Card'

const Tarification: FC = () => {
	const [activeButton, setActiveButton] = useState<'/месяц' | '/год' | null>(
		'/месяц'
	)

	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperHeadSection}>
				<h2 className={styles.buttonsHeader}>Тарифы</h2>
				<div className={styles.wrapperButtons}>
					<button
						className={`${styles.button} ${
							activeButton === '/месяц' ? styles.activeButton : ''
						}`}
						onClick={() => setActiveButton('/месяц')}
						disabled={activeButton === '/месяц'}
					>
						На месяц
					</button>
					<button
						className={`${styles.button} ${
							activeButton === '/год' ? styles.activeButton : ''
						}`}
						onClick={() => setActiveButton('/год')}
						disabled={activeButton === '/год'}
					>
						На год
					</button>
				</div>
			</div>

			<div className={styles.wrapperCards}>
				<Card
					buttonText='Попробовать'
					desc='Узнайте, как Aski повысит эффективность вашей работы в разы'
					name='Free'
					price='Бесплатно'
					isCentred={false}
				>
					<div className={styles.wrapperStatements}>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>180 минут транскрибации</p>
						</div>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>3 встречи</p>
						</div>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>20 запросов к Aski AI</p>
						</div>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>3 отчёта по шаблону</p>
						</div>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>
								Неограниченное изменение отчёта
							</p>
						</div>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>
								Бесплатная консультация по установке и демонстрации продукта
							</p>
						</div>
					</div>
				</Card>
				<Card
					buttonText='Купить'
					desc='Внедрите Aski в ваши повседневные задачи и не упускайте ни одной идеи'
					name='Pro'
					price={
						activeButton === '/месяц'
							? '879₽'
							: activeButton === '/год'
							? '9490₽'
							: ''
					}
					isCentred={true}
					period={activeButton}
				>
					<div className={styles.wrapperStatements}>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>2 000 минут транскрибации</p>
						</div>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>
								Неограниченное количество встреч
							</p>
						</div>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>10 000 запросов к Aski AI</p>
						</div>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>
								Неограниченная генерация отчётов
							</p>
						</div>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>Планирование встреч</p>
						</div>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>Удобная база данных</p>
						</div>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>
								Персональная поддержка 24/7
							</p>
						</div>
					</div>
				</Card>
				<Card
					buttonText='Купить'
					desc='Работайте с Aski командой для эффективного взаимодействия внутри вашего бизнеса'
					name='Team'
					price={
						activeButton === '/месяц'
							? '7490₽'
							: activeButton === '/год'
							? '71790'
							: ''
					}
					isCentred={false}
					period={activeButton}
				>
					<div className={styles.wrapperStatements}>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>4 000 минут транскрибации</p>
						</div>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>
								Неограниченные запросы к Aski AI
							</p>
						</div>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>
								Удобная база данных для управляющего
							</p>
						</div>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>
								Неограниченная генерация отчётов
							</p>
						</div>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>До 5 участников команды</p>
						</div>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>Интеграция с AmoCRM</p>
						</div>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>Интеграция в Яндекс Трекер</p>
						</div>
						<div className={styles.wrapperStatement}>
							<Image
								src={CircleCheck}
								alt='Описание тарифа'
								className={styles.statementImg}
							/>
							<p className={styles.statementText}>
								Персональный менеджер-консультант
							</p>
						</div>
					</div>
				</Card>
			</div>
		</div>
	)
}

export default Tarification
