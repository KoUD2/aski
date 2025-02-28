import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
import styles from './TextBack.module.css'

interface ITextBack {
	path: string | StaticImageData
	text: string
}

const TextBack: FC<ITextBack> = ({ path, text }) => {
	return (
		<div className={styles.wrapper}>
			<Image src={path} alt='' className={styles.img} />
			<p className={styles.text}>{text}</p>
		</div>
	)
}

export default TextBack
