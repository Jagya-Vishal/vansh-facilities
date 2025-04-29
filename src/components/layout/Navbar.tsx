
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Vansh</span>
            <span className="text-2xl font-medium text-gray-600"> Facility Services</span>
          </Link>

          {isMobile ? (
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          ) : (
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-primary font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-primary font-medium">
                About Us
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-primary font-medium">
                Services
              </Link>
              <Link to="/clients" className="text-gray-700 hover:text-primary font-medium">
                Clients
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-primary font-medium">
                Blog
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">
                Contact Us
              </Link>
              <Link to="/quote">
                <Button>Request a Quote</Button>
              </Link>
            </nav>
          )}
        </div>

        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className="lg:hidden">
            <div className="flex flex-col py-4 space-y-4 bg-white border-t mt-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary font-medium px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary font-medium px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-primary font-medium px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/clients"
                className="text-gray-700 hover:text-primary font-medium px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Clients
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-primary font-medium px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-primary font-medium px-4 py-2 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                to="/quote"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full">Request a Quote</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
