/*
 * Design: "Vital Flow" — Organicismo Tecnológico
 * Video: Seção de vídeo institucional com player estilizado
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

const VIDEO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663445619617/imGYmRuaxbExofTAsafwbN/innova-institucional_024ba553.mp4";

export default function VideoSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="relative section-padding overflow-hidden bg-gradient-to-b from-[#0F2A3F] via-[#1B4F7A] to-[#0F2A3F]" ref={sectionRef}>
      {/* Decorative blobs */}
      <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#5B9BD5]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#7AB929]/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#5B9BD5]/20 text-[#5B9BD5] text-sm font-semibold rounded-full mb-4 border border-[#5B9BD5]/20">
            Vídeo Institucional
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Conheça a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B9BD5] to-[#7AB929]">
              Innova Saúde
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Assista ao nosso vídeo institucional e descubra como transformamos a experiência 
            assistencial com locação de equipamentos e gestão integrada de diagnóstico POCT.
          </p>
        </motion.div>

        {/* Video player */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
            {/* Glow effect behind video */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#5B9BD5]/20 via-[#7AB929]/20 to-[#5B9BD5]/20 rounded-2xl blur-xl" />

            <div className="relative bg-black rounded-2xl overflow-hidden">
              <video
                ref={videoRef}
                src={VIDEO_URL}
                className="w-full aspect-video object-cover cursor-pointer"
                muted={isMuted}
                playsInline
                preload="metadata"
                onClick={handleVideoClick}
                onEnded={() => setIsPlaying(false)}
              />

              {/* Play overlay */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer group"
                  onClick={handlePlay}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="relative"
                  >
                    {/* Pulse ring */}
                    <div className="absolute inset-0 w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-[#5B9BD5]/30 animate-ping" />
                    <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-[#1B4F7A] to-[#5B9BD5] flex items-center justify-center shadow-2xl shadow-[#1B4F7A]/40 group-hover:from-[#5B9BD5] group-hover:to-[#7AB929] transition-all duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 lg:w-10 lg:h-10 text-white ml-1" fill="white" />
                    </div>
                  </motion.div>
                </div>
              )}

              {/* Mute toggle */}
              {isPlaying && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute();
                  }}
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors border border-white/10"
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
