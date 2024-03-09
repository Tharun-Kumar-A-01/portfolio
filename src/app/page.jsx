import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
        <p></p>
      </div>
			<div className={styles.imgContainer}>
        <Image src="/light-bulb.png" alt="Creativity" width={300} height={300} />
      </div>
		</div>
	);
}

