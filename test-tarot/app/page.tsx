"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Particles = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const particles = Array.from({ length: 40 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
            opacity: Math.random() * 0.5 + 0.2,
            scale: Math.random() * 1.5,
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            opacity: [null, 0, Math.random() * 0.8 + 0.2, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            boxShadow: "0 0 10px 2px rgba(168, 85, 247, 0.4)",
          }}
        />
      ))}
    </div>
  );
};

const Candle = ({ className }: { className?: string }) => (
  <div className={cn("relative flex flex-col items-center", className)}>
    <motion.div
      className="w-3 h-8 bg-gradient-to-t from-orange-400 via-yellow-200 to-transparent rounded-full origin-bottom"
      animate={{
        scaleY: [1, 1.1, 0.9, 1.05, 1],
        scaleX: [1, 0.95, 1.05, 0.9, 1],
        opacity: [0.8, 1, 0.7, 1, 0.8],
        rotate: [0, -2, 2, -1, 0],
      }}
      transition={{
        duration: 0.2,
        repeat: Infinity,
        repeatType: "mirror",
      }}
      style={{
        boxShadow: "0 0 20px 5px rgba(253, 224, 71, 0.5)",
        filter: "blur(1px)",
      }}
    />
    <div className="w-4 h-24 bg-gradient-to-b from-yellow-100 to-yellow-600 rounded-sm mt-1 shadow-inner" />
    <div className="w-12 h-2 bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 rounded-full mt-1" />
  </div>
);

const CrystalBall = () => (
  <motion.div
    className="relative w-64 h-64 rounded-full flex items-center justify-center z-10"
    animate={{ y: [-10, 10] }}
    transition={{
      repeat: Infinity,
      duration: 4,
      repeatType: "mirror",
      ease: "easeInOut",
    }}
  >
    <motion.div
      className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-300 via-purple-700 to-indigo-900 overflow-hidden mix-blend-screen"
      animate={{
        boxShadow: [
          "0 0 40px 10px rgba(168,85,247,0.4), inset 0 0 40px 10px rgba(216,180,254,0.5)",
          "0 0 80px 20px rgba(168,85,247,0.7), inset 0 0 60px 20px rgba(216,180,254,0.8)",
        ],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <Sparkles className="w-16 h-16 text-purple-200" strokeWidth={1} />
        </motion.div>
      </div>
    </motion.div>

    <div className="absolute inset-0 rounded-full border border-white/20 shadow-[inset_0_20px_40px_rgba(255,255,255,0.4)] pointer-events-none" />
    <div className="absolute top-4 left-8 w-16 h-8 bg-white/30 rounded-full rotate-[-45deg] blur-md" />
  </motion.div>
);

const TarotCard = ({ rotation, zIndex, offset, onClick, delay = 0 }: { rotation: number; zIndex: number; offset: number; onClick?: () => void; delay?: number }) => (
  <motion.div
    onClick={onClick}
    className="absolute w-24 h-40 md:w-32 md:h-52 rounded-lg border border-yellow-900/50 bg-gradient-to-br from-red-900 to-black shadow-2xl cursor-pointer"
    style={{
      transformOrigin: "bottom center",
      zIndex,
    }}
    initial={{ y: 200, opacity: 0, rotate: 0 }}
    animate={{ y: 0, opacity: 1, rotate: rotation, x: offset }}
    transition={{ duration: 0.8, delay: delay, type: "spring", bounce: 0.4 }}
    whileHover={{
      y: -30,
      scale: 1.15,
      zIndex: 100,
      rotate: 0,
      boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.8)",
      transition: { duration: 0.2 },
    }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="absolute inset-1 border border-yellow-600/30 rounded-md flex items-center justify-center opacity-50 bg-[url('https://www.transparenttextures.com/patterns/argyle.png')]">
      <div className="w-10 h-10 border border-yellow-500 rounded-full rotate-45" />
    </div>
  </motion.div>
);

export default function FortuneTellerLanding() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    "ความรัก", "การงาน", "การเงิน", "สุขภาพ",
    "ครอบครัว", "อนาคต", "มิตรภาพ", "ทั่วไป"
  ];

  const handleStart = () => {
    setShowCardModal(true);
  };

  const handleCardPick = () => {
    setShowCardModal(false);
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#0a0505] text-white overflow-hidden font-sans relative selection:bg-purple-900">
      
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="text-yellow-500 text-2xl tracking-widest flex flex-col items-center gap-6"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <div className="w-16 h-16 border-t-2 border-r-2 border-yellow-500 rounded-full animate-spin shadow-[0_0_15px_#eab308]" />
              กำลังเปิดคำทำนาย...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCardModal && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#050000]/80 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <motion.div 
              className="text-center mb-16"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-yellow-200 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                ตั้งจิตอธิษฐาน
              </h2>
              <p className="text-yellow-500/80 mt-4 text-lg">แล้วเลือกไพ่ 1 ใบที่ดึงดูดคุณมากที่สุด</p>
            </motion.div>

            <div className="relative w-full max-w-4xl h-64 flex justify-center items-center pointer-events-auto">
              <TarotCard rotation={-30} offset={-160} zIndex={10} delay={0.1} onClick={handleCardPick} />
              <TarotCard rotation={-18} offset={-100} zIndex={20} delay={0.2} onClick={handleCardPick} />
              <TarotCard rotation={-6} offset={-35} zIndex={30} delay={0.3} onClick={handleCardPick} />
              <TarotCard rotation={6} offset={35} zIndex={40} delay={0.4} onClick={handleCardPick} />
              <TarotCard rotation={18} offset={100} zIndex={50} delay={0.5} onClick={handleCardPick} />
              <TarotCard rotation={30} offset={160} zIndex={60} delay={0.6} onClick={handleCardPick} />
            </div>

            <motion.button
              onClick={() => setShowCardModal(false)}
              className="absolute bottom-10 px-6 py-2 text-gray-400 hover:text-white transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              ยกเลิก
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050000]/80 to-[#000000] z-0 pointer-events-none" />
      
      <div className="absolute bottom-[-20%] left-[-10%] right-[-10%] h-[60%] bg-gradient-to-t from-red-950 via-red-900/50 to-transparent rounded-[100%] blur-[20px] pointer-events-none" />
      
      <Particles />

      <AnimatePresence>
        {!isTransitioning && (
          <motion.div
            className="relative z-10 flex flex-col items-center justify-start min-h-screen pt-12 pb-8 px-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.div 
              className="text-center mb-8"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-yellow-200 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] mb-4">
                คุณอยากถามเรื่องอะไร ?
              </h1>
              <div className="flex items-center justify-center gap-2 text-yellow-500/80 mb-2">
                <Sparkles className="w-4 h-4" />
                <hr className="w-12 border-yellow-500/50" />
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="text-gray-300 text-sm md:text-base max-w-md mx-auto leading-relaxed">
                เลือกหัวข้อหรือพิมพ์คำถามที่คุณอยากรู้ในตอนนี้
                <br />
                หรือคุณจะข้ามขั้นตอนนี้ไปก่อนก็ได้
              </p>
            </motion.div>

            <div className="relative w-full max-w-2xl h-80 flex items-center justify-center mb-8">
              <motion.div 
                className="absolute left-[15%] md:left-[25%] bottom-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Candle />
              </motion.div>

              <CrystalBall />

              <motion.div 
                className="absolute right-[15%] md:right-[25%] bottom-10"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Candle />
              </motion.div>
            </div>

            <motion.div
              className="w-full max-w-3xl relative z-20 mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -2 }}
            >
              <div className="relative rounded-2xl bg-[#3a0b0b]/40 backdrop-blur-xl border border-red-900/50 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-yellow-600/50" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-yellow-600/50" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-yellow-600/50" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-yellow-600/50" />

                <textarea
                  className="w-full h-32 bg-transparent text-gray-200 placeholder-gray-500/80 p-6 resize-none focus:outline-none focus:ring-1 focus:ring-yellow-900/50 transition-all text-lg"
                  placeholder="พิมพ์คำถามของคุณ...(ไม่บังคับ)"
                />

                <div className="px-4 pb-4 flex flex-wrap justify-center gap-2">
                  {categories.map((cat) => (
                    <motion.button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        "text-xs px-4 py-2 rounded-full border transition-all duration-300",
                        activeCategory === cat 
                          ? "bg-red-900/80 border-yellow-500 text-yellow-200 shadow-[0_0_10px_rgba(234,179,8,0.3)]" 
                          : "bg-black/40 border-red-900/40 text-gray-400 hover:border-yellow-700 hover:text-yellow-100"
                      )}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {cat}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4 z-20 mb-16"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                onClick={handleStart}
                className="relative group px-8 py-3 bg-gradient-to-r from-red-900 to-[#2a0808] border border-yellow-600/60 rounded-full overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 font-medium text-yellow-500 group-hover:text-yellow-300 flex items-center gap-2">
                  เริ่มเลือกไพ่
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.button>

              <motion.button
                onClick={handleStart}
                className="px-8 py-3 bg-transparent border border-gray-600 rounded-full text-gray-400 hover:text-white hover:border-gray-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ข้าม
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}