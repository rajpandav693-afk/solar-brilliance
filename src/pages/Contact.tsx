import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 87991 83646",
    link: "tel:+918799183646",
  },
  {
    icon: Mail,
    title: "Email",
    value: "agnisunsolar.india@gmail.com",
    link: "mailto:agnisunsolar.india@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Surat, Gujarat, India",
    link: "https://maps.google.com/?q=Surat,Gujarat",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 7:00 PM",
    link: null,
  },
];

const Contact = () => {
  
  const headerAnim = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });


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
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to go solar? Get in touch with us for a free consultation and site survey.
              We're here to answer all your questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl shadow-xl border border-border">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Send Us a Message
              </h2>
              <form action="https://formspree.io/f/xzdqyeqj" method="POST"className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      required
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your solar requirements..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-card p-4 rounded-xl border border-border hover-lift"
                  >
                    <info.icon className="w-6 h-6 text-primary mb-2" />
                    <div className="text-sm text-muted-foreground">
                      {info.title}
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="font-medium text-sm hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="font-medium text-sm">{info.value}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E]"
                >
                  <a
                    href="https://wa.me/918799183646?text=Hello%20Agnisun%20Solar%2C%20I%27m%20interested%20in%20solar%20installation."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us Directly
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a href="tel:+918799183646">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>

              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.54553774952!2d72.65787083281249!3d21.159399849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Agnisun Solar Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
