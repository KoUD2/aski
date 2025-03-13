import Footer from '@/components/ui/Footer/Footer'
import askiFav from '@/shared/images/askiFav.png'
import GoogleMeat from '@/shared/images/GoogleMeat.png'
import mts from '@/shared/images/mts.png'
import SberJazz from '@/shared/images/SberJazz.png'

import Teams from '@/shared/images/Teams.png'
import Tele from '@/shared/images/Tele.png'
import zoomI from '@/shared/images/zoomI.png'
import Image from 'next/image'
import { FC } from 'react'
import HeaderSection from '../MainPage/ui/HeaderSection/HeaderSection'
import Review from './Review/Review'
import styles from './ServicesPage.module.css'

const ServicesPage: FC = () => {
	return (
		<div className={styles.wrapper}>
			<HeaderSection
				isMainPage={false}
				title='Сервисы'
				desc='Узнайте, что мы предлагаем, чтобы сделать командную работу продуктивнее'
				isTarification={true}
				className={styles.desc}
			/>

			<div className={styles.wrapperContent}>
				<div className={styles.wrapperCardContent}>
					<div className={styles.wrapperDesc}>
						<h1 className={styles.mainTitle}>
							Фиксация в сервисах для видеовстреч
						</h1>
						<p className={styles.mainDesc}>
							Забудьте о ручной записи! Aski обеспечивает точную (до 98%)
							транскрибацию всех ваших видеоконференций
						</p>
					</div>
					<div className={styles.warapperImages}>
						<div className={styles.warapperImagesContentActive}>
							<div className={styles.warapperImagesContent}>
								<Image src={Tele} alt='' className={styles.imageCrm} />
								<p className={styles.textCrm}>Телемост</p>
							</div>
						</div>
						<div className={styles.warapperImagesContent}>
							<Image src={SberJazz} alt='' className={styles.imageCrm} />
							<p className={styles.textCrm}>SberJazz</p>
						</div>
						<div className={styles.warapperImagesContent}>
							<Image src={GoogleMeat} alt='' className={styles.imageCrm} />
							<p className={styles.textCrm}>Google Meat</p>
						</div>
						<div className={styles.warapperImagesContent}>
							<Image src={Teams} alt='' className={styles.imageCrm} />
							<p className={styles.textCrm}>Teams</p>
						</div>
						<div className={styles.warapperImagesContent}>
							<Image src={mts} alt='' className={styles.imageCrm} />
							<p className={styles.textCrm}>МТС ЛИНК</p>
						</div>
						<div className={styles.warapperImagesContent}>
							<Image src={zoomI} alt='' className={styles.imageCrm} />
							<p className={styles.textCrm}>Zoom</p>
						</div>
					</div>
				</div>

				<div className={styles.wrapperCard2Card3}>
					<div className={styles.wrapperCard2}>
						<div className={styles.wrapperDesc}>
							<h1 className={styles.mainTitle}>Aski AI</h1>
							<p className={styles.mainDesc}>
								Интеллектуальный чат-бот Aski AI. Задайте любой вопрос по
								прошедшей коммуникации и получите мгновенный ответ с точной
								цитатой из транскрипта
							</p>
						</div>

						<Image src={askiFav} alt='' className={styles.imageCard2} />
					</div>

					<div className={styles.wrapperCard3}>
						<div className={styles.wrapperDesc}>
							<h1 className={styles.mainTitle}>Планирование встреч</h1>
							<p className={styles.mainDesc}>
								Забудьте о долгих переписках для согласования времени! Aski
								автоматически сгенерирует ссылку на встречу и отправит
								её участникам за 15 минут до встречи
							</p>
						</div>
					</div>
				</div>

				<Review />

				<div className={styles.wrapperCard7Card8}>
					<div className={styles.wrapperCard7}>
						<div className={styles.wrapperDesc}>
							<h1 className={styles.mainTitle}>Интеграция с Notion</h1>
							<p className={styles.mainDesc}>
								Автоматически переносите задачи, краткие выжимки и транскрипты
								встреч из Aski в другие сервисы
							</p>
						</div>
					</div>

					<div className={styles.wrapperCard7}>
						<div className={styles.wrapperDesc}>
							<h1 className={styles.mainTitle}>База знаний</h1>
							<p className={styles.mainDesc}>
								Единая база знаний вашего бизнеса. Все ваши записи со встреч
								собраны в одном месте с удобной системой фильтров
							</p>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	)
}

export default ServicesPage
