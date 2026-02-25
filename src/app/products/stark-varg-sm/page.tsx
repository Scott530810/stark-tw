import Image from "next/image";
import Link from "next/link";

export default function VargSMPage() {
  return (
    <>
      <section className="relative h-screen flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://assets.starkfuture.com/frontend-assets/sm-preview/hero_01_desktop.webp"
            alt="Stark VARG SM"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-sm text-white/50 mb-2">Stark Future</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">VARG SM</h1>
          <p className="text-lg text-white/60 mt-3">Electric Supermoto</p>
          <Link href="/contact" className="inline-block mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors">
            立即洽詢
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#1c1c1e]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "80", unit: "HP", label: "最大馬力" },
              { value: "938", unit: "Nm", label: "後輪扭力" },
              { value: "6.5", unit: "kWh", label: "電池容量" },
              { value: "17\"", unit: "", label: "輪組尺寸" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold">{s.value}<span className="text-base text-white/50 ml-1">{s.unit}</span></div>
                <p className="text-sm text-white/40 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://assets.starkfuture.com/frontend-assets/sm-product/product_carousel_red_02_desktop.webp"
                alt="VARG SM detail"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://assets.starkfuture.com/frontend-assets/sm-product/product_carousel_red_01_desktop.webp"
                alt="VARG SM detail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">對 VARG SM 有興趣？</h2>
        <p className="text-white/50 mb-8">Lapspeed Trading — Stark Future 台灣獨家代理</p>
        <Link href="/contact" className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-lg">
          聯繫我們
        </Link>
      </section>
    </>
  );
}
