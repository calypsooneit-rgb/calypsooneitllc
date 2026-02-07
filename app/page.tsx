"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
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
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 to-black overflow-hidden">
        {/* FULL-WIDTH LOGO / CIRCUIT IMAGE — STARTS AT VERY TOP */}
        <div className="relative w-full">
          <div className="w-full h-[320px] sm:h-[380px] md:h-[460px] lg:h-[560px]">
            <img
              src="/hero-wallpaper.png"
              alt="Calypso One IT circuit logo"
              className="
                w-full h-full
                object-contain lg:object-cover
                object-center
                opacity-95
                select-none pointer-events-none
              "
            />
          </div>

          {/* Soft fade at bottom so text reads cleanly */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        {/* HERO TEXT — slight overlap into image */}
        <div className="relative z-10 px-6 pb-16 md:pb-20 text-center max-w-3xl mx-auto -mt-10 sm:-mt-12 md:-mt-14">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5"
          >
            Calypso One IT LLC
          </motion.h1>

          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed">
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

      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 py-20 md:py-24 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-slate-100">Contact</h2>
        <p className="text-slate-300 mb-8">
          Reach out and we’ll respond as soon as possible.
        </p>

        <div className="flex flex-col items-center gap-4 text-lg text-slate-200">
          <a
            href="mailto:calypsooneit@gmail.com?subject=Request%20Consultation"
            className="hover:text-blue-400 underline underline-offset-4"
          >
            calypsooneit@gmail.com
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&to=calypsooneit@gmail.com&su=Request%20Consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-blue-400"
          >
            Open in Gmail instead
          </a>

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
          <h3 className="text-xl font-semibold mb-2 text-slate-100">
            {title}
          </h3>
          <p className="text-slate-300 leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
