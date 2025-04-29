
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";

const servicesData = [
  {
    id: "facility-management",
    title: "Facility Management",
    description: "Comprehensive management solutions for your entire facility infrastructure.",
    details: "Our facility management services encompass staffing, maintenance, security, and general upkeep of your premises. We provide end-to-end solutions that allow you to focus on your core business while we handle the operational aspects of your facility.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
  },
  {
    id: "housekeeping",
    title: "Housekeeping Services",
    description: "Regular and deep cleaning services for all types of facilities.",
    details: "Our housekeeping services include daily maintenance cleaning as well as scheduled deep cleaning for offices, malls, residential complexes, and healthcare facilities. We use professional-grade equipment and eco-friendly cleaning products to ensure the highest standards of cleanliness.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: "industrial",
    title: "Industrial Cleaning",
    description: "Heavy-duty cleaning solutions for industrial environments.",
    details: "Industrial facilities require specialized cleaning approaches to handle the unique challenges they present. Our industrial cleaning services are designed for manufacturing plants, warehouses, and factories, with attention to safety standards and operational requirements.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  },
  {
    id: "corporate",
    title: "Corporate Office Maintenance",
    description: "Creating clean and professional office environments.",
    details: "Maintain a pristine office environment that reflects your company's professionalism. Our corporate office maintenance includes regular cleaning, sanitization, and maintenance of common areas, workstations, meeting rooms, and executive offices.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: "hospital",
    title: "Hospital Cleaning Services",
    description: "Specialized cleaning for healthcare facilities with strict sanitation protocols.",
    details: "Healthcare environments demand the highest standards of cleanliness and sanitization. Our hospital cleaning services cover ICUs, OPDs, laboratories, and patient areas, adhering to strict hospital-grade sanitation protocols to help maintain a safe environment for patients and healthcare workers.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: "mall",
    title: "Mall & Complex Cleaning",
    description: "Maintaining cleanliness in high-traffic commercial areas.",
    details: "Shopping malls and commercial complexes face unique cleaning challenges due to high foot traffic and extended operating hours. Our specialized teams are trained to maintain cleanliness and hygiene in these busy environments, ensuring a pleasant experience for visitors.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
  }
];

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Services - Vansh Facility Services</title>
        <meta name="description" content="Comprehensive facility management services including housekeeping, industrial cleaning, office maintenance, hospital cleaning, and mall cleaning services in Delhi." />
      </Helmet>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive facility management solutions tailored to meet your specific needs
            </p>
          </div>

          <div className="space-y-20">
            {servicesData.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 scroll-mt-24`}
              >
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full rounded-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                  <p className="text-gray-700 text-lg font-medium mb-4">{service.description}</p>
                  <p className="text-gray-600">{service.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
