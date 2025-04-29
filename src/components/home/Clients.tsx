
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const clientLogos = [
  { name: "Client 1", logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7" },
  { name: "Client 2", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" },
  { name: "Client 3", logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
  { name: "Client 4", logo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625" }
];

const Clients = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Our Clients</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proud to work with leading businesses across various industries
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-12">
          {clientLogos.map((client, index) => (
            <div key={index} className="flex justify-center">
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-16 object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" 
              />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/clients">
            <Button variant="outline">View All Clients</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Clients;
