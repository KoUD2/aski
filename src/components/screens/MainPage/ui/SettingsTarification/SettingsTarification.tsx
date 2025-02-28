'use client'

import Calendar from '@/shared/images/Calendar.svg'
import Chart from '@/shared/images/Chart.svg'
import Chat from '@/shared/images/Chat.svg'
import Clock from '@/shared/images/Clock.svg'
import Profile from '@/shared/images/Profile.svg'
import Setting from '@/shared/images/Setting.svg'
import { FC, useMemo, useReducer, useState } from 'react'
import styles from './SettingsTarification.module.css'
import MiddleCard from './ui/MiddleCard/MiddleCard'
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
	console.log('Reducer action:', action)

	if (action.type === 'toggleMiddleCard') {
		const newState = {
			...state,
			selectedMiddleCards: {
				...state.selectedMiddleCards,
				[action.payload.card]: action.payload.isActive,
			},
		}
		console.log('New state:', newState)
		return newState
	}

	if (action.type === 'setActiveButton') {
		const newState = getInitialState(action.payload)
		console.log('New plan state:', newState)
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

		// Получаем количество участников
		const teamMembers = Number(state.teamMembers)

		// Определяем множитель
		let multiplier = 1
		if (activeButton === 'Pro' && teamMembers > 1) {
			multiplier = teamMembers // Умножаем на количество участников начиная с 2-го
		} else if (activeButton === 'Team' && teamMembers > 5) {
			multiplier = teamMembers - 4 // Умножаем начиная с 6-го участника
		}

		totalPrice *= multiplier

		return Number(state.planDuration) * totalPrice
	}, [state, activeButton, basePrice])

	console.log('Current selectedMiddleCards:', state.selectedMiddleCards)

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
					<div className={styles.wrapperPrice}>
						<p className={styles.priceText}>{Math.round(price)}₽</p>
						<p className={styles.pricePeriod}>/месяц</p>
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
							const minValue = activeButton === 'Pro' ? 2000 : 4000 // Определяем minValue внутри

							// Проверяем, увеличиваем или уменьшаем значение
							const isIncrease = inputValue > currentValue
							const updatedValue = isIncrease
								? inputValue // Если увеличение, оставляем как есть
								: Math.max(currentValue - 100, minValue) // Если уменьшение, отнимаем 100, но не ниже minValue

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

					<MiddleCard
						text='Aski в чате Telegram'
						path={Profile}
						isActive={state.selectedMiddleCards.telegram}
						onToggleChange={() => {
							console.log(
								`Toggling ${state.selectedMiddleCards.telegram ? 'off' : 'on'}`
							)

							dispatch({
								type: 'toggleMiddleCard',
								payload: {
									card: 'telegram',
									isActive: !state.selectedMiddleCards.telegram,
								},
							})
						}}
					/>

					<MiddleCard
						text='Интеграция с amoCRM'
						className={styles.leftFirst}
						path={Setting}
						isActive={state.selectedMiddleCards.amoCRM}
						onToggleChange={() => {
							if (activeButton === 'Team') return
							dispatch({
								type: 'toggleMiddleCard',
								payload: {
									card: 'amoCRM',
									isActive: !state.selectedMiddleCards.amoCRM,
								},
							})
						}}
					/>
					<MiddleCard
						text='Интеграция в Яндекс Трекер'
						className={styles.leftSecond}
						path={Chart}
						isActive={state.selectedMiddleCards.yandexTracker}
						onToggleChange={() => {
							if (activeButton === 'Team') return
							dispatch({
								type: 'toggleMiddleCard',
								payload: {
									card: 'yandexTracker',
									isActive: !state.selectedMiddleCards.yandexTracker,
								},
							})
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default SettingsTarification
