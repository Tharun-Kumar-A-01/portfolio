import Links from "./links/links";
import styles from "./navbar.module.css"

const Navbar = () => {
	return(
		<div className = {styles.container}>
			<div className={styles.logo}>T<span className={styles.spot}>K</span></div>
			<div>
				<Links/>
			</div>
		</div>
	)
}

export default Navbar;