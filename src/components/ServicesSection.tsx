
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Plus, TrendingUp, Clock, Users, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ServicesSectionProps {
  onBooking: () => void;
}

const ServicesSection = ({ onBooking }: ServicesSectionProps) => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceIndex: number) => {
    navigate(`/services?expand=${serviceIndex}`);
  };

  const handleExploreAllServices = () => {
    navigate('/services');
    // Ensure we scroll to top when navigating to services
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const services = [
    {
      icon: TrendingUp,
      title: "More Revenue",
      subtitle: "through more high value clients",
      description: "Generate more revenue by attracting and retaining high-value clients through intelligent automation and strategic insights.",
      features: [
        "Lead generation automation",
        "Client relationship management",
        "Sales funnel optimization"
      ]
    },
    {
      icon: Clock,
      title: "More Free Time",
      subtitle: "thanks to automation of manual tasks",
      description: "Reclaim your valuable time by automating repetitive and manual tasks, allowing you to focus on what matters most.",
      features: [
        "Process automation solutions",
        "Workflow optimization",
        "Task scheduling systems"
      ]
    },
    {
      icon: Users,
      title: "Better Client Experience",
      subtitle: "through fast, reliable service",
      description: "Deliver exceptional client experiences with fast, reliable service that works even when you're busy.",
      features: [
        "Customer service automation",
        "Client portal development",
        "Service delivery tracking"
      ]
    },
    {
      icon: DollarSign,
      title: "Less Cost, Better Solution",
      subtitle: "through smart information gathering",
      description: "Reduce costs while improving solutions through intelligent information gathering and market analysis.",
      features: [
        "Cost analysis and optimization",
        "Market research automation",
        "ROI tracking and reporting"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-center text-xl font-bold">AI Solutions Built Around Your Business – Not the Other Way Around</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <Card key={index} className="bg-gray-900/80 border-gray-700 p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300 flex flex-col h-full">
                <div className="flex items-center space-x-4 mb-4">
                  <IconComponent className="text-brand-blue h-8 w-8" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="text-sm text-gray-400">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="text-brand-green h-4 w-4" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={() => handleServiceClick(index)} 
                  variant="secondary" 
                  className="w-full mt-auto"
                >
                  Learn More <Plus className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Button 
            onClick={handleExploreAllServices} 
            size="lg" 
            className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-4 text-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <span>Explore All Services</span>
            <Plus size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
