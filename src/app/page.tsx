"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import ArticleContent from "@/components/ArticleContent";
import ThemeToggle from "@/components/ThemeToggle";
import BackToTop from "@/components/BackToTop";

const ProgressBar = dynamic(() => import("@/components/ProgressBar"), {
  ssr: false,
});
const TableOfContents = dynamic(
  () => import("@/components/TableOfContents"),
  { ssr: false }
);

const tocItems = [
  { id: "dan-nhap-heading", text: "Dẫn Nhập Tổng Quan", level: 2 },
  { id: "cau-truc-heading", text: "Cấu Trúc Tổng Thể", level: 2 },
  {
    id: "giai-doan-1-heading",
    text: "GĐ 1: Hoang Địa & Khắc Kỷ",
    level: 2,
  },
  {
    id: "giai-doan-2-heading",
    text: "GĐ 2: Trận Chiến Tâm Trí",
    level: 2,
  },
  {
    id: "giai-doan-3-heading",
    text: "GĐ 3: Bảy Mối Tội Đầu",
    level: 2,
  },
  {
    id: "giai-doan-4-heading",
    text: "GĐ 4: Mầu Nhiệm Vượt Qua",
    level: 2,
  },
  { id: "ngay-40", text: "Ngày Thứ Bốn Mươi", level: 3 },
  { id: "linh-thao-heading", text: "Linh Thao I-Nhã", level: 2 },
  { id: "linh-thao-p1", text: "Phần I: Hy vọng & Sám hối", level: 3 },
  { id: "linh-thao-p2", text: "Phần II: Phục vụ", level: 3 },
  { id: "linh-thao-p3", text: "Phần III: Đau khổ & Yêu thương", level: 3 },
  { id: "linh-thao-p4", text: "Phần IV: Hy vọng", level: 3 },
  { id: "ket-luan-heading", text: "Kết Luận", level: 2 },
  { id: "nguon-trich-dan-heading", text: "Nguồn Trích Dẫn", level: 2 },
];

export default function Home() {
  return (
    <>
      <ProgressBar />
      <ThemeToggle />

      {/* Hero */}
      <HeroSection />

      {/* Main content area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 xl:grid-cols-[260px_1fr] gap-12">
          {/* TOC sidebar */}
          <aside className="hidden xl:block py-12">
            <TableOfContents items={tocItems} />
          </aside>

          {/* Article */}
          <main className="max-w-3xl mx-auto xl:mx-0 w-full py-12">
            <ArticleContent />

            {/* Footer */}
            <footer
              className="mt-16 pt-8 text-center text-sm"
              style={{
                borderTop: "1px solid var(--border-color)",
                color: "var(--toc-text)",
                fontFamily: "var(--font-sans)",
              }}
            >
              <p>
                © 2026 Nghiên Cứu Chuyên Sâu Phụng vụ Mùa Chay
              </p>
              <p className="mt-1 text-xs" style={{ opacity: 0.6 }}>
                Nội dung tổng hợp từ dongten.net và My Catholic Life
              </p>
            </footer>
          </main>
        </div>
      </div>

      {/* Mobile TOC (rendered outside grid) */}
      <div className="xl:hidden">
        <TableOfContents items={tocItems} />
      </div>

      <BackToTop />
    </>
  );
}
