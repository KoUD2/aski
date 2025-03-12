'use client'

import './ToggleSwitch.css'

interface ButtonToggleProps {
	isActive: boolean
	onToggle: () => void
	disabled?: boolean
}

export default function ButtonToggle({
	isActive,
	onToggle,
	disabled,
}: ButtonToggleProps) {
	return (
		<button
			className={`toggle ${isActive ? 'enabled' : ''}`}
			onClick={onToggle}
			disabled={disabled}
		>
			<div className='slider'></div>
		</button>
	)
}
