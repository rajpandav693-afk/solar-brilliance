import { Star, Quote } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Rajesh Patel",
    location: "Surat",
    rating: 5,
    text: "Excellent service from start to finish. The team was professional and completed the installation in just 2 days. My electricity bill has dropped by 85%. Highly recommended!",
    system: "5 kW Residential",
  },
  {
    name: "Priya Shah",
    location: "Surat",
    rating: 5,
    text: "Very happy with Agnisun Solar. They explained everything clearly, helped with net metering paperwork, and the after-sales support is excellent. Best decision we made!",
    system: "3 kW Residential",
  },
  {
    name: "Mehul Desai",
    location: "Bardoli",
    rating: 5,
    text: "Professional team with quality products. The site survey was thorough and the custom design they proposed was perfect for our factory roof. Great ROI so far.",
    system: "25 kW Commercial",
  },
  {
    name: "Kavita Joshi",
    location: "Surat",
    rating: 5,
    text: "We were skeptical at first, but the team answered all our questions patiently. Installation was clean and quick. Now we're saving ₹4000+ every month!",
    system: "4 kW Residential",
  },
  {
    name: "Amit Sharma",
    location: "Navsari",
    rating: 5,
    text: "Transparent pricing with no hidden costs. The quality of panels and inverter is top-notch. They even helped us get the government subsidy. Very satisfied customer.",
    system: "7 kW Residential",
  },
  {
    name: "Sunita Mehta",
    location: "Surat",
    rating: 5,
    text: "The maintenance team is very responsive. Even after 1 year, whenever we have questions, they're just a call away. Great company to work with!",
    system: "6 kW Residential",
  },
];

const Testimonials = () => {
  const headerAnim = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-accent">
        <div className="container mx-auto px-4">
          <div
            ref={headerAnim.ref}
            className={`max-w-3xl mx-auto text-center ${headerAnim.isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Customer <span className="text-primary">Testimonials</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's what our customers have to say
              about their experience with Agnisun Solar.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-primary-foreground">
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-80">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4.9/5</div>
              <div className="text-sm opacity-80">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm opacity-80">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-lg hover-lift border border-border relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </div>
                  <div className="text-xs text-primary mt-1">
                    {testimonial.system}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Our <span className="text-primary">Happy Customers</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the same quality service that has earned us 5-star reviews
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919999999999?text=Hello%20Agnisun%20Solar%2C%20I%27m%20interested%20in%20solar%20installation."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
