
import { Card } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Clock, Users, DollarSign } from "lucide-react";

const DeliveryPromise = () => {
  const deliveryPromises = [
    {
      icon: CheckCircle,
      title: "Fast Development",
      description: "Rapid prototyping and deployment"
    },
    {
      icon: TrendingUp,
      title: "Clients Always First",
      description: "Aiming for 300% ROI on every solution"
    },
    {
      icon: Users,
      title: "Measured Performance",
      description: "Clear metrics for each delivered solution"
    },
    {
      icon: Clock,
      title: "Seamless Integration",
      description: "Little effort required from your team"
    },
    {
      icon: DollarSign,
      title: "Pay for Results",
      description: "You only pay for what works"
    }
  ];

  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
          Our Delivery Promise
        </h2>
        <p className="text-xl text-white max-w-2xl mx-auto">
          How we ensure your success with every project
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {deliveryPromises.slice(0, 3).map((promise, index) => {
          const IconComponent = promise.icon;
          
          return (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
              <div className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-green group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={24} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{promise.title}</h3>
                <p className="text-white">{promise.description}</p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Bottom row with 2 centered items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto">
        {deliveryPromises.slice(3).map((promise, index) => {
          const IconComponent = promise.icon;
          
          return (
            <Card key={index + 3} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
              <div className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-green group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={24} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{promise.title}</h3>
                <p className="text-white">{promise.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default DeliveryPromise;
