import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">關於 Stark Future</h1>

        <div className="space-y-8 text-white/60 leading-relaxed">
          <p className="text-lg">
            Stark Future creates world-leading electric motorcycles that redefine performance.
            From motocross to street and beyond, our bikes are powerful, silent, and sustainable,
            proving electric is superior to gas.
          </p>

          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src="https://assets.starkfuture.com/frontend-assets/ex-product/hero_02_desktop.webp"
              alt="Stark Future"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8 bg-[#1c1c1e] rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">台灣代理</h2>
            <p>
              Lapspeed Trading Co., Ltd. 是 Stark Future 在台灣的獨家進口代理商。
            </p>
            <p className="mt-4">
              我們同時代理 Circuit Equipment、RTECH、AXP Racing、Seat Concepts、Mobius 等歐美越野車裝備品牌。
            </p>
            <div className="mt-6">
              <a
                href="https://lapspeedtrading.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:text-white/80 transition-colors"
              >
                lapspeedtrading.com →
              </a>
            </div>
          </div>

          <div className="p-8 bg-[#1c1c1e] rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">了解更多</h2>
            <p>
              更多關於 Stark Future 的資訊，請參考官方網站。
            </p>
            <div className="mt-4">
              <a
                href="https://starkfuture.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline hover:text-white/80 transition-colors"
              >
                starkfuture.com →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact" className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors">
            聯繫我們
          </Link>
        </div>
      </div>
    </div>
  );
}
