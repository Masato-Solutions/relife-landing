import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top left, rgba(171,146,241,0.08) 0%, transparent 60%)" }}
        />
        <div className="container relative z-10">
          <AnimatedSection className="space-y-4">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#ab92f1" }}>
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Get In <span className="gradient-text-blue">Touch</span>
            </h1>
            <p className="text-lg text-foreground/50 max-w-2xl">
              Have questions or feedback? We'd love to hear from you. Contact us anytime.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <StaggerContainer className="grid md:grid-cols-4 gap-6 mb-20" staggerDelay={0.08}>
            {[
              { icon: Mail, title: "Email", content: "hello@relife.health", subtext: "We respond within 24 hours", accent: "#ab92f1" },
              { icon: Phone, title: "Phone", content: "+94 (0) 123 456 789", subtext: "Monday to Friday, 9 AM - 6 PM", accent: "#c4aef5" },
              { icon: MapPin, title: "Location", content: "Dambulla, Sri Lanka", subtext: "Visit our wellness center", accent: "#ab92f1" },
              { icon: Clock, title: "Support Hours", content: "24/7 Available", subtext: "Via chat and email", accent: "#ab92f1" },
            ].map((info, idx) => {
              const Icon = info.icon;
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
                    <h3 className="text-lg font-bold text-foreground mb-1">{info.title}</h3>
                    <p className="font-semibold text-foreground/80 text-sm mb-1">{info.content}</p>
                    <p className="text-xs text-foreground/40">{info.subtext}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Contact Form and Info */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
                  <p className="text-foreground/50 text-sm">
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
                      <label className="block text-sm font-semibold text-foreground/70 mb-2">{label}</label>
                      <input
                        type={type}
                        value={formData[key as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder-muted-foreground/60 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                        placeholder={placeholder}
                        required
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-semibold text-foreground/70 mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder-muted-foreground/60 text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none transition-all"
                      rows={5}
                      placeholder="Your message here..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-full h-12 text-base text-black font-semibold hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #ab92f1, #c4aef5)" }}
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Info Box */}
            <AnimatedSection delay={0.15} className="space-y-6">
              <div className="p-8 rounded-2xl glass-card">
                <h3 className="text-xl font-bold text-foreground mb-5">
                  Why Contact Us?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Product inquiries and support",
                    "Partnership and collaboration opportunities",
                    "Feedback and suggestions",
                    "Media and press inquiries",
                    "Corporate wellness programs",
                    "General questions about our services",
                  ].map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#ab92f1" }} />
                      <span className="text-blue-accent text-sm">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="p-8 rounded-2xl"
                style={{ background: "rgba(51,183,250,0.06)", border: "1px solid rgba(51,183,250,0.15)" }}
              >
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Quick Response Time
                </h3>
                <p className="text-foreground/50 text-sm mb-3">
                  We value your time and aim to respond to all inquiries within 24 hours during business days.
                </p>
                <p className="text-xs text-foreground/40">
                  For urgent matters, please call our support line or use the chat feature in the web app.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 alt-section">
        <div className="container">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked <span className="gradient-text-blue">Questions</span>
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" staggerDelay={0.08}>
            {[
              { q: "How do I create an account?", a: "Visit our web app and click 'Sign Up'. Follow the simple registration process to get started." },
              { q: "Are your products covered by insurance?", a: "Some products may be eligible for insurance coverage. Contact us for specific details." },
              { q: "What is your refund policy?", a: "We offer a 30-day satisfaction guarantee on all products. Contact us for refund requests." },
              { q: "How do I join a support group?", a: "Visit the Services page to see upcoming programs and register for groups that interest you." },
              { q: "Is my data secure?", a: "Yes, we use enterprise-grade encryption and comply with all healthcare data protection regulations." },
              { q: "When will the mobile app be available?", a: "The mobile app is coming soon! Sign up on the Application page to be notified at launch." },
            ].map((faq, idx) => (
              <StaggerItem key={idx}>
                <div className="p-6 rounded-2xl glass-card">
                  <h3 className="font-bold text-foreground mb-2 text-sm">{faq.q}</h3>
                  <p className="text-blue-accent text-sm">{faq.a}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container text-center text-sm text-foreground/30">
          <p>&copy; 2026 Re:Life Health. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
