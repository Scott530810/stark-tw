import Image from "next/image";
import Link from "next/link";

export default function VargMXPage() {
  return (
    <>
      <section className="relative h-screen flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://assets.starkfuture.com/frontend-assets/varg/mx1.2/red.webp"
            alt="Stark VARG MX 1.2"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="text-sm text-white/50 mb-2">Stark Future</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">VARG MX 1.2</h1>
          <p className="text-xl text-white/60 mt-3">純越野競技電動車</p>
          <Link href="/contact" className="inline-block mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors">
            立即洽詢
          </Link>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">為勝利而生</h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              VARG MX 1.2 是 Stark Future 的旗艦越野車款。80 匹馬力、110 公斤輕量化車身、搭配 WP 頂級懸吊與 Brembo 煞車系統，專為越野競技打造。
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "80", unit: "hp", label: "最大馬力" },
              { value: "692", unit: "Nm", label: "後輪扭力" },
              { value: "110", unit: "kg", label: "整備重量" },
              { value: "100+", unit: "項", label: "可調參數" },
            ].map((s) => (
              <div key={s.label} className="text-center p-6 bg-[#1c1c1e] rounded-2xl">
                <div className="text-4xl font-bold">{s.value}<span className="text-sm text-white/50 ml-1">{s.unit}</span></div>
                <p className="text-sm text-white/40 mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#1c1c1e]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">技術規格</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
            {[
              ["馬達", "永磁同步馬達 (PMSM)"],
              ["最大馬力", "80 hp (60 kW)"],
              ["最大扭力", "692 Nm (後輪)"],
              ["電池", "6 kWh"],
              ["車架", "鍛造鋁合金"],
              ["前叉", "WP XACT 48mm"],
              ["後避震", "WP XACT"],
              ["前煞車", "Brembo 4 活塞"],
              ["後煞車", "Brembo 單活塞"],
              ["重量", "110 kg"],
              ["座高", "935 mm"],
              ["前輪", "21 吋"],
              ["後輪", "19 吋"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between py-3 border-b border-white/5">
                <span className="text-white/40">{label}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">想了解更多？</h2>
        <p className="text-white/50 mb-8">聯繫 Lapspeed Trading 取得報價與試乘資訊</p>
        <Link href="/contact" className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-lg">
          聯繫我們
        </Link>
      </section>
    </>
  );
}
