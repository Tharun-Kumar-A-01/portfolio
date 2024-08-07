"use client";
import { Work_Sans } from "next/font/google";
import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento";
import {
	IconBrandReact,
	IconBrandGithub,
	IconCertificate,
	IconLetterE,
	IconLetterM,
	IconLetterN,
	IconMail,
	IconBrandAngular,
	IconStack2,
	IconGizmo,
	IconLink,
	IconBrandInstagram,
	IconBrandX,
	IconBrandLinkedin,
	IconBrandLeetcode,
	IconBrandStackoverflow,
	IconBrandGoogle,
	IconCopy,
	IconCheck,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Arial } from "../../app/page";

const workSans = Work_Sans({
	subsets: ["latin"],
	weight: ["400", "700"],
});

const AboutBento = () => {
	return (
		<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					className={cn("[&>p:text-lg]", item.className)}
					icon={item.icon}
				/>
			))}
		</BentoGrid>
	);
};

const SkeletonOne = () => {
	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className=" flex flex-1 w-full justify-center h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col "
		>
			<h1 className={`${Arial.className} text-xl font-bold tracking-wide`}>
				B.TECH
			</h1>
			<h1
				className={`${Arial.className} font-bold text-[2.5rem] md:text-[2.25rem] lg:text-[2.5rem] text-4xl text-[#d1d1d1]`}
			>
				Information Technology
			</h1>
		</motion.div>
	);
};
const SkeletonTwo = () => {
	const variants = {
		initial: {
			backgroundPosition: "0 50%",
		},
		animate: {
			backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
		},
	};
	return (
		<motion.div
			initial="initial"
			animate="animate"
			className="flex items-center justify-center flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col"
		>
			<motion.div>
				<motion.p
					className={`${Arial.className} text-black font-bold text-[2.5rem] text-4xl py-3 px-4 rounded-lg w-fit`}
					style={{
						background:
							"linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
						backgroundSize: "400% 400%",
					}}
					variant={variants}
				>
					#Intern
				</motion.p>
			</motion.div>
		</motion.div>
	);
};
const SkeletonThree = () => {
	const variants = {
		initial: {
			rotate: 0,
		},
		animate: {
			rotate: "90deg",
			transition: "0.2s all ease",
		},
	};
	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="relative flex flex-row items-center justify-center gap-1  w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2]"
			// style={{
			// 	background:
			// 		"linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
			// 	backgroundSize: "400% 400%",
			// }}
		>
			<motion.div className="h-full w-full rounded-lg flex flex-row items-center justify-center">
				<IconLetterM className="h-10 w-10 " />
				<IconLetterE className="h-10 w-10" />
				<motion.div variants={variants} className="w-fit">
					<IconBrandReact className="text-sky-400 h-10 w-10" />
				</motion.div>
				<IconLetterN className="h-10 w-10" />
			</motion.div>
		</motion.div>
	);
};

const SkeletonFour = () => {
	const classlist = `${workSans.className} flex flex-row p-2 text-xs bg-black cursor-pointer border border-gray-600 hover:border-blue-500 transition-duration-100 transition-all rounded-xl h-10 items-center justify-center gap-2`;
	return (
		<motion.div className="flex flex-wrap justify-center content-center items-center gap-2 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row">
			<Link href="https://github.com/Tharun-Kumar-A-01">
				<div className={classlist}>
					<IconBrandGithub /> Tharun-Kumar-A-01
				</div>
			</Link>
			<Link href="https://www.linkedin.com/in/-a-tharun-kumar-/">
				<div className={classlist}>
					<IconBrandLinkedin /> -a-tharun-kumar-
				</div>
			</Link>
			<Link href="https://x.com/@A_TK_08">
				<div className={classlist}>
					<IconBrandX /> A_TK_08
				</div>
			</Link>
			<Link href="https://stackoverflow.com/users/23519630/tharun-kumar">
				<div className={classlist}>
					<IconBrandStackoverflow /> tharun-kumar
				</div>
			</Link>
			<Link href="https://leetcode.com/u/Tharun_Kumar_A/">
				<div className={classlist}>
					<IconBrandLeetcode /> Tharun_Kumar_A
				</div>
			</Link>
			<Link href="https://g.dev/Tharun-Kumar-A">
				<div className={classlist}>
					<IconBrandGoogle />
					Tharun-Kumar-A
				</div>
			</Link>
			<Link href="https://instagram.com/@tharun_kumar_.a">
				<div className={classlist}>
					<IconBrandInstagram /> tharun_kumar_.a
				</div>
			</Link>
		</motion.div>
	);
};

const SkeletonFive = () => {
	const [copy, setcopy] = React.useState(false);
	const email = "tharun.kumar.a.2006@gmail.com";
	const handleCopy = () => {
		navigator.clipboard.writeText(email);
		setcopy(true);
		setTimeout(() => {
			setcopy(false);
		}, 3000);
	};

	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex items-center justify-center w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
		>
			<div className="flex md:hidden lg:flex flex-row items-center justify-center gap-0 w-full">
				<p
					className={`${workSans.className} p-3 text-xs rounded-l-lg flex items-center justify-center bg-black border border-gray-800`}
				>
					tharun.kumar.a.2006@gmail.com
				</p>
				<button
					onClick={handleCopy}
					className=" px-2 py-3 flex items-center justify-center bg-gray-800 border border-gray-800 rounded-r-lg"
				>
					{copy ? (
						<IconCheck className="h-4 text-green-400" />
					) : (
						<IconCopy className="h-4 text-gray-400" />
					)}
				</button>
			</div>

			<div className=" text-sm p-2 hidden md:flex lg:hidden  flex-row items-center justify-center gap-0 w-full">
				<p
					className={`${workSans.className} p-3 text-xs rounded-l-lg flex items-center justify-center bg-black border border-gray-800`}
				>
					Copy Email
				</p>
				<button
					onClick={handleCopy}
					className=" px-2 py-3 flex items-center justify-center bg-gray-800 border border-gray-800 rounded-r-lg"
				>
					{copy ? (
						<IconCheck className="h-4 text-green-400" />
					) : (
						<IconCopy className="h-4 text-gray-400" />
					)}
				</button>
			</div>
		</motion.div>
	);
};

const items = [
	{
		title: "B.Tech IT Student",
		description: (
			<span className="text-sm">
				I am an IT student from Jaya Engineering College.
			</span>
		),
		header: <SkeletonOne />,
		className: "md:col-span-1",
		icon: <IconCertificate className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "Open for Internships",
		description: (
			<span className="text-sm">
				I am currently open for Internship offers on Web Development.
			</span>
		),
		header: <SkeletonTwo />,
		className: "md:col-span-1",
		icon: <IconGizmo className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "Familiar with MERN stack",
		description: (
			<span className="text-sm">
				I am familiar with MERN stack and JS frameworks such as NextJS.
			</span>
		),
		header: <SkeletonThree />,
		className: "md:col-span-1",
		icon: <IconStack2 className="h-4 w-4 text-neutral-500" />,
	},
	{
		title: "My Coding Profile",
		description: (
			<span className="text-sm">
				I am very intrested in coding competetions, Hackathons and Challenges.
			</span>
		),
		header: <SkeletonFour />,
		className: "md:col-span-2",
		icon: <IconLink className="h-4 w-4 text-neutral-500" />,
	},

	{
		title: "Contact Me by Email",
		description: (
			<span className="text-sm">
				If you have any further enquiries please contact me by Email.
			</span>
		),
		header: <SkeletonFive />,
		className: "md:col-span-1",
		icon: <IconMail className="h-4 w-4 text-neutral-500" />,
	},
];

export default AboutBento;
