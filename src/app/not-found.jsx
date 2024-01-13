"use client"

import Link from "next/link";

const Notfound = () => {
	return(
		<div>
			<h2>404 Not found</h2>
			<p>Go to <span> <Link href="/">Homepage</Link></span></p>
		</div>
	)
}

export default Notfound;