import MainPageSection from '@/shared/images/MainPage.svg'
import Person from '@/shared/images/Person1.jpg'
import Image from 'next/image'
import { FC } from 'react'
import styles from './SolutionSection.module.css'
import Feedback from './ui/Feedback/Feedback'
import MainPage from './ui/MainPage/MainPage'
import Solution from './ui/Solution/Solution'

const SolutionSection: FC = () => {
	return (
		<div className={styles.mainPage}>
			<MainPage />
			{/* <SolutionSummary /> */}
			<Image
				src={MainPageSection}
				alt=''
				draggable={false}
				className={styles.mainPageSection}
			/>
			<Solution />
			<Feedback
				path={Person}
				person='Александр Ларин'
				post='CEO Commone Course — P2P маркетплейс студенческих образовательных курсов'
			>
				После внедрения Aski в наш отдел продаж мы достигли значительного
				улучшения конверсии на 8%, что стало возможным благодаря глубокому
				пониманию потребностей и требований наших клиентов. Это позволило нам
				адаптировать наши стратегии продаж и{' '}
				<span className={styles.accent}>
					повысить эффективность взаимодействия с клиентами,
				</span>{' '}
				что привело к заметному росту успеха наших сделок.
			</Feedback>
		</div>
	)
}

export default SolutionSection
