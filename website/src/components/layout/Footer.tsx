import Link from "next/link";
import { Cpu, Phone, Mail, Twitter, Linkedin, Github, MapPin } from "lucide-react";

const services = [
  { href: "/services#industrial-robotics", label: "Industrial Robotics" },
  { href: "/services#ai-ml", label: "AI & Machine Learning" },
  { href: "/services#automation", label: "Process Automation" },
  { href: "/services#computer-vision", label: "Computer Vision" },
  { href: "/services#iot", label: "IoT Solutions" },
  { href: "/services#analytics", label: "Data Analytics" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#020817] border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-500 rounded flex items-center justify-center">
                <Cpu className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-xl font-bold text-cyan-400">
                RoboTech<span className="text-white">AI</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Engineering the future with cutting-edge robotics, artificial intelligence,
              and intelligent automation solutions for industries worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="w-9 h-9 bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500 rounded flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                className="w-9 h-9 bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500 rounded flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View our GitHub"
                className="w-9 h-9 bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500 rounded flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-slate-600 group-hover:bg-cyan-400 rounded-full transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full" />
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-slate-600 group-hover:bg-cyan-400 rounded-full transition-colors" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-400 rounded-full" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:9008826340"
                  className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-8 h-8 bg-slate-800 group-hover:bg-cyan-500/20 border border-slate-700 group-hover:border-cyan-500 rounded flex items-center justify-center transition-all flex-shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm">9008826340</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:p0073100@gmail.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-8 h-8 bg-slate-800 group-hover:bg-cyan-500/20 border border-slate-700 group-hover:border-cyan-500 rounded flex items-center justify-center transition-all flex-shrink-0">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm">p0073100@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <div className="w-8 h-8 bg-slate-800 border border-slate-700 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm">
                  Innovation Hub, Tech Park<br />
                  Bengaluru, Karnataka 560001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} RoboTech AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-slate-500 hover:text-cyan-400 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-500 hover:text-cyan-400 text-xs transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="text-slate-500 hover:text-cyan-400 text-xs transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
