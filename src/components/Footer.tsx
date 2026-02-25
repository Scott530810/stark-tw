import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  車款: [
    { label: "VARG MX 1.2", href: "/products/stark-varg" },
    { label: "VARG EX", href: "/products/stark-varg-ex" },
    { label: "VARG SM", href: "/products/stark-varg-sm" },
  ],
  支援: [
    { label: "支援中心", href: "/support" },
    { label: "技術教學", href: "/tutorials" },
    { label: "零件配件", href: "/parts" },
  ],
  公司: [
    { label: "關於我們", href: "/about" },
    { label: "聯繫我們", href: "/contact" },
    { label: "媒體資源", href: "/press" },
  ],
};

const socialLinks = [
  { icon: "instagram", url: "https://www.instagram.com/starkfuture/" },
  { icon: "facebook", url: "https://www.facebook.com/starkfuture/" },
  { icon: "youtube", url: "https://www.youtube.com/@starkfuture" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="https://assets.starkfuture.com/frontend-assets/common/new_logo.png"
              alt="Stark Future"
              width={140}
              height={35}
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-white/50 mt-4">
              台灣獨家代理
            </p>
            <p className="text-sm text-white/50">
              Lapspeed Trading Co., Ltd.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Image
                    src={`https://assets.starkfuture.com/frontend-assets/glyphs/${social.icon}.svg`}
                    alt={social.icon}
                    width={16}
                    height={16}
                    className="invert"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white/40 uppercase mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Stark Future. 台灣代理：Lapspeed Trading Co., Ltd.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-white/30 hover:text-white/50 transition-colors">隱私權政策</Link>
            <Link href="/terms" className="text-xs text-white/30 hover:text-white/50 transition-colors">服務條款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
