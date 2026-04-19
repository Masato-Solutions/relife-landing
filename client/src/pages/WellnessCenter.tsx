import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import {
  Home,
  Users,
  Brain,
  FlaskConical,
  Utensils,
  Activity,
  Mountain,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const services = [
  {
    id: 1,
    icon: Home,
    title: "Luxury Wellness Cottages & Villas",
    subtitle: "Elegantly designed rooms with breathtaking nature views",
    description:
      "Nestled in the heart of nature, our luxury cottages and villas offer the perfect blend of Elegance, Comfort, and Tranquility. Each Residence is thoughtfully crafted with Contemporary Architecture that harmonizes with the surrounding landscapes, featuring floor-to-ceiling windows that open up to breathtaking views of Lush Forests, Serene Lakes, and Rolling Hills. Our Accommodations provide a Private Sanctuary where guests can immerse themselves in nature while enjoying World-Class Amenities, including Plush Bedding, Spa-Inspired Bathrooms, Private Terraces, and Personalized Wellness Services.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    accent: "#33b7fa",
  },
  {
    id: 2,
    icon: Users,
    title: "Exclusive Retirement & Ayurvedic Center",
    subtitle: "A peaceful sanctuary with personalized wellness care",
    description:
      "Our Exclusive Retirement & Ayurvedic Center is a sanctuary designed for individuals seeking a peaceful yet fulfilling retirement lifestyle, infused with the time-honored wisdom of Ayurveda. Residents enjoy spacious, elegantly designed suites that Promote Relaxation, with interiors inspired by Natural Elements. Our in-house Ayurvedic specialists craft personalized wellness plans tailored to each resident's unique health needs, including Customized Diets, Daily Herbal Treatments, and Rejuvenating Therapies. Our facility also features Meditation Spaces, Hydrotherapy Pools, and Physiotherapy Centers.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    accent: "#ab92f1",
  },
  {
    id: 3,
    icon: Brain,
    title: "Mindfulness & Meditation Programs",
    subtitle: "Yoga, sound therapy & guided meditation",
    description:
      "Achieve mental clarity, emotional balance, and deep inner peace through our diverse Mindfulness and Meditation Programs. Designed for both beginners and experienced practitioners, our programs offer Guided Meditation, Mindfulness Training, Transcendental Meditation, Chakra Healing, and Breath-work techniques. Imagine starting your day with Sunrise Yoga on a Mountaintop, followed by deep relaxation in our Sound Therapy sessions, where the gentle vibrations of Tibetan singing bowls and gongs restore harmony to your mind and body. Our Retreats are led by globally recognized wellness experts.",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
    accent: "#4cd7ef",
  },
  {
    id: 4,
    icon: FlaskConical,
    title: "Medical Herb Research & Ayurvedic Studies",
    subtitle: "Pioneering herbal medicine innovation",
    description:
      "Our State-Of-The-Art Medical Herb Research & Ayurvedic Studies Center is dedicated to the preservation, exploration, and innovation of natural healing. We combine the centuries-old wisdom of Ayurveda with Modern Scientific research to unlock the full potential of Herbal Medicine. Our expert team studies the therapeutic properties of Medicinal Plants, developing Advanced Herbal Remedies for Chronic Conditions, Stress Relief, Immunity Enhancement, and Overall Vitality. Visitors can tour our Lush Herbal Gardens, learn about Rare Plant Species, and participate in interactive workshops on Sustainable Herbal Medicine.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
    accent: "#33b7fa",
  },
  {
    id: 5,
    icon: Utensils,
    title: "Fine Dining & Ayurvedic Cuisine",
    subtitle: "Organic, wellness-focused meal plans",
    description:
      "Indulge in a culinary journey that harmonizes taste, nutrition, and wellness at our fine dining restaurants. Our Ayurvedic-Inspired Cuisine is carefully curated by expert chefs and nutritionists who craft meals based on Ayurvedic principles, balancing the body's Doshas (Vata, Pitta, and Kapha). We source the freshest organic ingredients from our On-Site Farms, incorporating Superfoods, Healing Spices, and ancient grains to create meals that Support Digestion, Immunity, and overall well-being. Guests can also join interactive cooking classes to learn how to prepare Ayurvedic meals at home.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    accent: "#ab92f1",
  },
  {
    id: 6,
    icon: Activity,
    title: "24/7 On-Site Medical & Emergency Services",
    subtitle: "Complete healthcare & emergency support",
    description:
      "Our On-Site Medical Facility operates 24/7, providing immediate access to top-tier Healthcare Professionals, Emergency Response Teams, and Holistic Wellness Practitioners. Equipped with Advanced Diagnostic Tools, Ayurvedic Healing Centres, Physiotherapy Units, and Intensive Care Services, our Medical Centre caters to both routine health check-ups and urgent medical needs. Our Holistic Health Services Integrate Modern Medicine with Ayurvedic Treatments, ensuring a well-rounded approach to Healing and Prevention. Guests can enjoy peace of mind knowing their health is our top priority.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    accent: "#4cd7ef",
  },
  {
    id: 7,
    icon: Mountain,
    title: "Recreational & Leisure Activities",
    subtitle: "Nature trails, pools & cultural events",
    description:
      "Immerse yourself in a world of enriching recreational and leisure activities designed to Nurture Both Body and Spirit. Our Retreat offers an array of outdoor and cultural experiences, from serene Nature Trails and Mountain Hikes to wellness-focused activities like Aqua Yoga, Tai Chi, and Equine Therapy. Guests can unwind in our infinity pools, partake in traditional dance and music performances, or discover artistic expression through creative workshops in pottery, painting, and music therapy. Our cultural events celebrate the rich traditions of Ayurveda, featuring Authentic Rituals, Spiritual Discourses, and Mindfulness Festivals.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    accent: "#33b7fa",
  },
  {
    id: 8,
    icon: Briefcase,
    title: "Corporate & Business Facilities",
    subtitle: "Conference rooms & co-working spaces",
    description:
      "Designed for Professionals and Business Leaders seeking an Inspiring Work Environment, our Corporate and Business Facilities offer a seamless blend of productivity and well-being. Our State-Of-The-Art Conference Rooms, co-working spaces, and Private Meeting Lounges provide a tranquil setting where Creativity and Collaboration Thrive. Whether you're hosting a corporate retreat, attending an executive wellness program, or seeking a rejuvenating workation, our spaces are equipped with High-Speed Internet, Smart Conferencing Technology, Ergonomic Workstations, and panoramic views. We also offer Team-Building Workshops, Stress-Management programs, and Networking Events.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    accent: "#ab92f1",
  },
];

export default function WellnessCenter() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(171,146,241,0.12) 0%, rgba(51,183,250,0.06) 50%, transparent 70%)" }}
        />
        <div className="container relative z-10">
          <AnimatedSection className="max-w-3xl space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#c4aef5" }}>
              Wellness Center
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              A 5-Star Luxury Retreat for{" "}
              <span className="gradient-text-purple">Mental Wellness</span>,{" "}
              Retirement Living &amp;{" "}
              <span className="gradient-text-blue">Herbal Research</span>
            </h1>
            <p className="text-lg text-foreground/60 leading-relaxed">
              Re:Life Health is an advanced platform designed to streamline medical and mental health services.
              Our cutting-edge technology enhances efficiency, security, and accessibility for healthcare
              professionals and patients. Join the Future of Healthcare — Pre-register now for early access
              &amp; exclusive benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                className="rounded-full px-8 h-12 text-base text-black font-semibold hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(135deg, #33b7fa, #4cd7ef)" }}
              >
                Register Now
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-8 h-12 text-base border-border text-foreground hover:border-primary hover:text-primary bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Provide — icon overview */}
      <section className="py-16 alt-section">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              What We <span className="gradient-text-blue">Provide</span>
            </h2>
            <p className="text-lg text-foreground/50 max-w-2xl mx-auto">
              Eight signature experiences crafted to nurture your body, mind, and spirit
            </p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.07}>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <StaggerItem key={service.id}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="p-5 rounded-2xl glass-card text-center cursor-pointer"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                      style={{ background: `${service.accent}18`, border: `1px solid ${service.accent}30` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: service.accent }} />
                    </div>
                    <p className="text-sm font-semibold text-foreground leading-snug">{service.title}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Service Detail Sections — alternating layout */}
      {services.map((service, idx) => {
        const Icon = service.icon;
        const isEven = idx % 2 === 0;
        return (
          <section key={service.id} className={`py-20 ${!isEven ? "alt-section" : ""}`}>
            <div className="container">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? "md:flex-row-reverse" : ""}`}>
                {/* Image */}
                <AnimatedSection delay={0.1}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className={`relative rounded-3xl overflow-hidden h-72 md:h-96 ${!isEven ? "md:order-2" : ""}`}
                    style={{ border: `1px solid ${service.accent}25` }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(135deg, ${service.accent}30 0%, transparent 60%)` }}
                    />
                    {/* Icon badge */}
                    <div
                      className="absolute top-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center backdrop-blur-sm"
                      style={{ background: `${service.accent}cc`, border: `1px solid ${service.accent}` }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                </AnimatedSection>

                {/* Text */}
                <AnimatedSection delay={0.2} className={`space-y-5 ${!isEven ? "md:order-1" : ""}`}>
                  <div>
                    <span
                      className="inline-block text-xs font-semibold tracking-widest uppercase mb-2"
                      style={{ color: service.accent }}
                    >
                      {service.subtitle}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{service.title}</h2>
                  </div>
                  <p className="text-foreground/60 leading-relaxed">{service.description}</p>
                  <Button
                    variant="outline"
                    className="rounded-full px-6 h-10 text-sm font-semibold border-2 bg-transparent transition-all"
                    style={{
                      borderColor: `${service.accent}50`,
                      color: service.accent,
                    }}
                  >
                    Learn More
                  </Button>
                </AnimatedSection>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden alt-section">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(171,146,241,0.10) 0%, rgba(51,183,250,0.06) 50%, transparent 70%)" }}
        />
        <div className="container text-center space-y-8 relative z-10">
          <AnimatedSection className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Begin Your{" "}
              <span className="gradient-text-purple">Wellness</span>{" "}
              Journey Today
            </h2>
            <p className="text-lg text-foreground/50 max-w-2xl mx-auto">
              Pre-register now for early access &amp; exclusive benefits at Re:Life Wellness Center
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Button
              className="rounded-full px-10 h-12 text-base text-black font-semibold hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(135deg, #ab92f1, #c4aef5)" }}
            >
              Register Now
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
