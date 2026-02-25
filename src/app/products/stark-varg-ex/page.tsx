"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const colors = [
  { name: "Stark Red", color: "#cc0000", slug: "red" },
  { name: "Combat Gray", color: "#6b6b6b", slug: "gray" },
];

const heroImages = [
  "https://assets.starkfuture.com/frontend-assets/ex-product/hero_01_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/ex-product/hero_02_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/ex-product/hero_03_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/ex-product/hero_04_desktop.webp",
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
    { label: "前叉", value: "48mm 閉合式彈簧前叉，壓縮/回彈可調" },
    { label: "前叉行程", value: "310 mm" },
    { label: "前煞車碟", value: "260 mm" },
    { label: "後煞車碟", value: "220 mm" },
    { label: "前輪", value: "21 吋" },
    { label: "後輪", value: "18 吋" },
  ],
  車輛資訊: [
    { label: "整備重量", value: "118 kg" },
    { label: "道路合法", value: "✅" },
    { label: "LED 燈具", value: "✅" },
    { label: "AVAS 低速警示", value: "✅" },
  ],
};

const galleryImages = [
  "https://assets.starkfuture.com/frontend-assets/ex-product/carousel_1_slide_1_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/ex-product/carousel_1_slide_2_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/ex-product/carousel_1_slide_3_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/ex-product/carousel_2_slide_1_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/ex-product/carousel_2_slide_2_desktop.webp",
  "https://assets.starkfuture.com/frontend-assets/ex-product/carousel_2_slide_3_desktop.webp",
];

export default function VargEXPage() {
  const [activeColor, setActiveColor] = useState("red");
  const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImages[activeImage]}
            alt="Stark VARG EX"
            fill
            className="object-cover transition-opacity duration-500"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-sm text-white/50 mb-2">Stark Future</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">VARG EX</h1>
              <p className="text-lg text-white/60 mt-3">The ultimate road-legal electric enduro bike</p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
              >
                立即洽詢
              </Link>
            </div>
          </div>

          <div className="flex gap-2 mt-8">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === activeImage ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Key Specs */}
      <section className="py-20 px-6 bg-[#1c1c1e]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "80", unit: "HP", label: "最大馬力" },
              { value: "938", unit: "Nm", label: "後輪扭力" },
              { value: "118", unit: "kg", label: "整備重量" },
              { value: "6.5", unit: "kWh", label: "電池容量" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold">{s.value}<span className="text-base text-white/50 ml-1">{s.unit}</span></div>
                <p className="text-sm text-white/40 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">道路合法電動越野車</h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Experience the Stark VARG EX, the ultimate road-legal electric enduro bike.
            Lightweight and agile, with customizable power (10-80 HP), emission-free performance,
            and low maintenance. Perfect for trails, roads, and adventures.
          </p>
        </div>
      </section>

      {/* Color Selector */}
      <section className="py-24 px-6 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">車色</h2>
          <div className="flex justify-center gap-4 mb-12">
            {colors.map((c) => (
              <button
                key={c.slug}
                onClick={() => setActiveColor(c.slug)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors ${
                  activeColor === c.slug
                    ? "border-white bg-white/10"
                    : "border-white/20 hover:border-white/40"
                }`}
              >
                <span className="w-4 h-4 rounded-full" style={{ backgroundColor: c.color }} />
                <span className="text-sm">{c.name}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="relative aspect-square rounded-xl overflow-hidden bg-[#1c1c1e]">
                <Image
                  src={`https://assets.starkfuture.com/frontend-assets/ex-product/product_carousel_${activeColor}_0${n}_desktop.webp`}
                  alt={`VARG EX ${activeColor} view ${n}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">技術規格</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {Object.entries(specs).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-white/60 mb-6 pb-2 border-b border-white/10">
                  {category}
                </h3>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.label} className="flex justify-between gap-4">
                      <span className="text-sm text-white/40">{item.label}</span>
                      <span className="text-sm font-medium text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">圖集</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={img}
                  alt={`VARG EX gallery ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">對 VARG EX 有興趣？</h2>
          <p className="text-white/50 text-lg mb-8">
            Lapspeed Trading — Stark Future 台灣獨家代理
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-lg"
          >
            立即聯繫
          </Link>
        </div>
      </section>
    </>
  );
}
