import { FC } from 'react'
import HeaderSection from '../MainPage/ui/HeaderSection/HeaderSection'
import ContactForm from '../MainPage/ui/LoginForm/ui/ContactForm/ContactForm'
import styles from './BetaTestPage.module.css'

const BetaTestPage: FC = () => {
	return (
		<div className={styles.wrapper}>
			<HeaderSection
				isMainPage={false}
				title='Участвовать в бета-тесте'
				desc='Получите ранний доступ к продукту. Это бесплатно'
				isTarification={true}
				className={styles.description}
				classNameTitle={styles.mainTitle}
				classNameTest={styles.testHeader}
			/>

			<div className={styles.wrapperBetaTestForm}>
				<div className={styles.mainWrapperTitle}>
					<div className={styles.wrapperTitle}>
						<p className={styles.title}>Пришлём ссылку на бета-версию</p>
					</div>
				</div>
				<ContactForm />
			</div>
		</div>
	)
}

export default BetaTestPage
