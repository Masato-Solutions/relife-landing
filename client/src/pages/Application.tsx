import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Smartphone, Globe, Download, Check } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export default function Application() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top center, rgba(51,183,250,0.08) 0%, transparent 60%)" }}
        />
        <div className="container relative z-10">
          <AnimatedSection className="space-y-4">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#33b7fa" }}>
              Digital Platform
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Re:Life <span className="gradient-text-blue">Applications</span>
            </h1>
            <p className="text-lg text-white/50 max-w-2xl">
              Access mental health support and wellness tools anytime, anywhere through our web and mobile applications.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Web App Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <AnimatedSection className="space-y-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(51,183,250,0.15)", border: "1px solid rgba(51,183,250,0.3)" }}
                >
                  <Globe className="w-5 h-5" style={{ color: "#33b7fa" }} />
                </div>
                <h2 className="text-2xl font-bold text-white">Web Application</h2>
              </div>
              <p className="text-white/60 leading-relaxed">
                Access the full Re:Life platform from any device with a web browser. Manage your wellness journey with comprehensive tools and resources.
              </p>
              <ul className="space-y-3">
                {[
                  "AI-powered mental health chatbot",
                  "Appointment scheduling with professionals",
                  "Personal wellness tracking dashboard",
                  "Access to community resources",
                  "Prescription and medication management",
                  "Secure video conferencing",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#33b7fa" }} />
                    <span className="text-white/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="rounded-full px-8 h-12 text-base text-black font-semibold hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #33b7fa, #4cd7ef)" }}
              >
                Launch Web App
              </Button>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="relative h-80">
              <div
                className="absolute inset-0 rounded-3xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(51,183,250,0.08) 0%, rgba(0,0,0,0.3) 100%)",
                  border: "1px solid rgba(51,183,250,0.15)",
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Globe className="w-24 h-24" style={{ color: "rgba(51,183,250,0.35)" }} />
                </motion.div>
              </div>
            </AnimatedSection>
          </div>

          {/* Mobile App Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1} className="relative h-80 order-2 md:order-1">
              <div
                className="absolute inset-0 rounded-3xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(171,146,241,0.08) 0%, rgba(0,0,0,0.3) 100%)",
                  border: "1px solid rgba(171,146,241,0.15)",
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Smartphone className="w-24 h-24" style={{ color: "rgba(171,146,241,0.35)" }} />
                </motion.div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="space-y-6 order-1 md:order-2">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(171,146,241,0.15)", border: "1px solid rgba(171,146,241,0.3)" }}
                >
                  <Smartphone className="w-5 h-5" style={{ color: "#ab92f1" }} />
                </div>
                <h2 className="text-2xl font-bold text-white">Mobile Application</h2>
              </div>
              <div
                className="p-4 rounded-xl"
                style={{ background: "rgba(171,146,241,0.08)", border: "1px solid rgba(171,146,241,0.2)" }}
              >
                <p className="text-sm font-semibold" style={{ color: "#ab92f1" }}>Coming Soon</p>
                <p className="text-sm text-white/50 mt-1">
                  Our native mobile app for iOS and Android is currently in development and will be available soon.
                </p>
              </div>
              <p className="text-white/60 leading-relaxed text-sm">
                Take mental health support with you wherever you go. Our mobile app will provide on-the-go access to wellness tools, notifications, and community support.
              </p>
              <ul className="space-y-3">
                {[
                  "Push notifications for wellness reminders",
                  "Offline access to resources",
                  "Biometric authentication",
                  "Native performance optimization",
                  "Seamless sync with web app",
                  "Quick access to emergency resources",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-4 h-4 flex-shrink-0" style={{ color: "#ab92f1" }} />
                    <span className="text-white/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="rounded-full px-8 h-12 text-base bg-transparent"
                style={{ borderColor: "rgba(171,146,241,0.4)", color: "#ab92f1" }}
              >
                Notify Me When Available
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Platform <span className="gradient-text-blue">Features</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/8">
                  <th className="text-left py-4 px-4 font-bold text-white/70">Feature</th>
                  <th className="text-center py-4 px-4 font-bold" style={{ color: "#33b7fa" }}>Web App</th>
                  <th className="text-center py-4 px-4 font-bold" style={{ color: "#ab92f1" }}>Mobile App</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "AI Chatbot Support", web: true, mobile: true },
                  { feature: "Appointment Booking", web: true, mobile: true },
                  { feature: "Wellness Dashboard", web: true, mobile: true },
                  { feature: "Video Conferencing", web: true, mobile: false },
                  { feature: "Offline Access", web: false, mobile: true },
                  { feature: "Push Notifications", web: false, mobile: true },
                  { feature: "Prescription Management", web: true, mobile: true },
                  { feature: "Community Forum", web: true, mobile: true },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="py-4 px-4 text-white/70">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {row.web ? (
                        <Check className="w-4 h-4 mx-auto" style={{ color: "#33b7fa" }} />
                      ) : (
                        <span className="text-white/20">—</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.mobile ? (
                        <Check className="w-4 h-4 mx-auto" style={{ color: "#ab92f1" }} />
                      ) : (
                        <span className="text-white/20">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </AnimatedSection>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(51,183,250,0.07) 0%, transparent 70%)" }}
        />
        <div className="container text-center space-y-8 relative z-10">
          <AnimatedSection className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Get Started <span className="gradient-text-blue">Today</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Access the web app immediately or sign up to be notified when our mobile app launches.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="rounded-full px-8 h-12 text-base text-black font-semibold hover:opacity-90 flex items-center justify-center gap-2"
              style={{ background: "linear-gradient(135deg, #33b7fa, #4cd7ef)" }}
            >
              <Globe size={18} />
              Launch Web App
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 h-12 text-base bg-transparent flex items-center justify-center gap-2"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }}
            >
              <Download size={18} />
              Download Mobile (Coming Soon)
            </Button>
          </AnimatedSection>
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
