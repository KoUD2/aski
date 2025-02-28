import CircleCheck from '@/shared/images/Circle_Check.svg'
import RemoveMinus from '@/shared/images/Remove_Minus.svg'
import cn from 'classnames'
import Image from 'next/image'
import { FC, useState } from 'react'
import styles from './TarificationTable.module.css'

const TarificationTable: FC = () => {
	const [activeButton, setActiveButton] = useState<'месяц' | 'год' | null>(
		'месяц'
	)

	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperButtons}>
				<button
					className={`${styles.button} ${
						activeButton === 'месяц' ? styles.activeButton : ''
					}`}
					onClick={() => setActiveButton('месяц')}
					disabled={activeButton === 'месяц'}
				>
					На месяц
				</button>
				<button
					className={`${styles.button} ${
						activeButton === 'год' ? styles.activeButton : ''
					}`}
					onClick={() => setActiveButton('год')}
					disabled={activeButton === 'год'}
				>
					На год
				</button>
			</div>
			<div className={styles.wrapperHeader}>
				<h2 className={cn(styles.title, styles.leftFirst)}>Фича</h2>
				<h2 className={cn(styles.title, styles.leftSecond)}>Aski Free</h2>
				<h2 className={cn(styles.title, styles.leftThird)}>Aski Pro</h2>
				<h2 className={cn(styles.title, styles.leftFourth)}>Aski Team</h2>
				<div className={styles.circle}></div>
			</div>
			<div className={styles.wrapperAllTarification}>
				<div className={styles.wrapperStatements}>
					<p className={styles.statementGray}>Количество встреч</p>
					<p className={styles.statementGray}>Запросы к Aski AI</p>
					<p className={styles.statementGray}>Генерация отчётов</p>
					<p className={styles.statementGray}>Шаблоны отчётов</p>
					<p className={styles.statementGray}>Персональные шаблоны</p>
					<p className={styles.statementGray}>Участников команды</p>
					<p className={styles.statementGray}>Рассылка генераций</p>
					<p className={styles.statementGray}>Планирование встреч</p>
					<p className={styles.statementGray}>База данных</p>
					<p className={styles.statementGray}>Aski AI в чате Telegram</p>
					<p className={styles.statementGray}>Aski в amoCRM</p>
					<p className={styles.statementGray}>Aski в Яндекс Трекер</p>
					<p className={styles.statementGray}>Персональная поддержка</p>
					<p className={styles.statementGray}>Повышенная защита данных</p>
				</div>
				<div className={styles.wrapperStatements}>
					<p className={styles.statementWhite}>3 встречи</p>
					<p className={styles.statementWhite}>20 запросов</p>
					<p className={styles.statementWhite}>3 отчёта</p>
					<p className={styles.statementWhite}>3 встречи</p>
					<Image src={RemoveMinus} alt='' className={styles.statementImg} />
					<p className={styles.statementWhite}>1 участник</p>
					<Image src={RemoveMinus} alt='' className={styles.statementImg} />
					<Image src={RemoveMinus} alt='' className={styles.statementImg} />
					<Image src={RemoveMinus} alt='' className={styles.statementImg} />
					<Image src={RemoveMinus} alt='' className={styles.statementImg} />
					<Image src={RemoveMinus} alt='' className={styles.statementImg} />
					<Image src={RemoveMinus} alt='' className={styles.statementImg} />
					<p className={styles.statementWhite}>Базовая</p>
					<Image src={CircleCheck} alt='' className={styles.statementImg} />
				</div>
				<div className={styles.wrapperStatements}>
					<p className={styles.statementWhite}>
						{activeButton === 'год'
							? 2000 * 12
							: activeButton === 'месяц'
							? 2000
							: 0}{' '}
						минут
					</p>
					<p className={styles.statementWhite}>
						{activeButton === 'год'
							? 10000 * 12
							: activeButton === 'месяц'
							? 10000
							: 0}{' '}
						запросов
					</p>
					<p className={styles.statementWhite}>∞</p>
					<p className={styles.statementWhite}>∞</p>
					<Image src={CircleCheck} alt='' className={styles.statementImg} />
					<p className={styles.statementWhite}>1 участник</p>
					<Image src={CircleCheck} alt='' className={styles.statementImg} />
					<Image src={CircleCheck} alt='' className={styles.statementImg} />
					<Image src={CircleCheck} alt='' className={styles.statementImg} />
					<Image src={RemoveMinus} alt='' className={styles.statementImg} />
					<Image src={RemoveMinus} alt='' className={styles.statementImg} />
					<Image src={RemoveMinus} alt='' className={styles.statementImg} />
					<p className={styles.statementWhite}>Расширенная</p>
					<Image src={CircleCheck} alt='' className={styles.statementImg} />
				</div>
				<div className={styles.wrapperStatements}>
					<p className={styles.statementWhite}>
						{activeButton === 'год'
							? 4000 * 12
							: activeButton === 'месяц'
							? 4000
							: 0}{' '}
						минут
					</p>
					<p className={styles.statementWhite}>∞</p>
					<p className={styles.statementWhite}>∞</p>
					<p className={styles.statementWhite}>12+</p>
					<p className={styles.statementWhite}>∞</p>
					<p className={styles.statementWhite}>до 5 участников</p>
					<Image src={CircleCheck} alt='' className={styles.statementImg} />
					<Image src={CircleCheck} alt='' className={styles.statementImg} />
					<Image src={CircleCheck} alt='' className={styles.statementImg} />
					<Image src={CircleCheck} alt='' className={styles.statementImg} />
					<Image src={CircleCheck} alt='' className={styles.statementImg} />
					<Image src={CircleCheck} alt='' className={styles.statementImg} />
					<p className={styles.statementWhite}>Премиум</p>
					<Image src={CircleCheck} alt='' className={styles.statementImg} />
				</div>
			</div>
		</div>
	)
}

export default TarificationTable
