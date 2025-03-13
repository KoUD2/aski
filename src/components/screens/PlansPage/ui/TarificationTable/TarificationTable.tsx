'use client'

import useWindowWidth from '@/hooks/useWindowWidth'
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

	const windowWidth = useWindowWidth()

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
				<h2 className={cn(styles.title, styles.leftSecond)}>
					{windowWidth > 480 ? 'Aski Free' : 'Free'}
				</h2>
				<h2 className={cn(styles.title, styles.leftThird)}>
					{windowWidth > 480 ? 'Aski Pro' : 'Pro'}
				</h2>
				<h2 className={cn(styles.title, styles.leftFourth)}>
					{windowWidth > 480 ? 'Aski Team' : 'Team'}
				</h2>
				<div className={styles.circle}></div>
			</div>
			<div className={styles.wrapperAllTarification}>
				<div className={styles.wrapperStatements}>
					<p className={styles.statementGray}>Количество встреч</p>
					<p className={styles.statementGray}>
						{windowWidth > 480 ? (
							'Запросы к Aski AI'
						) : (
							<>
								<>Запросы</> <br /> <>к Aski AI</>
							</>
						)}
					</p>
					<p className={styles.statementGray}>Генерация отчётов</p>
					<p className={styles.statementGray}>Шаблоны отчётов</p>
					<p className={styles.statementGray}>Персональные шаблоны</p>
					<p className={styles.statementGray}>Участников команды</p>
					<p className={styles.statementGray}>Рассылка генераций</p>
					<p className={styles.statementGray}>Планирование встреч</p>
					<p className={styles.statementGray}>
						{windowWidth > 480 ? (
							'База данных'
						) : (
							<>
								<>База</> <br /> <>данных</>
							</>
						)}
					</p>
					<p className={styles.statementGray}>Персональная поддержка</p>
					<p className={styles.statementGray}>Повышенная защита данных</p>
				</div>
				<div className={styles.wrapperStatements}>
					<p className={styles.statementWhite}>3 встречи</p>
					<p className={styles.statementWhite}>20 запросов</p>
					<p className={styles.statementWhite}>
						{windowWidth > 480 ? (
							'3 отчёта'
						) : (
							<>
								<>3</> <br /> <>отчёта</>
							</>
						)}
					</p>
					<p className={styles.statementWhite}>3 встречи</p>
					<div className={styles.wrapperMobile}>
						<Image src={RemoveMinus} alt='' className={styles.statementImg} />
					</div>
					<p className={styles.statementWhite}>1 участник</p>
					<div className={styles.wrapperMobile}>
						<Image src={RemoveMinus} alt='' className={styles.statementImg} />
					</div>
					<div className={styles.wrapperMobile}>
						<Image src={RemoveMinus} alt='' className={styles.statementImg} />
					</div>
					<div className={styles.wrapperMobile}>
						<Image src={RemoveMinus} alt='' className={styles.statementImg} />
					</div>
					<p className={styles.statementWhite}>Базовая</p>
					<div className={styles.wrapperMobile}>
						<Image src={CircleCheck} alt='' className={styles.statementImg} />
					</div>
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
					<div className={styles.wrapperMobile}>
						<Image src={CircleCheck} alt='' className={styles.statementImg} />
					</div>
					<p className={styles.statementWhite}>1 участник</p>
					<div className={styles.wrapperMobile}>
						<Image src={CircleCheck} alt='' className={styles.statementImg} />
					</div>
					<div className={styles.wrapperMobile}>
						<Image src={CircleCheck} alt='' className={styles.statementImg} />
					</div>
					<div className={styles.wrapperMobile}>
						<Image src={CircleCheck} alt='' className={styles.statementImg} />
					</div>
					<p className={styles.statementWhite}>
						{windowWidth > 480 ? (
							'Расширенная'
						) : (
							<>
								<>Расши-</> <br /> <>ренная</>
							</>
						)}
					</p>
					<div className={styles.wrapperMobile}>
						<Image src={CircleCheck} alt='' className={styles.statementImg} />
					</div>
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
					<p className={styles.statementWhite}>
						{windowWidth > 480 ? 'до 5 участников' : 'до 5 участн.'}
					</p>
					<div className={styles.wrapperMobile}>
						<Image src={CircleCheck} alt='' className={styles.statementImg} />
					</div>
					<div className={styles.wrapperMobile}>
						<Image src={CircleCheck} alt='' className={styles.statementImg} />
					</div>
					<div className={styles.wrapperMobile}>
						<Image src={CircleCheck} alt='' className={styles.statementImg} />
					</div>
					<p className={styles.statementWhite}>Премиум</p>
					<div className={styles.wrapperMobile}>
						<Image src={CircleCheck} alt='' className={styles.statementImg} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default TarificationTable
