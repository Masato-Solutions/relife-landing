import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Link } from "wouter";
import { Heart, Leaf, Users, Pill } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Your Mental Health & Wellness Journey Starts Here
                </h1>
                <p className="text-lg text-muted-foreground">
                  Discover holistic wellness solutions combining mental health support, premium wellness products, and community programs designed for your wellbeing.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base">
                    Explore Products
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="rounded-full px-8 h-12 text-base border-primary text-primary hover:bg-primary/5">
                    Join Our Programs
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Heart className="w-24 h-24 text-primary mx-auto" />
                  <p className="text-foreground font-semibold">Wellness Awaits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive wellness solutions tailored to support your mental and physical health
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Pill,
                title: "Premium Products",
                description: "Wellness products like sleeping boxes and poppy pads designed for your comfort",
                href: "/products",
              },
              {
                icon: Users,
                title: "Community Programs",
                description: "Join CSR events, seminars, and mental health programs with like-minded individuals",
                href: "/services",
              },
              {
                icon: Leaf,
                title: "Wellness Center",
                description: "Access resources and guidance for your holistic wellness journey",
                href: "/wellness-center",
              },
              {
                icon: Heart,
                title: "Mobile App",
                description: "Download our app for mental health support and wellness tracking on the go",
                href: "/application",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Link key={idx} href={feature.href}>
                  <a className="group p-8 rounded-2xl bg-background border border-border hover:border-primary hover:shadow-lg transition-all duration-300">
                    <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Transform Your Wellness?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of people taking control of their mental and physical health with Re:Life
            </p>
          </div>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base"
            onClick={() => window.location.href = "#register"}
          >
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Re:Life</h4>
              <p className="text-sm text-white/70">Your partner in mental health and wellness</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="/products" className="hover:text-white transition">Wellness Products</a></li>
                <li><a href="/products" className="hover:text-white transition">Shop Now</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="/services" className="hover:text-white transition">Programs</a></li>
                <li><a href="/services" className="hover:text-white transition">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="/about-us" className="hover:text-white transition">About Us</a></li>
                <li><a href="/contact-us" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2026 Re:Life Health. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
