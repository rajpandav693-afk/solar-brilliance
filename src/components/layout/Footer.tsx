import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, MessageCircle, MessageCircleIcon } from "lucide-react";
import logo from "@/assets/logo.jpg";
import WhatsAppButton from "./WhatsAppButton";
const Footer = () => {
  return <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Agnisun Solar" className="h-12 w-12 rounded-lg object-cover" />
              <span className="text-xl font-bold text-primary">
                AGNISUN SOLAR
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">Powering Gujarat with clean, affordable solar energy solutions. 7+ years of trusted service with 1000+ successful installations.</p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/people/Agni-Sun-Solar/61582119814176/" 
                 target="_blank"
                 rel="noopener noreferrer" 
                 className="p-2 rounded-lg bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/agnisunsolar/" 
                 target="_blank"
                 rel="noopener noreferrer" 
                 className="p-2 rounded-lg bg-background/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {[{
              name: "Home",
              path: "/"
            }, {
              name: "About Us",
              path: "/about"
            }, {
              name: "Services",
              path: "/services"
            }, {
              name: "Projects",
              path: "/projects"
            }, {
              name: "Contact Us",
              path: "/contact"
            }].map(link => <li key={link.path}>
                  <Link to={link.path} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Our Services</h3>
            <ul className="space-y-3">
              {["Residential Solar", "Commercial Solar", "Maintenance & AMC", "Net Metering", "Solar Calculator"].map(service => <li key={service}>
                  <span className="text-background/70 text-sm">{service}</span>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">555, Laxmi Enclave 2, Katargam,  Surat, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+918799183646" className="text-background/70 hover:text-primary transition-colors text-sm">+91 87991 83646</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@agnisunsolar.com" className="text-background/70 hover:text-primary transition-colors text-sm">agnisunsolar.india@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Agnisun Solar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;