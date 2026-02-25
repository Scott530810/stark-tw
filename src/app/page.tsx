"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ImageCarousel from "@/components/ImageCarousel";

const products = [
  {
    name: "VARG EX",
    subtitle: "The ultimate road-legal electric enduro bike",
    description: "道路合法電動越野車。10-80 HP 可調動力，118 kg 輕量車身，前 21\" 後 18\" 輪組。",
    image: "https://assets.starkfuture.com/frontend-assets/ex-product/hero_01_desktop.webp",
    href: "/products/stark-varg-ex",
    tag: "道路合法",
  },
  {
    name: "VARG MX 1.2",
    subtitle: "The fastest electric motocross bike in the world",
    description: "純越野競技車款。80 HP 的純電越野車，110 kg 整備重量，前 21\" 後 19\" 輪組。",
    image: "https://assets.starkfuture.com/frontend-assets/mx1.2/hero_01_desktop.webp",
    href: "/products/stark-varg",
    tag: "越野競技",
  },
  {
    name: "VARG SM",
    subtitle: "The ultimate road-legal electric supermoto",
    description: "電動滑胎車。將賽道性能帶上街道，17\" 輪組，道路合法認證。",
    image: "https://assets.starkfuture.com/frontend-assets/sm-product/hero_01_desktop.webp",
    href: "/products/stark-varg-sm",
    tag: "滑胎街車",
  },
];

const heroImages = [
  "https://assets.starkfuture.com/frontend-assets/ex-product/hero_01_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/mx1.2/hero_01_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/sm-product/hero_01_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/ex-product/hero_03_desktop.webp",
];

const specs = [
  { value: "80", unit: "HP", label: "最大馬力" },
  { value: "938", unit: "Nm", label: "後輪扭力" },
  { value: "110", unit: "kg", label: "最輕整備重量" },
  { value: "6.5", unit: "kWh", label: "電池容量" },
];

const features = [
  {
    title: "可自訂動力曲線",
    desc: "10 到 80 HP 可調範圍，透過 Stark 專屬 App 調整動力輸出，適應不同騎乘場景。",
    image: "https://assets.starkfuture.com/frontend-assets/ex-product/carousel_1_slide_1_desktop.webp",
  },
  {
    title: "零排放、低維護",
    desc: "無引擎油、無空濾、無火星塞。電動馬達幾乎不需保養，維護成本遠低於傳統越野車。",
    image: "https://assets.starkfuture.com/frontend-assets/ex-product/carousel_1_slide_2_desktop.webp",
  },
  {
    title: "超長續航力",
    desc: "6.5 kWh 電池搭配高效能馬達，最長可騎乘約 6 小時。240V 充電約 2 小時充滿。",
    image: "https://assets.starkfuture.com/frontend-assets/mx1.2/carousel_01_slide_01_desktop.webp",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero - Full Screen Carousel */}
      <ImageCarousel images={heroImages} alt="Stark VARG" interval={6000}>
        <div className="flex flex-col justify-end h-full pb-24 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-base md:text-lg text-white/60 mb-3 tracking-[0.3em] uppercase font-light">
              Stark Future 台灣
            </p>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-4">
              STARK VARG
            </h1>
            <p className="text-lg md:text-2xl text-white/70 mb-8 max-w-2xl font-light">
              The most powerful electric motorcycle in the world
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products/stark-varg-ex"
                className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all text-center"
              >
                探索車款
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all text-center"
              >
                聯繫我們
              </Link>
            </div>
          </div>
        </div>
      </ImageCarousel>

      {/* Specs Bar */}
      <section className="py-20 md:py-28 bg-[#0a0a0a]">
        <AnimatedSection className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {specs.map((spec, i) => (
              <AnimatedSection key={spec.label} delay={i * 0.1} className="text-center">
                <div className="text-5xl md:text-7xl font-bold tracking-tight">
                  {spec.value}
                  <span className="text-lg md:text-xl text-white/40 ml-1 font-normal">{spec.unit}</span>
                </div>
                <p className="text-sm md:text-base text-white/40 mt-3 tracking-wide">{spec.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Product Lineup - Full width cards */}
      <section className="py-24 md:py-32 bg-[#111]">
        <AnimatedSection className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">選擇你的 VARG</h2>
          <p className="text-white/40 text-center mb-16 md:mb-20 text-lg">三款車型，滿足不同騎乘需求</p>
        </AnimatedSection>

        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {products.map((product, i) => (
            <AnimatedSection key={product.name} delay={i * 0.15}>
              <Link
                href={product.href}
                className="group block relative rounded-3xl overflow-hidden bg-[#1a1a1a] hover:bg-[#222] transition-colors duration-500"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-72 md:h-[500px] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs text-white/80 tracking-wider uppercase">
                        {product.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 md:p-16 flex flex-col justify-center">
                    <h3 className="text-3xl md:text-5xl font-bold mb-2">{product.name}</h3>
                    <p className="text-sm md:text-base text-white/40 mb-4 italic">{product.subtitle}</p>
                    <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">{product.description}</p>
                    <div className="flex items-center text-base text-white/50 group-hover:text-white transition-colors">
                      了解更多
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#0a0a0a]">
        {features.map((feature, i) => (
          <div key={feature.title} className="relative min-h-screen flex items-center">
            <div className="absolute inset-0">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
            <AnimatedSection className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
              <h3 className="text-3xl md:text-5xl font-bold mb-6">{feature.title}</h3>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
                {feature.desc}
              </p>
            </AnimatedSection>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-48 px-6">
        <div className="absolute inset-0">
          <Image
            src="https://assets.starkfuture.com/frontend-assets/ex-product/hero_02_desktop.webp"
            alt="Stark VARG riding"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <AnimatedSection className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-white/40 mb-4">台灣獨家代理</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Lapspeed Trading</h2>
          <p className="text-lg text-white/50 mb-10">
            提供新車銷售、試乘預約、原廠零件與售後服務
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-lg"
            >
              聯繫我們
            </Link>
            <a
              href="https://lapspeedtrading.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-lg"
            >
              Lapspeed 官網
            </a>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
