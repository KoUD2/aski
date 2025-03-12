'use client'

import Calendar from '@/shared/images/Calendar.svg'
import Chat from '@/shared/images/Chat.svg'
import Clock from '@/shared/images/Clock.svg'
import Profile from '@/shared/images/Profile.svg'
import { FC, useMemo, useReducer, useState } from 'react'
import styles from './SettingsTarification.module.css'
import MiniCard from './ui/MiniCard/MiniCard'

const getInitialState = (plan: 'Pro' | 'Team') => ({
	chatRequests: plan === 'Pro' ? '10000' : '∞',
	transcriptionMinutes: plan === 'Pro' ? '2000' : '4000',
	planDuration: '1',
	teamMembers: plan === 'Pro' ? '1' : '5',
	selectedMiddleCards: {
		telegram: false,
		amoCRM: plan === 'Team',
		yandexTracker: plan === 'Team',
	},
})

const reducer = (
	state: ReturnType<typeof getInitialState>,
	action: { type: string; payload: any }
) => {
	if (action.type === 'toggleMiddleCard') {
		const newState = {
			...state,
			selectedMiddleCards: {
				...state.selectedMiddleCards,
				[action.payload.card]: action.payload.isActive,
			},
		}
		return newState
	}

	if (action.type === 'setActiveButton') {
		const newState = getInitialState(action.payload)
		return newState
	}

	return { ...state, [action.type]: action.payload }
}

const SettingsTarification: FC = () => {
	const [activeButton, setActiveButton] = useState<'Pro' | 'Team'>('Pro')
	const [state, dispatch] = useReducer(reducer, activeButton, getInitialState)

	const basePrice = activeButton === 'Pro' ? 879 : 7490

	const price = useMemo(() => {
		const baseTranscriptionMinutes = activeButton === 'Pro' ? 2000 : 4000

		const baseMiddleCards =
			activeButton === 'Pro' ? [] : ['amoCRM', 'yandexTracker']

		const chatRequestsCost =
			state.chatRequests === '∞'
				? 0
				: ((Number(state.chatRequests) - 10000) / 100) * 10

		const transcriptionCost =
			((Number(state.transcriptionMinutes) - baseTranscriptionMinutes) / 30) *
			50

		const additionalMiddleCardCost =
			Object.entries(state.selectedMiddleCards).filter(
				([key, value]) => value && !baseMiddleCards.includes(key)
			).length * 100

		let totalPrice =
			basePrice +
			chatRequestsCost +
			transcriptionCost +
			additionalMiddleCardCost

		const teamMembers = Number(state.teamMembers)

		let multiplier = 1
		if (activeButton === 'Pro' && teamMembers > 1) {
			multiplier = teamMembers
		} else if (activeButton === 'Team' && teamMembers > 5) {
			multiplier = teamMembers - 4
		}

		totalPrice *= multiplier

		return Number(state.planDuration) * totalPrice
	}, [state, activeButton, basePrice])

	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Настройте тариф</h2>
			<div className={styles.wrapperAllCArds}>
				<div className={styles.wrapperBigCard}>
					<div className={styles.wrapperBigCardHead}>
						<h3 className={styles.wrapperBigCardHeadText}>
							Настройте тариф под уникальные потребности вашего проекта
						</h3>
						<div className={styles.wrapperButtons}>
							<button
								className={`${styles.button} ${
									activeButton === 'Pro' ? styles.activeButton : ''
								}`}
								onClick={() => {
									setActiveButton('Pro')
									dispatch({ type: 'setActiveButton', payload: 'Pro' })
								}}
								disabled={activeButton === 'Pro'}
							>
								Aski Pro
							</button>
							<button
								className={`${styles.button} ${
									activeButton === 'Team' ? styles.activeButton : ''
								}`}
								onClick={() => {
									setActiveButton('Team')
									dispatch({ type: 'setActiveButton', payload: 'Team' })
								}}
								disabled={activeButton === 'Team'}
							>
								Aski Team
							</button>
						</div>
					</div>
					<div className={styles.wrapperPriceButton}>
						<div className={styles.wrapperPrice}>
							<p className={styles.priceText}>{Math.round(price)}₽</p>
							<p className={styles.pricePeriod}>/месяц</p>
						</div>

						<button className={styles.buttonBought}>Купить</button>
					</div>
				</div>
				<div className={styles.wrapperMiniCards}>
					<MiniCard
						path={Chat}
						text='Количество запросов Aski AI'
						inputValue={state.chatRequests}
						valueIncrease={100}
						valueMin={10000}
						disabled={state.chatRequests === '∞'}
						onValueChange={newValue => {
							if (state.chatRequests !== '∞') {
								dispatch({ type: 'chatRequests', payload: newValue })
							}
						}}
					/>

					<MiniCard
						path={Clock}
						text='Количество минут транскрибации'
						className={styles.leftThird}
						inputValue={state.transcriptionMinutes}
						valueIncrease={30}
						valueMin={activeButton === 'Pro' ? 2000 : 4000}
						onValueChange={newValue => {
							const currentValue = Number(state.transcriptionMinutes)
							const inputValue = Number(newValue)
							const minValue = activeButton === 'Pro' ? 2000 : 4000

							const isIncrease = inputValue > currentValue
							const updatedValue = isIncrease
								? inputValue
								: Math.max(currentValue - 100, minValue)

							dispatch({
								type: 'transcriptionMinutes',
								payload: String(updatedValue),
							})
						}}
					/>
					<MiniCard
						path={Calendar}
						className={styles.leftFourth}
						text='Срок действия тарифа, месяцев'
						inputValue={state.planDuration}
						valueIncrease={1}
						valueMin={1}
						onValueChange={newValue =>
							dispatch({ type: 'planDuration', payload: newValue })
						}
					/>

					<MiniCard
						path={Profile}
						text='Количество человек в команде'
						inputValue={state.teamMembers}
						valueIncrease={1}
						valueMin={activeButton === 'Pro' ? 1 : 5}
						onValueChange={newValue => {
							const minValue = activeButton === 'Pro' ? 1 : 5
							if (Number(newValue) >= minValue) {
								dispatch({ type: 'teamMembers', payload: newValue })
							}
						}}
						disabled={false}
					/>
				</div>
			</div>
		</div>
	)
}

export default SettingsTarification
