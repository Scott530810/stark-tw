import Image from "next/image";
import Link from "next/link";

export default function SAMPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">SAM</h1>
          <p className="text-xl text-white/50">Stark Adaptive Motorcycle — 智能輔助系統</p>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden mb-16">
          <Image
            src="https://assets.starkfuture.com/frontend-assets/ex-product/hero_03_desktop.webp"
            alt="SAM System"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">你的摩托車，你做主</h2>
            <p className="text-white/50 leading-relaxed">
              SAM 是 Stark Future 獨家開發的智能摩托車管理系統。透過手機 App 連接你的 VARG，即時調整超過 100 項參數，從動力輸出到循跡控制，一切盡在你的指尖。
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">為每個人量身打造</h2>
            <p className="text-white/50 leading-relaxed">
              無論你是職業車手還是週末騎士，SAM 都能根據你的技術水準與騎乘偏好，提供最佳化的車輛設定。新手可以限制動力輸出，高手可以解放全部性能。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { title: "動力模式", desc: "自定義動力曲線、油門靈敏度、最大扭力輸出" },
            { title: "循跡控制", desc: "多段可調循跡系統，濕地、沙地、硬地各有最佳設定" },
            { title: "引擎煞車", desc: "調整鬆油門時的減速力道，像調變速箱一樣直覺" },
            { title: "啟動模式", desc: "專為比賽設計的彈射起步模式" },
            { title: "數據紀錄", desc: "記錄每一圈的騎乘數據，分析並改善你的表現" },
            { title: "OTA 更新", desc: "無線更新車輛韌體，持續獲得新功能" },
          ].map((f) => (
            <div key={f.title} className="p-6 bg-[#1c1c1e] rounded-2xl">
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-white/50">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-lg">
            預約體驗
          </Link>
        </div>
      </div>
    </div>
  );
}
