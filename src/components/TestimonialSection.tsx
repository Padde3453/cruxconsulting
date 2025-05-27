
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Crux Consulting transformed our business operations completely. Their AI integration increased our efficiency by 300% in just 2 months.",
      rating: 5,
      image: "/lovable-uploads/3f806d3d-5974-43de-a754-d838661a004d.png"
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateCorp",
      content: "The automation solutions provided by Crux saved us 40 hours per week. Their team understood our needs perfectly.",
      rating: 5,
      image: "/lovable-uploads/d16b31db-483d-4b20-ada8-7a255c2ec5b5.png"
    },
    {
      name: "Emma Rodriguez",
      role: "COO, GrowthLab",
      content: "Outstanding results! The AI chatbot implementation improved our customer satisfaction by 95%. Highly recommended.",
      rating: 5,
      image: "/lovable-uploads/09abf764-8eec-4d74-9f6a-9483d4e0f84f.png"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/50 border-gray-700 p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed">"{testimonial.content}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
