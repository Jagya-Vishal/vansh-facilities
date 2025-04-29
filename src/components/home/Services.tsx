
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Facility Management",
    description: "Complete staffing, maintenance, security, and upkeep solutions for your facility.",
    icon: "🏢",
    link: "/services#facility-management"
  },
  {
    title: "Housekeeping Services",
    description: "Daily and deep cleaning for offices, malls, homes, and hospitals.",
    icon: "🧹",
    link: "/services#housekeeping"
  },
  {
    title: "Industrial Cleaning",
    description: "Heavy-duty cleaning for plants, warehouses, and factories.",
    icon: "🏭",
    link: "/services#industrial"
  },
  {
    title: "Corporate Office Maintenance",
    description: "Clean, sanitize, and maintain professional office environments.",
    icon: "🧽",
    link: "/services#corporate"
  },
  {
    title: "Hospital Cleaning Services",
    description: "ICU, OPD, labs with hospital-grade sanitation protocols.",
    icon: "🏥",
    link: "/services#hospital"
  },
  {
    title: "Mall & Complex Cleaning",
    description: "Public area cleaning in high-traffic commercial spaces.",
    icon: "🛒",
    link: "/services#mall"
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive facility management solutions tailored to meet your specific needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="text-4xl mb-2">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link to={service.link}>
                  <Button variant="outline" className="mt-2">Learn More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services">
            <Button size="lg" variant="default">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
