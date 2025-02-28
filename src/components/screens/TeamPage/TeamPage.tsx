import Footer from '@/components/ui/Footer/Footer'
import AvatarC from '@/shared/images/AvatarC.png'
import constructorOffer4 from '@/shared/images/constructorOffer4.png'
import constructorOffer5 from '@/shared/images/constructorOffer5.png'
import { FC } from 'react'
import TextBack from '../CasesPage/ui/TextBack/TextBack'
import HeaderSection from '../MainPage/ui/HeaderSection/HeaderSection'
import Feedback from '../MainPage/ui/SolutionSection/ui/Feedback/Feedback'
import Mission from './Mission/Mission'
import Solution from './Solution/Solution'
import styles from './TeamPage.module.css'

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
				<TextBack
					path={constructorOffer4}
					text='Aski — AI-помощник, который зафиксирует всё, что было на созвоне и ответит на любой вопрос по встрече'
				/>
				<TextBack
					path={constructorOffer5}
					text='Мы верим в эту технологию и считаем, что за ней стоит будущее, и именно поэтому создали проект Aski'
				/>
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
