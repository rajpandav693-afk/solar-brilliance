import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "How much can I save with solar panels?",
    answer: "With solar panels, you can reduce your electricity bill by 70-90%. The exact savings depend on your current consumption, system size, and sunlight availability. Most homeowners save ₹3,000-₹8,000 per month. Use our Solar Calculator to get a personalized estimate.",
  },
  {
    question: "What is the cost of solar panel installation?",
    answer: "The cost varies based on system size and components. A typical residential system (3-5 kW) costs between ₹1.8-3.5 lakhs after government subsidy. Commercial installations are priced per kW. Contact us for a detailed quotation based on your requirements.",
  },
  {
    question: "Is there any government subsidy available?",
    answer: "Yes! Under PM Surya Ghar Muft Bijli Yojana, residential customers can get up to ₹78,000 subsidy for rooftop solar. The subsidy is directly transferred to your bank account after installation. We handle all the paperwork for you.",
  },
  {
    question: "How long does installation take?",
    answer: "For residential installations, the on-site work typically takes 1-3 days. The complete process including site survey, approvals, installation, and net metering activation takes about 15-25 days.",
  },
  {
    question: "What is net metering and how does it work?",
    answer: "Net metering allows you to export excess solar power to the grid and earn credits. Your electricity meter runs backward when you generate more than you consume. At the end of the billing cycle, you only pay for the 'net' units consumed.",
  },
  {
    question: "What maintenance is required for solar panels?",
    answer: "Solar panels require minimal maintenance. Regular cleaning (once a month) and annual professional inspection is recommended. Our AMC packages cover cleaning, performance monitoring, and any necessary repairs.",
  },
  {
    question: "How long do solar panels last?",
    answer: "High-quality solar panels last 25-30 years with minimal degradation (about 0.5% per year). We provide 25-year performance warranty on panels and 5-year warranty on inverters.",
  },
  {
    question: "Do solar panels work during monsoon or cloudy days?",
    answer: "Yes, solar panels generate electricity even on cloudy days, though at reduced efficiency (15-25% of peak output). The system is designed considering average annual sunlight in your area.",
  },
  {
    question: "What happens during a power cut?",
    answer: "Standard grid-tied systems shut down during power cuts for safety reasons. If you need backup power, we offer hybrid systems with battery storage that continue to work during outages.",
  },
  {
    question: "Is my roof suitable for solar panels?",
    answer: "Most roofs are suitable for solar installation. Our team conducts a free site survey to assess roof condition, available space, shadow analysis, and structural integrity before recommending a system.",
  },
];

const FAQ = () => {
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
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about solar energy, installation process,
              costs, and maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl px-6 shadow-md border border-border"
                >
                  <AccordionTrigger className="text-left hover:no-underline hover:text-primary py-6">
                    <span className="font-semibold pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Still Have <span className="text-primary">Questions?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="group">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-[#25D366] text-white border-[#25D366] hover:bg-[#128C7E] hover:border-[#128C7E]"
            >
              <a
                href="https://wa.me/919999999999?text=Hello%20Agnisun%20Solar%2C%20I%20have%20a%20question."
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
