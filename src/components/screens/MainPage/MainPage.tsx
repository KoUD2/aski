'use client'

import Footer from '@/components/ui/Footer/Footer'
import { FC, useReducer } from 'react'
import styles from './MainPage.module.css'
import CardsSection from './ui/CardsSection/CardsSection'
import HeaderSection from './ui/HeaderSection/HeaderSection'
import Integrations from './ui/Integrations/Integrations'
import LoginForm from './ui/LoginForm/LoginForm'
import MeetingSection from './ui/MeetingSection/MeetingSection'
import SettingsTarification from './ui/SettingsTarification/SettingsTarification'
import SolutionSection from './ui/SolutionSection/SolutionSection'
import Tarification from './ui/Tarification/Tarification'
import TasksSection from './ui/TasksSection/TasksSection'

type Action = { type: 'SET_ACTIVE_INDEX'; payload: number }

const reducer = (state: number | null, action: Action): number | null => {
	switch (action.type) {
		case 'SET_ACTIVE_INDEX':
			return action.payload
		default:
			return state
	}
}

const MainPage: FC = () => {
	const [activeIndex, dispatch] = useReducer(reducer, 0)

	return (
		<div className={styles.mainWrapper}>
			<HeaderSection
				isMainPage={true}
				title='Aski зафиксирует все важные детали созвона в единой системе'
				desc='Будьте всегда в курсе обсуждений'
			/>
			<div className={styles.wrapperUTP}>
				<CardsSection activeIndex={activeIndex} dispatch={dispatch} />
				{activeIndex === 0 ? (
					<SolutionSection />
				) : activeIndex === 1 ? (
					<MeetingSection />
				) : activeIndex === 2 ? (
					<TasksSection />
				) : null}
			</div>
			<Integrations />
			<Tarification />
			<SettingsTarification />
			<LoginForm />
			<Footer />
		</div>
	)
}

export default MainPage
