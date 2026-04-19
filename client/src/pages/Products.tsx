import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const FOOTER_COMMON = (
  <footer className="border-t border-border py-10">
    <div className="container text-center text-sm text-foreground/30">
      <p>&copy; 2026 Re:Life Health. All rights reserved.</p>
    </div>
  </footer>
);

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Premium Sleeping Box",
      category: "Sleep Wellness",
      price: "$299.99",
      rating: 4.8,
      reviews: 156,
      description: "Ergonomic sleeping box designed for optimal rest and recovery",
      features: ["Orthopedic support", "Breathable fabric", "Portable design"],
      accent: "#ab92f1",
    },
    {
      id: 2,
      name: "Poppy Pad Comfort",
      category: "Relaxation",
      price: "$149.99",
      rating: 4.9,
      reviews: 203,
      description: "Therapeutic poppy pad for stress relief and meditation",
      features: ["Natural materials", "Aromatherapy infused", "Easy to clean"],
      accent: "#c4aef5",
    },
    {
      id: 3,
      name: "Wellness Bundle",
      category: "Complete Care",
      price: "$399.99",
      rating: 4.7,
      reviews: 89,
      description: "Complete wellness package with sleeping box and poppy pad",
      features: ["Best value", "Free shipping", "1-year warranty"],
      accent: "#ab92f1",
    },
    {
      id: 4,
      name: "Meditation Cushion",
      category: "Mindfulness",
      price: "$79.99",
      rating: 4.6,
      reviews: 127,
      description: "Supportive cushion for meditation and yoga practices",
      features: ["Memory foam", "Adjustable height", "Portable"],
      accent: "#ab92f1",
    },
    {
      id: 5,
      name: "Sleep Wellness Tea Set",
      category: "Herbal",
      price: "$49.99",
      rating: 4.8,
      reviews: 234,
      description: "Organic herbal tea blend for better sleep quality",
      features: ["100% organic", "No caffeine", "30-day supply"],
      accent: "#c4aef5",
    },
    {
      id: 6,
      name: "Aromatherapy Diffuser",
      category: "Ambiance",
      price: "$89.99",
      rating: 4.7,
      reviews: 178,
      description: "Essential oil diffuser for creating a calming environment",
      features: ["Ultrasonic technology", "Auto shut-off", "7-color LED"],
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
          style={{ background: "radial-gradient(ellipse at top left, rgba(171,146,241,0.08) 0%, transparent 60%)" }}
        />
        <div className="container relative z-10">
          <AnimatedSection className="space-y-4">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#ab92f1" }}>
              Our Collection
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Wellness <span className="gradient-text-blue">Products</span>
            </h1>
            <p className="text-lg text-foreground/50 max-w-2xl">
              Discover our curated collection of premium wellness products designed to enhance your mental and physical health journey.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
            {products.map((product) => (
              <StaggerItem key={product.id}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group rounded-2xl overflow-hidden glass-card transition-all duration-300 flex flex-col h-full"
                >
                  {/* Product Image Placeholder */}
                  <div
                    className="h-48 flex items-center justify-center relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${product.accent}12, ${product.accent}06)` }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: `${product.accent}22`, border: `1px solid ${product.accent}44` }}
                    >
                      <ShoppingCart className="w-8 h-8" style={{ color: product.accent }} />
                    </motion.div>
                    <span
                      className="absolute bottom-3 right-4 text-xs font-semibold px-2 py-1 rounded-full"
                      style={{ background: `${product.accent}20`, color: product.accent }}
                    >
                      {product.category}
                    </span>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 space-y-4 flex flex-col flex-1">
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{product.name}</h3>
                      <p className="text-sm text-blue-accent">{product.description}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < Math.floor(product.rating) ? "fill-current" : "opacity-20"}
                            style={{ color: product.accent }}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-foreground/40">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-1.5 flex-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-blue-accent flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: product.accent }} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-2xl font-bold" style={{ color: product.accent }}>{product.price}</span>
                      <Button
                        className="rounded-full px-5 text-sm text-black font-semibold hover:opacity-90"
                        style={{ background: `linear-gradient(135deg, ${product.accent}, #c4aef5)` }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(171,146,241,0.08) 0%, transparent 70%)" }}
        />
        <div className="container text-center space-y-8 relative z-10">
          <AnimatedSection className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Invest in Your <span className="gradient-text-purple">Wellness?</span>
            </h2>
            <p className="text-lg text-foreground/50 max-w-2xl mx-auto">
              All products come with a 30-day satisfaction guarantee and free shipping on orders over $100
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Button
              className="rounded-full px-10 h-12 text-base text-black font-semibold hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #ab92f1, #c4aef5)" }}
            >
              Shop All Products
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {FOOTER_COMMON}
    </div>
  );
}
