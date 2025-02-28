import AvatarC from '@/shared/images/AvatarC.png'
import Logo from '@/shared/images/Logo.svg'
import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Layout.module.css'

const Layout: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.wrapperHead}>
				<Image src={Logo} alt='Логотип' className={styles.logo} />
				<div className={styles.wrapperLinks}>
					<div className={styles.wrapperLink}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='18'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
							className={styles.icon}
						>
							<path
								d='M15.0027 12.1406V8.21033C15.0027 7.8318 15.0024 7.64242 14.9564 7.46628C14.9156 7.31018 14.8486 7.16247 14.758 7.02898C14.6557 6.87835 14.5136 6.75344 14.2287 6.50417L10.8283 3.5288C10.2994 3.066 10.0349 2.83472 9.73728 2.7467C9.47503 2.66915 9.1955 2.66915 8.93325 2.7467C8.63585 2.83465 8.37178 3.06572 7.84366 3.52782L4.44211 6.50417C4.15723 6.75344 4.01512 6.87835 3.91287 7.02898C3.82226 7.16247 3.75478 7.31018 3.714 7.46628C3.66797 7.64242 3.66797 7.83179 3.66797 8.21033V12.1406C3.66797 12.8008 3.66797 13.1307 3.77582 13.3911C3.91962 13.7383 4.19526 14.0144 4.54243 14.1582C4.8028 14.2661 5.13288 14.2661 5.79305 14.2661C6.45321 14.2661 6.78366 14.2661 7.04404 14.1582C7.3912 14.0144 7.66677 13.7383 7.81057 13.3912C7.91842 13.1308 7.91849 12.8007 7.91849 12.1405V11.4321C7.91849 10.6496 8.55284 10.0153 9.33534 10.0153C10.1178 10.0153 10.7522 10.6496 10.7522 11.4321V12.1405C10.7522 12.8007 10.7522 13.1308 10.86 13.3912C11.0038 13.7383 11.2795 14.0144 11.6266 14.1582C11.887 14.2661 12.2171 14.2661 12.8773 14.2661C13.5374 14.2661 13.8679 14.2661 14.1282 14.1582C14.4754 14.0144 14.751 13.7383 14.8948 13.3911C15.0026 13.1307 15.0027 12.8008 15.0027 12.1406Z'
								stroke='white'
								strokeWidth='1.06263'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<p className={cn(styles.linkText, styles.linkTextActive)}>
							Главная
						</p>
					</div>
					<div className={styles.wrapperLink}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='18'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
							className={styles.icon}
						>
							<path
								d='M2.96094 5.06152H6.5697C6.80372 5.06152 6.92024 5.06152 7.02538 5.0951C7.11843 5.12481 7.20453 5.17344 7.27788 5.23794C7.36076 5.31082 7.42106 5.41119 7.54146 5.61186L11.1316 11.5955C11.252 11.7961 11.3123 11.8963 11.3952 11.9692C11.4685 12.0337 11.5544 12.0825 11.6474 12.1122C11.7525 12.1457 11.8703 12.1457 12.104 12.1457H15.7128M11.462 5.06152H15.7125'
								stroke='#858585'
								strokeWidth='1.06263'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<p className={styles.linkText}>Интеграции</p>
					</div>
					<div className={styles.wrapperLink}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='18'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
							className={styles.icon}
						>
							<path
								d='M2.96094 7.89942V13.8502C2.96094 14.2469 2.96094 14.4449 3.03815 14.5965C3.10607 14.7298 3.21437 14.8386 3.34766 14.9065C3.49905 14.9836 3.69699 14.9836 4.09297 14.9836L11.7463 14.9836C12.1423 14.9836 12.341 14.9836 12.4924 14.9065C12.6257 14.8386 12.7334 14.7301 12.8013 14.5968C12.8786 14.4452 12.8786 14.2468 12.8786 13.8501L12.8796 10.7335M2.96094 7.89942H7.91988M2.96094 7.89942L2.96094 7.61612C2.96094 7.21944 2.96094 7.02083 3.03815 6.86931C3.10606 6.73601 3.21437 6.6277 3.34766 6.55979C3.49918 6.48259 3.69752 6.48259 4.09413 6.48259L5.79462 6.48258M7.91988 7.89942H11.7453C12.1421 7.89942 12.3419 7.89942 12.4934 7.97664C12.6267 8.04455 12.7334 8.15285 12.8013 8.28615C12.8786 8.43769 12.8786 8.63606 12.8786 9.03282L12.8796 10.7335M7.91988 7.89942L7.15819 6.92015C7.03338 6.75968 6.97072 6.67912 6.89253 6.62129C6.82326 6.57005 6.74605 6.53202 6.66307 6.50879C6.56944 6.48259 6.46677 6.48259 6.26353 6.48259L5.79462 6.48258M5.79462 3.6489H14.579C14.9758 3.6489 15.1755 3.6489 15.3271 3.72611C15.4604 3.79403 15.5671 3.90233 15.635 4.03562C15.7122 4.18716 15.7122 4.38554 15.7122 4.78229V9.59956C15.7122 9.99632 15.7122 10.1947 15.635 10.3462C15.5671 10.4795 15.4598 10.588 15.3265 10.656C15.1751 10.7331 14.9767 10.7331 14.5807 10.7331L12.8796 10.7335M5.79462 3.6489V6.48258M5.79462 3.6489L5.79462 3.3656C5.79462 2.96891 5.79462 2.77031 5.87183 2.61878C5.93975 2.48548 6.04805 2.37719 6.18135 2.30927C6.33289 2.23206 6.53106 2.23206 6.92782 2.23206H9.09694C9.30038 2.23206 9.40142 2.23206 9.4951 2.25828C9.57808 2.2815 9.65694 2.31952 9.72622 2.37077C9.8044 2.42859 9.86706 2.50915 9.99188 2.66963L10.7535 3.64888'
								stroke='#858585'
								strokeWidth='1.06263'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<p className={styles.linkText}>Мои встречи</p>
					</div>
					<div className={styles.wrapperLink}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='18'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
							className={styles.icon}
						>
							<g clipPath='url(#clip0_366_1679)'>
								<path
									d='M3.66797 5.77836H15.0027M3.66797 5.77836V12.0126C3.66797 12.8061 3.66797 13.2026 3.8224 13.5057C3.95823 13.7723 4.17482 13.9893 4.44142 14.1251C4.7442 14.2794 5.14077 14.2794 5.93273 14.2794H12.7379C13.5299 14.2794 13.9259 14.2794 14.2287 14.1251C14.4953 13.9893 14.7126 13.7723 14.8484 13.5057C15.0027 13.2029 15.0027 12.8069 15.0027 12.015V5.77836M3.66797 5.77836V5.21176C3.66797 4.41825 3.66797 4.0212 3.8224 3.71813C3.95823 3.45153 4.17482 3.23494 4.44142 3.0991C4.7445 2.94467 5.14155 2.94467 5.93505 2.94467H6.50165M15.0027 5.77836V5.20943C15.0027 4.41748 15.0027 4.02091 14.8484 3.71813C14.7126 3.45153 14.4953 3.23494 14.2287 3.0991C13.9256 2.94467 13.5294 2.94467 12.7359 2.94467H12.169M6.50165 2.94467H12.169M6.50165 2.94467V1.52783M12.169 2.94467V1.52783M9.15823 11.4457C9.25604 11.4457 9.33534 11.3664 9.33534 11.2686V8.78915C9.33534 8.69133 9.25604 8.61204 9.15823 8.61204H6.67876C6.58094 8.61204 6.50165 8.69133 6.50165 8.78915V11.2686C6.50165 11.3664 6.58094 11.4457 6.67876 11.4457H9.15823Z'
									stroke='#858585'
									strokeWidth='1.06263'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</g>
							<defs>
								<clipPath id='clip0_366_1679'>
									<rect
										width='17.0021'
										height='17.0021'
										fill='white'
										transform='translate(0.835938 0.110962)'
									/>
								</clipPath>
							</defs>
						</svg>
						<p className={styles.linkText}>Запланированные встречи</p>
					</div>
					<div className={styles.wrapperLink}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='18'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
							className={styles.icon}
						>
							<path
								d='M12.1706 6.49094L8.39239 10.7415L6.50304 8.6162M2.96094 12.7252V4.5075C2.96094 3.714 2.96094 3.31695 3.11536 3.01387C3.2512 2.74727 3.46779 2.53068 3.73439 2.39484C4.03747 2.24042 4.43452 2.24042 5.22802 2.24042H13.4457C14.2392 2.24042 14.6354 2.24042 14.9385 2.39484C15.2051 2.53068 15.4224 2.74727 15.5582 3.01387C15.7125 3.31665 15.7125 3.71322 15.7125 4.50518V12.7276C15.7125 13.5195 15.7125 13.9155 15.5582 14.2183C15.4224 14.4849 15.2051 14.7019 14.9385 14.8377C14.6357 14.992 14.2397 14.992 13.4478 14.992H5.2257C4.43374 14.992 4.03717 14.992 3.73439 14.8377C3.46779 14.7019 3.2512 14.4849 3.11536 14.2183C2.96094 13.9152 2.96094 13.5187 2.96094 12.7252Z'
								stroke='#858585'
								strokeWidth='1.06263'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<p className={styles.linkText}>Подписка</p>
					</div>
					<div className={styles.wrapperLink}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='18'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
							className={styles.icon}
						>
							<path
								d='M15.2506 6.43919L14.9912 6.29486C14.9509 6.27245 14.9311 6.26121 14.9116 6.24955C14.7182 6.13366 14.5551 5.97355 14.4361 5.78199C14.4241 5.76271 14.4129 5.7425 14.3898 5.70255C14.3667 5.66265 14.3551 5.64243 14.3443 5.62242C14.2376 5.42312 14.1799 5.20103 14.1764 4.97498C14.1761 4.95225 14.1761 4.92903 14.1769 4.88287L14.182 4.5816C14.1901 4.09951 14.1942 3.85771 14.1264 3.64071C14.0662 3.44796 13.9656 3.27042 13.8311 3.11976C13.6791 2.94945 13.4688 2.82795 13.0476 2.58526L12.6978 2.38367C12.2778 2.14166 12.0678 2.02061 11.8448 1.97446C11.6475 1.93364 11.444 1.93553 11.2474 1.97965C11.0256 2.02945 10.8182 2.15366 10.4036 2.40192L10.4012 2.40305L10.1505 2.55313C10.1109 2.57686 10.0908 2.58883 10.071 2.59987C9.87385 2.70948 9.65376 2.77008 9.42832 2.77732C9.4056 2.77805 9.38249 2.77805 9.33627 2.77805C9.29034 2.77805 9.26624 2.77805 9.24357 2.77732C9.01764 2.77005 8.7971 2.70912 8.59966 2.59906C8.57976 2.58796 8.56007 2.57591 8.52036 2.55206L8.26811 2.40062C7.85066 2.15001 7.64162 2.02451 7.41856 1.97446C7.22121 1.93019 7.01695 1.92896 6.81897 1.97031C6.59543 2.017 6.38532 2.13895 5.96509 2.38284L5.96323 2.38367L5.61775 2.58418L5.61393 2.58652C5.19749 2.82822 4.98877 2.94936 4.83808 3.11897C4.70435 3.26948 4.6044 3.44674 4.54458 3.63898C4.47696 3.85627 4.48056 4.09859 4.48871 4.58296L4.49377 4.8838C4.49454 4.92936 4.49587 4.95199 4.49553 4.9744C4.49218 5.20091 4.43368 5.42346 4.32663 5.62311C4.31604 5.64285 4.30464 5.6626 4.28186 5.70204C4.25906 5.7415 4.24802 5.76113 4.2362 5.78018C4.11667 5.97276 3.95286 6.13381 3.75819 6.2499C3.73893 6.26138 3.71863 6.27242 3.67876 6.29452L3.42262 6.43646C2.99646 6.67263 2.78342 6.79081 2.62841 6.959C2.49128 7.10779 2.38769 7.28428 2.32445 7.47649C2.25297 7.69376 2.25303 7.9374 2.25414 8.42462L2.25504 8.82284C2.25614 9.30682 2.25765 9.54864 2.32929 9.76444C2.39267 9.95536 2.49551 10.1308 2.63187 10.2787C2.78601 10.4459 2.99692 10.5633 3.41985 10.7986L3.67371 10.9398C3.71691 10.9638 3.73865 10.9757 3.75948 10.9883C3.9524 11.1044 4.11492 11.265 4.23343 11.4565C4.24623 11.4772 4.25852 11.4987 4.2831 11.5416C4.30737 11.584 4.31979 11.6052 4.33102 11.6265C4.43492 11.8232 4.49056 12.0418 4.49435 12.2642C4.49476 12.2882 4.49441 12.3126 4.49358 12.3614L4.48871 12.6501C4.4805 13.1361 4.47693 13.3794 4.54495 13.5973C4.60513 13.7901 4.7057 13.9676 4.84015 14.1183C4.99213 14.2886 5.20281 14.41 5.62398 14.6527L5.97373 14.8543C6.39372 15.0963 6.60364 15.2172 6.82661 15.2633C7.02387 15.3041 7.22754 15.3026 7.42409 15.2584C7.64624 15.2086 7.85438 15.0839 8.27018 14.835L8.52084 14.6849C8.56049 14.6611 8.58057 14.6492 8.60044 14.6382C8.79758 14.5286 9.01743 14.4677 9.24288 14.4604C9.2656 14.4597 9.28871 14.4597 9.33493 14.4597C9.38125 14.4597 9.40433 14.4597 9.4271 14.4604C9.65304 14.4677 9.87423 14.5288 10.0717 14.6389C10.089 14.6486 10.1065 14.659 10.137 14.6774L10.4035 14.8374C10.821 15.088 11.0296 15.2131 11.2527 15.2632C11.45 15.3075 11.6544 15.3093 11.8524 15.2679C12.0759 15.2212 12.2864 15.099 12.7064 14.8553L13.0571 14.6518C13.4738 14.4099 13.6827 14.2886 13.8335 14.119C13.9672 13.9685 14.0673 13.7913 14.1271 13.599C14.1942 13.3833 14.1902 13.1429 14.1822 12.6655L14.1769 12.3541C14.1762 12.3086 14.1761 12.2859 14.1764 12.2635C14.1797 12.037 14.2373 11.8143 14.3443 11.6147C14.3549 11.5949 14.3664 11.575 14.3891 11.5357C14.4119 11.4963 14.4237 11.4766 14.4355 11.4575C14.5551 11.265 14.719 11.1038 14.9137 10.9877C14.9327 10.9763 14.9523 10.9655 14.9912 10.9439L14.9926 10.9433L15.2487 10.8014C15.6749 10.5652 15.8883 10.4469 16.0433 10.2787C16.1805 10.1299 16.2839 9.95366 16.3471 9.76146C16.4182 9.54546 16.4177 9.30324 16.4166 8.82171L16.4156 8.41494C16.4145 7.93096 16.4139 7.68917 16.3423 7.47337C16.2789 7.28246 16.1755 7.107 16.0392 6.95911C15.8852 6.79211 15.674 6.67462 15.2518 6.43979L15.2506 6.43919Z'
								stroke='#858585'
								strokeWidth='1.06263'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M6.5019 8.61902C6.5019 10.184 7.77058 11.4527 9.33558 11.4527C10.9006 11.4527 12.1693 10.184 12.1693 8.61902C12.1693 7.05402 10.9006 5.78534 9.33558 5.78534C7.77058 5.78534 6.5019 7.05402 6.5019 8.61902Z'
								stroke='#858585'
								strokeWidth='1.06263'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<p className={styles.linkText}>Настройки</p>
					</div>
					<div className={styles.wrapperLink}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='18'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
							className={styles.icon}
						>
							<path
								d='M7.31523 6.55145C7.43623 6.17862 7.65787 5.84682 7.95586 5.59216C8.25384 5.3375 8.61683 5.17015 9.00396 5.10873C9.3911 5.04731 9.78744 5.09408 10.1496 5.244C10.5118 5.39392 10.8254 5.64123 11.0559 5.9583C11.2863 6.27538 11.4244 6.64989 11.4552 7.04065C11.486 7.43142 11.408 7.82319 11.2301 8.17246C11.0522 8.52173 10.7815 8.81477 10.4473 9.01959C10.113 9.22442 9.7287 9.33282 9.33672 9.33282V10.0416M9.33672 15.0004C5.81547 15.0004 2.96094 12.1458 2.96094 8.62457C2.96094 5.10332 5.81547 2.24878 9.33672 2.24878C12.858 2.24878 15.7125 5.10332 15.7125 8.62457C15.7125 12.1458 12.858 15.0004 9.33672 15.0004ZM9.37201 12.1667V12.2375L9.30144 12.2377V12.1667H9.37201Z'
								stroke='#858585'
								strokeWidth='1.06263'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<p className={styles.linkText}>Поддержка</p>
					</div>
				</div>
			</div>
			<div className={styles.footer}>
				<Image src={AvatarC} alt='Аватар' className={styles.avatar} />
				<div className={styles.naming}>
					<h3 className={styles.name}>Тимофей Арзамасцев </h3>
					<p className={styles.positioning}>СЕО</p>
				</div>
			</div>
		</div>
	)
}

export default Layout
