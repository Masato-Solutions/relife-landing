import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Smartphone, Globe, Download, Check } from "lucide-react";

export default function Application() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Re:Life Applications
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Access mental health support and wellness tools anytime, anywhere through our web and mobile applications.
            </p>
          </div>
        </div>
      </section>

      {/* Web App Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Globe className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Web Application</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Access the full Re:Life platform from any device with a web browser. Manage your wellness journey with comprehensive tools and resources.
              </p>
              <ul className="space-y-3">
                {[
                  "AI-powered mental health chatbot",
                  "Appointment scheduling with professionals",
                  "Personal wellness tracking dashboard",
                  "Access to community resources",
                  "Prescription and medication management",
                  "Secure video conferencing",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base">
                Launch Web App
              </Button>
            </div>
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl flex items-center justify-center">
                <Globe className="w-32 h-32 text-primary/30" />
              </div>
            </div>
          </div>

          {/* Mobile App Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl flex items-center justify-center">
                <Smartphone className="w-32 h-32 text-secondary/30" />
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="flex items-center gap-3">
                <Smartphone className="w-8 h-8 text-secondary" />
                <h2 className="text-3xl font-bold text-foreground">Mobile Application</h2>
              </div>
              <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm text-foreground font-semibold">Coming Soon</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Our native mobile app for iOS and Android is currently in development and will be available soon.
                </p>
              </div>
              <p className="text-lg text-muted-foreground">
                Take mental health support with you wherever you go. Our mobile app will provide on-the-go access to wellness tools, notifications, and community support.
              </p>
              <ul className="space-y-3">
                {[
                  "Push notifications for wellness reminders",
                  "Offline access to resources",
                  "Biometric authentication",
                  "Native performance optimization",
                  "Seamless sync with web app",
                  "Quick access to emergency resources",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="rounded-full px-8 h-12 text-base border-secondary text-secondary hover:bg-secondary/5">
                Notify Me When Available
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Platform Features
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-bold text-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">Web App</th>
                  <th className="text-center py-4 px-4 font-bold text-foreground">Mobile App</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "AI Chatbot Support", web: true, mobile: true },
                  { feature: "Appointment Booking", web: true, mobile: true },
                  { feature: "Wellness Dashboard", web: true, mobile: true },
                  { feature: "Video Conferencing", web: true, mobile: false },
                  { feature: "Offline Access", web: false, mobile: true },
                  { feature: "Push Notifications", web: false, mobile: true },
                  { feature: "Prescription Management", web: true, mobile: true },
                  { feature: "Community Forum", web: true, mobile: true },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border hover:bg-background transition-colors">
                    <td className="py-4 px-4 text-foreground">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {row.web ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.mobile ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-primary/5">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Get Started Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access the web app immediately or sign up to be notified when our mobile app launches.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base flex items-center justify-center gap-2">
              <Globe size={20} />
              Launch Web App
            </Button>
            <Button variant="outline" className="rounded-full px-8 h-12 text-base border-primary text-primary hover:bg-primary/5 flex items-center justify-center gap-2">
              <Download size={20} />
              Download Mobile (Coming Soon)
            </Button>
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
