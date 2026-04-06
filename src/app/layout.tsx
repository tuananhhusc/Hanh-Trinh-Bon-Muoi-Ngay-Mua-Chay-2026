import type { Metadata } from "next";
import {
  Playfair_Display,
  Source_Serif_4,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin", "vietnamese"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title:
    "Hành Trình Bốn Mươi Ngày Mùa Chay 2026 Phân Tích Thần Học Phụng Vụ",
  description:
    "Báo cáo phân tích chuyên sâu về Hành Trình 40 Ngày Mùa Chay Năm 2026 dưới nhãn quan Thần Học Phụng Vụ và Linh Đạo I-Nhã. Nghiên cứu từ nguồn Dòng Tên và My Catholic Life.",
  keywords: [
    "Mùa Chay 2026",
    "Thần học phụng vụ",
    "Linh đạo I-Nhã",
    "Bốn mươi ngày",
    "Công giáo",
    "Dòng Tên",
    "Catholic Lent",
  ],
  authors: [{ name: "Nghiên cứu Thần học" }],
  openGraph: {
    title: "Hành Trình Mùa Chay 2026 | Phân Tích Thần Học Chuyên Sâu",
    description: "Báo cáo phân tích chuyên sâu về Hành Trình 40 Ngày Mùa Chay 2026 dưới nhãn quan Thần Học Phụng Vụ và Linh Đạo I-Nhã.",
    locale: "vi_VN",
    type: "article",
    siteName: "Nghiên cứu Thần học Mùa Chay",
    images: [
      {
        url: "https://ta.tuananhhusc.id.vn/Hanh-Trinh-Bon-Muoi-Ngay-Mua-Chay-2026/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Hành Trình Bốn Mươi Ngày Mùa Chay 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hành Trình Mùa Chay 2026 | Phân Tích Thần Học",
    description: "Báo cáo về Hành Trình 40 Ngày Mùa Chay 2026 dưới nhãn quan Thần Học Phụng Vụ.",
    images: ["https://ta.tuananhhusc.id.vn/Hanh-Trinh-Bon-Muoi-Ngay-Mua-Chay-2026/hero-bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${sourceSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
