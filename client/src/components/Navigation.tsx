import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useSiteContent } from "@/hooks/useContent";
import { DEFAULT_LOGO_TEXT, toSafeUploadsLogoSrc } from "@/lib/siteBranding";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoLoadFailed, setLogoLoadFailed] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { data: site } = useSiteContent();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Application", href: "/application" },
    { label: "Wellness Center", href: "/wellness-center" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  const logoValue = (site?.logo ?? "").trim();
  const safeLogoSrc = toSafeUploadsLogoSrc(logoValue);
  const hasImageLogo = Boolean(safeLogoSrc) && !logoLoadFailed;
  const brandName = site?.siteName?.trim() || "Re:Life";

  useEffect(() => {
    setLogoLoadFailed(false);
  }, [safeLogoSrc]);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border"
      style={{
        background: "var(--nav-bg)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 text-2xl font-bold hover:opacity-80 transition-opacity">
            {hasImageLogo ? (
              <img
                src={safeLogoSrc ?? undefined}
                alt={`${brandName} logo`}
                className="w-8 h-8 rounded-lg object-cover"
                onError={() => setLogoLoadFailed(true)}
              />
            ) : (
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, #ab92f1, #c4aef5)" }}
              >
                {DEFAULT_LOGO_TEXT}
              </div>
            )}
            <span className="gradient-text-purple">{brandName}</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="text-foreground/70 hover:text-primary transition-colors font-medium text-sm">
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Right side: Theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border text-foreground/70 hover:text-primary hover:border-primary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button
            className="rounded-full px-6 text-white font-semibold"
            style={{ background: "linear-gradient(135deg, #ab92f1, #c4aef5)" }}
            onClick={() => window.location.href = "#register"}
          >
            Register Now
          </Button>
        </div>

        {/* Mobile: theme toggle + menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-foreground/70 hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="p-2 text-foreground/70 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-border overflow-hidden"
            style={{
              background: "var(--nav-mobile-bg)",
            }}
          >
            <div className="container py-4 flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link href={link.href}>
                    <a
                      className="text-foreground/70 hover:text-primary transition-colors font-medium block py-3 border-b border-border/50"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  </Link>
                </motion.div>
              ))}
              <Button
                className="rounded-full w-full mt-3 text-white font-semibold"
                style={{ background: "linear-gradient(135deg, #ab92f1, #c4aef5)" }}
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = "#register";
                }}
              >
                Register Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
