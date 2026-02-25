import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "VARG EX",
    subtitle: "道路合法電動越野車",
    description: "全球最快的電動越野車，現在可以合法上路。",
    image: "https://assets.starkfuture.com/frontend-assets/ex-product/hero_01_desktop.webp",
    href: "/products/stark-varg-ex",
    tag: "道路合法",
  },
  {
    name: "VARG MX 1.2",
    subtitle: "純越野競技車款",
    description: "為賽道而生，80 匹馬力的純電越野猛獸。",
    image: "https://assets.starkfuture.com/frontend-assets/varg/mx1.2/red.webp",
    href: "/products/stark-varg",
    tag: "越野競技",
  },
  {
    name: "VARG SM",
    subtitle: "電動滑胎車",
    description: "將賽道性能帶上街道，前所未有的滑胎體驗。",
    image: "https://assets.starkfuture.com/frontend-assets/sm-product/product_carousel_red_02_desktop.webp",
    href: "/products/stark-varg-sm",
    tag: "滑胎街車",
  },
];

const specs = [
  { value: "80", unit: "匹", label: "最大馬力" },
  { value: "692", unit: "Nm", label: "後輪扭力" },
  { value: "110", unit: "kg", label: "整備重量" },
  { value: "6", unit: "小時", label: "充電時間" },
];

const features = [
  {
    title: "SAM 智能輔助系統",
    description: "透過手機 App 即時調整動力輸出、引擎煞車、循跡控制等超過 100 項參數，打造專屬你的騎乘體驗。",
    href: "/sam",
  },
  {
    title: "革命性電動動力",
    description: "自主研發的馬達與逆變器，提供 80 匹馬力與瞬間扭力輸出，超越同級汽油越野車。",
  },
  {
    title: "賽道級底盤",
    description: "WP XACT 前叉與避震器、Brembo 煞車系統、鍛造鋁合金車架，每個細節都是頂級規格。",
  },
  {
    title: "靜音騎乘",
    description: "幾乎無聲的動力系統，讓你在任何地方、任何時間都能享受騎乘樂趣，不打擾任何人。",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://assets.starkfuture.com/frontend-assets/ex-product/hero_01_desktop.webp"
            alt="Stark VARG EX"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
            隨處馳騁
          </h1>
          <p className="text-xl md:text-2xl text-white/70 mb-8">
            隨時出發
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products/stark-varg-ex"
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              探索 VARG EX
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              預約試乘
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">選擇你的 VARG</h2>
          <p className="text-white/50 text-center mb-16 text-lg">三款車型，滿足不同騎乘需求</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group relative bg-[#1c1c1e] rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs text-white/80">
                    {product.tag}
                  </span>
                </div>
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                  <p className="text-sm text-white/40 mb-3">{product.subtitle}</p>
                  <p className="text-white/60 text-sm">{product.description}</p>
                  <div className="mt-4 flex items-center text-sm text-white/50 group-hover:text-white transition-colors">
                    了解更多
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Bar */}
      <section className="py-20 bg-[#1c1c1e]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {specs.map((spec) => (
              <div key={spec.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold">
                  {spec.value}
                  <span className="text-lg text-white/50 ml-1">{spec.unit}</span>
                </div>
                <p className="text-sm text-white/40 mt-2">{spec.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">為何選擇 Stark</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-8 bg-[#1c1c1e] rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed">{feature.description}</p>
                {feature.href && (
                  <Link href={feature.href} className="inline-block mt-4 text-sm text-white/60 hover:text-white transition-colors">
                    了解更多 →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6">
        <div className="absolute inset-0">
          <Image
            src="https://assets.starkfuture.com/frontend-assets/ex-product/hero_02_desktop.webp"
            alt="Stark VARG riding"
            fill
            className="object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">準備好了嗎？</h2>
          <p className="text-xl text-white/60 mb-8">
            立即聯繫台灣獨家代理 Lapspeed Trading，了解購車方案與試乘資訊。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              聯繫我們
            </Link>
            <a
              href="https://lapspeedtrading.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Lapspeed 官網
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
