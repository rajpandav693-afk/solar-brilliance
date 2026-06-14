import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
const navLinks = [{
  name: "Home",
  path: "/"
}, {
  name: "Calculator",
  path: "/calculator"
}, {
  name: "About",
  path: "/about"
}, {
  name: "Services",
  path: "/services"
}, {
  name: "Process",
  path: "/process"
}, {
  name: "Projects",
  path: "/projects"
}, {
  name: "Why Us",
  path: "/why-choose-us"
}, {
  name: "Contact",
  path: "/contact"
}];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/lovable-uploads/68dd2fb4-70e9-4ee8-b558-b769b8c7bca1.jpg" 
              alt="Agnisun Solar Logo" 
              className="h-12 w-12 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="text-xl font-bold text-primary">
              Agnisun Solar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === link.path ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary hover:text-secondary-foreground"}`}>
                {link.name}
              </Link>)}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button asChild variant="outline" size="sm">
              <a href="tel:+918799183646">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button asChild size="sm">
              <Link to="/calculator">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <nav className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${location.pathname === link.path ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"}`}>
                  {link.name}
                </Link>)}
              <div className="flex gap-2 mt-4 px-4">
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <a href="tel:+918799183646">
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </a>
                </Button>
                <Button asChild size="sm" className="flex-1">
                  <Link to="/calculator">Get Quote</Link>
                </Button>
              </div>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;