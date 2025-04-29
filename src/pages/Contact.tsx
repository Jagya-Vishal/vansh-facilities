
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact Us - Vansh Facility Services</title>
        <meta name="description" content="Get in touch with Vansh Facility Services for professional facility management solutions. Visit our office in Uttam Nagar, Delhi, or contact us by phone or email." />
      </Helmet>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions or ready to get started? Contact our team today.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Our Address</h3>
                <p className="text-gray-600">
                  P-83, Vijay Vihar, Uttam Nagar,<br /> 
                  Delhi 110059
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Phone Number</h3>
                <p className="text-gray-600">
                  <a href="tel:+919999999999" className="hover:text-primary">
                    +91 99999 99999
                  </a>
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email Address</h3>
                <p className="text-gray-600">
                  <a href="mailto:vanshfacility@gmail.com" className="hover:text-primary">
                    vanshfacility@gmail.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                We're here to answer any questions you may have about our services. 
                Feel free to reach out to us through any of the contact methods provided.
              </p>
              
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto flex gap-2 items-center" 
                  asChild
                >
                  <a href="https://wa.me/+919999999999" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-5 w-5" /> Chat on WhatsApp
                  </a>
                </Button>
                
                <p className="text-gray-600">
                  Business Hours: Monday - Saturday, 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
            
            <div className="h-[400px] rounded-lg overflow-hidden border shadow">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.914459282305!2d77.04996131508815!3d28.62905678242051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04d105a97837%3A0xef8f1d249b173b78!2sUttam%20Nagar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1619697528284!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Vansh Facility Services location"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
