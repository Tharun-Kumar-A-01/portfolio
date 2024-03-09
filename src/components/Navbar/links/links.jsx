'use client'

import { useState } from 'react';
import styles from './links.module.css'
import NavLink from "./navLink/NavLink";

const links = [
	{
		title:"Homepage",
		path:"/",
	},
	{
		title:"Blog",
		path:"/blog",
	},
	{
		title:"About",
		path:"/about",
	},
	{
		title:"Contact",
		path:"/contact",
	},
];

const Links = () => {

	const [open,setOpen] = useState(false)


	const session = true
	const isAdmin = true

	return(
		<div className={styles.container}>
			<div className = {styles.links}>
				{links.map( (link => (
					<NavLink item={link} key={link.title}/>
				)))}
				{ session ? (
					<>
					{isAdmin && <NavLink className={styles.admin} item={{title:"Admin", path:"/admin"}}/>}
					<button className={styles.logout}>Log out</button>
					</>
				):(
					<NavLink item={{title:"Login", path:"/login"}}/>
					)
				}
			</div>
			<button onClick ={()=>setOpen(prev=>!prev)} className={styles.menuBtn}>
				<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"/></svg>

			</button>
			{
				open && <div className={styles.mobileLinks}>
					{links.map( (link => (
					<NavLink item={link} key={link.title}/>
				)))}{ session ? (
					<>
					{isAdmin && <NavLink item={{title:"Admin", path:"/admin"}}/>}
					<button className={styles.logout}>Log out</button>
					</>
				):(
					<NavLink item={{title:"Login", path:"/login"}}/>
					)
				}
				</div>
			}
		</div>
	)
}

export default Links;