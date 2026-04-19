import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { BookOpen, Lightbulb, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export default function WellnessCenter() {
  const resources = [
    { id: 1, icon: BookOpen, title: "Wellness Guides", description: "Comprehensive guides on mental health, stress management, and wellness practices", count: "24 guides", accent: "#ab92f1" },
    { id: 2, icon: Lightbulb, title: "Expert Tips", description: "Daily wellness tips and insights from certified mental health professionals", count: "100+ tips", accent: "#c4aef5" },
    { id: 3, icon: Users, title: "Community Stories", description: "Real stories from community members on their wellness journeys", count: "50+ stories", accent: "#ab92f1" },
    { id: 4, icon: TrendingUp, title: "Progress Tracking", description: "Tools to monitor your wellness progress and celebrate milestones", count: "Unlimited", accent: "#ab92f1" },
  ];

  const articles = [
    { title: "Understanding Anxiety: A Comprehensive Guide", category: "Mental Health", readTime: "8 min read", date: "April 10, 2026", accent: "#ab92f1" },
    { title: "5 Meditation Techniques for Beginners", category: "Mindfulness", readTime: "6 min read", date: "April 8, 2026", accent: "#c4aef5" },
    { title: "Sleep Hygiene: Tips for Better Rest", category: "Sleep Wellness", readTime: "7 min read", date: "April 5, 2026", accent: "#ab92f1" },
    { title: "Building Resilience in Daily Life", category: "Personal Growth", readTime: "9 min read", date: "April 1, 2026", accent: "#ab92f1" },
    { title: "Nutrition and Mental Health Connection", category: "Wellness", readTime: "10 min read", date: "March 28, 2026", accent: "#c4aef5" },
    { title: "Workplace Stress Management Strategies", category: "Work-Life Balance", readTime: "8 min read", date: "March 25, 2026", accent: "#ab92f1" },
  ];

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
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#c4aef5" }}>
              Resource Hub
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Wellness <span className="gradient-text-blue">Center</span>
            </h1>
            <p className="text-lg text-foreground/50 max-w-2xl">
              Your comprehensive resource hub for mental health information, wellness guides, and community support.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Resources Overview */}
      <section className="py-16">
        <div className="container">
          <StaggerContainer className="grid md:grid-cols-4 gap-6" staggerDelay={0.1}>
            {resources.map((resource) => {
              const Icon = resource.icon;
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
                    <h3 className="text-lg font-bold text-foreground mb-2">{resource.title}</h3>
                    <p className="text-sm text-blue-accent mb-3">{resource.description}</p>
                    <p className="text-sm font-semibold" style={{ color: resource.accent }}>{resource.count}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 alt-section">
        <div className="container">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Latest <span className="gradient-text-blue">Articles</span>
            </h2>
            <p className="text-lg text-foreground/50">
              Stay informed with our latest wellness content and expert insights
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.08}>
            {articles.map((article, idx) => (
              <StaggerItem key={idx}>
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
                    <span className="text-xs text-foreground/30">{article.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-foreground/40">{article.readTime}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.2} className="mt-12 text-center">
            <Button
              className="rounded-full px-8 h-12 text-base text-black font-semibold hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #ab92f1, #c4aef5)" }}
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
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {[
              { title: "Morning Routine", tips: ["Start with 5 minutes of meditation", "Drink water before coffee", "Set daily intentions"], accent: "#ab92f1" },
              { title: "During the Day", tips: ["Take regular breaks", "Practice deep breathing", "Move your body regularly"], accent: "#c4aef5" },
              { title: "Evening Routine", tips: ["Limit screen time", "Reflect on your day", "Prepare for quality sleep"], accent: "#ab92f1" },
            ].map((section, idx) => (
              <StaggerItem key={idx}>
                <div
                  className="p-8 rounded-2xl glass-card"
                  style={{ borderColor: `${section.accent}20` }}
                >
                  <h3 className="text-lg font-bold mb-5" style={{ color: section.accent }}>{section.title}</h3>
                  <ul className="space-y-3">
                    {section.tips.map((tip, tipIdx) => (
                      <li key={tipIdx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: section.accent }} />
                        <span className="text-blue-accent text-sm">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden alt-section">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(76,215,239,0.06) 0%, transparent 70%)" }}
        />
        <div className="container text-center space-y-8 relative z-10">
          <AnimatedSection className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Start Your Wellness <span className="gradient-text-blue">Journey</span>
            </h2>
            <p className="text-lg text-foreground/50 max-w-2xl mx-auto">
              Access all wellness resources and join our community of people committed to better health
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Button
              className="rounded-full px-10 h-12 text-base text-black font-semibold hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #ab92f1, #c4aef5)" }}
            >
              Explore Wellness Center
            </Button>
          </AnimatedSection>
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
