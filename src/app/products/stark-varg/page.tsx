import Image from "next/image";
import Link from "next/link";

const specs = {
  動力系統: [
    { label: "馬達", value: "永磁同步馬達 (PMSM)" },
    { label: "最大馬力", value: "80 HP (60 kW)" },
    { label: "可調範圍", value: "10-80 HP" },
    { label: "後輪扭力", value: "938 Nm" },
    { label: "電池", value: "6.5 kWh" },
    { label: "充電時間", value: "約 2 小時 (240V) / 3.5 小時 (120V)" },
    { label: "騎乘時間", value: "最長約 6 小時" },
  ],
  底盤懸吊: [
    { label: "車架", value: "鋁合金" },
    { label: "前叉", value: "48mm 閉合式彈簧前叉，壓縮/回彈可調" },
    { label: "前叉行程", value: "310 mm" },
    { label: "前輪", value: "21 吋" },
    { label: "後輪", value: "19 吋" },
  ],
  車輛資訊: [
    { label: "整備重量", value: "110 kg" },
    { label: "用途", value: "Off-road / 越野競技" },
  ],
};

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
          <p className="text-lg text-white/60 mt-3">The most powerful electric motocross bike</p>
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
              { value: "110", unit: "kg", label: "整備重量" },
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

      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">對 VARG MX 有興趣？</h2>
        <p className="text-white/50 mb-8">Lapspeed Trading — Stark Future 台灣獨家代理</p>
        <Link href="/contact" className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-lg">
          聯繫我們
        </Link>
      </section>
    </>
  );
}
