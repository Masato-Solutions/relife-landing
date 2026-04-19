import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { ComponentType } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useContactContent } from "@/hooks/useContent";
import { submitContactForm } from "@/lib/api";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

const ICON_MAP: Record<string, ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Mail,
  Phone,
  MapPin,
  Clock,
};

export default function ContactUs() {
  const { data, loading } = useContactContent();
  const cards = data?.cards ?? [];
  const whyContactUs = data?.whyContactUs ?? [];
  const faq = data?.faq ?? [];

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await submitContactForm(formData);
      toast.success("Thank you! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top left, rgba(51,183,250,0.08) 0%, transparent 60%)" }}
        />
        <div className="container relative z-10">
          <AnimatedSection className="space-y-4">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#33b7fa" }}>
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Get In <span className="gradient-text-blue">Touch</span>
            </h1>
            <p className="text-lg text-white/50 max-w-2xl">
              Have questions or feedback? We'd love to hear from you. Contact us anytime.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          {loading ? (
            <div className="grid md:grid-cols-4 gap-6 mb-20">
              {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-36 rounded-2xl" />)}
            </div>
          ) : (
            <StaggerContainer className="grid md:grid-cols-4 gap-6 mb-20" staggerDelay={0.08}>
              {cards.map((info, idx) => {
                const Icon = ICON_MAP[info.iconName] ?? Mail;
                return (
                  <StaggerItem key={idx}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="text-center p-6 rounded-2xl glass-card"
                    >
                      <div
                        className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center"
                        style={{ background: `${info.accent}18`, border: `1px solid ${info.accent}30` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: info.accent }} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
                      <p className="font-semibold text-white/80 text-sm mb-1">{info.content}</p>
                      <p className="text-xs text-white/40">{info.subtext}</p>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          )}

          {/* Contact Form and Info */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
                  <p className="text-white/50 text-sm">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { label: "Full Name", type: "text", key: "name", placeholder: "Your name" },
                    { label: "Email Address", type: "email", key: "email", placeholder: "your@email.com" },
                    { label: "Subject", type: "text", key: "subject", placeholder: "How can we help?" },
                  ].map(({ label, type, key, placeholder }) => (
                    <div key={key}>
                      <label className="block text-sm font-semibold text-white/70 mb-2">{label}</label>
                      <input
                        type={type}
                        value={formData[key as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                        placeholder={placeholder}
                        required
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-semibold text-white/70 mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none transition-all"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                      rows={5}
                      placeholder="Your message here..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full h-12 text-base text-black font-semibold hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #33b7fa, #4cd7ef)" }}
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Info Box */}
            <AnimatedSection delay={0.15} className="space-y-6">
              <div className="p-8 rounded-2xl glass-card">
                <h3 className="text-xl font-bold text-white mb-5">
                  Why Contact Us?
                </h3>
                <ul className="space-y-3">
                  {whyContactUs.map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#33b7fa" }} />
                      <span className="text-white/60 text-sm">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="p-8 rounded-2xl"
                style={{ background: "rgba(51,183,250,0.06)", border: "1px solid rgba(51,183,250,0.15)" }}
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  Quick Response Time
                </h3>
                <p className="text-white/50 text-sm mb-3">
                  We value your time and aim to respond to all inquiries within 24 hours during business days.
                </p>
                <p className="text-xs text-white/40">
                  For urgent matters, please call our support line or use the chat feature in the web app.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="container">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked <span className="gradient-text-blue">Questions</span>
            </h2>
          </AnimatedSection>
          {loading ? (
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-24 rounded-2xl" />)}
            </div>
          ) : (
            <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.08}>
              {faq.map((item) => (
                <StaggerItem key={item.id}>
                  <div className="p-6 rounded-2xl glass-card">
                    <h3 className="font-bold text-white mb-2 text-sm">{item.q}</h3>
                    <p className="text-white/50 text-sm">{item.a}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/8 py-10">
        <div className="container text-center text-sm text-white/30">
          <p>&copy; 2026 Re:Life Health. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
