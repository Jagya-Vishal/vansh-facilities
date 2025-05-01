
import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  service: z.string().min(1, { message: "Please select a service" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  address: z.string().min(5, { message: "Please enter your address" }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const Quote = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Quote Request Submitted",
        description: "We've received your request and will contact you soon.",
      });
      
      form.reset();
    }, 1000);
  };

  const handleWhatsAppSubmit = () => {
    const formData = form.getValues();
    const isValid = form.trigger();
    
    if (isValid) {
      const whatsappMessage = encodeURIComponent(
        `Hello Vansh Facility Services,\n\nI'm interested in your ${formData.service} service.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAddress: ${formData.address}\n\nMessage: ${formData.message || "N/A"}`
      );
      
      window.open(`https://wa.me/+919266025454?text=${whatsappMessage}`, "_blank");
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Request a Quote - Vansh Facility Services</title>
        <meta name="description" content="Request a quote for our facility management services. We provide customized solutions for your specific needs." />
      </Helmet>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Request a Quote</h1>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you with a customized quote
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Required</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Facility Management">Facility Management</SelectItem>
                          <SelectItem value="Housekeeping Services">Housekeeping Services</SelectItem>
                          <SelectItem value="Industrial Cleaning">Industrial Cleaning</SelectItem>
                          <SelectItem value="Corporate Office Maintenance">Corporate Office Maintenance</SelectItem>
                          <SelectItem value="Hospital Cleaning Services">Hospital Cleaning Services</SelectItem>
                          <SelectItem value="Mall and Complex Cleaning">Mall and Complex Cleaning</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Your address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please provide any additional information about your requirements" 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </Button>
                  
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full sm:w-auto" 
                    onClick={handleWhatsAppSubmit}
                  >
                    Send via WhatsApp
                  </Button>
                </div>
                
                <FormDescription className="text-center">
                  We'll get back to you within 24 hours with a customized quote.
                </FormDescription>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quote;
