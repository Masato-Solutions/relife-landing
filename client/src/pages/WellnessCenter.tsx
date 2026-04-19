import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { BookOpen, Lightbulb, Users, TrendingUp } from "lucide-react";

export default function WellnessCenter() {
  const resources = [
    {
      id: 1,
      icon: BookOpen,
      title: "Wellness Guides",
      description: "Comprehensive guides on mental health, stress management, and wellness practices",
      count: "24 guides",
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Expert Tips",
      description: "Daily wellness tips and insights from certified mental health professionals",
      count: "100+ tips",
    },
    {
      id: 3,
      icon: Users,
      title: "Community Stories",
      description: "Real stories from community members on their wellness journeys",
      count: "50+ stories",
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Tools to monitor your wellness progress and celebrate milestones",
      count: "Unlimited",
    },
  ];

  const articles = [
    {
      title: "Understanding Anxiety: A Comprehensive Guide",
      category: "Mental Health",
      readTime: "8 min read",
      date: "April 10, 2026",
    },
    {
      title: "5 Meditation Techniques for Beginners",
      category: "Mindfulness",
      readTime: "6 min read",
      date: "April 8, 2026",
    },
    {
      title: "Sleep Hygiene: Tips for Better Rest",
      category: "Sleep Wellness",
      readTime: "7 min read",
      date: "April 5, 2026",
    },
    {
      title: "Building Resilience in Daily Life",
      category: "Personal Growth",
      readTime: "9 min read",
      date: "April 1, 2026",
    },
    {
      title: "Nutrition and Mental Health Connection",
      category: "Wellness",
      readTime: "10 min read",
      date: "March 28, 2026",
    },
    {
      title: "Workplace Stress Management Strategies",
      category: "Work-Life Balance",
      readTime: "8 min read",
      date: "March 25, 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Wellness Center
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Your comprehensive resource hub for mental health information, wellness guides, and community support.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Overview */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <div
                  key={resource.id}
                  className="p-6 rounded-2xl border border-border bg-white hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <p className="text-sm font-semibold text-primary">{resource.count}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Articles & Resources
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay informed with our latest wellness content and expert insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground">{article.readTime}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Wellness Tips */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Daily Wellness Tips
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Morning Routine",
                tips: [
                  "Start with 5 minutes of meditation",
                  "Drink water before coffee",
                  "Set daily intentions",
                ],
              },
              {
                title: "During the Day",
                tips: [
                  "Take regular breaks",
                  "Practice deep breathing",
                  "Move your body regularly",
                ],
              },
              {
                title: "Evening Routine",
                tips: [
                  "Limit screen time",
                  "Reflect on your day",
                  "Prepare for quality sleep",
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.tips.map((tip, tipIdx) => (
                    <li key={tipIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Start Your Wellness Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access all wellness resources and join our community of people committed to better health
            </p>
          </div>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base"
          >
            Explore Wellness Center
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container text-center text-sm text-white/70">
          <p>&copy; 2026 Re:Life Health. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
