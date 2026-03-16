import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#03040a] py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <span className="text-xl font-bold glow-text">⚡ Axiom Robotics</span>
          <p className="mt-2 text-sm text-slate-400">Building the intelligent machines of tomorrow.</p>
          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <p>
              📞{" "}
              <a href="tel:+919008826340" className="hover:text-cyan-400 transition-colors">
                +91 9008826340
              </a>
            </p>
            <p>
              ✉️{" "}
              <a href="mailto:p0073100@gmail.com" className="hover:text-cyan-400 transition-colors break-all">
                p0073100@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            {["/services", "/projects", "/industries", "/blog", "/contact"].map((href) => (
              <li key={href}>
                <Link href={href} className="capitalize hover:text-cyan-400 transition-colors min-h-[36px] inline-flex items-center">
                  {href.replace("/", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            {["Robotic Cells", "AI Control", "Predictive Ops", "Voice Interfaces"].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Axiom Robotics. All rights reserved.
      </div>
    </footer>
  );
}
