"use client"

import  styles  from "./not-found.module.css";
import { DM_Sans } from 'next/font/google'
import Link from "next/link";

const dmSansBold = DM_Sans({ weight: '700', subsets: ['latin'] });

const Notfound = () => {
	return(
		
		<div className={styles.mainContainer}>
			<div className={styles.textContainer}>
				<h1 className={styles.oops} style={dmSansBold.style}>Oops!</h1>
				<p className={styles.notfoundtext}>The Page You are searching for <br/> doesn&lsquo;t exist</p>
				<button className = {styles.btn}></button>
			</div>
			<div className={styles.svgContainer}>
				<svg  className={styles.svg404} width="383" height="194" viewBox="0 0 383 194" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="404" filter="url(#filter0_i_1_16)"><path d="M97.64 185.11L77.12 165.54V118.8L97.64 100.18V185.11ZM22.97 107.02C18.5367 103.473 14.04 99.99 9.48 96.57L22.97 86.5H74.84L88.14 96.57L74.84 107.02H22.97ZM0.360002 93.53V8.59999L20.88 27.03V74.15L0.360002 93.53ZM97.07 8.59999V93.53L76.55 75.1V28.17L97.07 8.59999ZM149.093 193.47L168.663 172.95H215.593L234.023 193.47H149.093ZM143.393 100.18L163.913 119.94V166.49L143.393 185.11V100.18ZM240.103 185.11L219.583 165.54V118.8L240.103 100.18V185.11ZM148.903 0.429994H233.833L215.023 20.95H168.473L148.903 0.429994ZM142.823 93.53V8.59999L163.343 27.03V74.15L142.823 93.53ZM239.533 8.59999V93.53L219.013 75.1V28.17L239.533 8.59999ZM382.566 185.11L362.046 165.54V118.8L382.566 100.18V185.11ZM307.896 107.02C303.462 103.473 298.966 99.99 294.406 96.57L307.896 86.5H359.766L373.066 96.57L359.766 107.02H307.896ZM285.286 93.53V8.59999L305.806 27.03V74.15L285.286 93.53ZM381.996 8.59999V93.53L361.476 75.1V28.17L381.996 8.59999Z" fill="url(#paint0_linear_1_16)"/></g><defs><filter id="filter0_i_1_16" x="0.360001" y="0.429993" width="387.206" height="200.04" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="5" dy="7"/><feGaussianBlur stdDeviation="5.95"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.49 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_16"/></filter><linearGradient id="paint0_linear_1_16" x1="7.00001" y1="-17" x2="406.827" y2="169.331" gradientUnits="userSpaceOnUse"><stop offset="0.253143" stop-color="#07B4FF"/><stop offset="1" stop-color="#1771F9"/></linearGradient></defs></svg>
				<svg  className={styles.svg888} width="383" height="194" viewBox="0 0 383 194" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="888" d="M6.63 193.47L26.2 172.95H73.13L91.56 193.47H6.63ZM0.93 100.18L21.45 119.94V166.49L0.93 185.11V100.18ZM97.64 185.11L77.12 165.54V118.8L97.64 100.18V185.11ZM22.97 107.02C18.5367 103.473 14.04 99.99 9.48 96.57L22.97 86.5H74.84L88.14 96.57L74.84 107.02H22.97ZM6.44 0.429994H91.37L72.56 20.95H26.01L6.44 0.429994ZM0.360002 93.53V8.59999L20.88 27.03V74.15L0.360002 93.53ZM97.07 8.59999V93.53L76.55 75.1V28.17L97.07 8.59999ZM149.093 193.47L168.663 172.95H215.593L234.023 193.47H149.093ZM143.393 100.18L163.913 119.94V166.49L143.393 185.11V100.18ZM240.103 185.11L219.583 165.54V118.8L240.103 100.18V185.11ZM165.433 107.02C161 103.473 156.503 99.99 151.943 96.57L165.433 86.5H217.303L230.603 96.57L217.303 107.02H165.433ZM148.903 0.429994H233.833L215.023 20.95H168.473L148.903 0.429994ZM142.823 93.53V8.59999L163.343 27.03V74.15L142.823 93.53ZM239.533 8.59999V93.53L219.013 75.1V28.17L239.533 8.59999ZM291.556 193.47L311.126 172.95H358.056L376.486 193.47H291.556ZM285.856 100.18L306.376 119.94V166.49L285.856 185.11V100.18ZM382.566 185.11L362.046 165.54V118.8L382.566 100.18V185.11ZM307.896 107.02C303.462 103.473 298.966 99.99 294.406 96.57L307.896 86.5H359.766L373.066 96.57L359.766 107.02H307.896ZM291.366 0.429994H376.296L357.486 20.95H310.936L291.366 0.429994ZM285.286 93.53V8.59999L305.806 27.03V74.15L285.286 93.53ZM381.996 8.59999V93.53L361.476 75.1V28.17L381.996 8.59999Z" fill="#B4B4B4" fill-opacity="0.05"/></svg>
			</div>
		</div>
	)
}

export default Notfound;