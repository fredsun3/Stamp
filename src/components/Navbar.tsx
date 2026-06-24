import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: "时光长廊", path: "/" },
    { label: "1940s", path: "/decade/1940s" },
    { label: "1960s", path: "/decade/1960s" },
    { label: "1980s", path: "/decade/1980s" },
    { label: "2000s", path: "/decade/2000s" },
    { label: "2020s", path: "/decade/2020s" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-paper/95 backdrop-blur-md shadow-sm border-b border-vermilion/10"
          : "bg-transparent"
      )}
    >
      <nav className="container max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border-2 border-vermilion flex items-center justify-center seal text-xs font-bold">
            邮
          </div>
          <div className="hidden sm:block">
            <div className="font-serif font-bold text-ink text-base leading-none">
              方寸之间
            </div>
            <div className="font-display text-[10px] text-ink-soft tracking-widest mt-0.5">
              STAMPS OF CHINA
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-1.5 text-sm font-serif transition-all duration-300 border-b-2",
                  active
                    ? "text-vermilion border-vermilion"
                    : "text-ink-soft border-transparent hover:text-vermilion hover:border-vermilion/30"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-ink p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-paper/98 backdrop-blur-md border-t border-vermilion/10 animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "py-2.5 text-sm font-serif border-b border-vermilion/5",
                    active ? "text-vermilion" : "text-ink-soft"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
