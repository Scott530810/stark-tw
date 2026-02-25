"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import ImageCarousel from "@/components/ImageCarousel";

const heroImages = [
  "https://assets.starkfuture.com/frontend-assets/ex-product/hero_01_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/ex-product/hero_02_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/ex-product/hero_03_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/ex-product/hero_04_desktop.webp",
];

const colors = [
  { name: "Stark Red", color: "#cc0000", slug: "red" },
  { name: "Combat Gray", color: "#6b6b6b", slug: "gray" },
  { name: "Arctic White", color: "#e8e8e8", slug: "white" },
];

const featureSections = [
  {
    title: "道路合法認證",
    subtitle: "Road-Legal Electric Enduro",
    desc: "VARG EX 是全球最速的道路合法電動越野車。搭載 LED 燈具組、AVAS 低速警示系統，完整符合道路法規要求，讓你從家門口一路騎到林道。",
    image: "https://assets.starkfuture.com/frontend-assets/ex-product/carousel_1_slide_1_desktop.webp",
  },
  {
    title: "可自訂動力曲線",
    subtitle: "Customizable Power: 10-80 HP",
    desc: "透過 Stark 專屬 App，在 10 到 80 HP 之間自由調整動力輸出。無論是初學者的溫和模式，還是競技級的全馬力輸出，一台車滿足所有需求。",
    image: "https://assets.starkfuture.com/frontend-assets/ex-product/carousel_1_slide_2_desktop.webp",
  },
  {
    title: "輕量化設計",
    subtitle: "118 kg Ready to Ride",
    desc: "整備重量僅 118 kg，比多數 450cc 四行程越野車更輕。鋁合金車架搭配精密重心配置，提供卓越的操控靈活性。",
    image: "https://assets.starkfuture.com/frontend-assets/ex-product/carousel_1_slide_3_desktop.webp",
  },
];

const specs = {
  動力系統: [
    { label: "馬達類型", value: "永磁同步馬達 (PMSM)" },
    { label: "最大馬力", value: "80 HP (60 kW)" },
    { label: "可調範圍", value: "10-80 HP" },
    { label: "後輪扭力", value: "938 Nm" },
    { label: "電池容量", value: "6.5 kWh" },
    { label: "充電時間", value: "約 2 小時 (240V) / 3.5 小時 (120V)" },
    { label: "充電器", value: "3.3 kW, 16A, 120/240V" },
    { label: "騎乘時間", value: "最長約 6 小時" },
  ],
  底盤懸吊: [
    { label: "車架", value: "鋁合金" },
    { label: "前叉", value: "48mm 閉合式彈簧前叉" },
    { label: "前叉調整", value: "壓縮/回彈可調" },
    { label: "前叉行程", value: "310 mm" },
    { label: "前煞車碟", value: "260 mm" },
    { label: "後煞車碟", value: "220 mm" },
    { label: "前輪", value: "21 吋" },
    { label: "後輪", value: "18 吋" },
  ],
  車輛資訊: [
    { label: "整備重量", value: "118 kg" },
    { label: "座高", value: "935 mm" },
    { label: "道路合法", value: "✅" },
    { label: "LED 燈具", value: "✅" },
    { label: "AVAS 低速警示", value: "✅" },
    { label: "方向燈", value: "✅" },
    { label: "後照鏡", value: "✅" },
  ],
};

const galleryImages = [
  "https://assets.starkfuture.com/frontend-assets/ex-product/carousel_2_slide_1_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/ex-product/carousel_2_slide_2_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/ex-product/carousel_2_slide_3_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/ex-product/carousel_2_slide_4_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/ex-product/carousel_3_slide_1_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/ex-product/carousel_3_slide_2_desktop.webp",
];

export default function VargEXPage() {
  const [activeColor, setActiveColor] = useState("red");

  return (
    <>
      {/* Hero Carousel */}
      <ImageCarousel images={heroImages} alt="Stark VARG EX" interval={5000}>
        <div className="flex flex-col justify-end h-full pb-24 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <p className="text-sm tracking-[0.3em] uppercase text-white/50 mb-3">Stark Future</p>
                <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-none">VARG EX</h1>
                <p className="text-lg md:text-xl text-white/60 mt-3 font-light italic">
                  The fastest electric off-road bike in the world
                </p>
              </div>
              <Link
                href="/contact"
                className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-lg shrink-0"
              >
                立即洽詢
              </Link>
            </div>
          </div>
        </div>
      </ImageCarousel>

      {/* Key Specs */}
      <section className="py-20 md:py-28 bg-[#0a0a0a]">
        <AnimatedSection className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "80", unit: "HP", label: "最大馬力" },
              { value: "938", unit: "Nm", label: "後輪扭力" },
              { value: "118", unit: "kg", label: "整備重量" },
              { value: "6.5", unit: "kWh", label: "電池容量" },
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

      {/* Description */}
      <section className="py-24 md:py-32 px-6 bg-[#111]">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">道路合法電動越野車</h2>
          <p className="text-white/50 text-lg md:text-xl leading-relaxed">
            Experience the Stark VARG EX, the ultimate road-legal electric enduro bike.
            Lightweight and agile, with customizable power (10-80 HP), emission-free performance,
            and low maintenance. Perfect for trails, roads, and adventures, it combines sustainability,
            advanced features, and unmatched handling.
          </p>
        </AnimatedSection>
      </section>

      {/* Video Section */}
      <section className="relative h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://assets.starkfuture.com/frontend-assets/ex-product/hero_01_desktop.webp"
        >
          <source src="https://assets.starkfuture.com/frontend-assets/smx1-product/crawl_mode_video_loop_desktop.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Feature Sections - Full Bleed */}
      {featureSections.map((section, i) => (
        <section key={section.title} className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>
          <AnimatedSection className="relative z-10 max-w-7xl mx-auto px-6 py-32">
            <div className="max-w-xl">
              <p className="text-sm tracking-[0.2em] uppercase text-white/40 mb-3">{section.subtitle}</p>
              <h3 className="text-3xl md:text-5xl font-bold mb-6">{section.title}</h3>
              <p className="text-lg text-white/60 leading-relaxed">{section.desc}</p>
            </div>
          </AnimatedSection>
        </section>
      ))}

      {/* Color Selector */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">選擇你的車色</h2>
            <p className="text-white/40 text-lg">三種配色，展現你的風格</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex justify-center gap-4 mb-12">
              {colors.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => setActiveColor(c.slug)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${
                    activeColor === c.slug
                      ? "border-white bg-white/10 scale-105"
                      : "border-white/20 hover:border-white/40"
                  }`}
                >
                  <span className="w-5 h-5 rounded-full border border-white/20" style={{ backgroundColor: c.color }} />
                  <span className="text-sm">{c.name}</span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="relative aspect-square rounded-2xl overflow-hidden bg-[#1c1c1e]">
                  <Image
                    src={`https://assets.starkfuture.com/frontend-assets/ex-product/product_carousel_${activeColor}_${n}_desktop.webp`}
                    alt={`VARG EX ${activeColor} view ${n}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 md:py-32 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">技術規格</h2>
            <p className="text-white/40 text-lg">完整技術參數</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {Object.entries(specs).map(([category, items], i) => (
              <AnimatedSection key={category} delay={i * 0.15}>
                <h3 className="text-lg font-semibold text-white/50 mb-6 pb-3 border-b border-white/10 tracking-wider uppercase">
                  {category}
                </h3>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.label} className="flex justify-between gap-4 py-1">
                      <span className="text-sm text-white/40">{item.label}</span>
                      <span className="text-sm font-medium text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold">圖集</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={img}
                    alt={`VARG EX gallery ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
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
            src="https://assets.starkfuture.com/frontend-assets/ex-product/hero_04_desktop.webp"
            alt="VARG EX"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <AnimatedSection className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">對 VARG EX 有興趣？</h2>
          <p className="text-white/50 text-lg mb-10">
            Lapspeed Trading — Stark Future 台灣獨家代理
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-lg"
          >
            立即聯繫
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
