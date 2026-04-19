import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { BookOpen, Lightbulb, Users, TrendingUp } from "lucide-react";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useWellnessContent } from "@/hooks/useContent";
import { Skeleton } from "@/components/ui/skeleton";

const ICON_MAP: Record<string, ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  BookOpen,
  Lightbulb,
  Users,
  TrendingUp,
};

export default function WellnessCenter() {
  const { data, loading } = useWellnessContent();
  const resources = data?.resources ?? [];
  const articles = data?.articles ?? [];
  const dailyTips = data?.dailyTips ?? [];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(76,215,239,0.08) 0%, transparent 60%)" }}
        />
        <div className="container relative z-10">
          <AnimatedSection className="space-y-4">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#4cd7ef" }}>
              Resource Hub
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Wellness <span className="gradient-text-blue">Center</span>
            </h1>
            <p className="text-lg text-white/50 max-w-2xl">
              Your comprehensive resource hub for mental health information, wellness guides, and community support.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Resources Overview */}
      <section className="py-16">
        <div className="container">
          {loading ? (
            <div className="grid md:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-40 rounded-2xl" />)}
            </div>
          ) : (
            <StaggerContainer className="grid md:grid-cols-4 gap-6" staggerDelay={0.1}>
              {resources.map((resource) => {
                const Icon = ICON_MAP[resource.iconName] ?? BookOpen;
                return (
                  <StaggerItem key={resource.id}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="p-6 rounded-2xl glass-card cursor-pointer"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: `${resource.accent}18`, border: `1px solid ${resource.accent}30` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: resource.accent }} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                      <p className="text-sm text-white/50 mb-3">{resource.description}</p>
                      <p className="text-sm font-semibold" style={{ color: resource.accent }}>{resource.count}</p>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="container">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Latest <span className="gradient-text-blue">Articles</span>
            </h2>
            <p className="text-lg text-white/50">
              Stay informed with our latest wellness content and expert insights
            </p>
          </AnimatedSection>

          {loading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-32 rounded-2xl" />)}
            </div>
          ) : (
            <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.08}>
              {articles.map((article) => (
                <StaggerItem key={article.id}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="p-6 rounded-2xl glass-card cursor-pointer group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span
                        className="inline-block px-3 py-1 text-xs font-semibold rounded-full"
                        style={{ background: `${article.accent}18`, color: article.accent }}
                      >
                        {article.category}
                      </span>
                      <span className="text-xs text-white/30">{article.date}</span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-white/40">{article.readTime}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

          <AnimatedSection delay={0.2} className="mt-12 text-center">
            <Button
              className="rounded-full px-8 h-12 text-base text-black font-semibold hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #33b7fa, #4cd7ef)" }}
            >
              View All Articles
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Wellness Tips */}
      <section className="py-20">
        <div className="container">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">
              Daily Wellness <span className="gradient-text-purple">Tips</span>
            </h2>
          </AnimatedSection>
          {loading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-48 rounded-2xl" />)}
            </div>
          ) : (
            <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
              {dailyTips.map((section) => (
                <StaggerItem key={section.id}>
                  <div
                    className="p-8 rounded-2xl glass-card"
                    style={{ borderColor: `${section.accent}20` }}
                  >
                    <h3 className="text-lg font-bold mb-5" style={{ color: section.accent }}>{section.title}</h3>
                    <ul className="space-y-3">
                      {section.tips.map((tip, tipIdx) => (
                        <li key={tipIdx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: section.accent }} />
                          <span className="text-white/60 text-sm">{tip}</span>
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

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(76,215,239,0.06) 0%, transparent 70%)" }}
        />
        <div className="container text-center space-y-8 relative z-10">
          <AnimatedSection className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Start Your Wellness <span className="gradient-text-blue">Journey</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Access all wellness resources and join our community of people committed to better health
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Button
              className="rounded-full px-10 h-12 text-base text-black font-semibold hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #33b7fa, #4cd7ef)" }}
            >
              Explore Wellness Center
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
