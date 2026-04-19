import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Calendar, Users, Zap, Award, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: Calendar,
      title: "Mental Health Seminars",
      description: "Expert-led seminars covering stress management, anxiety relief, and emotional wellness",
      example: "Next: \"Overcoming Burnout\" — Dr. Anura Perera, April 25",
      schedule: "Weekly on Thursdays",
      participants: "50-100",
      duration: "2 hours",
      accent: "#ab92f1",
    },
    {
      id: 2,
      icon: Users,
      title: "Support Group Programs",
      description: "Community-driven support groups for peer connection and shared experiences",
      example: "Active group: Anxiety & Stress Relief Circle — Sundays 4 PM",
      schedule: "Bi-weekly on Sundays",
      participants: "20-30",
      duration: "1.5 hours",
      accent: "#c4aef5",
    },
    {
      id: 3,
      icon: Zap,
      title: "Wellness Workshops",
      description: "Practical workshops on meditation, yoga, and holistic health practices",
      example: "Upcoming: Mindful Mornings — Yoga & Breathwork, May 3",
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
      example: "Featured: Workplace Resilience Program for teams of 20–200",
      schedule: "Custom scheduling",
      participants: "Variable",
      duration: "Flexible",
      accent: "#ab92f1",
    },
  ];

  const upcomingEvents = [
    {
      title: "Stress Management Masterclass",
      date: "April 25, 2026",
      time: "6:00 PM - 8:00 PM",
      location: "Virtual",
      spots: 45,
      accent: "#ab92f1",
    },
    {
      title: "Mindfulness & Meditation Workshop",
      date: "May 2, 2026",
      time: "10:00 AM - 1:00 PM",
      location: "Dambulla Wellness Center",
      spots: 30,
      accent: "#c4aef5",
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
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#c4aef5" }}>
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
                    <p className="text-blue-accent mb-3">{service.description}</p>
                    <p className="text-xs italic mb-5" style={{ color: service.accent }}>{service.example}</p>
                    <div className="space-y-2 text-sm border-t border-border pt-4 mb-6">
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
                    <Button
                      className="w-full rounded-full text-black font-semibold hover:opacity-90"
                      style={{ background: `linear-gradient(135deg, ${service.accent}, #c4aef5)` }}
                    >
                      Register Now
                    </Button>
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
                    style={{ background: `linear-gradient(135deg, ${event.accent}, #c4aef5)` }}
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
              const colors = ["#ab92f1", "#c4aef5", "#b8a0f3", "#d4c5f9"];
              return (
                <StaggerItem key={idx}>
                  <div className="text-center">
                    <div
                      className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-black font-bold"
                      style={{ background: `linear-gradient(135deg, ${colors[idx]}, #c4aef5)` }}
                    >
                      {idx + 1}
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-blue-accent">{benefit.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Register or Become a Partner */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(171,146,241,0.10) 0%, transparent 70%)" }}
        />
        <div className="container relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Ready to <span className="gradient-text-purple">Get Involved?</span>
            </h2>
            <p className="text-lg text-foreground/50 max-w-2xl mx-auto">
              Join as a participant or collaborate with us as a partner to bring wellness programs to your community
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto" staggerDelay={0.1}>
            <StaggerItem>
              <div className="p-8 rounded-2xl glass-card text-center flex flex-col items-center gap-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: "#ab92f118", border: "1px solid #ab92f130" }}
                >
                  <Calendar className="w-7 h-7" style={{ color: "#ab92f1" }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Register as Participant</h3>
                  <p className="text-sm text-foreground/50">
                    Sign up for seminars, workshops, or support groups and start your wellness journey today.
                  </p>
                </div>
                <Button
                  className="w-full rounded-full text-black font-semibold hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #ab92f1, #c4aef5)" }}
                >
                  Register Now
                </Button>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-8 rounded-2xl glass-card text-center flex flex-col items-center gap-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: "#33b7fa18", border: "1px solid #33b7fa30" }}
                >
                  <Handshake className="w-7 h-7" style={{ color: "#33b7fa" }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Become a Partner</h3>
                  <p className="text-sm text-foreground/50">
                    Collaborate with Re:Life to co-host events, sponsor programs, or bring CSR wellness initiatives to your organisation.
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full rounded-full font-semibold border-2 bg-transparent transition-all"
                  style={{ borderColor: "#33b7fa50", color: "#33b7fa" }}
                >
                  Become a Partner
                </Button>
              </div>
            </StaggerItem>
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
