import Footer from '@/components/ui/Footer/Footer'
import AvatarC from '@/shared/images/AvatarC.png'

import { FC } from 'react'
import HeaderSection from '../MainPage/ui/HeaderSection/HeaderSection'
import Feedback from '../MainPage/ui/SolutionSection/ui/Feedback/Feedback'
import Mission from './Mission/Mission'
import Solution from './Solution/Solution'
import styles from './TeamPage.module.css'
import TextBacks from './TextBacks/TextBacks'

const TeamPage: FC = () => {
	return (
		<div className={styles.wrapper}>
			<HeaderSection
				isMainPage={false}
				title='Компания'
				desc='Мы - молодая команда, которая смотрит на рынок без стереотипов'
				isTarification={true}
			/>

			<div className={styles.wrapperHeadInfo}>
				<TextBacks />
			</div>

			<Solution />

			<Feedback
				path={AvatarC}
				person='Тимофей Арзамасцев'
				post='CEO Aski'
				className={styles.addWrapper}
			>
				Мы по-настоящему{' '}
				<span className={styles.accent}>
					горим этой идеей каждый, потому что в первую очередь закрываем свою
					боль, проблему, потребность.
				</span>{' '}
				А ведь когда ты закрываешь свою проблему в бизнесе,{' '}
				<span className={styles.accent}>то ты делаешь это для себя,</span> а в
				результате решение становится максимально качественным
			</Feedback>

			<Mission />

			<Footer />
		</div>
	)
}

export default TeamPage
