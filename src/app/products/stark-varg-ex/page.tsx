"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const colors = [
  { name: "Stark 紅", color: "#cc0000", slug: "red" },
  { name: "戰鬥灰", color: "#6b6b6b", slug: "gray" },
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
    { label: "最大馬力", value: "80 hp (60 kW)" },
    { label: "最大扭力", value: "692 Nm (後輪)" },
    { label: "電池容量", value: "6 kWh" },
    { label: "充電時間", value: "1-6 小時 (視充電器)" },
    { label: "續航力", value: "最高 6 小時 (依使用模式)" },
  ],
  底盤懸吊: [
    { label: "車架", value: "鍛造鋁合金" },
    { label: "前叉", value: "WP XACT 48mm 倒叉" },
    { label: "後避震", value: "WP XACT" },
    { label: "前煞車", value: "Brembo 4 活塞卡鉗" },
    { label: "後煞車", value: "Brembo 單活塞卡鉗" },
    { label: "前輪", value: "21 吋" },
    { label: "後輪", value: "18 吋" },
  ],
  車輛資訊: [
    { label: "整備重量", value: "110 kg" },
    { label: "座高", value: "935 mm" },
    { label: "最高速度", value: "150 km/h" },
    { label: "道路合法", value: "✅ 歐盟認證" },
    { label: "AVAS 低速警示", value: "✅ 標準配備" },
    { label: "燈具", value: "LED 全車燈組" },
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
              <p className="text-xl text-white/60 mt-3">全球首款道路合法電動越野車</p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
              >
                立即洽詢
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                預約試乘
              </Link>
            </div>
          </div>

          {/* Image selector dots */}
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

      {/* Key Features */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">為冒險而生</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              VARG EX 是全球第一款取得歐盟道路合法認證的電動越野車。擁有與 VARG MX 相同的賽道級性能，加上完整的道路照明設備、AVAS 低速警示系統，讓你從林道到公路一路暢行。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#1c1c1e] rounded-2xl text-center">
              <div className="text-5xl font-bold mb-2">80<span className="text-lg text-white/50">hp</span></div>
              <p className="text-white/40">最大馬力</p>
              <p className="text-sm text-white/30 mt-2">自主研發永磁同步馬達</p>
            </div>
            <div className="p-8 bg-[#1c1c1e] rounded-2xl text-center">
              <div className="text-5xl font-bold mb-2">110<span className="text-lg text-white/50">kg</span></div>
              <p className="text-white/40">整備重量</p>
              <p className="text-sm text-white/30 mt-2">含電池與所有道路設備</p>
            </div>
            <div className="p-8 bg-[#1c1c1e] rounded-2xl text-center">
              <div className="text-5xl font-bold mb-2">0<span className="text-lg text-white/50">排放</span></div>
              <p className="text-white/40">零碳排放</p>
              <p className="text-sm text-white/30 mt-2">幾乎零噪音騎乘</p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Selector + Product Gallery */}
      <section className="py-24 px-6 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">選擇你的配色</h2>
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
                <span
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: c.color }}
                />
                <span className="text-sm">{c.name}</span>
              </button>
            ))}
          </div>

          {/* Product carousel */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={`https://assets.starkfuture.com/frontend-assets/ex-product/product_carousel_${activeColor}_${n}_desktop.webp`}
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
                    <div key={item.label} className="flex justify-between">
                      <span className="text-sm text-white/40">{item.label}</span>
                      <span className="text-sm font-medium">{item.value}</span>
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
          <h2 className="text-3xl font-bold text-center mb-12">實車圖集</h2>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">對 VARG EX 有興趣？</h2>
          <p className="text-white/50 text-lg mb-8">
            聯繫 Lapspeed Trading — Stark Future 台灣獨家代理，我們將為你提供完整的購車資訊、價格方案及試乘安排。
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
