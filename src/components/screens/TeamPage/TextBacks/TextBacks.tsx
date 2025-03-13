'use client'

import useWindowWidth from '@/hooks/useWindowWidth'
import constructorOffer4 from '@/shared/images/constructorOffer4.png'
import constructorOffer5 from '@/shared/images/constructorOffer5.png'
import constructorOfferMobile4 from '@/shared/images/constructorOfferMobile4.png'
import constructorOfferMobile5 from '@/shared/images/constructorOfferMobile5.png'
import { FC } from 'react'
import TextBack from '../../CasesPage/ui/TextBack/TextBack'

const TextBacks: FC = () => {
	const windowWidth = useWindowWidth()

	return (
		<>
			<TextBack
				path={windowWidth > 480 ? constructorOffer4 : constructorOfferMobile4}
				text='Aski — AI-помощник, который зафиксирует всё, что было на созвоне и ответит на любой вопрос по встрече'
			/>
			<TextBack
				path={windowWidth > 480 ? constructorOffer5 : constructorOfferMobile5}
				text='Мы верим в эту технологию и считаем, что за ней стоит будущее, и именно поэтому создали проект Aski'
			/>
		</>
	)
}

export default TextBacks
