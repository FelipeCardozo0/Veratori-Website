"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Brain, Monitor, Shield } from "lucide-react";
import Hls from "hls.js";
import Link from "next/link";
import Image from "next/image";

const HLS_URL = "https://stream.mux.com/JNJEOYI6B3EffB9f5ZhpGbuxzc6gSyJcXaCBbCgZKRg.m3u8";

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);

    const handleTimeUpdate = () => {
        if (!videoRef.current) return;
        const { currentTime, duration } = videoRef.current;
        if (!duration || duration === Infinity) return;

        // Fade out 1.5 seconds before the video stops looping
        if (duration - currentTime <= 1.5) {
            setIsFadingOut(true);
        } else {
            setIsFadingOut(false);
        }
    };

    // Initialize HLS.js
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        let hls: Hls | null = null;

        if (Hls.isSupported()) {
            hls = new Hls({ enableWorker: true });
            hls.loadSource(HLS_URL);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                setIsVideoLoaded(true);
                video.play().catch((e) => console.log("Autoplay prevented:", e));
            });
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
            // Safari fallback
            video.src = HLS_URL;
            video.addEventListener("loadedmetadata", () => {
                setIsVideoLoaded(true);
                video.play().catch((e) => console.log("Autoplay prevented:", e));
            });
        }

        return () => {
            if (hls) {
                hls.destroy();
            }
        };
    }, []);

    return (
        <section className="relative min-h-[100vh] w-full overflow-hidden flex flex-col items-center select-none font-sans text-white">
            {/* 1. Video Background */}
            <div className="absolute inset-0 z-0 bg-black">
                <video
                    ref={videoRef}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${isVideoLoaded && !isFadingOut ? "opacity-100" : "opacity-0"
                        }`}
                    onTimeUpdate={handleTimeUpdate}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>



            {/* 3. Main Hero Content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center w-full px-[5.2%] -mt-[3%]">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-[clamp(32px,6vw,96px)] font-bold tracking-[-0.02em] leading-[1.05]"
                >
                    AI-Powered Data Analytics
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                    className="mt-[1.5%] text-[clamp(20px,3vw,48px)] font-medium opacity-90"
                >
                    Unlocking Business Potential
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    className="mt-[2.5%] text-[clamp(13px,1.2vw,20px)] opacity-80 max-w-[42%] mx-auto leading-relaxed"
                >
                    Real-time edge AI for instant inventory accuracy. Gain daily manager insights across
                    franchises with 24/7 monitoring and automated alerts to reduce waste and optimize space.
                </motion.p>

                {/* 4. Call-To-Action Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
                    className="mt-[4%] flex flex-col sm:flex-row items-center justify-center gap-[2.5vw] sm:gap-[1.5vw]"
                >
                    <Link href="/contact" className="group">
                        <div className="px-[clamp(24px,2.5vw,40px)] py-[clamp(12px,1.2vw,20px)] rounded-full bg-white/5 backdrop-blur-[24px] saturate-[1.4] border border-white/10 text-[clamp(14px,1.1vw,22px)] font-medium transition-all duration-250 ease-out flex items-center justify-center group-hover:bg-white/10 group-hover:scale-[1.04]">
                            Get Started
                        </div>
                    </Link>

                    <Link href="/product" className="group">
                        <div className="px-[clamp(24px,2.5vw,40px)] py-[clamp(12px,1.2vw,20px)] rounded-full border border-white/20 text-[clamp(14px,1.1vw,22px)] font-medium transition-all duration-250 ease-out flex items-center justify-center gap-2 group-hover:border-white/40 group-hover:bg-white/5">
                            <Play className="w-[1em] h-[1em]" />
                            View Demo
                        </div>
                    </Link>
                </motion.div>
            </div>

            {/* 5. Animated Metrics Bar */}
            <div className="absolute bottom-0 left-0 w-full px-[5.2%] pb-[3%] z-10 flex flex-col sm:flex-row justify-between items-end sm:items-center gap-6 sm:gap-4">
                {[
                    { icon: Brain, value: "25–40%", label: "Operational Efficiency Increase", delay: 0.6 },
                    { icon: Monitor, value: "$300B", label: "Projected Market by 2027", delay: 0.75 },
                    { icon: Shield, value: "Enterprise Grade", label: "Secure & Scalable", delay: 0.9 },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: stat.delay, ease: "easeOut" }}
                        className="flex-1 w-full sm:w-auto flex flex-col bg-white/5 backdrop-blur-[24px] saturate-[1.4] border border-white/[0.12] rounded-2xl p-[clamp(16px,1.5vw,24px)] relative overflow-hidden"
                    >
                        {/* Specular highlight */}
                        <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-white/5 blur-[20px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />

                        <stat.icon className="w-[clamp(28px,2.5vw,40px)] h-[clamp(28px,2.5vw,40px)] opacity-90 mb-[clamp(12px,1vw,16px)]" />
                        <div className="text-[clamp(24px,2.5vw,48px)] font-bold tracking-tight leading-none mb-[4px]">
                            {stat.value}
                        </div>
                        <div className="text-[clamp(12px,0.9vw,18px)] opacity-70 font-medium tracking-wide">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>


        </section>
    );
}
