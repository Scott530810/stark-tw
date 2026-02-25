import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "VARG EX",
    subtitle: "道路合法電動越野車",
    description: "全球最速電動越野車，道路合法認證。10-80 HP 可調動力，118 kg 輕量車身。",
    image: "https://assets.starkfuture.com/frontend-assets/ex-product/hero_01_desktop.webp",
    href: "/products/stark-varg-ex",
    tag: "道路合法",
  },
  {
    name: "VARG MX 1.2",
    subtitle: "純越野競技車款",
    description: "為越野賽道而生，80 HP 的純電越野車。",
    image: "https://assets.starkfuture.com/frontend-assets/varg/mx1.2/red.webp",
    href: "/products/stark-varg",
    tag: "越野競技",
  },
  {
    name: "VARG SM",
    subtitle: "電動滑胎車",
    description: "將賽道性能帶上街道的電動滑胎車。",
    image: "https://assets.starkfuture.com/frontend-assets/sm-product/product_carousel_red_02_desktop.webp",
    href: "/products/stark-varg-sm",
    tag: "滑胎街車",
  },
];

const specs = [
  { value: "80", unit: "HP", label: "最大馬力" },
  { value: "938", unit: "Nm", label: "後輪扭力" },
  { value: "118", unit: "kg", label: "整備重量" },
  { value: "6.5", unit: "kWh", label: "電池容量" },
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
          <p className="text-lg md:text-xl text-white/60 mb-4 tracking-widest uppercase">Stark Future 台灣</p>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6">
            VARG EX
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl mx-auto">
            The most advanced electric motorcycle in the world
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
              聯繫我們
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Specs Bar */}
      <section className="py-16 bg-[#1c1c1e]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {specs.map((spec) => (
              <div key={spec.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold">
                  {spec.value}
                  <span className="text-base text-white/50 ml-1">{spec.unit}</span>
                </div>
                <p className="text-sm text-white/40 mt-2">{spec.label}</p>
              </div>
            ))}
          </div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">台灣獨家代理</h2>
          <p className="text-lg text-white/60 mb-8">
            Lapspeed Trading Co., Ltd.
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
