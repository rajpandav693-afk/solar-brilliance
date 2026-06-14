import { Shield, Users, Award, Headphones, IndianRupee, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reasons = [
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our certified technicians have completed 500+ installations with expertise in all types of rooftops and solar systems.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    description: "No hidden costs. Get detailed quotations with clear breakdown of components, installation, and service charges.",
  },
  {
    icon: Shield,
    title: "Quality Components",
    description: "We use only premium solar panels, inverters, and mounting structures from trusted manufacturers with proven track records.",
  },
  {
    icon: Headphones,
    title: "Strong After-Sales Support",
    description: "Dedicated support team for maintenance, repairs, and performance monitoring. We're just a call away.",
  },
  {
    icon: Award,
    title: "MNRE Approved",
    description: "Government recognized installation company following all MNRE guidelines and safety standards.",
  },
  {
    icon: Clock,
    title: "Quick Installation",
    description: "Efficient project execution with minimal disruption. Most residential installations completed within 1-3 days.",
  },
];

const guarantees = [
  "25-year panel performance warranty",
  "5-year inverter warranty",
  "Free net metering assistance",
  "Annual maintenance support",
  "Real-time monitoring setup",
  "Documentation & subsidy help",
];

const WhyChooseUs = () => {
  const headerAnim = useScrollAnimation();
  const reasonsAnim = useScrollAnimation();
  const guaranteesAnim = useScrollAnimation();

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
              Why Choose <span className="text-primary">Agnisun Solar</span>?
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover what makes us the preferred choice for solar installations in Gujarat.
              We're committed to quality, transparency, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div
            ref={reasonsAnim.ref}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${reasonsAnim.isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-lg hover-lift border border-border group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <reason.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div
            ref={guaranteesAnim.ref}
            className={`max-w-4xl mx-auto ${guaranteesAnim.isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Our <span className="text-primary">Guarantees</span>
              </h2>
              <p className="text-muted-foreground">
                When you choose Agnisun Solar, you get more than just panels on your roof
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {guarantees.map((guarantee, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-card p-4 rounded-xl"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="font-medium">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join 500+ happy customers who made the right choice with Agnisun Solar
          </p>
          <Button asChild size="lg" variant="secondary" className="group">
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WhyChooseUs;
