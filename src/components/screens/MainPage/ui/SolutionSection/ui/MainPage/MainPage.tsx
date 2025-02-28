import Calendar_Event from '@/shared/images/Calendar_Event.svg'
import File_Edit from '@/shared/images/File_Edit.svg'
import Logo_small from '@/shared/images/Logo_small.svg'
import Image from 'next/image'
import { FC } from 'react'
import Layout from '../Layout/Layout'
import styles from './MainPage.module.css'

const MainPage: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Layout />
			<div className={styles.contentWrapper}>
				<div className={styles.circle}></div>
				<div className={styles.cardsWrapper}>
					<div className={styles.recording}>
						<Image
							src={File_Edit}
							alt='Запись встречи'
							className={styles.recordingImg}
						/>
						<p className={styles.recordingText}>Записать встречу</p>
					</div>
					<div className={styles.wrapperMiniCards}>
						<div className={styles.miniCard}>
							<Image src={Logo_small} alt='Aski AI' className={styles.aiImg} />
							<p className={styles.recordingText}>Aski AI</p>
						</div>
						<div className={styles.miniCard}>
							<Image
								src={Calendar_Event}
								alt='Запланировать встречу'
								className={styles.planImg}
							/>
							<p className={styles.recordingText}>Запланировать встречу</p>
						</div>
					</div>
				</div>
				<div className={styles.wrapperBalance}>
					<p className={styles.balanceText}>Баланс</p>
					<div className={styles.balanceContainer}>
						<p className={styles.balance}>100 мин</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainPage
