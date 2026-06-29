import Link from "next/link";
import { Activity, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Shoulder Pain", href: "#conditions-we-treat" },
    { name: "Knee Pain", href: "#conditions-we-treat" },
    { name: "Neck Pain", href: "#conditions-we-treat" },
    { name: "Back Pain", href: "#conditions-we-treat" },
    { name: "After Surgery", href: "#conditions-we-treat" },
    { name: "Restricted Movements", href: "#conditions-we-treat" },
    { name: "Sports Injury", href: "#conditions-we-treat" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Meet the Expert", href: "#about" },
    { name: "Conditions We Treat", href: "#conditions-we-treat" },
    { name: "Contact & Location", href: "#contact" },
  ];

  return (
    <footer className="mt-auto bg-dark-blue text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-blue text-white">
                <Activity className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold leading-none tracking-tight text-white">
                  DR. PRABHAT MUDHALIAR&apos;S
                </span>
                <span className="text-[9px] font-bold tracking-widest text-primary-blue uppercase mt-0.5">
                  Physiotherapy Centre
                </span>
              </div>
            </Link>
            <p className="text-sm text-light-blue/70 leading-relaxed">
              Empowering you to live your life in full motion. We offer advanced orthopedic rehabilitation, sports therapy, and personalized recovery plans designed around your body.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-base font-bold tracking-wider text-primary-blue uppercase mb-5">
              Services
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-light-blue/80">
              {services.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-primary-blue transition-all">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-base font-bold tracking-wider text-primary-blue uppercase mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-light-blue/80">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-primary-blue transition-all">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold tracking-wider text-primary-blue uppercase mb-1">
              Connect
            </h3>
            
            <div className="flex gap-3 text-sm text-light-blue/80">
              <MapPin className="h-5 w-5 shrink-0 text-primary-blue" />
              <span>Gandhi market, prabhat building, Sion Main Rd, Namdev Koli Marg, Sion, Mumbai, Maharashtra 400019</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-light-blue/80">
              <Phone className="h-5 w-5 shrink-0 text-primary-blue" />
              <a href="tel:7977249267" className="hover:text-primary-blue">+91 79772 49267</a>
            </div>

            <div className="flex items-center gap-3 text-sm text-light-blue/80">
              <Mail className="h-5 w-5 shrink-0 text-primary-blue" />
              <a href="mailto:contact@drprabhatphysio.com" className="hover:text-primary-blue">contact@drprabhatphysio.com</a>
            </div>

            <div className="flex gap-3 text-sm text-light-blue/80">
              <Clock className="h-5 w-5 shrink-0 text-primary-blue" />
              <div>
                <p className="font-semibold text-primary-blue">Open · Closes 8:00 pm</p>
                <p className="text-xs text-light-blue/60 mt-0.5">Mon - Sat: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-10 border-white/10" />

        {/* Bottom copyright */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-light-blue/55">
          <p>© {currentYear} Dr. Prabhat Mudhaliar&apos;s Physiotherapy Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
