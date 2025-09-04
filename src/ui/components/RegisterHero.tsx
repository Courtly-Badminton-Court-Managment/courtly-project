// src/ui/components/illustrations/RegisterHero.tsx
import Image from "next/image";

export default function RegisterHero() {
  return (
    <div className="relative h-full">
      {/* gradient + มุมโค้ง */}
      <div className="absolute inset-0 rounded-r-[56px] bg-gradient-to-b from-cambridge/40 via-court-bg to-cambridge/30" />

      {/* shuttle pattern จากไฟล์จริง */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-r-[56px] opacity-15 bg-center bg-repeat mix-blend-normal
                   bg-[length:80px_80px] lg:bg-[length:96px_96px]
                   bg-[url('/brand/shuttlecock2.png')]"
      />


      {/* โลโก้ใหญ่ (ภาพจริงรวมตัวหนังสือ + tagline แล้ว) */}
      <div className="relative z-10 flex h-full items-center justify-center px-10">
        <div className="w-full max-w-[560px]">
          <div className="relative mx-auto aspect-[4/3] w-full">
            <Image
              src="/brand/corutly-main-logo-tagline.png"
              alt="Courtly"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
