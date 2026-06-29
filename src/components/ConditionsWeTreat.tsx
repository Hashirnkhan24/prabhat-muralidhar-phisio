"use client";

import Image from "next/image";
import {
	Activity,
	Accessibility,
	Award,
	Brain,
	Baby,
	Clock,
	Heart,
	HeartPulse,
	Flame,
	Hand,
	MessageCircle,
	ArrowRight,
	ShieldCheck,
	Sparkles,
	Users,
} from "lucide-react";

interface ConditionItem {
	title: string;
	description: string;
	imageSrc: string;
	whatsappMessage: string;
	icon: React.ComponentType<{ className?: string }>;
}

const CONDITIONS: ConditionItem[] = [
	{
		title: "Neck Pain",
		description: "Relieve stiffness, soreness and improve neck mobility.",
		imageSrc: "/conditions/neck-pain.png",
		whatsappMessage: "Hello Dr. Prabhat, I am experiencing neck pain and stiffness and would like to consult with you.",
		icon: Activity,
	},
	{
		title: "Back Pain",
		description: "Target the root cause and return to a pain-free lifestyle.",
		imageSrc: "/conditions/back-pain.png",
		whatsappMessage: "Hello Dr. Prabhat, I am experiencing lower back pain and would like to consult with you.",
		icon: Accessibility,
	},
	{
		title: "Knee Pain",
		description: "Improve strength, mobility and get back to moving freely.",
		imageSrc: "/conditions/knee-pain.png",
		whatsappMessage: "Hello Dr. Prabhat, I am experiencing knee pain and would like to consult with you.",
		icon: Activity,
	},
	{
		title: "Shoulder Pain",
		description: "Restore range of motion and reduce shoulder discomfort.",
		imageSrc: "/conditions/shoulder-pain.png",
		whatsappMessage: "Hello Dr. Prabhat, I am experiencing shoulder pain and stiffness and would like to consult with you.",
		icon: Sparkles,
	},
	{
		title: "Sports Injuries",
		description: "Specialized care to recover faster and perform better.",
		imageSrc: "/conditions/sports-injuries.png",
		whatsappMessage: "Hello Dr. Prabhat, I have a sports injury and would like to consult with you.",
		icon: Award,
	},
	{
		title: "Post Surgery Rehabilitation",
		description: "Guided recovery to regain strength and confidence.",
		imageSrc: "/conditions/post-surgery.png",
		whatsappMessage: "Hello Dr. Prabhat, I need rehabilitation support post-surgery and would like to consult with you.",
		icon: HeartPulse,
	},
	{
		title: "Sciatica",
		description: "Relief from nerve pain, numbness and discomfort.",
		imageSrc: "/conditions/sciatica.png",
		whatsappMessage: "Hello Dr. Prabhat, I am experiencing sciatica nerve pain and would like to consult with you.",
		icon: Flame,
	},
	{
		title: "Stroke Rehabilitation",
		description: "Rebuilding mobility, independence and quality of life.",
		imageSrc: "/conditions/stroke-rehab.png",
		whatsappMessage: "Hello Dr. Prabhat, I am inquiring about stroke rehabilitation therapy and would like to consult with you.",
		icon: Brain,
	},
	{
		title: "Arthritis",
		description: "Manage pain and improve joint function naturally.",
		imageSrc: "/conditions/arthritis.png",
		whatsappMessage: "Hello Dr. Prabhat, I am experiencing arthritis joint pain and would like to consult with you.",
		icon: Hand,
	},
	{
		title: "Pediatric Physiotherapy",
		description: "Gentle care for children's growth, posture and movement.",
		imageSrc: "/conditions/pediatric-physio.png",
		whatsappMessage: "Hello Dr. Prabhat, I am inquiring about pediatric physiotherapy services for my child.",
		icon: Baby,
	},
];

export default function ConditionsWeTreat() {
	return (
		<section
			id="conditions-we-treat"
			className="py-20 lg:py-28 bg-light-blue/20 border-t border-dark-blue/5"
		>
			<div className="mx-auto max-w-7xl px-6 md:px-8">
				
				{/* Top Header Split Layout */}
				<div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
					
					{/* Left Column: Title, Badge, & Subtext */}
					<div className="max-w-2xl">
						<div className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 border border-primary-blue/25 px-4 py-1.5 text-xs font-black text-dark-blue mb-4">
							<Activity className="h-3.5 w-3.5 text-primary-blue" />
							<span>Conditions We Treat</span>
						</div>
						<h2 className="text-3xl font-extrabold tracking-tight text-dark-blue sm:text-5xl leading-tight">
							Targeted Care for <br />
							Every <span className="text-primary-blue">Pain Point</span>
						</h2>
						<div className="w-16 h-1.5 bg-primary-blue rounded-full mt-4 mb-6"></div>
						<p className="text-base text-dark-text/75 font-medium leading-relaxed max-w-xl">
							From everyday aches to complex injuries, we provide expert treatment for a wide range of conditions.
						</p>
					</div>

					{/* Right Column: 4 Pillars Overview Card */}
					<div className="w-full lg:max-w-xl bg-white rounded-3xl border border-dark-blue/5 p-6 shadow-xl relative z-10 flex items-center justify-between">
						<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
							{/* Pillar 1 */}
							<div className="flex flex-col items-center text-center">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue mb-2.5">
									<Users className="h-5 w-5" />
								</div>
								<span className="text-[11px] font-black text-dark-blue leading-tight block">
									Personalized Treatment
								</span>
							</div>

							{/* Pillar 2 */}
							<div className="flex flex-col items-center text-center sm:border-l sm:border-dark-blue/5 sm:pl-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue mb-2.5">
									<ShieldCheck className="h-5 w-5" />
								</div>
								<span className="text-[11px] font-black text-dark-blue leading-tight block">
									Evidence-Based Approach
								</span>
							</div>

							{/* Pillar 3 */}
							<div className="flex flex-col items-center text-center sm:border-l sm:border-dark-blue/5 sm:pl-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue mb-2.5">
									<Heart className="h-5 w-5" />
								</div>
								<span className="text-[11px] font-black text-dark-blue leading-tight block">
									Holistic Recovery
								</span>
							</div>

							{/* Pillar 4 */}
							<div className="flex flex-col items-center text-center sm:border-l sm:border-dark-blue/5 sm:pl-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue mb-2.5">
									<Clock className="h-5 w-5" />
								</div>
								<span className="text-[11px] font-black text-dark-blue leading-tight block">
									Lasting Results
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* 10 Condition Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
					{CONDITIONS.map((condition, idx) => {
						const Icon = condition.icon;
						
						return (
							<div
								key={idx}
								className="bg-white rounded-3xl border border-dark-blue/5 shadow-md p-6 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group"
							>
								<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue mb-4 group-hover:scale-110 transition-transform duration-300">
									<Icon className="h-5 w-5" />
								</div>
								<h3 className="text-sm font-extrabold text-dark-blue leading-snug group-hover:text-primary-blue transition-colors">
									{condition.title}
								</h3>
								<p className="mt-2.5 text-[11px] text-dark-text/75 font-semibold leading-relaxed">
									{condition.description}
								</p>
							</div>
						);
					})}
				</div>

				{/* Bottom Stats and WhatsApp Banner */}
				<div className="rounded-3xl bg-white border border-dark-blue/5 p-6 md:p-8 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
					
					{/* Stats Side */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full lg:w-auto flex-1">
						{/* Stat 1 */}
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
								<Award className="h-5 w-5" />
							</div>
							<div>
								<span className="block text-lg font-black text-dark-blue leading-none">10+</span>
								<span className="text-[10px] text-dark-text/60 font-black uppercase tracking-wider">Years Exp.</span>
							</div>
						</div>

						{/* Stat 2 */}
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
								<Users className="h-5 w-5" />
							</div>
							<div>
								<span className="block text-lg font-black text-dark-blue leading-none">500+</span>
								<span className="text-[10px] text-dark-text/60 font-black uppercase tracking-wider">Patients</span>
							</div>
						</div>

						{/* Stat 3 */}
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
								<Sparkles className="h-5 w-5" />
							</div>
							<div>
								<span className="block text-lg font-black text-dark-blue leading-none">5.0/5</span>
								<span className="text-[10px] text-dark-text/60 font-black uppercase tracking-wider">66 Google Reviews</span>
							</div>
						</div>

						{/* Stat 4 */}
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
								<ShieldCheck className="h-5 w-5" />
							</div>
							<div>
								<span className="block text-lg font-black text-dark-blue leading-none">95%</span>
								<span className="text-[10px] text-dark-text/60 font-black uppercase tracking-wider">Satisfaction</span>
							</div>
						</div>
					</div>

					{/* WhatsApp CTA Side */}
					<div className="w-full lg:w-auto lg:max-w-md bg-white border border-dark-blue/5 rounded-2xl p-5 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
						<div className="text-center sm:text-left flex-1">
							<h4 className="text-xs font-black text-dark-blue">Not sure what&apos;s causing your pain?</h4>
							<p className="text-[10px] text-dark-text/70 font-bold mt-1">Talk to our expert and get the right treatment plan.</p>
						</div>
						<a
							href="https://wa.me/917977249267?text=Hello%20Dr.%20Prabhat%20Mudhaliar%2C%20I%20am%20not%20sure%20what%20is%20causing%20my%20pain%20and%20would%20like%20to%20consult%20with%20you%20to%20get%20the%20right%20treatment%20plan."
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-2xl bg-dark-blue hover:bg-primary-blue px-5 py-3 text-xs font-black text-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-md hover:shadow-primary-blue/20"
						>
							<MessageCircle className="h-4.5 w-4.5 text-[#25D366] group-hover:text-white fill-[#25D366]/10" />
							Message on WhatsApp
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
