
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from businesses that trust us with their facility management needs
          </p>
        </div>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-none shadow-sm">
                  <CardContent className="p-8">
                    <div className="text-4xl text-gray-300 mb-4">"</div>
                    <p className="text-lg mb-6 italic text-gray-700">{testimonial.text}</p>
                    <div className="flex flex-col">
                      <span className="font-semibold">{testimonial.name}</span>
                      <span className="text-gray-500 text-sm">{testimonial.position}</span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-4 gap-2">
            <CarouselPrevious className="relative inset-0 translate-y-0" />
            <CarouselNext className="relative inset-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
