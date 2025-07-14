'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { MapPin, Clock, Mail, Phone, X, Calendar } from 'lucide-react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const skills = [
	{ name: 'React', img: '/skills/react.png' },
	{ name: 'Next.js', img: '/skills/nextjs.svg' },
	{ name: 'TypeScript', img: '/skills/ts.png' },
	{ name: 'Tailwind CSS', img: '/skills/tailwind.svg' },
	{ name: 'GraphQL', img: '/skills/graphql.svg' },
	{ name: 'AWS', img: '/skills/aws.svg' },
];

const projects = [
	{
		title: 'Kforce Auto-Reporting Dashboard',
		img: '/projects/kforce.png',
		description: 'Enterprise React + GPT-4 dashboard that reduced manual ops by 50% and improved release cycles.',
		link: 'https://www.kforce.com'
	},
	{
		title: 'VirtualCare Patient Platform',
		img: '/projects/virtualcare.png',
		description: 'Built React UI for a virtual healthcare system with 80K+ MAUs, optimized performance by 35%.',
		link: 'https://www.teladochealth.com'
	},
	{
		title: 'HIPAA Onboarding Portal',
		img: '/projects/hipaa.png',
		description: 'React-based patient intake platform with JWT/OAuth, reduced sign-up errors by 20%.',
		link: 'https://www.optum.com'
	},
	{
		title: 'FieldOps Technician Dashboard',
		img: '/projects/fieldops.webp',
		description: 'Developed React dashboard for 500+ field techs, cut load time from 3.2s to 1.4s.',
		link: 'https://www.teksystems.com'
	}
];

export default function Home() {
	const [showModal, setShowModal] = useState(false);
	const [form, setForm] = useState({ email: '', phone: '', message: '' });

	const validateForm = () => {
		const { email, phone, message } = form;
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!email || !emailRegex.test(email)) {
			toast.error('Please enter a valid email.');
			return false;
		}
		// if (!phone || phone.length < 6) {
		// 	toast.error('Please enter a valid phone number.');
		// 	return false;
		// }
		if (!message || message.trim().length < 5) {
			toast.error('Message must be at least 5 characters.');
			return false;
		}
		return true;
	};

	const handleSend = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) return;

		try {
			await emailjs.send(
				'service_2r9g1eg',
				'template_rdubgjf',
				{ email: form.email, phone: form.phone, message: form.message },
				'rs2RI-Wl0cKiGC6tw'
			);
			toast.success('Message sent successfully!');
			setForm({ email: '', phone: '', message: '' });
			setShowModal(false);
		} catch (err) {
			console.error('Send failed:', err);
			toast.error('Something went wrong. Please try again.');
		}
	};

	return (
		<main className="bg-gray-900 text-white px-4 py-16 space-y-24">
			<Toaster position="top-center" reverseOrder={false} />
			{/* About Me */}
			<motion.section
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 shadow-xl max-w-5xl mx-auto text-center px-8 py-16"
			>
				{/* Glowing Background Overlay */}
				<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/0 rounded-3xl blur-2xl opacity-20 pointer-events-none" />

				{/* Text Content */}
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.8 }}
					className="text-4xl sm:text-5xl font-extrabold text-white bg-clip-text"
				>
					<span className="animate-text-shine bg-gradient-to-r from-white via-cyan-300 to-white bg-[length:200%_auto] bg-clip-text text-transparent">
						Hi, I'm Lawrence — Senior React Developer
					</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.8 }}
					className="mt-6 text-lg sm:text-xl text-gray-100"
				>
					9+ years building scalable, fast, and accessible React/Next.js applications.
					I combine UI/UX detail with systems thinking to deliver clean, maintainable, production-ready code.
				</motion.p>
			</motion.section>

			{/* Skills */}
			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="max-w-7xl mx-auto"
			>
				<h2 className="text-4xl font-bold text-center mb-12">Tech Stack & Skill Sets</h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
					{/* Frontend Dev */}
					<div className="bg-gradient-to-br from-indigo-700/20 to-sky-700/10 rounded-3xl p-6 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-sky-400 transition duration-300">
						<h3 className="text-2xl font-semibold mb-4 text-cyan-300">Frontend Development</h3>
						<ul className="space-y-3 text-white">
							{[
								{ name: 'React.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
								{ name: 'Next.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
								{ name: 'TypeScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
								{ name: 'JavaScript (ES6+)', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
								{
									name: 'Tailwind CSS', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'
								},
								{ name: 'Styled-Components', img: 'https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png' },
							].map((skill, idx) => (
								<li key={idx} className="flex items-center gap-3 hover:translate-x-1 transition-transform">
									<img src={skill.img} alt={skill.name} className="h-6 w-6" />
									<span>{skill.name}</span>
								</li>
							))}
						</ul>
					</div>

					{/* UI/UX & Tools */}
					<div className="bg-gradient-to-br from-purple-700/20 to-pink-700/10 rounded-3xl p-6 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-pink-400 transition duration-300">
						<h3 className="text-2xl font-semibold mb-4 text-pink-300">UI/UX & Design Tools</h3>
						<ul className="space-y-3 text-white">
							{[
								{ name: 'Figma', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
								// { name: 'Storybook', img: 'https://storybook.js.org/images/icon-storybook.svg' },
								{ name: 'Framer Motion', img: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg' },
								{ name: 'Material UI', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
								{ name: 'Ant Design', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg' },
							].map((skill, idx) => (
								<li key={idx} className="flex items-center gap-3 hover:translate-x-1 transition-transform">
									<img src={skill.img} alt={skill.name} className="h-6 w-6" />
									<span>{skill.name}</span>
								</li>
							))}
						</ul>
					</div>

					{/* API & Cloud */}
					<div className="bg-gradient-to-br from-green-700/20 to-emerald-700/10 rounded-3xl p-6 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-emerald-400 transition duration-300">
						<h3 className="text-2xl font-semibold mb-4 text-emerald-300">API / Cloud / DevOps</h3>
						<ul className="space-y-3 text-white">
							{[
								// { name: 'RESTful APIs', img: 'https://img.icons8.com/clouds/100/rest-api.png' },
								{ name: 'GraphQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
								{ name: 'Axios / Fetch API', img: 'https://axios-http.com/assets/logo.svg' },
								{ name: 'AWS', img: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png' },
								{ name: 'Vercel / Netlify', img: 'https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico' },
							].map((skill, idx) => (
								<li key={idx} className="flex items-center gap-3 hover:translate-x-1 transition-transform">
									<img src={skill.img} alt={skill.name} className="h-6 w-6" />
									<span>{skill.name}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</motion.section>


			{/* Professional Experience */}
			<motion.section
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="max-w-7xl mx-auto space-y-10"
			>
				<h2 className="text-3xl font-semibold mb-8 text-center">Professional Experience</h2>

				{[
					{
						company: "Kforce",
						logo: "/agency/1.png",
						title: "Senior React Developer",
						location: "Tampa, FL",
						dates: "Feb 2022 – Present",
						bullets: [
							"Built enterprise-scale React + TypeScript applications, boosting release cycle speed by 30%.",
							"Integrated GPT‑4 for auto‑reporting, cutting manual support by 50%.",
							"Refactored legacy code with Redux Toolkit, reducing bugs by 40%.",
							"Established CI/CD pipelines, trimming deployment time from hours to under 10 minutes.",
							"Mentored junior developers, improving code review efficiency by 60%.",
						],
					},
					{
						company: "Robert Half",
						logo: "/agency/2.png",
						title: "Frontend Developer",
						location: "Menlo Park, CA",
						dates: "Jun 2020 – Jan 2022",
						bullets: [
							"Led UI design for a telehealth platform serving 80,000+ MAUs.",
							"Accelerated frontend load speed by 35% using lazy loading & memoization.",
							"Created Figma-aligned reusable UI library, reducing dev time by 25%.",
							"Visualized patient data with Chart.js, doubling dashboard user engagement.",
						],
					},
					{
						company: "Randstad",
						logo: "/agency/3.png",
						title: "React Developer",
						location: "Atlanta, GA",
						dates: "May 2018 – Jan 2020",
						bullets: [
							"Developed HIPAA-compliant patient onboarding UI, cutting sign‑up errors by 20%.",
							"Implemented secure authentication flows using JWT and OAuth.",
							"Collaborated with backend teams to streamline REST API integration.",
						],
					},
					{
						company: "TEKsystems",
						logo: "/agency/4.png",
						title: "Junior React Developer",
						location: "Hanover, MD",
						dates: "Sep 2014 – Apr 2018",
						bullets: [
							"Delivered dashboards for 500+ technicians, increasing task resolution rate by 30%.",
							"Improved page load from 3.2s to 1.4s via bundle optimization.",
							"Launched responsive mobile UI using React Native + Cordova, boosting usage by 40%.",
						],
					},
				].map((exp, idx) => (
					<motion.div
						key={idx}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: idx * 0.1, duration: 0.6 }}
						whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(255,255,255,0.1)' }}
						className="bg-gray-800 p-6 rounded-2xl shadow-xl flex items-start space-x-6 transition-transform duration-300 hover:shadow-blue-500/20"
					>
						<img
							src={exp.logo}
							alt={`${exp.company} logo`}
							className="h-12 w-12 object-contain bg-white p-1 rounded-full shadow-md"
						/>
						<div>
							<h3 className="text-xl font-bold">{exp.title} @ {exp.company}</h3>
							<div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mt-1">
								<span className="flex items-center gap-1">
									<MapPin className="w-4 h-4 text-cyan-400" />
									{exp.location}
								</span>
								<span className="flex items-center gap-1">
									<Calendar className="w-4 h-4 text-indigo-400" />
									{exp.dates}
								</span>
							</div>
							<ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
								{exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
							</ul>
						</div>
					</motion.div>
				))}
			</motion.section>



			{/* Projects */}
			<motion.section
				initial={{ opacity: 0, scale: 0.95 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
				className="max-w-6xl mx-auto"
			>
				<h2 className="text-3xl font-semibold mb-8 text-center">Experience & Projects</h2>
				<Swiper
					modules={[Autoplay]}
					autoplay={{ delay: 4000, disableOnInteraction: false }}
					spaceBetween={30}
					slidesPerView={1}
					loop
				>
					{projects.map((project, index) => (
						<SwiperSlide key={index}>
							<motion.a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.02 }}
								className="block bg-gray-800 p-6 rounded-2xl shadow-lg"
							>
								<img
									src={project.img}
									alt={project.title}
									className="w-full h-60 object-cover rounded-xl mb-4"
								/>
								<h3 className="text-xl font-bold mb-2">{project.title}</h3>
								<p className="text-gray-300">{project.description}</p>
							</motion.a>
						</SwiperSlide>
					))}
				</Swiper>
			</motion.section>

			{/* Contact Section */}
			<motion.section
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="text-center max-w-xl mx-auto"
			>
				<h2 className="text-3xl font-semibold mb-4">Contact</h2>
				<p className="text-gray-400 mb-6">
					Hollywood, CA<br />
					<Phone className="inline mr-1" size={16} /> (213) 720-5481<br />
					<Mail className="inline mr-1" size={16} />{' '}
					<a href="mailto:IssacLeoStar@outlook.com" className="underline">IssacLeoStar@outlook.com</a>
				</p>
				<button
					onClick={() => setShowModal(true)}
					className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-full"
				>
					Say Hello
				</button>

				{showModal && (
					<div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
						<div className="bg-gray-900 p-6 rounded-2xl w-full max-w-lg relative shadow-xl">
							<button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
								<X />
							</button>
							<h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
							<form onSubmit={handleSend} className="space-y-4 text-left">
								<input
									type="email"
									placeholder="Your Email"
									className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
									value={form.email}
									onChange={(e) => setForm({ ...form, email: e.target.value })}
									required
								/>
								<input
									type="tel"
									placeholder="Phone Number"
									className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
									value={form.phone}
									onChange={(e) => setForm({ ...form, phone: e.target.value })}
								/>
								<textarea
									placeholder="Your Message"
									className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
									rows={5}
									value={form.message}
									onChange={(e) => setForm({ ...form, message: e.target.value })}
									required
								></textarea>
								<button
									type="submit"
									className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				)}
			</motion.section>
		</main>
	);
}
