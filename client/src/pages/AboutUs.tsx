import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Heart, Target, Users, Award } from "lucide-react";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useAboutContent } from "@/hooks/useContent";
import { Skeleton } from "@/components/ui/skeleton";

const ICON_MAP: Record<string, ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Heart,
  Target,
  Users,
  Award,
};

export default function AboutUs() {
  const { data, loading } = useAboutContent();
  const values = data?.values ?? [];
  const team = data?.team ?? [];
  const stats = data?.stats ?? [];
  const offerings = data?.offerings ?? [];
  const mission = data?.mission;

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
              Who We Are
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">
              About <span className="gradient-text-purple">Re:Life</span>
            </h1>
            <p className="text-lg text-white/50 max-w-2xl">
              Transforming mental health and wellness through technology and compassion
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                {mission?.heading ?? "Our"}{" "}
                <span className="gradient-text-blue">{mission?.headingHighlight ?? "Mission"}</span>
              </h2>
              {loading ? (
                <div className="space-y-3">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-5/6" />
                  <Skeleton className="h-6 w-full" />
                </div>
              ) : (
                (mission?.paragraphs ?? []).map((p, i) => (
                  <p key={i} className="text-lg text-white/60 leading-relaxed">{p}</p>
                ))
              )}
              <Button
                className="rounded-full px-8 text-black font-semibold hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #33b7fa, #4cd7ef)" }}
              >
                Learn More
              </Button>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="relative h-80">
              <div
                className="absolute inset-0 rounded-3xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(171,146,241,0.08) 0%, rgba(51,183,250,0.08) 100%)",
                  border: "1px solid rgba(171,146,241,0.15)",
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Heart className="w-24 h-24" style={{ color: "rgba(171,146,241,0.4)" }} />
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="container">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Core <span className="gradient-text-blue">Values</span>
            </h2>
          </AnimatedSection>
          {loading ? (
            <div className="grid md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-40 rounded-2xl" />)}
            </div>
          ) : (
            <StaggerContainer className="grid md:grid-cols-4 gap-8" staggerDelay={0.1}>
              {values.map((value, idx) => {
                const Icon = ICON_MAP[value.iconName] ?? Heart;
                return (
                  <StaggerItem key={idx}>
                    <div className="text-center">
                      <div
                        className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center"
                        style={{ background: `${value.accent}18`, border: `1px solid ${value.accent}30` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: value.accent }} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                      <p className="text-white/50 text-sm">{value.description}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20">
        <div className="container">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">
              What We <span className="gradient-text-blue">Offer</span>
            </h2>
          </AnimatedSection>
          {loading ? (
            <div className="grid md:grid-cols-2 gap-8">
              {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-48 rounded-2xl" />)}
            </div>
          ) : (
            <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.08}>
              {offerings.map((section, idx) => (
                <StaggerItem key={idx}>
                  <div className="p-8 rounded-2xl glass-card">
                    <h3 className="text-lg font-bold text-white mb-5" style={{ color: section.accent }}>{section.title}</h3>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: section.accent }} />
                          <span className="text-white/60 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="container">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text-purple">Team</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Re:Life is built by a dedicated team of mental health professionals, technology experts, and wellness advocates committed to making a difference.
            </p>
          </AnimatedSection>
          {loading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-48 rounded-2xl" />)}
            </div>
          ) : (
            <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.12}>
              {team.map((member) => (
                <StaggerItem key={member.id}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-center p-8 rounded-2xl glass-card"
                  >
                    <div
                      className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${member.accent}20, rgba(0,0,0,0.3))`, border: `1px solid ${member.accent}30` }}
                    >
                      {member.imageUrl ? (
                        <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <Users className="w-10 h-10" style={{ color: member.accent }} />
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-sm font-semibold mb-3" style={{ color: member.accent }}>{member.role}</p>
                    <p className="text-sm text-white/50">{member.bio}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container">
          {loading ? (
            <div className="grid md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-32 rounded-2xl" />)}
            </div>
          ) : (
            <StaggerContainer className="grid md:grid-cols-4 gap-8 text-center" staggerDelay={0.1}>
              {stats.map((stat, idx) => (
                <StaggerItem key={idx}>
                  <div className="p-8">
                    <p className="text-4xl font-bold mb-2" style={{ color: stat.accent }}>{stat.number}</p>
                    <p className="text-white/50">{stat.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(51,183,250,0.06) 0%, transparent 70%)" }}
        />
        <div className="container text-center space-y-8 relative z-10">
          <AnimatedSection className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Join Our <span className="gradient-text-blue">Mission</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Be part of the mental health revolution. Together, we can create a world where mental health support is accessible to everyone.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Button
              className="rounded-full px-10 h-12 text-base text-black font-semibold hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #33b7fa, #4cd7ef)" }}
            >
              Get Started Now
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
