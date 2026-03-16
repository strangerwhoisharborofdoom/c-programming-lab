import Link from 'next/link';

const footerLinks = {
  Services: [
    { label: 'Industrial Robotics', href: '/services' },
    { label: 'AI/ML Solutions', href: '/services' },
    { label: 'Computer Vision', href: '/services' },
    { label: 'IoT Manufacturing', href: '/services' },
    { label: 'RPA', href: '/services' },
  ],
  Company: [
    { label: 'About Us', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Industries', href: '/industries' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-[#00d4ff11] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#7b2fff] flex items-center justify-center">
                <span className="text-white font-bold text-sm">RC</span>
              </div>
              <span className="text-xl font-bold">RoboCore<span className="text-[#00d4ff]"> AI</span></span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed mb-6">
              Transforming industries with intelligent robotics and AI automation. Building the machines that build the future.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'GitHub', 'YouTube'].map((social) => (
                <a key={social} href="#" className="w-9 h-9 rounded-lg bg-[#0f0f1a] border border-[#00d4ff22] flex items-center justify-center text-gray-400 hover:text-[#00d4ff] hover:border-[#00d4ff66] transition-all duration-200 text-xs font-bold">
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4 text-sm">{title}</h3>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-gray-400 text-sm hover:text-[#00d4ff] transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#00d4ff11] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 RoboCore AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="tel:9008826340" className="text-gray-400 text-sm hover:text-[#00d4ff] transition-colors">+91 9008826340</a>
            <a href="mailto:p0073100@gmail.com" className="text-gray-400 text-sm hover:text-[#00d4ff] transition-colors">p0073100@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
