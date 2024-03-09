import  styles  from "./footer.module.css";

const Footer = () => {
	return(
		<div className={styles.container}>
			<div className={styles.main}>

			<div className={styles.copyright} >
				<p>Copyrighted by Tharun Kumar</p>
			</div>
			<div className={styles.social}>
				<ul className={styles.smlist}>
					<li><a href="#">Youtube</a></li>
					<li><a href="#">Instagram</a></li>
					<li><a href="#">Twitter</a></li>
					<li><a href="#">Discord</a></li>
				</ul>
			</div>
			</div>
		</div>
	)
}

export default Footer;