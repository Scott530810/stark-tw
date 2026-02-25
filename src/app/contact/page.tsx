"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://assets.starkfuture.com/frontend-assets/support/support_hero_desktop.webp"
            alt="Contact"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        <AnimatedSection className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-sm tracking-[0.3em] uppercase text-white/50 mb-3">Contact</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">聯繫我們</h1>
          <p className="text-lg text-white/50 mt-3">
            Stark Future 台灣獨家代理 — Lapspeed Trading Co., Ltd.
          </p>
        </AnimatedSection>
      </section>

      {/* Content */}
      <section className="py-24 md:py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-bold mb-6">聯絡方式</h2>
                  <div className="space-y-4">
                    <div className="p-5 bg-[#1a1a1a] rounded-2xl">
                      <p className="text-sm text-white/40 mb-1">電子信箱</p>
                      <a href="mailto:chiuscott@gmail.com" className="text-white hover:text-white/80 transition-colors text-lg">
                        chiuscott@gmail.com
                      </a>
                    </div>
                    <div className="p-5 bg-[#1a1a1a] rounded-2xl">
                      <p className="text-sm text-white/40 mb-1">官方網站</p>
                      <a href="https://lapspeedtrading.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors text-lg">
                        lapspeedtrading.com
                      </a>
                    </div>
                    <div className="p-5 bg-[#1a1a1a] rounded-2xl">
                      <p className="text-sm text-white/40 mb-1">蝦皮商城</p>
                      <a href="https://shopee.tw/lapspeed" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors text-lg">
                        shopee.tw/lapspeed
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">服務項目</h2>
                  <ul className="space-y-3 text-white/60">
                    {[
                      "新車銷售與報價",
                      "試乘預約",
                      "原廠零件與配件",
                      "售後服務與技術支援",
                      "車輛進口與認證",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-lg">
                        <span className="text-green-400 text-sm">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <h2 className="text-2xl font-bold mb-6">留言給我們</h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm text-white/40 mb-2">姓名</label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-[#1a1a1a] border border-white/10 rounded-2xl text-white focus:outline-none focus:border-white/30 transition-colors text-lg"
                    placeholder="請輸入您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/40 mb-2">電子信箱</label>
                  <input
                    type="email"
                    className="w-full px-5 py-4 bg-[#1a1a1a] border border-white/10 rounded-2xl text-white focus:outline-none focus:border-white/30 transition-colors text-lg"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/40 mb-2">電話</label>
                  <input
                    type="tel"
                    className="w-full px-5 py-4 bg-[#1a1a1a] border border-white/10 rounded-2xl text-white focus:outline-none focus:border-white/30 transition-colors text-lg"
                    placeholder="09xx-xxx-xxx"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/40 mb-2">感興趣的車款</label>
                  <select className="w-full px-5 py-4 bg-[#1a1a1a] border border-white/10 rounded-2xl text-white focus:outline-none focus:border-white/30 transition-colors text-lg">
                    <option value="">請選擇</option>
                    <option value="varg-ex">VARG EX（道路合法越野車）</option>
                    <option value="varg-mx">VARG MX 1.2（純越野競技）</option>
                    <option value="varg-sm">VARG SM（滑胎街車）</option>
                    <option value="parts">零件 / 配件</option>
                    <option value="other">其他</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white/40 mb-2">留言內容</label>
                  <textarea
                    rows={5}
                    className="w-full px-5 py-4 bg-[#1a1a1a] border border-white/10 rounded-2xl text-white focus:outline-none focus:border-white/30 transition-colors resize-none text-lg"
                    placeholder="請告訴我們您的需求..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-lg"
                >
                  送出
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
