import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">聯繫我們</h1>
        <p className="text-white/50 text-lg mb-12">
          Stark Future 台灣獨家代理 — Lapspeed Trading Co., Ltd.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">聯絡方式</h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#1c1c1e] rounded-xl">
                  <p className="text-sm text-white/40 mb-1">電子信箱</p>
                  <a href="mailto:chiuscott@gmail.com" className="text-white hover:text-white/80 transition-colors">
                    chiuscott@gmail.com
                  </a>
                </div>
                <div className="p-4 bg-[#1c1c1e] rounded-xl">
                  <p className="text-sm text-white/40 mb-1">官方網站</p>
                  <a href="https://lapspeedtrading.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                    lapspeedtrading.com
                  </a>
                </div>
                <div className="p-4 bg-[#1c1c1e] rounded-xl">
                  <p className="text-sm text-white/40 mb-1">蝦皮商城</p>
                  <a href="https://shopee.tw/lapspeed" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                    shopee.tw/lapspeed
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">服務項目</h2>
              <ul className="space-y-2 text-white/60">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> 新車銷售與報價
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> 試乘預約
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> 原廠零件與配件
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> 售後服務與技術支援
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> 車輛進口與認證
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold mb-4">留言給我們</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-white/40 mb-1">姓名</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#1c1c1e] border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="請輸入您的姓名"
                />
              </div>
              <div>
                <label className="block text-sm text-white/40 mb-1">電子信箱</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#1c1c1e] border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-white/40 mb-1">電話</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-[#1c1c1e] border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="09xx-xxx-xxx"
                />
              </div>
              <div>
                <label className="block text-sm text-white/40 mb-1">感興趣的車款</label>
                <select className="w-full px-4 py-3 bg-[#1c1c1e] border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors">
                  <option value="">請選擇</option>
                  <option value="varg-ex">VARG EX（道路合法）</option>
                  <option value="varg-mx">VARG MX 1.2（越野競技）</option>
                  <option value="varg-sm">VARG SM（滑胎街車）</option>
                  <option value="parts">零件 / 配件</option>
                  <option value="other">其他</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white/40 mb-1">留言內容</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-[#1c1c1e] border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="請告訴我們您的需求..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
              >
                送出
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
