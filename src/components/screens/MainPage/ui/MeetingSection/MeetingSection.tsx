import PageMeetings from '@/shared/images/PageMeetings.svg'
import Person2 from '@/shared/images/Person2.png'
import Image from 'next/image'
import { FC } from 'react'
import Feedback from '../SolutionSection/ui/Feedback/Feedback'
import MainPage from '../SolutionSection/ui/MainPage/MainPage'
import styles from './MeetingSection.module.css'
import Solution from './Solution/Solution'

const MeetingSection: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperSections}>
				<Image
					src={PageMeetings}
					alt=''
					className={styles.imgPageMeetings}
					draggable={false}
				/>
				<MainPage />
				<Solution />
				<Feedback path={Person2} person='Михаил Попов' post='CEO TalkBank'>
					Этот сервис стал решением нашей давней проблемы с потерей информации
					из встреч. Теперь мы научились структурировать все встречи в единой
					базе данных, что позволяет нам 
					<span className={styles.accent}>быстро искать информацию.</span>{' '}
					Особенно радует{' '}
					<span className={styles.accent}>простота использования сервиса,</span>{' '}
					что значительно упрощает наш работу и делает её более эффективной.
				</Feedback>
			</div>
		</div>
	)
}

export default MeetingSection
