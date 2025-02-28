import { FC } from 'react'
import styles from './LoginForm.module.css'
import ContactForm from './ui/ContactForm/ContactForm'

const LoginForm: FC = () => {
	return (
		<div className={styles.wrapper} id='contact'>
			<div className={styles.wrapperAllHeaders}>
				<div className={styles.wrapperTitle}>
					<div className={styles.wrapperTitleSection}>
						<h2 className={styles.title}>Бесплатная консультация</h2>
					</div>
				</div>
				<h1 className={styles.titleSection}>
					Поможем с&nbsp;выбором и&nbsp;ответим на&nbsp;все вопросы
				</h1>
			</div>
			<ContactForm />
		</div>
	)
}

export default LoginForm
