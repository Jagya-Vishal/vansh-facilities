
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import Stats from "@/components/home/Stats";
import Clients from "@/components/home/Clients";
import CTA from "@/components/home/CTA";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>Vansh Facility Services - Professional Facility Management Since 2009</title>
        <meta name="description" content="Trusted facility management services in Delhi since 2009. Offering housekeeping, industrial cleaning, and maintenance services for corporate, healthcare, and retail sectors." />
      </Helmet>
      
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <Clients />
      <CTA />
    </Layout>
  );
};

export default Home;
