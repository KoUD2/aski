'use client'

import AddPlus from '@/shared/images/AddPlus.svg'
import RemoveMinus from '@/shared/images/Remove_Minus.svg'
import cn from 'classnames'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import styles from './MiniCard.module.css'

interface IMiniCard {
	path: string
	text: string
	inputValue: string
	valueIncrease: number
	valueMin: number
	onValueChange: (newValue: string) => void
	disabled?: boolean
	className?: string
}

const MiniCard: FC<IMiniCard> = ({
	path,
	text,
	inputValue,
	valueIncrease,
	valueMin,
	onValueChange,
	disabled = false,
	className,
}) => {
	const [value, setValue] = useState(inputValue)

	useEffect(() => {
		setValue(inputValue)
	}, [inputValue])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (disabled) return // Запрещаем ввод, если disabled
		const newValue = e.target.value.replace(/\D/g, '') // Только цифры
		setValue(newValue)
	}

	const handleBlur = () => {
		if (disabled) return
		const correctedValue =
			value === ''
				? String(valueMin)
				: String(Math.max(Number(value), valueMin))
		setValue(correctedValue)
		onValueChange(correctedValue)
	}

	const decreaseValue = () => {
		if (disabled) return
		const newValue = String(Math.max(Number(value) - valueIncrease, valueMin))
		setValue(newValue)
		onValueChange(newValue)
	}

	const increaseValue = () => {
		if (disabled) return
		const newValue = String(Number(value) + valueIncrease)
		setValue(newValue)
		onValueChange(newValue)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperTexts}>
				<Image
					src={path}
					alt='Настройка тарифа'
					className={cn(styles.img, className)}
				/>
				<p className={styles.text}>{text}</p>
			</div>
			<div className={styles.wrapperButtons}>
				<button
					className={styles.button}
					onClick={decreaseValue}
					disabled={Number(value) <= valueMin}
				>
					<Image src={RemoveMinus} alt='Кнопка' className={styles.buttonImg} />
				</button>
				<input
					type='text'
					className={styles.input}
					value={value}
					onChange={handleChange}
					onBlur={handleBlur}
					disabled={disabled}
				/>
				<button
					className={styles.button}
					onClick={increaseValue}
					disabled={disabled}
				>
					<Image src={AddPlus} alt='Кнопка' className={styles.buttonImg} />
				</button>
			</div>
		</div>
	)
}

export default MiniCard
