import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Have questions or feedback? We'd love to hear from you. Contact us anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: Mail,
                title: "Email",
                content: "hello@relife.health",
                subtext: "We respond within 24 hours",
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+94 (0) 123 456 789",
                subtext: "Monday to Friday, 9 AM - 6 PM",
              },
              {
                icon: MapPin,
                title: "Location",
                content: "Dambulla, Sri Lanka",
                subtext: "Visit our wellness center",
              },
              {
                icon: Clock,
                title: "Support Hours",
                content: "24/7 Available",
                subtext: "Via chat and email",
              },
            ].map((info, idx) => {
              const Icon = info.icon;
              return (
                <div key={idx} className="text-center p-6 rounded-2xl border border-border bg-white hover:border-primary hover:shadow-lg transition-all duration-300">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{info.title}</h3>
                  <p className="font-semibold text-foreground mb-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.subtext}</p>
                </div>
              );
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    rows={5}
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-12 text-base"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info Box */}
            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-white border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Why Contact Us?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Product inquiries and support",
                    "Partnership and collaboration opportunities",
                    "Feedback and suggestions",
                    "Media and press inquiries",
                    "Corporate wellness programs",
                    "General questions about our services",
                  ].map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-foreground">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Quick Response Time
                </h3>
                <p className="text-muted-foreground mb-4">
                  We value your time and aim to respond to all inquiries within 24 hours during business days.
                </p>
                <p className="text-sm text-muted-foreground">
                  For urgent matters, please call our support line or use the chat feature in the web app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "How do I create an account?",
                a: "Visit our web app and click 'Sign Up'. Follow the simple registration process to get started.",
              },
              {
                q: "Are your products covered by insurance?",
                a: "Some products may be eligible for insurance coverage. Contact us for specific details.",
              },
              {
                q: "What is your refund policy?",
                a: "We offer a 30-day satisfaction guarantee on all products. Contact us for refund requests.",
              },
              {
                q: "How do I join a support group?",
                a: "Visit the Services page to see upcoming programs and register for groups that interest you.",
              },
              {
                q: "Is my data secure?",
                a: "Yes, we use enterprise-grade encryption and comply with all healthcare data protection regulations.",
              },
              {
                q: "When will the mobile app be available?",
                a: "The mobile app is coming soon! Sign up on the Application page to be notified at launch.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-border bg-background hover:border-primary transition-all duration-300">
                <h3 className="font-bold text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
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
