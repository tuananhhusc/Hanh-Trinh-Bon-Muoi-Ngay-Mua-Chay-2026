"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "lucide-react";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first heading currently intersecting
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop
          );

        if (intersecting.length > 0) {
          setActiveId(intersecting[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0,
      }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items]);

  const handleClick = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setActiveId(id);
        setIsOpen(false);
      }
    },
    []
  );

  // Prevent body scroll when mobile TOC is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop TOC sticky sidebar */}
      <nav
        className="hidden xl:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-8 no-print border-r"
        style={{ borderColor: "var(--border-color)" }}
        aria-label="Mục lục"
      >
        <div className="mb-4">
          <h3
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{
              fontFamily: "var(--font-sans)",
              color: "var(--toc-text)",
            }}
          >
            Mục Lục
          </h3>
          <div className="gold-separator mb-4" />
        </div>
        <ul className="space-y-0.5">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`toc-link text-left w-full cursor-pointer ${
                  activeId === item.id ? "active" : ""
                }`}
                style={{
                  paddingLeft: item.level === 3 ? "1.75rem" : "1rem",
                  fontSize: item.level === 3 ? "0.8rem" : "0.85rem",
                }}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile TOC button */}
      <button
        onClick={() => setIsOpen(true)}
        className="xl:hidden fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center no-print"
        style={{
          background: "var(--lenten-purple, #4B0082)",
          color: "white",
          boxShadow: "0 4px 20px rgba(75, 0, 130, 0.4)",
        }}
        aria-label="Mở mục lục"
      >
        <List size={20} />
      </button>

      {/* Mobile TOC overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[200] toc-overlay xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 bottom-0 z-[201] w-[85%] max-w-sm xl:hidden overflow-y-auto"
              style={{
                background: "var(--surface)",
                borderLeft: "1px solid var(--border-color)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3
                    className="text-sm font-semibold uppercase tracking-widest"
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: "var(--toc-text)",
                    }}
                  >
                    Mục Lục
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg cursor-pointer"
                    style={{
                      background: "var(--surface-hover)",
                      color: "var(--foreground)",
                    }}
                    aria-label="Đóng mục lục"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="gold-separator mb-4" />
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleClick(item.id)}
                        className={`toc-link text-left w-full cursor-pointer ${
                          activeId === item.id ? "active" : ""
                        }`}
                        style={{
                          paddingLeft:
                            item.level === 3 ? "1.75rem" : "1rem",
                          fontSize: item.level === 3 ? "0.82rem" : "0.88rem",
                        }}
                      >
                        {item.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
