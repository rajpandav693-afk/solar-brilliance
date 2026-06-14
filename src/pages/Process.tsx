import { Phone, FileText, Ruler, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
const steps = [{
  icon: Phone,
  step: 1,
  title: "Free Consultation",
  description: "Contact us to discuss your energy needs. We'll understand your requirements, explain the benefits of solar, and answer all your questions.",
  duration: "Same Day"
}, {
  icon: Ruler,
  step: 2,
  title: "Site Survey",
  description: "Our technical team visits your location to assess roof condition, available space, shadow analysis, and electrical setup for optimal panel placement.",
  duration: "1-2 Days"
}, {
  icon: FileText,
  step: 3,
  title: "System Design & Approval",
  description: "We design a custom solar system based on your consumption and site conditions. You review the proposal, pricing, and expected savings before approval.",
  duration: "2-3 Days"
}, {
  icon: Wrench,
  step: 4,
  title: "Professional Installation",
  description: "Our certified installers mount panels, connect inverters, and complete all electrical work following safety standards and best practices.",
  duration: "1-3 Days"
}, {
  icon: CheckCircle,
  step: 5,
  title: "Inspection & Activation",
  description: "Final inspection, net metering application, DGVCL coordination, and system activation. You start generating clean solar power!",
  duration: "7-15 Days"
}];
const Process = () => {
  const headerAnim = useScrollAnimation();
  const timelineAnim = useScrollAnimation();
  return <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-background to-accent">
        <div className="container mx-auto px-4">
          <div ref={headerAnim.ref} className={`max-w-3xl mx-auto text-center ${headerAnim.isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-primary">Installation Process</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Simple, transparent, and hassle-free. Here's how we bring solar power to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div ref={timelineAnim.ref} className={`max-w-4xl mx-auto ${timelineAnim.isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />

              {steps.map((step, index) => <div key={index} className={`relative flex items-start gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Step Number */}
                  <div className="absolute left-0 md:left-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl transform md:-translate-x-1/2 z-10 shadow-lg">
                    {step.step}
                  </div>

                  {/* Content Card */}
                  <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] bg-card p-6 rounded-2xl shadow-lg border border-border hover-lift ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-6 h-6 text-primary" />
                      <span className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-primary">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Total Timeline: <span className="text-primary">15 Days</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              From initial consultation to power generation, we ensure a smooth and timely installation process.
              Our experienced team handles all paperwork and coordination.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="group">
                <Link to="/contact">
                  Start Your Solar Journey
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/calculator">Calculate Savings First</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Process;