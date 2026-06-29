"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ConditionsWeTreat from "@/components/ConditionsWeTreat";
import {
	Heart,
	Calendar,
	Phone,
	ArrowUpRight,
	ArrowRight,
	Activity,
	ShieldAlert,
	CheckCircle2,
	ChevronRight,
	Sparkles,
	Users,
	Clock,
	Award,
	BookmarkCheck,
	MessageCircle,
	MapPin,
	ChevronDown,
	ChevronUp,
	Home as HomeIcon,
	ShieldCheck,
	UserCheck,
} from "lucide-react";

// CLINIC_SERVICES constant removed because the services section is deleted

const FAQ_ITEMS = [
	{
		question: "Will physiotherapy be painful?",
		answer:
			"We design all treatments to stay within your comfortable tolerance. You might feel a stretch or mild soreness during recovery exercises, but we prioritize gentle manual techniques and adjust pressure to make sure your session is as comfortable and stress-free as possible.",
	},
	{
		question: "How many sessions will I need?",
		answer:
			"Every body recovers at its own pace. During your initial session, we do a thorough diagnostic evaluation to create a personalized care plan and discuss how many sessions are recommended for a full and safe recovery.",
	},
	{
		question: "Can I avoid surgery?",
		answer:
			"In many cases, yes! Focused physiotherapy, structural alignment, and strengthening exercises can successfully resolve pain and restore mobility, allowing you to avoid surgical procedures. If surgery is ultimately necessary, pre-rehab will make your post-op recovery much faster.",
	},
	{
		question: "Do you offer home visits?",
		answer:
			"Absolutely. If you have severe pain, mobility restrictions, or are recovering from surgery, we offer home treatment sessions in Sion and nearby areas so you can heal comfortably in your own space.",
	},
];

export default function Home() {
	const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

	return (
		<div className="relative overflow-hidden">
			{/* 1. HERO SECTION */}
			<section className="relative bg-gradient-to-b from-light-blue via-white to-light-blue/20 pt-12 pb-24 overflow-hidden">
				{/* Subtle Dot Grid Background */}
				<div className="absolute inset-0 bg-[radial-gradient(#1e6091_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>

				<div className="mx-auto max-w-7xl px-6 md:px-8 relative z-10 flex flex-col gap-12 lg:gap-16">
					<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
						{/* Hero Left Content */}
						<div className="lg:col-span-7 flex flex-col justify-center">
							<div className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 border border-primary-blue/20 px-4 py-1.5 text-xs font-black text-dark-blue mb-6 w-fit">
								<Activity className="h-3.5 w-3.5 text-primary-blue animate-pulse" />
								<span>Dr. Prabhat Mudhaliar&apos;s Physiotherapy Centre</span>
							</div>

							<h1 className="text-4xl font-extrabold tracking-tight text-dark-blue sm:text-5xl md:text-6xl lg:text-7.5xl leading-[1.05]">
								Restore Movement, <br />
								<span className="text-primary-blue">Reclaim Your Life</span>
							</h1>

							<p className="mt-6 text-base text-dark-text/75 max-w-xl leading-relaxed font-medium">
								Advanced physiotherapy and personalized rehabilitation to
								relieve pain, restore function and help you live life to the
								fullest.
							</p>

							{/* Actions */}
							<div className="mt-8 flex flex-col sm:flex-row gap-4">
								<a
									href="https://wa.me/917977249267?text=Hello%20Dr.%20Prabhat%20Mudhaliar%2C%20I%20would%20like%20to%20book%20a%20physiotherapy%20consultation."
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center justify-center gap-2.5 rounded-2xl bg-dark-blue hover:bg-primary-blue px-8 py-3.5 text-sm font-bold text-white shadow-lg hover:shadow-primary-blue/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 group"
								>
									<MessageCircle className="h-4.5 w-4.5 text-[#25D366] group-hover:text-white fill-[#25D366]/10" />
									Message on WhatsApp
								</a>
								<a
									href="tel:7977249267"
									className="flex items-center justify-center gap-2.5 rounded-2xl border border-dark-blue/15 bg-white px-8 py-3.5 text-sm font-bold text-dark-blue shadow-sm hover:bg-light-blue hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
								>
									<Phone className="h-4 w-4 text-primary-blue" />
									Call Now
								</a>
							</div>

							{/* Social Proof */}
							<div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
								<div className="flex -space-x-3 overflow-hidden">
									{["SD", "AS", "ML", "DM"].map((initials, idx) => (
										<div
											key={idx}
											className="inline-block h-8 w-8 rounded-full bg-primary-blue/10 border-2 border-white text-primary-blue text-[10px] font-black flex items-center justify-center shadow-sm"
										>
											{initials}
										</div>
									))}
								</div>
								<div className="flex items-center gap-1.5 text-sm font-bold text-dark-blue/90">
									<span className="text-yellow-500 text-lg">★</span>
									<span className="font-extrabold text-dark-blue">5.0/5</span>
									<span className="text-dark-text/60 font-semibold">
										from 66 Google Reviews
									</span>
								</div>
							</div>
						</div>

						{/* Hero Right Graphic with Curved Mask and overlay badge */}
						<div className="lg:col-span-5 relative flex justify-center lg:justify-end h-full">
							<div className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-2xl lg:rounded-l-[16rem] lg:rounded-r-[2rem] overflow-hidden shadow-2xl border border-white/40 group">
								<Image
									src="/hero_treatment.png"
									alt="Dr. Prabhat Mudhaliar Physiotherapy Treatment"
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-103"
									priority
								/>

								{/* Overlay badge */}
								<div className="absolute bottom-6 left-6 bg-white/95 rounded-2xl p-4 shadow-2xl border border-dark-blue/5 flex items-center gap-3 z-10 max-w-[240px] backdrop-blur-sm animate-bounce-subtle">
									<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue shadow-inner">
										<UserCheck className="h-5 w-5" />
									</div>
									<div>
										<h4 className="text-sm font-black text-dark-blue">
											10+ Years
										</h4>
										<p className="text-[10px] text-dark-text/75 font-bold leading-tight">
											of trusted care and successful recoveries
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* 5-Feature horizontal card spanning bottom of hero */}
					<div className="w-full mt-4">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 p-8 bg-white border border-dark-blue/5 rounded-3xl shadow-xl relative z-10">
							{/* Feature 1 */}
							<div className="flex items-start gap-3.5">
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
									<Heart className="h-5 w-5" />
								</div>
								<div>
									<h4 className="font-extrabold text-dark-blue text-sm leading-tight">
										Personalized Treatment
									</h4>
									<p className="text-[11px] text-dark-text/60 font-semibold mt-1">
										Tailored care for faster recovery
									</p>
								</div>
							</div>
							{/* Feature 2 */}
							<div className="flex items-start gap-3.5 lg:border-l lg:border-dark-blue/5 lg:pl-6">
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
									<ShieldCheck className="h-5 w-5" />
								</div>
								<div>
									<h4 className="font-extrabold text-dark-blue text-sm leading-tight">
										Evidence-Based
									</h4>
									<p className="text-[11px] text-dark-text/60 font-semibold mt-1">
										Modern techniques that work
									</p>
								</div>
							</div>
							{/* Feature 3 */}
							<div className="flex items-start gap-3.5 lg:border-l lg:border-dark-blue/5 lg:pl-6">
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
									<UserCheck className="h-5 w-5" />
								</div>
								<div>
									<h4 className="font-extrabold text-dark-blue text-sm leading-tight">
										Expert Therapist
									</h4>
									<p className="text-[11px] text-dark-text/60 font-semibold mt-1">
										Experienced care you can trust
									</p>
								</div>
							</div>
							{/* Feature 4 */}
							<div className="flex items-start gap-3.5 lg:border-l lg:border-dark-blue/5 lg:pl-6">
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
									<HomeIcon className="h-5 w-5" />
								</div>
								<div>
									<h4 className="font-extrabold text-dark-blue text-sm leading-tight">
										Home Visits
									</h4>
									<p className="text-[11px] text-dark-text/60 font-semibold mt-1">
										Quality care in your home
									</p>
								</div>
							</div>
							{/* Feature 5 */}
							<div className="flex items-start gap-3.5 lg:border-l lg:border-dark-blue/5 lg:pl-6">
								<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
									<Calendar className="h-5 w-5" />
								</div>
								<div>
									<h4 className="font-extrabold text-dark-blue text-sm leading-tight">
										Flexible Bookings
									</h4>
									<p className="text-[11px] text-dark-text/60 font-semibold mt-1">
										Convenient timings for you
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 2.1. SPECIALIZED RECOVERY PROGRAMS */}
			<section className="py-20 lg:py-28 bg-white">
				<div className="mx-auto max-w-7xl px-6 md:px-8">
					{/* Section Header */}
					<div className="max-w-3xl mb-16">
						<div className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 border border-primary-blue/25 px-4 py-1.5 text-xs font-black text-dark-blue mb-4">
							<Activity className="h-3.5 w-3.5 text-primary-blue" />
							<span>Outcome-Focused Programs</span>
						</div>
						<h2 className="text-3xl font-extrabold tracking-tight text-dark-blue sm:text-5xl leading-tight">
							Our Specialized <br />
							<span className="text-primary-blue">Recovery Programs</span>
						</h2>
						<div className="w-16 h-1.5 bg-primary-blue rounded-full mt-4 mb-6"></div>
						<p className="text-base text-dark-text/75 font-medium leading-relaxed max-w-xl">
							We structure our treatments around your ultimate recovery goals.
							Our signature programs target outcomes to help you return to
							active living.
						</p>
					</div>

					{/* 4 Program Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Card 1: Sports Rehab */}
						<div className="bg-white rounded-[2rem] border border-dark-blue/5 shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
							<div>
								<span className="inline-flex items-center rounded-full bg-primary-blue/10 border border-primary-blue/20 px-3 py-1 text-[9px] font-black text-primary-blue uppercase mb-4 w-fit">
									Outcome: Return To Sports
								</span>
								<h3 className="text-lg font-black text-dark-blue group-hover:text-primary-blue transition-colors">
									Sports Rehabilitation
								</h3>
								<p className="mt-3 text-xs text-dark-text/75 font-semibold leading-relaxed">
									Advanced physiotherapy designed for athletes to recover from
									sprains, tears, and joint stiffness, helping you return to
									peak performance safely.
								</p>
							</div>
						</div>

						{/* Card 2: Orthopedic Care */}
						<div className="bg-white rounded-[2rem] border border-dark-blue/5 shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
							<div>
								<span className="inline-flex items-center rounded-full bg-primary-blue/10 border border-primary-blue/20 px-3 py-1 text-[9px] font-black text-primary-blue uppercase mb-4 w-fit">
									Outcome: Move Without Pain
								</span>
								<h3 className="text-lg font-black text-dark-blue group-hover:text-primary-blue transition-colors">
									Orthopedic Recovery
								</h3>
								<p className="mt-3 text-xs text-dark-text/75 font-semibold leading-relaxed">
									Targeted treatment for bone, muscle, and joint conditions,
									resolving chronic back, neck, and shoulder pain to restore
									your natural movement.
								</p>
							</div>
						</div>

						{/* Card 3: Post-Surgical Rehab */}
						<div className="bg-white rounded-[2rem] border border-dark-blue/5 shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
							<div>
								<span className="inline-flex items-center rounded-full bg-primary-blue/10 border border-primary-blue/20 px-3 py-1 text-[9px] font-black text-primary-blue uppercase mb-4 w-fit">
									Outcome: Recover After Surgery
								</span>
								<h3 className="text-lg font-black text-dark-blue group-hover:text-primary-blue transition-colors">
									Post-Surgical Joint Care
								</h3>
								<p className="mt-3 text-xs text-dark-text/75 font-semibold leading-relaxed">
									Structured post-operative protocols for knee/hip replacements
									and spine surgeries, ensuring safe, progressive restoration of
									range of motion.
								</p>
							</div>
						</div>

						{/* Card 4: Senior Mobility */}
						<div className="bg-white rounded-[2rem] border border-dark-blue/5 shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
							<div>
								<span className="inline-flex items-center rounded-full bg-primary-blue/10 border border-primary-blue/20 px-3 py-1 text-[9px] font-black text-primary-blue uppercase mb-4 w-fit">
									Outcome: Active Living
								</span>
								<h3 className="text-lg font-black text-dark-blue group-hover:text-primary-blue transition-colors">
									Senior Mobility & Pain
								</h3>
								<p className="mt-3 text-xs text-dark-text/75 font-semibold leading-relaxed">
									Gentle joint mobilization and strength exercises tailored for
									elderly patients, improving balance, arthritis stiffness, and
									overall quality of life.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 2.2. TREATMENT PHILOSOPHY TIMELINE */}
			<section className="py-20 lg:py-28 bg-light-blue/20 border-t border-dark-blue/5">
				<div className="mx-auto max-w-7xl px-6 md:px-8">
					{/* Section Header */}
					<div className="text-center max-w-3xl mx-auto mb-16">
						<div className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 border border-primary-blue/25 px-4 py-1.5 text-xs font-black text-dark-blue mb-4">
							<Sparkles className="h-3.5 w-3.5 text-primary-blue" />
							<span>Clinical Methodology</span>
						</div>
						<h2 className="text-3xl font-extrabold text-dark-blue sm:text-5xl mt-2 leading-tight">
							How We Approach Recovery
						</h2>
						<div className="w-16 h-1.5 bg-primary-blue rounded-full mt-4 mb-6 mx-auto"></div>
						<p className="mt-2 text-dark-text/75 text-base font-medium max-w-xl mx-auto leading-relaxed">
							Our premium recovery workflow focuses on diagnosing and correcting
							the actual root biomechanical issues, rather than just masking
							symptoms.
						</p>
					</div>

					{/* Timeline Layout */}
					<div className="relative mt-16 max-w-5xl mx-auto">
						{/* Desktop Horizontal Line */}
						<div className="absolute top-[35px] left-[15%] right-[15%] h-[2px] bg-dashed bg-primary-blue/20 hidden lg:block z-0"></div>

						<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
							{/* Step 1 */}
							<div className="flex flex-col items-center text-center group">
								<div className="h-18 w-18 rounded-2xl bg-white border-2 border-primary-blue/20 shadow-md text-primary-blue font-black text-xl flex items-center justify-center relative group-hover:border-primary-blue group-hover:scale-105 transition-all duration-300">
									01
									<span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-primary-blue animate-pulse"></span>
								</div>
								<h3 className="mt-6 text-lg font-black text-dark-blue">
									Comprehensive Assessment
								</h3>
								<p className="mt-3 text-xs text-dark-text/70 font-semibold leading-relaxed max-w-xs">
									Detailed physical examination checking your posture, joint
									range of motion, muscle balance, and functional movement
									patterns.
								</p>
							</div>

							{/* Step 2 */}
							<div className="flex flex-col items-center text-center group">
								<div className="h-18 w-18 rounded-2xl bg-white border-2 border-primary-blue/20 shadow-md text-primary-blue font-black text-xl flex items-center justify-center relative group-hover:border-primary-blue group-hover:scale-105 transition-all duration-300">
									02
									<span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-primary-blue animate-pulse"></span>
								</div>
								<h3 className="mt-6 text-lg font-black text-dark-blue">
									Root Cause Analysis
								</h3>
								<p className="mt-3 text-xs text-dark-text/70 font-semibold leading-relaxed max-w-xs">
									Pinpointing the precise muscular imbalances, ligament strain,
									or joint limitations creating your mechanical pain.
								</p>
							</div>

							{/* Step 3 */}
							<div className="flex flex-col items-center text-center group">
								<div className="h-18 w-18 rounded-2xl bg-white border-2 border-primary-blue/20 shadow-md text-primary-blue font-black text-xl flex items-center justify-center relative group-hover:border-primary-blue group-hover:scale-105 transition-all duration-300">
									03
									<span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-primary-blue animate-pulse"></span>
								</div>
								<h3 className="mt-6 text-lg font-black text-dark-blue">
									Personalized Treatment
								</h3>
								<p className="mt-3 text-xs text-dark-text/70 font-semibold leading-relaxed max-w-xs">
									Executing targeted manual adjustments, decompression therapy,
									and custom-tailored conditioning exercises for a permanent
									cure.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 2.5. MEET THE EXPERT SECTION */}
			<section id="about" className="py-20 lg:py-28 bg-white mt-10">
				<div className="mx-auto max-w-7xl px-6 md:px-8">
					<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
						{/* About Left Image: Large Doctor Image */}
						<div className="lg:col-span-5 flex justify-center">
							<div className="relative w-full max-w-[420px] aspect-[3/4] rounded-[2.5rem] border-4 border-white bg-white shadow-2xl overflow-hidden group">
								<div className="relative h-full w-full overflow-hidden bg-light-blue/30">
									<Image
										src="/about_treatment.png"
										alt="Dr. Prabhat Mudhaliar performing physiotherapy manual treatment"
										fill
										sizes="(max-width: 768px) 100vw, 40vw"
										className="object-cover transition-transform duration-700 group-hover:scale-103"
									/>
									{/* Glowing visual indicator for precision/care */}
									<div className="absolute right-[20%] top-[35%] flex items-center justify-center pointer-events-none">
										<span className="relative flex h-10 w-10">
											<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-blue/30 opacity-75"></span>
											<span className="relative inline-flex rounded-full h-10 w-10 bg-primary-blue/10 border border-primary-blue/20"></span>
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* About Right Content */}
						<div className="lg:col-span-7">
							<div className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 border border-primary-blue/25 px-4 py-1.5 text-xs font-black text-dark-blue mb-4">
								<Award className="h-3.5 w-3.5 text-primary-blue" />
								<span>Meet Dr. Prabhat Mudhaliar (PT)</span>
							</div>

							<h2 className="text-3xl font-extrabold tracking-tight text-dark-blue sm:text-5xl leading-tight">
								Meet The Expert <br />
								Behind Your <span className="text-primary-blue">Recovery</span>
							</h2>
							<div className="w-16 h-1.5 bg-primary-blue rounded-full mt-4 mb-8"></div>

							{/* Doctor Info Grid */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
								{/* Years Experience Card */}
								<div className="bg-white rounded-2xl border border-dark-blue/5 p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue mb-4">
										<Clock className="h-5 w-5" />
									</div>
									<h4 className="text-sm font-black text-dark-blue uppercase tracking-wider">
										Years Experience
									</h4>
									<p className="text-lg font-black text-primary-blue mt-1 leading-none">
										10+ Years
									</p>
									<p className="text-xs text-dark-text/70 mt-2 font-medium leading-relaxed">
										Of dedicated clinical practice in advanced orthopedic
										rehabilitation and sports therapy.
									</p>
								</div>

								{/* Patients Treated Card */}
								<div className="bg-white rounded-2xl border border-dark-blue/5 p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue mb-4">
										<Users className="h-5 w-5" />
									</div>
									<h4 className="text-sm font-black text-dark-blue uppercase tracking-wider">
										Patients Treated
									</h4>
									<p className="text-lg font-black text-primary-blue mt-1 leading-none">
										500+ Recoveries
									</p>
									<p className="text-xs text-dark-text/70 mt-2 font-medium leading-relaxed">
										Helping active individuals and families restore motion,
										eliminate pain, and avoid surgeries.
									</p>
								</div>

								{/* Specializations Card */}
								<div className="bg-white rounded-2xl border border-dark-blue/5 p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue mb-4">
										<Activity className="h-5 w-5" />
									</div>
									<h4 className="text-sm font-black text-dark-blue uppercase tracking-wider">
										Specializations
									</h4>
									<p className="text-xs text-dark-text/70 mt-3 font-semibold leading-relaxed">
										• Spinal Manipulation & Adjustments <br />
										• Orthopedic Manual Therapy (COMT) <br />
										• Post-Operative Joint Rehabilitation <br />• Sports Injury
										Correction
									</p>
								</div>

								{/* Certifications Card */}
								<div className="bg-white rounded-2xl border border-dark-blue/5 p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue mb-4">
										<ShieldCheck className="h-5 w-5" />
									</div>
									<h4 className="text-sm font-black text-dark-blue uppercase tracking-wider">
										Certifications
									</h4>
									<p className="text-xs text-dark-text/70 mt-3 font-semibold leading-relaxed">
										• Master of Physiotherapy (MPT) <br />
										• Certified Orthopedic Manual Therapist <br />
										• Certified Sports Physiotherapist <br />• Certified
										Craniosacral Therapist
									</p>
								</div>
							</div>

							<div className="mt-8 flex flex-col sm:flex-row gap-4">
								<a
									href="#appointment"
									className="flex items-center justify-center gap-2.5 rounded-2xl bg-dark-blue hover:bg-primary-blue px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-dark-blue/15 hover:-translate-y-0.5 transition-all duration-300"
								>
									Schedule Evaluation
									<ArrowRight className="h-4 w-4" />
								</a>
								<a
									href="tel:7977249267"
									className="flex items-center justify-center gap-2.5 rounded-2xl border border-dark-blue/15 bg-white px-8 py-3.5 text-sm font-bold text-dark-blue hover:bg-light-blue hover:-translate-y-0.5 transition-all duration-300"
								>
									Call Directly
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CONDITIONS WE TREAT */}
			<ConditionsWeTreat />

			{/* Services section removed */}

			{/* Knee replacement procedure section removed */}

			{/* TESTIMONIALS / REVIEWS SECTION */}
			<section className="py-20 lg:py-28 bg-white">
				<div className="mx-auto max-w-7xl px-6 md:px-8">
					<div className="text-center mb-14">
						<div className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 border border-primary-blue/25 px-4 py-1.5 text-xs font-black text-dark-blue mb-4 mx-auto w-fit">
							<MessageCircle className="h-3.5 w-3.5 text-primary-blue" />
							<span>Patient Stories</span>
						</div>
						<h2 className="text-3xl font-extrabold text-dark-blue sm:text-4xl mt-2">
							What Our Patients Say
						</h2>
						<p className="mt-3 text-base text-dark-text/70 max-w-xl mx-auto">
							Read real feedback from patients who have restored their movement
							and reclaimed their health.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{/* Review 1 */}
						<div className="rounded-3xl border border-dark-blue/10 bg-white p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 ease-out flex flex-col justify-between group cursor-pointer">
							<div>
								{/* 5 Stars */}
								<div className="flex gap-1 text-primary-blue mb-5">
									{[...Array(5)].map((_, i) => (
										<svg
											key={i}
											className="h-5 w-5 fill-current"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									))}
								</div>
								<p className="text-dark-text/85 italic leading-relaxed text-sm">
									&ldquo;I had an excellent experience with Dr. Prabhat. He is
									highly knowledgeable, professional, and very attentive to his
									patients&rsquo; needs. He carefully assessed my condition and
									created a personalized treatment plan that was both effective
									and ...&rdquo;
								</p>
							</div>
							<div className="mt-6 flex items-center gap-3 border-t border-dark-blue/5 pt-4">
								<div className="h-10 w-10 rounded-full bg-primary-blue/10 text-primary-blue font-extrabold text-sm flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
									SD
								</div>
								<div>
									<h4 className="font-extrabold text-dark-blue text-sm">
										Shivani Dubey
									</h4>
									<p className="text-xs text-dark-text/50">
										Verified Google Review
									</p>
								</div>
							</div>
						</div>

						{/* Review 2 */}
						<div className="rounded-3xl border border-dark-blue/10 bg-white p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 ease-out flex flex-col justify-between group cursor-pointer">
							<div>
								{/* 5 Stars */}
								<div className="flex gap-1 text-primary-blue mb-5">
									{[...Array(5)].map((_, i) => (
										<svg
											key={i}
											className="h-5 w-5 fill-current"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									))}
								</div>
								<p className="text-dark-text/85 italic leading-relaxed text-sm">
									&ldquo;Excellent physiotherapy treatment by Dr. Prabhat. He is
									very professional, knowledgeable, and friendly. He understands
									the problem well and provides effective treatment. I felt much
									better after the sessions. Highly recommended!&rdquo;
								</p>
							</div>
							<div className="mt-6 flex items-center gap-3 border-t border-dark-blue/5 pt-4">
								<div className="h-10 w-10 rounded-full bg-primary-blue/10 text-primary-blue font-extrabold text-sm flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
									AS
								</div>
								<div>
									<h4 className="font-extrabold text-dark-blue text-sm">
										Aryan Sharif
									</h4>
									<p className="text-xs text-dark-text/50">
										Verified Google Review
									</p>
								</div>
							</div>
						</div>

						{/* Review 3 */}
						<div className="rounded-3xl border border-dark-blue/10 bg-white p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 ease-out flex flex-col justify-between group cursor-pointer">
							<div>
								{/* 5 Stars */}
								<div className="flex gap-1 text-primary-blue mb-5">
									{[...Array(5)].map((_, i) => (
										<svg
											key={i}
											className="h-5 w-5 fill-current"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									))}
								</div>
								<p className="text-dark-text/85 italic leading-relaxed text-sm">
									&ldquo;I highly recommend Dr. Prabhat for anyone dealing with
									pain or stiffness. He is extremely friendly while maintaining
									complete professionalism. He has always helped me with my
									stiff neck, shoulder pain, lower back issues, and muscle
									spasms. ...&rdquo;
								</p>
							</div>
							<div className="mt-6 flex items-center gap-3 border-t border-dark-blue/5 pt-4">
								<div className="h-10 w-10 rounded-full bg-primary-blue/10 text-primary-blue font-extrabold text-sm flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
									ML
								</div>
								<div>
									<h4 className="font-extrabold text-dark-blue text-sm">
										MANAV JITEN LALAN
									</h4>
									<p className="text-xs text-dark-text/50">
										Verified Google Review
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Details & Clinic Hours Card */}
					<div
						id="contact"
						className="mt-16 rounded-3xl bg-white border border-dark-blue/10 p-8 md:p-12 shadow-lg flex flex-col lg:flex-row gap-8 justify-between items-stretch"
					>
						{/* Left Column: Info & Hours */}
						<div className="flex flex-col justify-between gap-6 lg:w-1/2">
							<div className="space-y-4">
								<div className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 border border-primary-blue/25 px-4 py-1.5 text-xs font-black text-dark-blue mb-2 w-fit">
									<MapPin className="h-3.5 w-3.5 text-primary-blue" />
									<span>Visit Our Centre</span>
								</div>
								<h3 className="text-3xl font-extrabold text-dark-blue">
									Dr. Prabhat Mudhaliar&apos;s Centre
								</h3>
								<div className="flex gap-3 text-sm text-dark-text/80 leading-relaxed">
									<MapPin className="h-5 w-5 shrink-0 text-primary-blue mt-1" />
									<span>
										Gandhi market, prabhat building, Sion Main Rd, Namdev Koli
										Marg, Sion, Mumbai, Maharashtra 400019
									</span>
								</div>
							</div>

							<div className="bg-light-blue/45 border border-primary-blue/15 p-6 rounded-2xl">
								<div className="flex items-center gap-3 mb-2 text-sm font-extrabold text-dark-blue">
									<Clock className="h-5 w-5 text-primary-blue" />
									<span>Operational Hours</span>
								</div>
								<p className="text-sm font-semibold text-[#25D366]">
									Monday - Saturday: 8:00 AM - 8:00 PM
								</p>
							</div>
						</div>

						{/* Right Column: Google Maps IFrame */}
						<div className="lg:w-1/2 min-h-[280px] rounded-2xl overflow-hidden border border-dark-blue/10 shadow-inner relative bg-light-blue/10">
							<iframe
								title="Google Map location of Dr. Prabhat Mudhaliar's centre"
								src="https://maps.google.com/maps?q=Gandhi%20market,%20prabhat%20building,%20Sion%20Main%20Rd,%20Namdev%20Koli%20Marg,%20Sion,%20Mumbai,%20Maharashtra%20400019&t=&z=16&ie=UTF8&iwloc=&output=embed"
								className="absolute inset-0 w-full h-full border-0"
								allowFullScreen={true}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				</div>
			</section>

			{/* Featured program banner removed */}

			{/* 4. COMMON CONCERNS ACCORDION SECTION */}
			<section className="py-20 lg:py-28 bg-light-blue/45 border-t border-dark-blue/5">
				<div className="mx-auto max-w-4xl px-6 md:px-8">
					<div className="text-center mb-14">
						<div className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 border border-primary-blue/25 px-4 py-1.5 text-xs font-black text-dark-blue mb-4">
							<MessageCircle className="h-3.5 w-3.5 text-primary-blue" />
							<span>Common Concerns</span>
						</div>
						<h2 className="text-3xl font-extrabold text-dark-blue sm:text-5xl mt-2 leading-tight">
							Common Concerns
						</h2>
						<div className="w-16 h-1.5 bg-primary-blue rounded-full mt-4 mb-6 mx-auto"></div>
						<p className="mt-2 text-dark-text/75 text-base font-medium max-w-xl mx-auto leading-relaxed">
							Honest, empathetic answers to the questions we hear most from
							patients.
						</p>
					</div>

					<div className="max-w-3xl mx-auto flex flex-col gap-4">
						{FAQ_ITEMS.map((faq, originalIndex) => {
							const isOpen = activeFaqIndex === originalIndex;
							return (
								<div
									key={originalIndex}
									className="rounded-2xl border border-dark-blue/8 bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
								>
									<button
										onClick={() =>
											setActiveFaqIndex(isOpen ? null : originalIndex)
										}
										className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-bold text-dark-blue hover:text-primary-blue transition-colors cursor-pointer active:scale-[0.99] transition-transform duration-150 focus:outline-none"
									>
										<span className="text-base sm:text-lg flex items-center gap-3">
											<span className="text-xl">❓</span>
											<span>{faq.question}</span>
										</span>
										<div className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-light-blue text-dark-blue group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
											{isOpen ? (
												<ChevronUp className="h-4 w-4" />
											) : (
												<ChevronDown className="h-4 w-4" />
											)}
										</div>
									</button>

									{/* Expandable answer panel */}
									<div
										className={`transition-all duration-300 ease-in-out ${
											isOpen
												? "max-h-[300px] border-t border-dark-blue/5"
												: "max-h-0"
										} overflow-hidden`}
									>
										<div className="p-6 text-sm text-dark-text/80 leading-relaxed bg-light-blue/10">
											{faq.answer}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* 5. INSTANT WHATSAPP BOOKING SECTION */}
			<section
				id="appointment"
				className="py-20 lg:py-28 bg-white border-t border-dark-blue/5"
			>
				<div className="mx-auto max-w-7xl px-6 md:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
						{/* Left Column: Context & Guarantees */}
						<div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
							<div className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 border border-primary-blue/25 px-4 py-1.5 text-xs font-black text-dark-blue mb-6 w-fit mx-auto lg:mx-0">
								<Calendar className="h-3.5 w-3.5 text-primary-blue" />
								<span>Start Recovery</span>
							</div>
							<h2 className="text-3xl font-extrabold text-dark-blue sm:text-4xl lg:text-5xl mt-2 leading-tight">
								Book Your Consultation Instantly
							</h2>
							<p className="mt-4 text-base text-dark-text/75 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
								Skip the complex forms. Connect directly with Dr. Prabhat
								Mudhaliar on WhatsApp to discuss your symptoms, ask clinical
								questions, and secure your schedule in real-time.
							</p>

							{/* Guarantees List */}
							<div className="mt-8 flex flex-col gap-4 text-left max-w-md mx-auto lg:mx-0">
								<div className="flex items-start gap-3">
									<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] text-xs font-bold mt-0.5">
										✓
									</div>
									<div>
										<h4 className="text-sm font-extrabold text-dark-blue">
											Under 2 Hours Response
										</h4>
										<p className="text-xs text-dark-text/60 mt-0.5">
											Active replies during clinical operational hours.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] text-xs font-bold mt-0.5">
										✓
									</div>
									<div>
										<h4 className="text-sm font-extrabold text-dark-blue">
											Direct Contact
										</h4>
										<p className="text-xs text-dark-text/60 mt-0.5">
											Speak directly with Dr. Prabhat, not a middleman or
											chatbot.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] text-xs font-bold mt-0.5">
										✓
									</div>
									<div>
										<h4 className="text-sm font-extrabold text-dark-blue">
											Zero Friction
										</h4>
										<p className="text-xs text-dark-text/60 mt-0.5">
											No logins, registration portals, or upfront forms
											required.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Right Column: Premium Active Contact Card */}
						<div className="lg:col-span-5 flex justify-center w-full">
							<div className="w-full max-w-[400px] bg-white border border-dark-blue/8 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
								{/* Subtle glow effect */}
								<div className="absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-[#25D366]/5 blur-3xl pointer-events-none"></div>
								<div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-primary-blue/5 blur-3xl pointer-events-none"></div>

								<div className="relative z-10 flex flex-col items-center text-center">
									{/* Doctor Avatar & Active Status Indicator */}
									<div className="relative mb-6">
										<div className="h-20 w-20 rounded-full border-2 border-primary-blue/15 bg-light-blue/20 overflow-hidden flex items-center justify-center">
											{/* SVG profile avatar representation */}
											<svg
												className="h-12 w-12 text-primary-blue/50"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
											</svg>
										</div>
										<span className="absolute bottom-0.5 right-0.5 flex h-4 w-4 rounded-full border-2 border-white bg-[#25D366] shadow-sm">
											<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
										</span>
									</div>

									<h3 className="text-xl font-extrabold text-dark-blue">
										Dr. Prabhat Mudhaliar (PT)
									</h3>
									<span className="text-[10px] font-black text-[#25D366] uppercase tracking-wider mt-1 block">
										Online on WhatsApp
									</span>

									<hr className="my-5 w-full border-dark-blue/5" />

									<p className="text-xs text-dark-text/70 leading-relaxed mb-6 font-medium">
										Click below to launch WhatsApp instantly. A pre-filled
										consultation request message will be prepared for you.
									</p>

									<a
										href={`https://wa.me/917977249267?text=${encodeURIComponent(
											"Hello Dr. Prabhat Mudhaliar, I would like to schedule an appointment for a physiotherapy consultation."
										)}`}
										target="_blank"
										rel="noopener noreferrer"
										className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-dark-blue hover:bg-primary-blue px-6 py-4 text-sm font-bold text-white shadow-lg hover:shadow-primary-blue/20 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 cursor-pointer group/btn"
									>
										<MessageCircle className="h-5 w-5 shrink-0 text-[#25D366] group-hover/btn:text-white fill-[#25D366]/10 transition-colors" />
										Book via WhatsApp Chat
									</a>

									<span className="text-[10px] text-dark-text/50 font-semibold mt-4 block">
										Typically responds in under 2 hours
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
