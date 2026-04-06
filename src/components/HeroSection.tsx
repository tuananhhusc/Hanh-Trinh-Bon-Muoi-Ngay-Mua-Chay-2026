"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Calendar, Building2, ScrollText } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        {/* Hero image with gentle zoom animation */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image 
            src="/hero-bg.png" 
            alt="Desert scenery"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Subtle cross pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(0deg, rgba(212,175,55,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(212,175,55,0.08) 0%, transparent 60%)",
          }}
        />

        {/* Floating decorative particles */}
        <motion.div
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: "rgba(212,175,55,0.3)",
            top: "20%",
            left: "15%",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            background: "rgba(212,175,55,0.2)",
            top: "60%",
            right: "20%",
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: "rgba(212,175,55,0.25)",
            top: "35%",
            right: "35%",
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />

        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background:
              "linear-gradient(to top, var(--background), transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Decorative top element */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <div
              className="h-px w-12"
              style={{ background: "rgba(212,175,55,0.5)" }}
            />
            <ScrollText size={20} style={{ color: "#D4AF37" }} />
            <div
              className="h-px w-12"
              style={{ background: "rgba(212,175,55,0.5)" }}
            />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-sm md:text-base uppercase tracking-[0.25em] mb-6"
          style={{
            color: "rgba(212,175,55,0.8)",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Báo Cáo Phân Tích Chuyên Sâu
        </motion.p>

        {/* Main title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          style={{
            fontFamily: "var(--font-serif)",
            color: "#FFFFFF",
            textShadow: "0 2px 40px rgba(75, 0, 130, 0.3)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Hành Trình Bốn Mươi Ngày
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #D4AF37, #E5C866, #D4AF37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Mùa Chay 2026
          </span>
        </motion.h1>

        {/* Subtitle description */}
        <motion.p
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{
            color: "rgba(255,255,255,0.7)",
            fontFamily: "var(--font-body)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Dưới nhãn quan Thần Học Phụng Vụ và Linh Đạo I-Nhã
        </motion.p>

        {/* Meta info */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <MetaChip icon={<Building2 size={14} />} label="Dòng Tên (dongten.net)" />
          <MetaChip icon={<BookOpen size={14} />} label="My Catholic Life" />
          <MetaChip icon={<Calendar size={14} />} label="Mùa Chay 2026" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="w-6 h-10 rounded-full border-2 mx-auto flex justify-center pt-2"
              style={{ borderColor: "rgba(212,175,55,0.4)" }}
            >
              <motion.div
                className="w-1 h-2 rounded-full"
                style={{ background: "rgba(212,175,55,0.6)" }}
                animate={{ opacity: [0.3, 1, 0.3], y: [0, 6, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function MetaChip({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm"
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(212,175,55,0.2)",
        color: "rgba(255,255,255,0.7)",
        fontFamily: "var(--font-sans)",
        backdropFilter: "blur(8px)",
      }}
    >
      <span style={{ color: "#D4AF37" }}>{icon}</span>
      {label}
    </div>
  );
}
