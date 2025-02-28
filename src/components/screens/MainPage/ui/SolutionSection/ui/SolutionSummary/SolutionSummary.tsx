import { FC } from 'react'
import Layout from '../Layout/Layout'
import styles from './SolutionSummary.module.css'

const SolutionSummary: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Layout />
			<div className={styles.contentWrapper}>
				<div></div>
			</div>
		</div>
	)
}

export default SolutionSummary
