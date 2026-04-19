import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Heart, Target, Users, Award } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              About Re:Life
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Transforming mental health and wellness through technology and compassion
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Re:Life, we believe in the transformative power of technology to address pressing mental health challenges. Our mission is to make comprehensive mental health support and wellness resources accessible to everyone, everywhere.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded by Avrina Lanka, Re:Life combines cutting-edge technology with compassionate care to create a platform that truly understands and supports your mental health journey.
              </p>
              <div className="flex gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl flex items-center justify-center">
                <Heart className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "We approach every interaction with empathy and understanding",
              },
              {
                icon: Target,
                title: "Excellence",
                description: "We strive for the highest standards in everything we do",
              },
              {
                icon: Users,
                title: "Community",
                description: "We believe in the power of connection and shared experiences",
              },
              {
                icon: Award,
                title: "Innovation",
                description: "We continuously innovate to improve mental health care",
              },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Comprehensive Platform",
                items: [
                  "AI-powered mental health chatbot",
                  "Professional consultation services",
                  "Patient record management",
                  "Prescription tracking",
                ],
              },
              {
                title: "Community & Support",
                items: [
                  "Support group programs",
                  "Mental health seminars",
                  "Wellness workshops",
                  "CSR initiatives",
                ],
              },
              {
                title: "Wellness Products",
                items: [
                  "Premium sleeping solutions",
                  "Therapeutic wellness products",
                  "Herbal wellness items",
                  "Meditation accessories",
                ],
              },
              {
                title: "Technology Solutions",
                items: [
                  "Web application",
                  "Mobile app (coming soon)",
                  "Video conferencing",
                  "Secure data management",
                ],
              },
            ].map((section, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Re:Life is built by a dedicated team of mental health professionals, technology experts, and wellness advocates committed to making a difference.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Avrina Lanka",
                role: "Founder & CEO",
                bio: "Mental health advocate with 10+ years of experience in healthcare technology",
              },
              {
                name: "Dr. Sarah Johnson",
                role: "Chief Medical Officer",
                bio: "Licensed psychiatrist specializing in digital mental health solutions",
              },
              {
                name: "Michael Chen",
                role: "Chief Technology Officer",
                bio: "Tech innovator passionate about accessible healthcare technology",
              },
            ].map((member, idx) => (
              <div key={idx} className="text-center p-8 rounded-2xl border border-border bg-white hover:border-primary hover:shadow-lg transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Active Users" },
              { number: "500+", label: "Mental Health Professionals" },
              { number: "1000+", label: "Success Stories" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, idx) => (
              <div key={idx} className="p-8">
                <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Join Our Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of the mental health revolution. Together, we can create a world where mental health support is accessible to everyone.
            </p>
          </div>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base"
          >
            Get Started Now
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
