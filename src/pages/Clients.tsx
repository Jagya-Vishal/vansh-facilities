
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

const clientLogos = [
  { name: "Client 1", logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7" },
  { name: "Client 2", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" },
  { name: "Client 3", logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
  { name: "Client 4", logo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625" },
  { name: "Client 5", logo: "https://images.unsplash.com/photo-1518005020951-eccb494ad742" },
  { name: "Client 6", logo: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764" }
];

const testimonials = [
  {
    text: "Vansh Facility Services is always reliable and efficient. Their team has been maintaining our office space for over 3 years with consistent quality.",
    name: "Rajesh Kumar",
    position: "Facility Manager, ABC Corporation"
  },
  {
    text: "Our offices have never looked better—thanks to Vansh team! Their attention to detail and professional attitude has made a significant difference.",
    name: "Priya Singh",
    position: "Operations Director, XYZ Tech"
  },
  {
    text: "The hospital-grade cleaning services provided by Vansh have exceeded our expectations. Their staff is well-trained and follows all sanitization protocols.",
    name: "Dr. Anand Sharma",
    position: "Medical Director, City Hospital"
  }
];

const caseStudy = {
  title: "XYZ Mall Cleanliness Improvement",
  challenge: "XYZ Mall was struggling with maintaining cleanliness standards in their high-traffic areas, leading to customer complaints and decreased footfall.",
  solution: "Vansh Facility Services implemented a specialized cleaning schedule with trained staff and advanced equipment focusing on high-traffic zones.",
  result: "Cleanliness ratings improved 3x in just 3 months, leading to increased customer satisfaction and footfall."
};

const Clients = () => {
  return (
    <Layout>
      <Helmet>
        <title>Our Clients - Vansh Facility Services</title>
        <meta name="description" content="See testimonials and case studies from our satisfied clients who trust Vansh Facility Services with their facility management needs." />
      </Helmet>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Clients</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by businesses across various industries
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-4 border rounded-lg">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-16 object-contain grayscale hover:grayscale-0 transition-all" 
                />
              </div>
            ))}
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Client Testimonials</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="text-4xl text-gray-300 mb-4">"</div>
                    <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.position}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Case Study</h2>
            </div>
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">{caseStudy.title}</h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900">The Challenge:</h4>
                  <p className="text-gray-700">{caseStudy.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900">Our Solution:</h4>
                  <p className="text-gray-700">{caseStudy.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900">The Results:</h4>
                  <p className="text-gray-700">{caseStudy.result}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
