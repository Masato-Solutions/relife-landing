import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Application", href: "/application" },
    { label: "Wellness Center", href: "/wellness-center" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 border-b border-white/8"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(16px)" }}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 text-2xl font-bold hover:opacity-80 transition-opacity">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-black"
              style={{ background: "linear-gradient(135deg, #33b7fa, #4cd7ef)" }}
            >
              RL
            </div>
            <span className="gradient-text-blue">Re:Life</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="text-white/70 hover:text-primary transition-colors font-medium text-sm">
                {link.label}
              </a>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            className="rounded-full px-6 text-black font-semibold"
            style={{ background: "linear-gradient(135deg, #33b7fa, #4cd7ef)" }}
            onClick={() => window.location.href = "#register"}
          >
            Register Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-white/8 overflow-hidden"
            style={{ background: "rgba(0,0,0,0.9)" }}
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
                      className="text-white/70 hover:text-primary transition-colors font-medium block py-3 border-b border-white/5"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  </Link>
                </motion.div>
              ))}
              <Button
                className="rounded-full w-full mt-3 text-black font-semibold"
                style={{ background: "linear-gradient(135deg, #33b7fa, #4cd7ef)" }}
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
