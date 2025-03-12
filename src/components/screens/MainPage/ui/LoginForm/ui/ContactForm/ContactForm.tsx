'use client'

import CaretDownMD from '@/shared/images/Caret_Down_MD.svg'
import EmailSymbol from '@/shared/images/EmailSymbol.svg'
import TelegramSymbol from '@/shared/images/TelegramSymbol.svg'
import WhatsAppSymbol from '@/shared/images/WhatsAppSymbol.svg'
import cn from 'classnames'
import Image from 'next/image'
import { useState } from 'react'
import styles from './ContactForm.module.css'

const ContactForm = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [name, setName] = useState('')
	const [selectedMethod, setSelectedMethod] = useState('Как с вами связаться?')
	const [contactValue, setContactValue] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const contactMethods = [
		{
			name: 'Telegram',
			icon: TelegramSymbol,
			value: 'telegram',
			className: styles.telegramBtn,
		},
		{
			name: 'WhatsApp',
			icon: WhatsAppSymbol,
			value: 'whatsapp',
			className: styles.whatsappBtn,
		},
		{
			name: 'Email',
			icon: EmailSymbol,
			value: 'email',
			className: styles.emailBtn,
		},
	]

	const contactTypeMapping: Record<string, string> = {
		Telegram: 'telegram',
		WhatsApp: 'whatsapp',
		Email: 'email',
	}

	const isPhoneField =
		selectedMethod === 'Telegram' || selectedMethod === 'WhatsApp'
	const isEmailField = selectedMethod === 'Email'

	const handleSubmit = async () => {
		if (!name.trim() || !selectedMethod || !contactValue.trim()) return

		const contact_type = contactTypeMapping[selectedMethod] || ''
		const data = { name, contact_type, contact_data: contactValue }

		try {
			setIsLoading(true)
			const response = await fetch(
				'http://aski.site/basics/form_landing/new_data',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(data),
				}
			)

			if (!response.ok) throw new Error('Ошибка отправки данных')

			await response.json()

			setName('')
			setSelectedMethod('Как с вами связаться?')
			setContactValue('')
		} catch (error) {
			console.error(error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.formContainer}>
				<input
					type='text'
					placeholder='Имя'
					className={styles.inputField}
					value={name}
					onChange={e => setName(e.target.value)}
				/>

				<button
					className={styles.dropdownBtn}
					onClick={() => setIsOpen(!isOpen)}
				>
					<p className={styles.dropdownText}>{selectedMethod}</p>
					<Image
						src={CaretDownMD}
						alt=''
						className={cn(styles.dropdownImg, { [styles.imgUp]: isOpen })}
					/>
				</button>

				{isOpen && (
					<div className={styles.dropdownMenu}>
						{contactMethods.map(method => (
							<button
								key={method.value}
								className={cn(styles.dropdownItem, method.className)}
								onClick={() => {
									setSelectedMethod(method.name)
									setContactValue('')
									setIsOpen(false)
								}}
							>
								<Image src={method.icon} alt='' className={styles.icon} />
								<p className={styles.iconText}>{method.name}</p>
							</button>
						))}
					</div>
				)}

				{(isPhoneField || isEmailField) && (
					<input
						type={isEmailField ? 'email' : 'tel'}
						placeholder={
							selectedMethod === 'Telegram'
								? 'Ник в телеграм'
								: selectedMethod === 'Email'
								? 'Почта'
								: selectedMethod === 'WhatsApp'
								? 'Телефон'
								: ''
						}
						className={styles.inputField}
						value={contactValue}
						onChange={e => setContactValue(e.target.value)}
					/>
				)}
			</div>

			<button
				className={styles.submitBtn}
				onClick={handleSubmit}
				disabled={isLoading}
			>
				{isLoading ? 'Отправка...' : 'Оставить заявку'}
			</button>
		</div>
	)
}

export default ContactForm
