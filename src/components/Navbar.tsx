"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Calendar, Activity, Phone, Clock, Mail } from "lucide-react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [showSearch, setShowSearch] = useState(false);

	const navLinks = [
		{ label: "Home", href: "/" },
		{ label: "About", href: "#about" },
		{ label: "Conditions", href: "#conditions-we-treat" },
		{ label: "Contact", href: "#contact" },
	];

	return (
		<header className="w-full bg-white border-b border-dark-blue/5">
			{/* Top Utility Bar - Clean, structured layout */}
			<div className="hidden md:block w-full bg-light-blue border-b border-dark-blue/5">
				<div className="mx-auto max-w-7xl px-6 md:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-medium text-dark-text/70">
					<div className="flex items-center gap-6">
						<span className="flex items-center gap-1.5 hover:text-primary-blue transition-colors">
							<Clock className="h-4 w-4 text-primary-blue" />
							Operational Hours: Mon - Sat: 8:00 AM - 8:00 PM
						</span>
					</div>
					<div className="flex items-center gap-5">
						<span className="flex items-center gap-1.5 hover:text-primary-blue transition-colors">
							<MapPin className="h-4 w-4 text-primary-blue" />
							Sion, Mumbai
						</span>
						<span className="hidden md:inline text-dark-blue/10">|</span>
						<a
							href="mailto:contact@drprabhatphysio.com"
							className="flex items-center gap-1.5 hover:text-primary-blue transition-colors"
						>
							<Mail className="h-4 w-4 text-primary-blue" />
							contact@drprabhatphysio.com
						</a>
					</div>
				</div>
			</div>

			{/* Main Navigation Bar - Full-width layout */}
			<div className="w-full bg-white">
				<nav className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-4.5 flex items-center justify-between gap-4">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-2 sm:gap-2.5 group min-w-0">
						<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-blue text-white shadow-md shadow-primary-blue/20 transition-all duration-300 group-hover:scale-105">
							<Activity className="h-5 w-5" />
						</div>
						<div className="flex flex-col min-w-0">
							<span className="text-[11px] min-[370px]:text-xs sm:text-sm font-extrabold leading-none tracking-tight text-dark-blue block truncate">
								DR. PRABHAT MUDHALIAR&apos;S
							</span>
							<span className="text-[8px] sm:text-[9px] font-bold tracking-widest text-primary-blue uppercase mt-0.5 block truncate">
								Physiotherapy Centre
							</span>
						</div>
					</Link>

					{/* Desktop Nav Links - Centered layout */}
					<div className="hidden lg:flex items-center justify-center gap-8 flex-1 px-8">
						{navLinks.map((link) => (
							<Link
								key={link.label}
								href={link.href}
								className="text-sm font-semibold text-dark-text/95 hover:text-primary-blue transition-colors"
							>
								{link.label}
							</Link>
						))}
					</div>

					{/* Right Utilities & CTA */}
					<div className="hidden md:flex items-center gap-4 shrink-0">
						{/* Search Input Toggle */}
						<div className="relative flex items-center">
							{showSearch && (
								<input
									type="text"
									placeholder="Search services..."
									className="mr-2 rounded-xl border border-dark-blue/10 bg-white px-3.5 py-1.5 text-xs text-dark-text focus:outline-none focus:ring-1 focus:ring-primary-blue w-40 animate-fade-in"
									autoFocus
								/>
							)}
							<button
								onClick={() => setShowSearch(!showSearch)}
								className="rounded-xl p-2.5 text-dark-blue/80 hover:bg-primary-blue/10 hover:text-primary-blue transition-all cursor-pointer"
								aria-label="Search"
							>
								<Search className="h-4 w-4" />
							</button>
						</div>

						{/* Phone Quick Call */}
						<a
							href="tel:7977249267"
							className="text-sm font-bold text-dark-blue hover:text-primary-blue transition-colors mr-2"
						>
							+91 79772 49267
						</a>

						{/* CTA Button: Bordered style from image */}
						<Link
							href="#appointment"
							className="rounded-xl border border-primary-blue/30 text-primary-blue bg-transparent hover:bg-primary-blue/5 hover:border-primary-blue px-6 py-2.5 text-sm font-bold transition-all duration-300"
						>
							Book Appointment
						</Link>
					</div>

					{/* Mobile Right Controls */}
					<div className="flex items-center gap-3 lg:hidden shrink-0">
						{/* Make an Appointment Compact button for mobile */}
						<Link
							href="#appointment"
							className="md:hidden flex items-center justify-center rounded-xl bg-primary-blue p-2.5 text-white shadow-md hover:bg-dark-blue transition-all"
							aria-label="Make an Appointment"
						>
							<Calendar className="h-4.5 w-4.5" />
						</Link>

						{/* Custom CSS Hamburger Button */}
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="relative flex h-10 w-10 flex-col items-center justify-center rounded-xl border border-dark-blue/10 bg-white p-2 text-dark-blue hover:text-primary-blue transition-all cursor-pointer focus:outline-none"
							aria-expanded={isOpen}
							aria-label="Toggle Menu"
						>
							<span
								className={`block h-[2px] w-5 bg-current rounded transition-all duration-300 ${
									isOpen ? "rotate-45 translate-y-[5px]" : "-translate-y-[3px]"
								}`}
							></span>
							<span
								className={`block h-[2px] w-5 bg-current rounded my-[3px] transition-all duration-300 ${
									isOpen ? "opacity-0" : "opacity-100"
								}`}
							></span>
							<span
								className={`block h-[2px] w-5 bg-current rounded transition-all duration-300 ${
									isOpen ? "-rotate-45 -translate-y-[5px]" : "translate-y-[3px]"
								}`}
							></span>
						</button>
					</div>
				</nav>
			</div>

			{/* Mobile Navigation Drawer - Slide/Fade capsule */}
			<div
				className={`absolute inset-x-4 top-20 md:top-32 z-50 rounded-3xl border border-white/40 bg-white/95 p-6 shadow-2xl backdrop-blur-xl lg:hidden transition-all duration-350 ease-out origin-top ${
					isOpen
						? "opacity-100 scale-100 translate-y-0"
						: "opacity-0 scale-95 -translate-y-4 pointer-events-none"
				}`}
			>
				<div className="flex flex-col gap-4">
					{navLinks.map((link) => (
						<Link
							key={link.label}
							href={link.href}
							onClick={() => setIsOpen(false)}
							className="rounded-xl px-4 py-3 text-sm font-semibold text-dark-blue hover:bg-primary-blue/10 hover:text-primary-blue transition-all duration-200"
						>
							{link.label}
						</Link>
					))}

					<hr className="my-2 border-dark-blue/10" />

					<div className="flex flex-col gap-3.5 px-4 py-1.5">
						<div className="flex items-start gap-3 text-xs text-dark-blue/70">
							<MapPin className="h-4.5 w-4.5 text-primary-blue shrink-0 mt-0.5" />
							<span className="leading-relaxed font-semibold">
								Gandhi market, prabhat building, Sion Main Rd, Sion, Mumbai, 400019
							</span>
						</div>
						<div className="flex items-center gap-3 text-xs text-dark-blue/70">
							<Clock className="h-4.5 w-4.5 text-primary-blue shrink-0" />
							<span className="leading-relaxed font-semibold">
								Mon - Sat: 8:00 AM - 8:00 PM
							</span>
						</div>
					</div>

					<Link
						href="#appointment"
						onClick={() => setIsOpen(false)}
						className="flex items-center justify-center gap-2 rounded-xl bg-dark-blue hover:bg-primary-blue py-3.5 text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all duration-300 mt-2"
					>
						<Calendar className="h-4.5 w-4.5 text-primary-blue" />
						Book Appointment
					</Link>
				</div>
			</div>
		</header>
	);
}
