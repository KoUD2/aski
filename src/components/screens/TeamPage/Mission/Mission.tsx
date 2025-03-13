import MissionSvg1 from '@/shared/images/MissionSvg1.svg'
import MissionSvg2 from '@/shared/images/MissionSvg2.svg'
import { FC } from 'react'
import styles from './Mission.module.css'
import CardMission from './ui/CardMission/CardMission'

const Mission: FC = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.missionTitle}>Миссия</h1>
			<div className={styles.wrapperCards}>
				<CardMission
					className={styles.cardImg}
					path={MissionSvg1}
					text='Миссия нашего проекта — создать платформу для качественной и доступной коммуникации в бизнесе, способствующую сотрудничеству и инновациям'
				/>
				<CardMission
					className={styles.cardImg2}
					path={MissionSvg2}
					text='Мы верим, что качественная коммуникация — залог успеха в любом деле и поэтому её улучшение откроет больше возможностей для всей команды в будущем'
				/>
			</div>
		</div>
	)
}

export default Mission
