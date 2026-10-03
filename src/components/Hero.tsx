import { useRef } from "react";
import { Heart, ChevronDown } from "lucide-react";
import { wedding } from "../data/wedding";
export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasStartedPlayback = useRef(false);

  const startVideo = () => {
    const video = videoRef.current;
    if (!video || hasStartedPlayback.current) return;

    hasStartedPlayback.current = true;
    void video.play().catch(() => {
      hasStartedPlayback.current = false;
    });
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-black"
      onClick={startVideo}
    >
      <video
        ref={videoRef}
        src="/videos/rose-gold-blush.mp4"
        className="absolute inset-0 h-full w-full object-cover"
        playsInline
        muted
        preload="metadata"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/55" />
      <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 text-center text-[#f5e6e0]">
        <Heart size={26} fill="currentColor" className="mb-3" />
        <p className="font-dancing text-2xl md:text-4xl mb-3">
          We're getting married
        </p>
        <div className="flex items-center gap-3 my-3">
          <div className="w-16 h-px bg-white/45" />
          <Heart size={10} fill="currentColor" />
          <div className="w-16 h-px bg-white/45" />
        </div>
        <h1 className="font-dancing text-6xl md:text-9xl leading-none drop-shadow-lg">
          {wedding.groom.name}
          <p className="font-display text-sm md:text-base italic whitespace-pre-line mt-2 mb-3">
            {wedding.groom.subtext}
          </p>
        </h1>
        <p className="font-dancing text-3xl md:text-4xl my-2">&amp;</p>
        <h1 className="font-dancing text-6xl md:text-9xl leading-none drop-shadow-lg">
          {wedding.bride.name}
          <p className="font-display text-sm md:text-base italic whitespace-pre-line mt-2">
            {wedding.bride.subtext}
          </p>
        </h1>
      </div>
      <div className="float absolute bottom-20 z-10 flex flex-col items-center gap-2 text-white/70">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
}
