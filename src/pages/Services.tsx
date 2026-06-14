import { Home, Building2, Wrench, FileCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import project1 from "@/assets/project-1.jpeg";
import project2 from "@/assets/project-2.jpeg";
import project3 from "@/assets/project-3.jpeg";
import project4 from "@/assets/project-4.jpeg";
const services = [{
  icon: Home,
  title: "Residential Solar Installation",
  description: "Complete rooftop solar solutions for homes. Save up to 90% on your electricity bills with our high-efficiency solar panels designed for Indian rooftops.",
  features: ["Free site survey", "Custom system design", "Net metering assistance", "30-year warranty"],
  image: project1
}, {
  icon: Building2,
  title: "Commercial Solar Solutions",
  description: "Scalable solar energy systems for businesses, offices, and commercial establishments. Reduce operational costs and demonstrate environmental responsibility.",
  features: ["Large-scale installations", "Faster ROI", "Tax benefits guidance", "Performance monitoring"],
  image: project2
}, {
  icon: Wrench,
  title: "Maintenance & AMC",
  description: "Keep your solar system running at peak efficiency with our comprehensive annual maintenance contracts and repair services.",
  features: ["Regular cleaning", "Performance checks", "Inverter servicing", "Emergency repairs"],
  image: project3
}, {
  icon: FileCheck,
  title: "Net Metering Assistance",
  description: "Complete support for net metering application and approval process. Export excess solar power to the grid and earn credits on your electricity bill.",
  features: ["Documentation support", "DGVCL coordination", "Application tracking", "Quick approvals"],
  image: project4
}];
const Services = () => {
  const headerAnim = useScrollAnimation();
  return <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-accent">
        <div className="container mx-auto px-4">
          <div ref={headerAnim.ref} className={`max-w-3xl mx-auto text-center ${headerAnim.isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive solar energy solutions from consultation to installation and beyond.
              We handle everything so you can enjoy clean, affordable power.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
                    <service.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-secondary-foreground">
                      Service {index + 1}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    
                  </h2>
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-foreground">{feature}</span>
                      </li>)}
                  </ul>
                  <Button asChild className="group">
                    <Link to="/contact">
                      Get Free Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <img src={service.image} alt={service.title} className="w-full h-80 object-cover rounded-2xl shadow-xl" />
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Go Solar?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free site survey and customized solar solution proposal
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/calculator">Calculate Savings</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Services;