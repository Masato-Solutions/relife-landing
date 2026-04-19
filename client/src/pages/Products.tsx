import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { ShoppingCart, Star } from "lucide-react";

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
              Wellness Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover our curated collection of premium wellness products designed to enhance your mental and physical health journey.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary"
              >
                {/* Product Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <ShoppingCart className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                      Add to Cart
                    </Button>
                  </div>
                </div>
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
              Ready to Invest in Your Wellness?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All products come with a 30-day satisfaction guarantee and free shipping on orders over $100
            </p>
          </div>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base"
          >
            Shop All Products
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
