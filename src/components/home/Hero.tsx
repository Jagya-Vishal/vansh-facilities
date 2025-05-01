
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white pb-12 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
          alt="Professional cleaning service"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Trusted Facility Management Services Since 2009
          </h1>
          
          <p className="text-xl md:text-2xl mb-8">
            Your Trusted Partner in Professional Facility Management
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/quote">
              <Button size="lg" className="text-base">
                Request a Quote
              </Button>
            </Link>
            
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-gray-900 border-white hover:bg-white hover:text-gray-300 text-base"
              >
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
