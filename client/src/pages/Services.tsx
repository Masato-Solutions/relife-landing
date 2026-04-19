import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Calendar, Users, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: Calendar,
      title: "Mental Health Seminars",
      description: "Expert-led seminars covering stress management, anxiety relief, and emotional wellness",
      schedule: "Weekly on Thursdays",
      participants: "50-100",
      duration: "2 hours",
      accent: "#33b7fa",
    },
    {
      id: 2,
      icon: Users,
      title: "Support Group Programs",
      description: "Community-driven support groups for peer connection and shared experiences",
      schedule: "Bi-weekly on Sundays",
      participants: "20-30",
      duration: "1.5 hours",
      accent: "#4cd7ef",
    },
    {
      id: 3,
      icon: Zap,
      title: "Wellness Workshops",
      description: "Practical workshops on meditation, yoga, and holistic health practices",
      schedule: "Monthly events",
      participants: "30-50",
      duration: "3 hours",
      accent: "#ab92f1",
    },
    {
      id: 4,
      icon: Award,
      title: "Corporate CSR Programs",
      description: "Tailored mental health and wellness programs for corporate teams",
      schedule: "Custom scheduling",
      participants: "Variable",
      duration: "Flexible",
      accent: "#33b7fa",
    },
  ];

  const upcomingEvents = [
    {
      title: "Stress Management Masterclass",
      date: "April 25, 2026",
      time: "6:00 PM - 8:00 PM",
      location: "Virtual",
      spots: 45,
      accent: "#33b7fa",
    },
    {
      title: "Mindfulness & Meditation Workshop",
      date: "May 2, 2026",
      time: "10:00 AM - 1:00 PM",
      location: "Dambulla Wellness Center",
      spots: 30,
      accent: "#4cd7ef",
    },
    {
      title: "Mental Health Awareness Seminar",
      date: "May 9, 2026",
      time: "7:00 PM - 9:00 PM",
      location: "Virtual",
      spots: 60,
      accent: "#ab92f1",
    },
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
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#4cd7ef" }}>
              Programs &amp; Events
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Our Services &amp; <span className="gradient-text-blue">Programs</span>
            </h1>
            <p className="text-lg text-foreground/50 max-w-2xl">
              Join our community programs, seminars, and CSR initiatives designed to support mental health and wellness for everyone.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container">
          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.1}>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.id}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="p-8 rounded-2xl glass-card transition-all duration-300"
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${service.accent}18`, border: `1px solid ${service.accent}30` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: service.accent }} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-foreground/50 mb-6">{service.description}</p>
                    <div className="space-y-2 text-sm border-t border-border pt-4">
                      {[
                        { label: "Schedule", value: service.schedule },
                        { label: "Participants", value: service.participants },
                        { label: "Duration", value: service.duration },
                      ].map((item) => (
                        <div key={item.label} className="flex justify-between">
                          <span className="text-foreground/40">{item.label}:</span>
                          <span className="font-semibold text-foreground/80">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 alt-section">
        <div className="container">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Upcoming <span className="gradient-text-blue">Events</span>
            </h2>
            <p className="text-lg text-foreground/50">
              Register now for our upcoming seminars and workshops
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {upcomingEvents.map((event, idx) => (
              <StaggerItem key={idx}>
                <div className="p-6 rounded-2xl glass-card flex flex-col h-full">
                  <h3 className="text-lg font-bold text-foreground mb-5">{event.title}</h3>
                  <div className="space-y-3 mb-5 flex-1">
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar size={16} style={{ color: event.accent }} />
                      <span className="text-foreground/50">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Zap size={16} style={{ color: event.accent }} />
                      <span className="text-foreground/50">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Users size={16} style={{ color: event.accent }} />
                      <span className="text-foreground/50">{event.location}</span>
                    </div>
                  </div>
                  <div className="mb-4 p-3 rounded-lg" style={{ background: `${event.accent}12`, border: `1px solid ${event.accent}20` }}>
                    <p className="text-sm font-semibold" style={{ color: event.accent }}>{event.spots} spots available</p>
                  </div>
                  <Button
                    className="w-full rounded-full text-black font-semibold hover:opacity-90"
                    style={{ background: `linear-gradient(135deg, ${event.accent}, #4cd7ef)` }}
                  >
                    Register Now
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20">
        <div className="container">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Join Our <span className="gradient-text-purple">Programs?</span>
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-4 gap-8" staggerDelay={0.1}>
            {[
              { title: "Expert Guidance", description: "Learn from certified mental health professionals and wellness experts" },
              { title: "Community Support", description: "Connect with others on similar wellness journeys" },
              { title: "Practical Tools", description: "Gain actionable strategies for mental health and wellness" },
              { title: "Flexible Access", description: "Virtual and in-person options to fit your schedule" },
            ].map((benefit, idx) => {
              const colors = ["#33b7fa", "#4cd7ef", "#ab92f1", "#33b7fa"];
              return (
                <StaggerItem key={idx}>
                  <div className="text-center">
                    <div
                      className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-black font-bold"
                      style={{ background: `linear-gradient(135deg, ${colors[idx]}, #4cd7ef)` }}
                    >
                      {idx + 1}
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-foreground/50">{benefit.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
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
