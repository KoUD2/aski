'use client'

import useWindowWidth from '@/hooks/useWindowWidth'
import ConstructorOffer1 from '@/shared/images/ConstructorOffer1.png'
import ConstructorOffer2 from '@/shared/images/ConstructorOffer2.png'
import ConstructorOffer3 from '@/shared/images/ConstructorOffer3.png'
import constructorOfferMobile4 from '@/shared/images/constructorOfferMobile4.png'
import Person1 from '@/shared/images/Person1.jpg'
import Person2 from '@/shared/images/Person2.png'
import Person3 from '@/shared/images/Person3.png'
import { FC } from 'react'
import CaseCard from '../CaseCard/CaseCard'
import TextBack from '../TextBack/TextBack'
import styles from './Feedbacks.module.css'

const Feedbacks: FC = () => {
	const windowWidth = useWindowWidth()

	return (
		<>
			<TextBack
				path={windowWidth > 480 ? ConstructorOffer1 : constructorOfferMobile4}
				text='Aski для конспектов и эффективной коммуникации'
			/>
			<CaseCard
				name='Александр Ларин'
				position='CEO Commone Course — P2P маркетплейс студенческих образовательных курсов'
				path={Person1}
			>
				<p className={styles.textCase}>
					После внедрения Aski в наш отдел продаж мы достигли значительного
					улучшения конверсии на 8%, что стало возможным благодаря глубокому
					пониманию потребностей и требований наших клиентов. Это позволило нам
					адаптировать наши стратегии продаж и{' '}
					<span className={styles.textCaseActive}>
						повысить эффективность взаимодействия с клиентами,
					</span>{' '}
					что привело к заметному росту успеха наших сделок.
				</p>
			</CaseCard>
			{windowWidth > 480 && (
				<CaseCard name='Михаил Попов' position='CEO TalkBank' path={Person2}>
					<p className={styles.textCase}>
						Этот сервис стал решением нашей давней проблемы с потерей информации
						из встреч. Теперь мы научились структурировать все встречи в единой
						базе данных, что позволяет нам {' '}
						<span className={styles.textCaseActive}>
							быстро искать информацию.
						</span>{' '}
						Особенно радует{' '}
						<span className={styles.textCaseActive}>
							простота использования сервиса,
						</span>{' '}
						что значительно упрощает наш работу и делает её более эффективной.
					</p>
				</CaseCard>
			)}
			{windowWidth > 480 && (
				<TextBack
					path={ConstructorOffer2}
					text='Aski для быстрого поиска и организации единой базы знаний для сотрудников'
				/>
			)}
			<TextBack
				path={windowWidth > 480 ? ConstructorOffer3 : constructorOfferMobile4}
				text='Aski для быстрых ответов по всем встречам'
			/>
			{windowWidth <= 480 && (
				<CaseCard name='Михаил Попов' position='CEO TalkBank' path={Person2}>
					<p className={styles.textCase}>
						Этот сервис стал решением нашей давней проблемы с потерей информации
						из встреч. Теперь мы научились структурировать все встречи в единой
						базе данных, что позволяет нам {' '}
						<span className={styles.textCaseActive}>
							быстро искать информацию.
						</span>{' '}
						Особенно радует{' '}
						<span className={styles.textCaseActive}>
							простота использования сервиса,
						</span>{' '}
						что значительно упрощает наш работу и делает её более эффективной.
					</p>
				</CaseCard>
			)}
			{windowWidth > 480 && (
				<CaseCard
					name='Серафима Малкова'
					position='Арт-директор Redis Agency'
					path={Person3}
				>
					<p className={styles.textCase}>
						Aski AI значительно упростил нашу работу с клиентскими проектами.
						Теперь, чтобы{' '}
						<span className={styles.textCaseActive}>
							уточнить требования заказчика по дизайну,
						</span>{' '}
						достаточно обратиться к Aski AI. Он моментально предоставляет нужную
						информацию,{' '}
						<span className={styles.textCaseActive}>
							подтверждая её цитатами из обсуждений.
						</span>{' '}
						Это позволяет нам оперативно решать вопросы,{' '}
						<span className={styles.textCaseActive}>не отвлекая клиента,</span>{' '}
						и гарантирует, что мы ничего не упустим.
					</p>
				</CaseCard>
			)}
			{windowWidth <= 480 && (
				<TextBack
					path={constructorOfferMobile4}
					text='Aski для быстрого поиска и организации единой базы знаний для сотрудников'
				/>
			)}
			{windowWidth <= 480 && (
				<CaseCard
					name='Серафима Малкова'
					position='Арт-директор Redis Agency'
					path={Person3}
				>
					<p className={styles.textCase}>
						Aski AI значительно упростил нашу работу с клиентскими проектами.
						Теперь, чтобы{' '}
						<span className={styles.textCaseActive}>
							уточнить требования заказчика по дизайну,
						</span>{' '}
						достаточно обратиться к Aski AI. Он моментально предоставляет нужную
						информацию,{' '}
						<span className={styles.textCaseActive}>
							подтверждая её цитатами из обсуждений.
						</span>{' '}
						Это позволяет нам оперативно решать вопросы,{' '}
						<span className={styles.textCaseActive}>не отвлекая клиента,</span>{' '}
						и гарантирует, что мы ничего не упустим.
					</p>
				</CaseCard>
			)}
		</>
	)
}

export default Feedbacks
