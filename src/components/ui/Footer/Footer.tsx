import Logo from '@/shared/images/Logo.svg'
import TelegramSymbol from '@/shared/images/Telegram-Symbol.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Footer.module.css'

const Footer: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperContent}>
				<div className={styles.wrapperLogoContent}>
					<Link href='/'>
						<Image src={Logo} alt='Логотип' className={styles.logo} />
					</Link>
					<div className={styles.wrapperComponents}>
						<Link href='/services'>
							<p className={styles.componentText}>Сервисы</p>
						</Link>

						<Link href='/cases'>
							<p className={styles.componentText}>Кейсы</p>
						</Link>
						<Link href='/plans'>
							<p className={styles.componentText}>Тарифы</p>
						</Link>
						<Link href='/team'>
							<p className={styles.componentText}>Компания</p>
						</Link>
					</div>
				</div>
				<div className={styles.wrapperConfEmail}>
					{/* <div className={styles.wrapperConf}>
						<h3 className={styles.confTitle}>Политика конфиденциальности</h3>
						<p className={styles.confText}>Как мы обрабатываем данные</p>
					</div> */}
					<div className={styles.wrapperConf}>
						<h3 className={styles.confTitle}>Написать нам</h3>
						<p className={styles.confText}>hey@aski.site</p>
					</div>
				</div>
			</div>
			<div className={styles.wrapperFooter}>
				<div className={styles.line}></div>
				<div className={styles.wrapperLinks}>
					<p className={styles.linksText}>© 2025 | aski ai</p>
					<Link href='https://t.me/AskiAl'>
						<Image
							src={TelegramSymbol}
							alt='Перейти в телеграм'
							className={styles.linkTelegram}
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Footer
