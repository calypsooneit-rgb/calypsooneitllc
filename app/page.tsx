"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, ShieldCheck, Cloud, Laptop, Network } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <header className="flex items-center justify-center px-6 py-4 bg-black/60 backdrop-blur sticky top-0 z-50">
        <span className="font-semibold tracking-wide">
          Calypso One IT LLC
        </span>
      </header>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 bg-gradient-to-br from-slate-900 to-black overflow-hidden">

        {/* Logo glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        {/* Logo */}
        <motion.img
          src="/calypso-one-it-logo.png"
          alt="Calypso One IT LLC Logo"
          className="h-28 w-auto mb-8 relative z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold mb-6 relative z-10"
        >
          Calypso One IT LLC
        </motion.h1>

        <p className="text-xl md:text-2xl max-w-2xl text-slate-300 mb-8 relative z-10">
          Reliable IT Solutions with <strong>20+ Years of IT Experience</strong>.
          Security-Focused. Business Ready.
        </p>

        <div className="flex gap-4 relative z-10">
          <a href="mailto:calypsooneit@gmail.com?subject=Request%20Consultation">
  <Button size="lg">
    Request Consultation
  </Button>
</a>

          <Button size="lg" variant="outline">View Services</Button>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard icon={<Laptop size={36} />} title="Managed IT Support" description="Remote and onsite support, troubleshooting, updates, and monitoring." />
          <ServiceCard icon={<ShieldCheck size={36} />} title="Cybersecurity" description="Endpoint protection, MFA, backups, audits, and compliance guidance." />
          <ServiceCard icon={<Cloud size={36} />} title="Cloud & Microsoft / Google Workspace" description="Account management, migrations, licensing, and security hardening." />
          <ServiceCard icon={<Network size={36} />} title="Network & WiFi Setup" description="Firewalls, business WiFi, switches, VPN, and segmentation." />
          <ServiceCard icon={<Laptop size={36} />} title="Device Provisioning" description="PCs, Macs, monitors, docks, printers, POS systems." />
          <ServiceCard icon={<ShieldCheck size={36} />} title="IT Assessments" description="Full security and infrastructure assessments with roadmap." />
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="bg-slate-900 px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why Calypso One IT?</h2>
            <p className="text-slate-300 mb-4">
              With over <strong>20 years of hands-on IT experience</strong>, we help
              small businesses and nonprofits operate securely, efficiently, and confidently.
            </p>
            <ul className="space-y-2 text-slate-300">
              <li>✔ Security-first mindset</li>
              <li>✔ Clear documentation</li>
              <li>✔ Scalable, practical solutions</li>
              <li>✔ Real-world experience</li>
            </ul>
          </div>

          <Card className="bg-slate-950">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Industries Served</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Small Businesses</li>
                <li>• Nonprofits</li>
                <li>• Retail</li>
                <li>• Healthcare Offices</li>
                <li>• Dispensary Operations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-slate-300 mb-8">Let’s talk about your IT needs.</p>

        <div className="flex items-center justify-center gap-3 text-lg">
          <Mail />
          <a
            href="mailto:calypsooneit@gmail.com"
            className="hover:text-blue-400"
          >
            calypsooneit@gmail.com
          </a>
        </div>

        <Button className="mt-10" size="lg">
          Email Us
        </Button>
      </section>

      <footer className="bg-black text-center py-6 text-slate-500">
        © {new Date().getFullYear()} Calypso One IT LLC. All rights reserved.
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: any) {
  return (
    <motion.div whileHover={{ scale: 1.03 }}>
      <Card className="bg-slate-900 border-slate-800">
        <CardContent className="p-6">
          <div className="mb-4 text-blue-400">{icon}</div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-slate-300">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
