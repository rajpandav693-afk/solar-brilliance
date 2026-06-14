import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Sun, Zap, Shield, Clock, Award, Users, MapPin, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounter } from "@/hooks/useCounter";
import Layout from "@/components/layout/Layout";
import project1 from "@/assets/project-1.jpeg";
import project2 from "@/assets/project-2.jpeg";
import project3 from "@/assets/project-3.jpeg";
import project4 from "@/assets/project-4.jpeg";

const trustBadges = [{
  icon: Shield,
  text: "MNRE Approved"
}, {
  icon: Zap,
  text: "High Efficiency Panels"
}, {
  icon: Users,
  text: "Expert Team"
}, {
  icon: Clock,
  text: "Fast Service"
}, {
  icon: Award,
  text: "Long Warranty"
}];

const solutions = [{
  title: "Residential Solar",
  description: "Power your home with clean energy and reduce electricity bills by up to 90%",
  image: project1
}, {
  title: "Commercial Solar",
  description: "Scalable solar solutions for businesses to cut operational costs",
  image: project2
}, {
  title: "Industrial Solar",
  description: "Large-scale installations for factories and industrial units",
  image: project3
}];

const processSteps = [{
  step: 1,
  title: "Free Consultation",
  description: "Discuss your energy needs"
}, {
  step: 2,
  title: "Site Survey",
  description: "Technical assessment of your property"
}, {
  step: 3,
  title: "System Design",
  description: "Custom solar solution proposal"
}, {
  step: 4,
  title: "Installation",
  description: "Professional installation by experts"
}, {
  step: 5,
  title: "Activation",
  description: "Inspection and grid connection"
}];

const StatCounter = ({
  end,
  suffix,
  label
}: {
  end: number;
  suffix: string;
  label: string;
}) => {
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const count = useCounter(end, 2000, isVisible);
  return <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>;
};

const Index = () => {
  const heroAnim = useScrollAnimation();
  const trustAnim = useScrollAnimation();
  const solutionsAnim = useScrollAnimation();
  const processAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();
  
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${project4})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div ref={heroAnim.ref} className={`max-w-2xl space-y-6 ${heroAnim.isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-sm font-medium text-secondary-foreground border border-border/50 shadow-sm">
              <Sun className="w-4 h-4" />
              7+ Years of Trusted Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-primary">Power Your Home</span>
              <br />
              With Smart Solar Energy
            </h1>
            <p className="text-lg text-muted-foreground">
              Switch to clean, affordable solar energy with Agnisun Solar. Save up to 90% on
              your electricity bills while contributing to a greener planet.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group shadow-md">
                <Link to="/contact">
                  Get Free Site Survey
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-foreground/20 shadow-sm">
                <Link to="/calculator">Solar Calculator</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-secondary border-y border-foreground/10">
        <div ref={trustAnim.ref} className={`container mx-auto px-4 ${trustAnim.isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {trustBadges.map((badge, index) => <div key={index} className="flex items-center gap-2 text-secondary-foreground">
                <badge.icon className="w-5 h-5 text-primary" />
                <span className="font-medium text-sm md:text-base">{badge.text}</span>
              </div>)}
          </div>
        </div>
      </section>

      {/* Solar Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div ref={solutionsAnim.ref} className={`text-center mb-12 ${solutionsAnim.isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Our Solar</span> Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solar energy solutions tailored for every need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => <div key={index} className="group bg-card rounded-2xl overflow-hidden shadow-lg hover-lift border border-foreground/10" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={solution.image} alt={solution.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  
                </div>
                <div className="p-6">
                  
                  <p className="text-muted-foreground text-sm">{solution.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div ref={processAnim.ref} className={`text-center mb-12 ${processAnim.isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">How We</span> Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple 5-step process to get your solar system up and running
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => <div key={index} className="relative text-center group bg-card p-4 rounded-xl border border-foreground/10 shadow-sm">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform shadow-md">
                  {step.step}
                </div>
                {index < processSteps.length - 1 && <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-primary/30" />}
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter end={1000} suffix="+" label="Installations" />
            <StatCounter end={7} suffix="+" label="Years Experience" />
            <StatCounter end={5} suffix="+" label="Cities Served" />
            <StatCounter end={100} suffix="%" label="Satisfaction" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary to-accent">
        <div ref={ctaAnim.ref} className={`container mx-auto px-4 text-center ${ctaAnim.isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Switch To Solar Today & <span className="text-primary">Start Saving</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 500+ happy customers who have already made the switch to solar energy
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="shadow-md">
              <a href="tel:+91 8799183646">Call Now</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-[#25D366] text-white border-[#25D366] hover:bg-[#128C7E] hover:border-[#128C7E] shadow-md">
              <a target="_blank" rel="noopener noreferrer" href="https://wa.me/918799183646">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};

export default Index;
