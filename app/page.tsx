"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  ShieldCheck,
  Cloud,
  Laptop,
  Network,
  ClipboardCheck,
  Users,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* HEADER */}
      <header className="flex items-center justify-center px-6 py-4 bg-black/60 backdrop-blur sticky top-0 z-50">
        <span className="font-semibold tracking-wide">Calypso One IT LLC</span>
      </header>

      {/* HERO (with wallpaper background) */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 md:py-32 bg-gradient-to-br from-slate-900 to-black overflow-hidden">
        {/* Wallpaper background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-wallpaper.png"
            alt=""
            className="
              absolute left-1/2 top-[55%]
              w-[1200px] max-w-none
              -translate-x-1/2 -translate-y-1/2
              opacity-75
            "
          />
          {/* Blend + readability overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/85" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-5xl md:text-6xl font-bold mb-5"
          >
            Calypso One IT LLC
          </motion.h1>

          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
            Reliable IT Solutions with{" "}
            <span className="text-slate-100 font-semibold">
              20+ Years of IT Experience
            </span>
            .
            <br className="hidden md:block" />
            Security-Focused. Business Ready.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-20 md:py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-100">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Laptop size={36} />}
            title="Managed IT Support"
            description="Remote and onsite support, troubleshooting, patching, monitoring, and day-to-day reliability."
          />

          <ServiceCard
            icon={<ShieldCheck size={36} />}
            title="Cybersecurity"
            description="MFA, endpoint protection, security hardening, access reviews, and practical risk reduction."
          />

          <ServiceCard
            icon={<Cloud size={36} />}
            title="Cloud & Microsoft / Google Workspace"
            description="Account management, migrations, licensing guidance, and security configuration best practices."
          />

          <ServiceCard
            icon={<Network size={36} />}
            title="Network & WiFi Setup"
            description="Firewalls, business WiFi, switches, VPN, and network segmentation for secure operations."
          />

          <ServiceCard
            icon={<ClipboardCheck size={36} />}
            title="IT Assessments"
            description="Baseline reviews of systems, security, access, and documentation with a clear improvement roadmap."
          />

          <ServiceCard
            icon={<Users size={36} />}
            title="Onboarding & Offboarding"
            description="Repeatable process for new hires and exits: accounts, devices, access, and asset return tracking."
          />
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="bg-slate-900 px-6 py-20 md:py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-slate-100">
              Why Calypso One IT?
            </h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              With over{" "}
              <span className="text-slate-100 font-semibold">
                20 years of hands-on IT experience
              </span>
              , we help small organizations stay secure, productive, and supported
              — without unnecessary complexity.
            </p>
            <ul className="space-y-2 text-slate-300">
              <li>✔ Security-first mindset</li>
              <li>✔ Clear documentation & visibility</li>
              <li>✔ Practical solutions that scale</li>
              <li>✔ Vendor coordination when needed</li>
            </ul>
          </div>

          <Card className="bg-slate-950 border-slate-800">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-slate-100">
                What We Support
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Small Businesses</li>
                <li>• Nonprofits</li>
                <li>• Retail</li>
                <li>• Healthcare Offices</li>
                <li>• Vendor Management & Relations</li>
                <li>• Procurement & Renewals</li>
                <li>• Account Access & Security</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CONTACT (Mac + Windows friendly) */}
      <section
        id="contact"
        className="px-6 py-20 md:py-24 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-slate-100">Contact</h2>
        <p className="text-slate-300 mb-8">
          Reach out and we’ll respond as soon as possible.
        </p>

        <div className="flex flex-col items-center gap-4 text-lg text-slate-200">
          {/* Primary mailto */}
          <a
            href="mailto:calypsooneit@gmail.com?subject=Request%20Consultation"
            className="hover:text-blue-400 underline underline-offset-4"
          >
            calypsooneit@gmail.com
          </a>

          {/* Gmail fallback */}
          <a
            href="https://mail.google.com/mail/?view=cm&to=calypsooneit@gmail.com&su=Request%20Consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-blue-400"
          >
            Open in Gmail instead
          </a>

          {/* Copy fallback */}
          <button
            onClick={() => {
              navigator.clipboard.writeText("calypsooneit@gmail.com");
              alert("Email address copied to clipboard");
            }}
            className="text-sm text-slate-400 hover:text-blue-400"
          >
            Copy email address
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-center py-6 text-slate-500">
        © {new Date().getFullYear()} Calypso One IT LLC. All rights reserved.
      </footer>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} className="h-full">
      <Card className="bg-slate-900 border-slate-800 h-full">
        <CardContent className="p-6 h-full flex flex-col">
          <div className="mb-4 text-blue-400">{icon}</div>

          <h3 className="text-xl font-semibold mb-2 text-slate-100">{title}</h3>

          <p className="text-slate-300 leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
