"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const milestones = [
  { year: "2020", event: "Stark Future 於西班牙巴塞隆納成立" },
  { year: "2022", event: "VARG 原型車打破電動越野車速度紀錄" },
  { year: "2023", event: "VARG MX 開始量產交車" },
  { year: "2024", event: "推出 VARG EX（道路合法）及 VARG SM（滑胎車）" },
  { year: "2025", event: "全球經銷網路持續擴展，台灣代理 Lapspeed Trading 成立" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://assets.starkfuture.com/frontend-assets/mx1.2/carousel_03_slide_01_desktop.webp"
            alt="Stark Future"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        <AnimatedSection className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-sm tracking-[0.3em] uppercase text-white/50 mb-3">About</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">關於 Stark Future</h1>
        </AnimatedSection>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0a]">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Proving electric is superior to gas
          </h2>
          <p className="text-white/50 text-lg md:text-xl leading-relaxed">
            Stark Future 創立於西班牙巴塞隆納，致力於打造世界領先的電動摩托車。
            從越野賽道到公路街道，Stark 的車款以強大的動力、極致的寧靜和永續的理念，
            證明電動車在性能上已全面超越燃油車。
          </p>
        </AnimatedSection>
      </section>

      {/* Key Numbers */}
      <section className="py-20 md:py-28 bg-[#111]">
        <AnimatedSection className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "80", unit: "HP", label: "最大馬力" },
              { value: "3", label: "車款系列", unit: "" },
              { value: "110", unit: "kg", label: "最輕車重" },
              { value: "0", unit: "", label: "碳排放" },
            ].map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1} className="text-center">
                <div className="text-5xl md:text-7xl font-bold tracking-tight">
                  {s.value}
                  <span className="text-lg md:text-xl text-white/40 ml-1 font-normal">{s.unit}</span>
                </div>
                <p className="text-sm md:text-base text-white/40 mt-3">{s.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Full-bleed image */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="https://assets.starkfuture.com/frontend-assets/ex-product/carousel_2_slide_1_desktop.webp"
          alt="Stark VARG in action"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">發展歷程</h2>
          </AnimatedSection>

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.1}>
                <div className="flex gap-8 py-8 border-b border-white/10">
                  <span className="text-3xl md:text-4xl font-bold text-white/20 shrink-0 w-24">{m.year}</span>
                  <p className="text-lg text-white/60 pt-2">{m.event}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Taiwan Dealer */}
      <section className="py-24 md:py-32 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <AnimatedSection>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="https://assets.starkfuture.com/frontend-assets/ex-product/hero_02_desktop.webp"
                  alt="Lapspeed Trading"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-sm tracking-[0.2em] uppercase text-white/40 mb-4">台灣獨家代理</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Lapspeed Trading Co., Ltd.</h2>
              <div className="space-y-4 text-white/50 text-lg leading-relaxed">
                <p>
                  Lapspeed Trading 是 Stark Future 在台灣的獨家進口代理商，提供完整的銷售、售後服務與技術支援。
                </p>
                <p>
                  我們同時代理 Circuit Equipment、RTECH、AXP Racing、Seat Concepts、Mobius 等歐美越野車裝備品牌，
                  是台灣越野車騎士最信賴的夥伴。
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://lapspeedtrading.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-center"
                >
                  Lapspeed 官網
                </a>
                <Link
                  href="/contact"
                  className="px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-center"
                >
                  聯繫我們
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">服務項目</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "新車銷售",
                desc: "VARG EX、MX 1.2、SM 全車系銷售，提供詳細報價與規格諮詢。",
                icon: "🏍️",
              },
              {
                title: "售後服務",
                desc: "原廠零件供應、技術支援、定期保養與維修服務。",
                icon: "🔧",
              },
              {
                title: "試乘體驗",
                desc: "預約試乘，親身感受 Stark VARG 的電動越野性能。",
                icon: "🏁",
              },
            ].map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.15}>
                <div className="p-8 md:p-10 bg-[#1a1a1a] rounded-3xl h-full">
                  <span className="text-4xl mb-6 block">{service.icon}</span>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/50 leading-relaxed">{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-48 px-6">
        <div className="absolute inset-0">
          <Image
            src="https://assets.starkfuture.com/frontend-assets/mx1.2/hero_03_desktop.webp"
            alt="Stark VARG"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <AnimatedSection className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">準備好了嗎？</h2>
          <Link
            href="/contact"
            className="inline-block min-w-[200px] px-12 py-5 bg-white/95 text-black text-lg font-medium rounded-full hover:bg-white transition-colors tracking-wide text-center"
          >
            聯繫我們
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
