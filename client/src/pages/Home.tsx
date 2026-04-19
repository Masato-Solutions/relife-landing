import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Link } from "wouter";
import { Heart, Leaf, Users, Pill } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

function MouseParallaxHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const orb1X = useTransform(mouseX, [-600, 600], [-40, 40]);
  const orb1Y = useTransform(mouseY, [-400, 400], [-30, 30]);
  const orb2X = useTransform(mouseX, [-600, 600], [30, -30]);
  const orb2Y = useTransform(mouseY, [-400, 400], [20, -20]);
  const orb3X = useTransform(mouseX, [-600, 600], [-20, 20]);
  const orb3Y = useTransform(mouseY, [-400, 400], [35, -35]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - rect.left - rect.width / 2);
    mouseY.set(clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      className="relative overflow-hidden py-28 md:py-40"
      onMouseMove={handleMouseMove}
    >
      {/* Ambient orbs */}
      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        className="absolute top-[-80px] left-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none"
        aria-hidden
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        initial={{ opacity: 0.3 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(51,183,250,0.22) 0%, transparent 70%)" }}
        />
      </motion.div>
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className="absolute bottom-[-60px] right-[-60px] w-[420px] h-[420px] rounded-full pointer-events-none"
        aria-hidden
        animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        initial={{ opacity: 0.25 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(171,146,241,0.22) 0%, transparent 70%)" }}
        />
      </motion.div>
      <motion.div
        style={{ x: orb3X, y: orb3Y }}
        className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
        aria-hidden
        animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        initial={{ opacity: 0.15 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{ background: "radial-gradient(circle, rgba(76,215,239,0.2) 0%, transparent 70%)" }}
        />
      </motion.div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-block text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: "#33b7fa" }}
              >
                Mental Health &amp; Wellness Platform
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your Wellness{" "}
                <span className="gradient-text-blue">Journey</span>{" "}
                Starts Here
              </h1>
              <p className="text-lg text-white/60 leading-relaxed max-w-lg">
                Discover holistic wellness solutions combining mental health support, premium wellness products, and community programs designed for your wellbeing.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/products">
                <Button
                  className="rounded-full px-8 h-12 text-base text-black font-semibold hover:opacity-90 transition-opacity"
                  style={{ background: "linear-gradient(135deg, #33b7fa, #4cd7ef)" }}
                >
                  Explore Products
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="rounded-full px-8 h-12 text-base border-white/20 text-white hover:border-primary hover:text-primary bg-transparent"
                >
                  Join Our Programs
                </Button>
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-8 pt-2"
            >
              {[
                { number: "50K+", label: "Active Users" },
                { number: "500+", label: "Professionals" },
                { number: "24/7", label: "Support" },
              ].map((s, idx) => (
                <div key={idx}>
                  <p className="text-2xl font-bold gradient-text-blue">{s.number}</p>
                  <p className="text-xs text-white/50 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-96 md:h-[480px]"
          >
            <div
              className="absolute inset-0 rounded-3xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(51,183,250,0.08) 0%, rgba(171,146,241,0.08) 100%)",
                border: "1px solid rgba(51,183,250,0.15)",
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full"
                style={{ border: "1px dashed rgba(51,183,250,0.15)" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 rounded-full"
                style={{ border: "1px dashed rgba(171,146,241,0.15)" }}
              />
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-center space-y-4 relative z-10"
              >
                <div
                  className="w-24 h-24 rounded-full mx-auto flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, rgba(51,183,250,0.2), rgba(171,146,241,0.2))", border: "1px solid rgba(51,183,250,0.3)" }}
                >
                  <Heart className="w-12 h-12" style={{ color: "#33b7fa" }} />
                </div>
                <p className="text-white/60 font-semibold text-sm">Wellness Awaits</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <MouseParallaxHero />

      {/* Features Section */}
      <section className="py-24" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We <span className="gradient-text-blue">Offer</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Comprehensive wellness solutions tailored to support your mental and physical health
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[
              {
                icon: Pill,
                title: "Premium Products",
                description: "Wellness products like sleeping boxes and poppy pads designed for your comfort",
                href: "/products",
                color: "#33b7fa",
              },
              {
                icon: Users,
                title: "Community Programs",
                description: "Join CSR events, seminars, and mental health programs with like-minded individuals",
                href: "/services",
                color: "#4cd7ef",
              },
              {
                icon: Leaf,
                title: "Wellness Center",
                description: "Access resources and guidance for your holistic wellness journey",
                href: "/wellness-center",
                color: "#ab92f1",
              },
              {
                icon: Heart,
                title: "Mobile App",
                description: "Download our app for mental health support and wellness tracking on the go",
                href: "/application",
                color: "#33b7fa",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={idx}>
                  <Link href={feature.href}>
                    <a className="group block p-8 rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1 h-full">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: `${feature.color}18`, border: `1px solid ${feature.color}30` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: feature.color }} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
                    </a>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(51,183,250,0.08) 0%, transparent 70%)" }}
        />
        <div className="container text-center space-y-8 relative z-10">
          <AnimatedSection className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your{" "}
              <span className="gradient-text-purple">Wellness?</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Join thousands of people taking control of their mental and physical health with Re:Life
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Button
              className="rounded-full px-10 h-12 text-base text-black font-semibold hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(135deg, #33b7fa, #4cd7ef)" }}
              onClick={() => window.location.href = "#register"}
            >
              Get Started Now
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/8 py-14">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-black"
                  style={{ background: "linear-gradient(135deg, #33b7fa, #4cd7ef)" }}
                >
                  RL
                </div>
                <h4 className="font-bold gradient-text-blue">Re:Life</h4>
              </div>
              <p className="text-sm text-white/40">Your partner in mental health and wellness</p>
            </div>
            <div>
              <h4 className="font-bold text-white/80 mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li><a href="/products" className="hover:text-primary transition">Wellness Products</a></li>
                <li><a href="/products" className="hover:text-primary transition">Shop Now</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white/80 mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li><a href="/services" className="hover:text-primary transition">Programs</a></li>
                <li><a href="/services" className="hover:text-primary transition">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white/80 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li><a href="/about-us" className="hover:text-primary transition">About Us</a></li>
                <li><a href="/contact-us" className="hover:text-primary transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/8 pt-8 text-center text-sm text-white/30">
            <p>&copy; 2026 Re:Life Health. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
