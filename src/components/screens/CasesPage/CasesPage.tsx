import Footer from '@/components/ui/Footer/Footer'
import { FC } from 'react'
import HeaderSection from '../MainPage/ui/HeaderSection/HeaderSection'
import styles from './CasesPage.module.css'
import Feedbacks from './ui/Feedbacks/Feedbacks'

const CasesPage: FC = () => {
	return (
		<div className={styles.wrapper}>
			<HeaderSection
				isMainPage={false}
				title='Кейсы'
				desc='Aski для разных задач'
				isTarification={true}
			/>

			<div className={styles.wrapperCards}>
				<Feedbacks />
			</div>
			<Footer />
		</div>
	)
}

export default CasesPage
