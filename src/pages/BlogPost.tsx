
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Card } from "@/components/ui/card";

const blogPosts = [
  {
    id: "1",
    title: "5 Eco-Friendly Cleaning Methods for Your Office",
    category: "Tips",
    date: "April 15, 2025",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    content: `
      <h2>Sustainable Cleaning Practices for Modern Workspaces</h2>
      <p>As businesses become more environmentally conscious, implementing eco-friendly cleaning methods in your office not only helps protect the planet but also creates a healthier workspace for employees. Here are five sustainable cleaning approaches you can adopt today:</p>
      
      <h3>1. Use Plant-Based Cleaning Products</h3>
      <p>Traditional cleaning chemicals often contain harsh substances that can be harmful to both the environment and human health. Plant-based alternatives use ingredients derived from renewable resources such as corn, coconut, and citrus fruits. These products are biodegradable and typically free from synthetic fragrances, dyes, and chlorine.</p>
      
      <h3>2. Implement Microfiber Cleaning Technology</h3>
      <p>Microfiber cloths and mops capture more dust and dirt than traditional cotton materials, often without requiring any chemicals at all. The tiny fibers create a static charge that attracts and holds particles, reducing the need for chemical cleaners while improving cleaning efficiency.</p>
      
      <h3>3. Adopt Water-Saving Techniques</h3>
      <p>Many cleaning processes use excessive amounts of water. By implementing low-moisture cleaning systems and techniques, you can significantly reduce water usage. Pre-measured dilution systems also prevent product waste and ensure the correct amount of cleaner is used every time.</p>
      
      <h3>4. Focus on Indoor Air Quality</h3>
      <p>Improve your office air quality by choosing cleaning products that don't release volatile organic compounds (VOCs). Using HEPA filter vacuum cleaners captures fine particles without releasing them back into the air, while proper ventilation during cleaning activities helps maintain fresh air throughout the space.</p>
      
      <h3>5. Practice Green Cleaning Routines</h3>
      <p>Establish cleaning schedules that focus on preventative maintenance rather than reactive deep cleaning. Regular, lighter cleaning reduces the need for aggressive chemical treatments and prolongs the life of office furnishings and fixtures.</p>
      
      <h3>Conclusion</h3>
      <p>By implementing these eco-friendly cleaning methods, your office can reduce its environmental footprint while creating a healthier environment for employees. At Vansh Facility Services, we specialize in green cleaning solutions tailored to your specific workplace needs.</p>
    `
  },
  {
    id: "2",
    title: "How Professional Cleaning Improves Employee Productivity",
    category: "Best Practices",
    date: "March 28, 2025",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    content: `
      <h2>The Link Between Cleanliness and Workplace Efficiency</h2>
      <p>A clean workplace does more than just create a good impression—it significantly impacts how efficiently employees work. Research consistently shows that workplace cleanliness directly correlates with productivity, employee morale, and even reduced absenteeism.</p>
      
      <h3>Reduced Sick Days and Absenteeism</h3>
      <p>Regular professional cleaning reduces the spread of germs and viruses in the workplace. Studies have shown that offices with professional cleaning protocols experience up to 30% fewer sick days compared to those without standardized cleaning practices. Fewer sick days mean more productivity and consistent workflow.</p>
      
      <h3>Enhanced Focus and Concentration</h3>
      <p>Cluttered, dirty workspaces create visual distractions that make it difficult for employees to concentrate. Research from Princeton University Neuroscience Institute found that people working in organized, clean environments were able to focus better and process information more efficiently than those in cluttered spaces.</p>
      
      <h3>Improved Air Quality Leads to Better Cognitive Function</h3>
      <p>Poor indoor air quality from dust, allergens, and chemical residue can cause headaches, fatigue, and respiratory issues. A Harvard study found that improved air quality led to cognitive scores that were 61% higher compared to conventional office environments. Professional cleaning that focuses on air quality can therefore directly boost mental performance.</p>
      
      <h3>Positive Psychological Effects</h3>
      <p>A clean, well-maintained workplace sends a message to employees that the organization cares about their wellbeing and values their work environment. This contributes to higher job satisfaction, better morale, and increased commitment to the organization.</p>
      
      <h3>How to Implement Effective Workplace Cleaning</h3>
      <p>For maximum productivity benefits, workplace cleaning should be systemic and regular. This includes daily maintenance cleaning, weekly deeper cleaning, and quarterly specialized services such as carpet cleaning and surface sanitization. Professional cleaning services can customize schedules to minimize disruption while maximizing cleanliness.</p>
      
      <h3>Conclusion</h3>
      <p>Investing in professional cleaning services isn't just about appearances—it's a strategic business decision that pays dividends through improved employee productivity, reduced absenteeism, and enhanced workplace satisfaction. At Vansh Facility Services, we help organizations create cleaning protocols that support optimal workforce performance.</p>
    `
  },
  {
    id: "3",
    title: "The Importance of Hospital-Grade Sanitization in Healthcare Settings",
    category: "Industry News",
    date: "February 10, 2025",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    content: `
      <h2>Beyond Clean: Why Healthcare Facilities Require Specialized Cleaning Protocols</h2>
      <p>In healthcare environments, standard cleaning isn't enough. Hospital-grade sanitization involves specific protocols designed to eliminate pathogens and prevent healthcare-associated infections (HAIs), which affect approximately 1 in 31 hospital patients according to the CDC.</p>
      
      <h3>Unique Cleaning Challenges in Healthcare Settings</h3>
      <p>Healthcare facilities face unique contamination risks, including multi-drug resistant organisms, bloodborne pathogens, and infectious agents. These environments require cleaning teams trained in healthcare-specific protocols who understand both visible cleanliness and microbial decontamination.</p>
      
      <h3>Critical Areas Requiring Special Attention</h3>
      <p>Different areas within healthcare facilities require varying levels of sanitization. Operating rooms, ICUs, and isolation rooms demand the highest level of disinfection, while waiting areas and administrative spaces may require standard but frequent cleaning. A professional healthcare cleaning service understands these distinctions and adapts protocols accordingly.</p>
      
      <h3>Modern Technologies in Healthcare Cleaning</h3>
      <p>Today's hospital-grade sanitization often incorporates advanced technologies such as UV-C light disinfection, hydrogen peroxide vapor, and electrostatic sprayers that ensure even distribution of disinfectants on all surfaces. These technologies are particularly effective against stubborn pathogens like C. difficile and MRSA.</p>
      
      <h3>Compliance with Regulatory Standards</h3>
      <p>Healthcare facilities must adhere to stringent cleaning regulations set by organizations such as the CDC, OSHA, and state health departments. Professional cleaning teams specializing in healthcare environments stay current with these evolving standards and ensure full compliance.</p>
      
      <h3>The Patient Experience Factor</h3>
      <p>Beyond infection control, cleanliness significantly impacts patient perception of care quality. Studies show that patients notice environmental cleanliness, and it influences their overall satisfaction with the healthcare experience—a factor increasingly tied to healthcare facility ratings and reimbursement.</p>
      
      <h3>Conclusion</h3>
      <p>Hospital-grade sanitization isn't just a cleaning practice—it's a critical component of patient safety and healthcare quality. Vansh Facility Services offers specialized healthcare cleaning teams trained in industry best practices and equipped with the latest technologies to ensure your facility maintains the highest standards of cleanliness and safety.</p>
    `
  }
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <p>Blog post not found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{post.title} - Vansh Facility Services Blog</title>
        <meta name="description" content={post.title} />
      </Helmet>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <div className="h-64 md:h-80 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-4">
                <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.date}</span>
              </div>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">{post.title}</h1>
              
              <div 
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
