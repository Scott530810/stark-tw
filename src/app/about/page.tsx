import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">關於 Stark Future</h1>
        
        <div className="space-y-8 text-white/60 leading-relaxed">
          <p className="text-lg">
            Stark Future 是一家來自西班牙巴塞隆納的電動摩托車製造商，成立於 2019 年，致力於打造世界上最強大的電動越野摩托車。
          </p>

          <div className="p-8 bg-[#1c1c1e] rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">我們的使命</h2>
            <p>
              Stark Future 的目標不僅是製造電動摩托車，而是要創造出在性能上全面超越傳統汽油車的電動車款。VARG 是第一款在動力、重量、操控性上都能與頂級 450cc 越野車抗衡的電動越野車。
            </p>
          </div>

          <div className="p-8 bg-[#1c1c1e] rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">台灣代理</h2>
            <p>
              Lapspeed Trading Co., Ltd. 是 Stark Future 在台灣的獨家進口代理商。我們提供完整的銷售、售後服務、零件供應及技術支援。
            </p>
            <p className="mt-4">
              我們同時也代理 Circuit Equipment、RTECH、AXP Racing、Seat Concepts、Mobius 等歐美頂級越野車裝備品牌。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: "2019", event: "Stark Future 成立於巴塞隆納" },
              { year: "2022", event: "VARG 正式發表，震撼越野車界" },
              { year: "2024", event: "VARG EX 取得歐盟道路合法認證" },
            ].map((m) => (
              <div key={m.year} className="text-center">
                <div className="text-3xl font-bold text-white">{m.year}</div>
                <p className="text-sm mt-2">{m.event}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact" className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors">
            聯繫台灣代理
          </Link>
        </div>
      </div>
    </div>
  );
}
