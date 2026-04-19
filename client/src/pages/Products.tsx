import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { useProducts } from "@/hooks/useContent";
import { Skeleton } from "@/components/ui/skeleton";

const FOOTER_COMMON = (
  <footer className="border-t border-white/8 py-10">
    <div className="container text-center text-sm text-white/30">
      <p>&copy; 2026 Re:Life Health. All rights reserved.</p>
    </div>
  </footer>
);

export default function Products() {
  const { data: products, loading } = useProducts();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top left, rgba(51,183,250,0.08) 0%, transparent 60%)" }}
        />
        <div className="container relative z-10">
          <AnimatedSection className="space-y-4">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#33b7fa" }}>
              Our Collection
            </span>
            <h1 className="text-4xl md:text-5xl font-bold">
              Wellness <span className="gradient-text-blue">Products</span>
            </h1>
            <p className="text-lg text-white/50 max-w-2xl">
              Discover our curated collection of premium wellness products designed to enhance your mental and physical health journey.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-80 rounded-2xl" />
              ))}
            </div>
          ) : (
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
              {(products ?? []).map((product) => (
                <StaggerItem key={product.id}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group rounded-2xl overflow-hidden glass-card transition-all duration-300 flex flex-col h-full"
                  >
                    {/* Product Image */}
                    <div
                      className="h-48 flex items-center justify-center relative overflow-hidden"
                      style={{ background: `linear-gradient(135deg, ${product.accent}12, rgba(0,0,0,0.3))` }}
                    >
                      {product.imageUrl ? (
                        <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover" />
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.15 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className="w-16 h-16 rounded-full flex items-center justify-center"
                          style={{ background: `${product.accent}22`, border: `1px solid ${product.accent}44` }}
                        >
                          <ShoppingCart className="w-8 h-8" style={{ color: product.accent }} />
                        </motion.div>
                      )}
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
                        <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                        <p className="text-sm text-white/50">{product.description}</p>
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
                        <span className="text-xs text-white/40">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      {/* Features */}
                      <ul className="space-y-1.5 flex-1">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-white/50 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: product.accent }} />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/8">
                        <span className="text-2xl font-bold" style={{ color: product.accent }}>{product.price}</span>
                        <Button
                          className="rounded-full px-5 text-sm text-black font-semibold hover:opacity-90"
                          style={{ background: `linear-gradient(135deg, ${product.accent}, #4cd7ef)` }}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
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
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              All products come with a 30-day satisfaction guarantee and free shipping on orders over $100
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Button
              className="rounded-full px-10 h-12 text-base text-black font-semibold hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #33b7fa, #4cd7ef)" }}
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
