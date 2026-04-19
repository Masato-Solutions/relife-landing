import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Calendar, Users, Zap, Award } from "lucide-react";

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
    },
    {
      id: 2,
      icon: Users,
      title: "Support Group Programs",
      description: "Community-driven support groups for peer connection and shared experiences",
      schedule: "Bi-weekly on Sundays",
      participants: "20-30",
      duration: "1.5 hours",
    },
    {
      id: 3,
      icon: Zap,
      title: "Wellness Workshops",
      description: "Practical workshops on meditation, yoga, and holistic health practices",
      schedule: "Monthly events",
      participants: "30-50",
      duration: "3 hours",
    },
    {
      id: 4,
      icon: Award,
      title: "Corporate CSR Programs",
      description: "Tailored mental health and wellness programs for corporate teams",
      schedule: "Custom scheduling",
      participants: "Variable",
      duration: "Flexible",
    },
  ];

  const upcomingEvents = [
    {
      title: "Stress Management Masterclass",
      date: "April 25, 2026",
      time: "6:00 PM - 8:00 PM",
      location: "Virtual",
      spots: 45,
    },
    {
      title: "Mindfulness & Meditation Workshop",
      date: "May 2, 2026",
      time: "10:00 AM - 1:00 PM",
      location: "Dambulla Wellness Center",
      spots: 30,
    },
    {
      title: "Mental Health Awareness Seminar",
      date: "May 9, 2026",
      time: "7:00 PM - 9:00 PM",
      location: "Virtual",
      spots: 60,
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
              Our Services & Programs
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Join our community programs, seminars, and CSR initiatives designed to support mental health and wellness for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="p-8 rounded-2xl border border-border bg-white hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Schedule:</span>
                      <span className="font-semibold text-foreground">{service.schedule}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Participants:</span>
                      <span className="font-semibold text-foreground">{service.participants}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-semibold text-foreground">{service.duration}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground">
              Register now for our upcoming seminars and workshops
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border bg-background hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">{event.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar size={18} className="text-primary" />
                    <span className="text-muted-foreground">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Zap size={18} className="text-primary" />
                    <span className="text-muted-foreground">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users size={18} className="text-primary" />
                    <span className="text-muted-foreground">{event.location}</span>
                  </div>
                </div>
                <div className="mb-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-semibold">{event.spots} spots available</p>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                  Register Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Why Join Our Programs?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Guidance",
                description: "Learn from certified mental health professionals and wellness experts",
              },
              {
                title: "Community Support",
                description: "Connect with others on similar wellness journeys",
              },
              {
                title: "Practical Tools",
                description: "Gain actionable strategies for mental health and wellness",
              },
              {
                title: "Flexible Access",
                description: "Virtual and in-person options to fit your schedule",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">{idx + 1}</span>
                </div>
                <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
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
