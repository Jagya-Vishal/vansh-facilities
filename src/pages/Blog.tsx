
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "5 Eco-Friendly Cleaning Methods for Your Office",
    excerpt: "Discover sustainable cleaning practices that keep your workspace clean and help protect the environment.",
    category: "Tips",
    date: "April 15, 2025",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: 2,
    title: "How Professional Cleaning Improves Employee Productivity",
    excerpt: "Research shows that a clean, organized workplace can significantly boost employee morale and productivity.",
    category: "Best Practices",
    date: "March 28, 2025",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
  },
  {
    id: 3,
    title: "The Importance of Hospital-Grade Sanitization in Healthcare Settings",
    excerpt: "Learn about the specialized cleaning protocols required to maintain safety in medical facilities.",
    category: "Industry News",
    date: "February 10, 2025",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  }
];

const Blog = () => {
  return (
    <Layout>
      <Helmet>
        <title>Blog - Vansh Facility Services</title>
        <meta name="description" content="Read about cleaning tips, facility management best practices, and industry news from Vansh Facility Services." />
      </Helmet>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Blog</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Insights and tips about facility management and professional cleaning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold">{post.title}</h2>
                </CardHeader>
                <CardContent className="pt-0 pb-2">
                  <p className="text-gray-600">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link to={`/blog/${post.id}`} className="w-full">
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
