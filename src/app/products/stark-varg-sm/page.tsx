"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import ImageCarousel from "@/components/ImageCarousel";

const heroImages = [
  "https://assets.starkfuture.com/frontend-assets/sm-product/hero_01_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/sm-product/hero_02_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/sm-product/hero_03_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/sm-product/hero_04_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/sm-product/hero_05_desktop.webp",
];

const colors = [
  { name: "Stark Red", color: "#cc0000", slug: "red" },
  { name: "Combat Gray", color: "#6b6b6b", slug: "gray" },
  { name: "Arctic White", color: "#e8e8e8", slug: "white" },
];

const featureSections = [
  {
    title: "賽道性能，街道合法",
    subtitle: "Race Performance, Street Legal",
    desc: "VARG SM 將 Stark 的越野賽道科技帶上街道。道路合法認證搭配 80 HP 的純電動力，是最純粹的電動滑胎車體驗。",
    image: "https://assets.starkfuture.com/frontend-assets/sm-product/carousel_01_slide_01_desktop.webp",
  },
  {
    title: "17 吋輪組",
    subtitle: "17\" Supermoto Wheels",
    desc: "專為滑胎設計的 17 吋輪組，搭配公路胎提供最佳抓地力。無論是彎道、直線還是城市街道，都能展現精準操控。",
    image: "https://assets.starkfuture.com/frontend-assets/sm-product/carousel_01_slide_03_desktop.webp",
  },
  {
    title: "零排放通勤",
    subtitle: "Zero Emission Commute",
    desc: "安靜、乾淨、低維護。VARG SM 是城市通勤的完美選擇，也是週末賽道日的最佳夥伴。",
    image: "https://assets.starkfuture.com/frontend-assets/sm-product/carousel_01_slide_05_desktop.webp",
  },
];

const specs = {
  動力系統: [
    { label: "馬達類型", value: "永磁同步馬達 (PMSM)" },
    { label: "最大馬力", value: "80 HP (60 kW)" },
    { label: "可調範圍", value: "10-80 HP" },
    { label: "後輪扭力", value: "938 Nm" },
    { label: "電池容量", value: "7.2 kWh" },
    { label: "充電時間", value: "約 2 小時 (240V) / 3.5 小時 (120V)" },
    { label: "充電器", value: "3.3 kW, 16A, 120/240V" },
  ],
  底盤懸吊: [
    { label: "車架", value: "鋁合金" },
    { label: "前叉", value: "倒叉式懸吊" },
    { label: "前輪", value: "17 吋" },
    { label: "後輪", value: "17 吋" },
    { label: "前煞車碟", value: "320 mm" },
    { label: "後煞車碟", value: "220 mm" },
  ],
  車輛資訊: [
    { label: "道路合法", value: "✅" },
    { label: "LED 燈具", value: "✅" },
    { label: "AVAS 低速警示", value: "✅" },
    { label: "方向燈", value: "✅" },
    { label: "後照鏡", value: "✅" },
    { label: "ABS 防鎖死煞車", value: "✅" },
  ],
};

const galleryImages = [
  "https://assets.starkfuture.com/frontend-assets/sm-product/carousel_02_slide_01_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/sm-product/carousel_02_slide_02_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/sm-product/carousel_02_slide_03_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/sm-product/carousel_02_slide_04_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/sm-product/carousel_02_slide_05_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/sm-product/carousel_03_slide_01_desktop.webp",
];

export default function VargSMPage() {
  const [activeColor, setActiveColor] = useState("red");

  return (
    <>
      {/* Hero Carousel */}
      <ImageCarousel images={heroImages} alt="Stark VARG SM" interval={5000}>
        <div className="flex flex-col justify-end h-full pb-24 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <p className="text-sm tracking-[0.3em] uppercase text-white/50 mb-3">Stark Future</p>
                <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-none">VARG SM</h1>
                <p className="text-lg md:text-xl text-white/60 mt-3 font-light italic">
                  The ultimate road-legal electric supermoto
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
              { value: "7.2", unit: "kWh", label: "電池容量" },
              { value: "17\"", unit: "", label: "輪組尺寸" },
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
          <h2 className="text-3xl md:text-5xl font-bold mb-8">電動滑胎車</h2>
          <p className="text-white/50 text-lg md:text-xl leading-relaxed">
            Stark VARG SM — the ultimate road-legal electric supermoto.
            Race-bred performance meets street-legal practicality. 17&quot; supermoto wheels,
            80 HP of instant torque, and zero emissions. From city commutes to track days.
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
          poster="https://assets.starkfuture.com/frontend-assets/sm-product/hero_01_desktop.webp"
        >
          <source src="https://assets.starkfuture.com/frontend-assets/sm-product/crawl_mode_video_loop_desktop.mp4" type="video/mp4" />
        </video>
      </section>

      {/* Feature Sections */}
      {featureSections.map((section) => (
        <section key={section.title} className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <Image src={section.image} alt={section.title} fill className="object-cover" sizes="100vw" />
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
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex justify-center gap-4 mb-12">
              {colors.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => setActiveColor(c.slug)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${
                    activeColor === c.slug ? "border-white bg-white/10 scale-105" : "border-white/20 hover:border-white/40"
                  }`}
                >
                  <span className="w-5 h-5 rounded-full border border-white/20" style={{ backgroundColor: c.color }} />
                  <span className="text-sm">{c.name}</span>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["01", "02", "03", "04"].map((n) => (
                <div key={n} className="relative aspect-square rounded-2xl overflow-hidden bg-[#1c1c1e]">
                  <Image
                    src={`https://assets.starkfuture.com/frontend-assets/sm-product/product_carousel_${activeColor}_${n}_desktop.webp`}
                    alt={`VARG SM ${activeColor} view ${n}`}
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
                    alt={`VARG SM gallery ${i + 1}`}
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
            src="https://assets.starkfuture.com/frontend-assets/sm-product/hero_05_desktop.webp"
            alt="VARG SM"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <AnimatedSection className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">對 VARG SM 有興趣？</h2>
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
