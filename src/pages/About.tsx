
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Vansh Facility Services - Our Story and Values</title>
        <meta name="description" content="Founded in 2009, Vansh Facility Services provides professional facility management solutions in Delhi with 14+ years of industry experience." />
      </Helmet>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your Trusted Partner in Facility Management Since 2009
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Vansh Facility Services was founded in 2009 by Sunita Kukreja with a vision to provide professional 
                facility management services in the Delhi region. Based in Uttam Nagar, we have grown from a small 
                local business to a trusted partner for corporate, industrial, healthcare, and retail sectors.
              </p>
              <p className="text-gray-700">
                With over 14 years of experience, our company has consistently delivered high-quality services, 
                building long-term relationships with our clients based on reliability, professionalism, and attention 
                to detail.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Vansh Facility Services team" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Our Mission & Vision</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p className="text-gray-700">
                    To provide exceptional facility management services that exceed client expectations, 
                    create clean and safe environments, and contribute to our clients' success through 
                    reliable and professional service delivery.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                  <p className="text-gray-700">
                    To be the most trusted and preferred facility management partner in Delhi NCR, known for 
                    our commitment to excellence, innovation in service delivery, and creating lasting value 
                    for our clients.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">Why Choose Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-2">
                What makes Vansh Facility Services stand out from the competition
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl mx-auto">🏆</div>
                  <h3 className="text-lg font-bold mb-2">Industry Experience</h3>
                  <p className="text-gray-600">
                    14+ years of proven expertise in facility management across multiple sectors.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl mx-auto">🌱</div>
                  <h3 className="text-lg font-bold mb-2">Eco-Friendly Solutions</h3>
                  <p className="text-gray-600">
                    Using environmentally responsible cleaning methods and products.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl mx-auto">👥</div>
                  <h3 className="text-lg font-bold mb-2">Trained Staff</h3>
                  <p className="text-gray-600">
                    Highly trained and professional team with proper skills and certification.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl mx-auto">📑</div>
                  <h3 className="text-lg font-bold mb-2">GST Compliant</h3>
                  <p className="text-gray-600">
                    Fully compliant with GST regulations (GST No: 07AMNPR8025M1ZC).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Our Certifications</h2>
            <p className="text-gray-700 mb-2">
              GST Number: 07AMNPR8025M1ZC
            </p>
            <p className="text-gray-700">
              We comply with all relevant industry standards and regulations to ensure the highest quality service.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
