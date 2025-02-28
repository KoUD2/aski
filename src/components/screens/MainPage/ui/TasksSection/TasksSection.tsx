import PageTasks from '@/shared/images/PageTasks.svg'
import Person3 from '@/shared/images/Person3.png'
import Image from 'next/image'
import { FC } from 'react'
import Feedback from '../SolutionSection/ui/Feedback/Feedback'
import MainPage from '../SolutionSection/ui/MainPage/MainPage'
import Solution from './Solution/Solution'
import styles from './TasksSection.module.css'

const TasksSection: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperSections}>
				<MainPage />
				<Image
					src={PageTasks}
					alt=''
					className={styles.imgPageMeetings}
					draggable={false}
				/>
				<Solution />
				<Feedback
					path={Person3}
					person='Серафима Малкова'
					post='Коммуникационный арт-директор Redis Agency'
				>
					Aski AI значительно упростил нашу работу с клиентскими проектами.
					Теперь, чтобы{' '}
					<span className={styles.accent}>
						уточнить требования заказчика по дизайну,
					</span>{' '}
					достаточно обратиться к Aski AI. Он моментально предоставляет нужную
					информацию,{' '}
					<span className={styles.accent}>
						подтверждая её цитатами из обсуждений.
					</span>{' '}
					Это позволяет нам оперативно решать вопросы,{' '}
					<span className={styles.accent}>не отвлекая клиента,</span> и
					гарантирует, что мы ничего не упустим.
				</Feedback>
			</div>
		</div>
	)
}

export default TasksSection
