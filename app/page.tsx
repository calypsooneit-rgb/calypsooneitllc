"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ShieldCheck, Cloud, Laptop, Network } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4 bg-black/60 backdrop-blur sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <img
            src="/calypso-one-it-logo.png"
            alt="Calypso One IT LLC Logo"
            className="h-10 w-auto"
          />
          <span className="font-semibold tracking-wide">
            Calypso One IT LLC
          </span>
        </div>
        <nav className="hidden md:flex gap-6 text-slate-300">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#why" className="hover:text-white">Why Us</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 bg-gradient-to-br from-slate-900 to-black">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Calypso One IT LLC
        </motion.h1>
        <p className="text-xl md:text-2xl max-w-2xl text-slate-300 mb-8">
          Reliable IT Solutions. Security-Focused. Business Ready.
        </p>
        <div className="flex gap-4">
          <Button size="lg">Request Consultation</Button>
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
              We specialize in small businesses and nonprofits that need enterprise-level security without enterprise pricing.
            </p>
            <ul className="space-y-2 text-slate-300">
              <li>✔ Fast response times</li>
              <li>✔ Security-first mindset</li>
              <li>✔ Clear documentation</li>
              <li>✔ Scalable solutions</li>
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
                <li>• Cannabis Operations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-slate-300 mb-8">Let’s talk about your IT needs.</p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="flex items-center gap-3">
            <Mail /> info@calypsooneitllc.com
          </div>
          <div className="flex items-center gap-3">
            <Phone /> (555) 123-4567
          </div>
        </div>
        <Button className="mt-10" size="lg">Email Us</Button>
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
