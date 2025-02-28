'use client'

import BookmarkActive from '@/shared/images/BookmarkActive.svg'
import BookmarkInactive from '@/shared/images/BookmarkInactive.svg'
import ChatActive from '@/shared/images/ChatActive.svg'
import ChatInactive from '@/shared/images/ChatInactive.svg'
import FolderActive from '@/shared/images/FolderActive.svg'
import FolderInactive from '@/shared/images/FolderInactive.svg'
import { FC } from 'react'
import styles from './CardsSection.module.css'
import Card from './ui/Card/Card'

interface CardsSectionProps {
	activeIndex: number | null
	dispatch: (action: { type: 'SET_ACTIVE_INDEX'; payload: number }) => void
}

const CardsSection: FC<CardsSectionProps> = ({ activeIndex, dispatch }) => {
	return (
		<div className={styles.cardWrapper}>
			<Card
				path={BookmarkInactive}
				pathActive={BookmarkActive}
				title='Конспект встречи'
				desc='Получайте конспект встречи с ключевыми идеями сразу после созвона'
				isActive={activeIndex === 0}
				onClick={() => dispatch({ type: 'SET_ACTIVE_INDEX', payload: 0 })}
			/>
			<Card
				path={FolderInactive}
				pathActive={FolderActive}
				title='База знаний'
				desc='Собирайте и храните информацию из встреч в едином месте'
				isActive={activeIndex === 1}
				onClick={() => dispatch({ type: 'SET_ACTIVE_INDEX', payload: 1 })}
			/>
			<Card
				path={ChatInactive}
				pathActive={ChatActive}
				title='Любые ответы по прошедшим встречам'
				desc='Уточните детали диалога у Aski AI и получите ответ с точной цитатой'
				isActive={activeIndex === 2}
				onClick={() => dispatch({ type: 'SET_ACTIVE_INDEX', payload: 2 })}
			/>
		</div>
	)
}

export default CardsSection
