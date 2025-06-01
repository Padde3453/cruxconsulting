
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.3
    });

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: "300%",
      label: "Average ROI Increase",
      delay: "0s"
    },
    {
      value: "4 Weeks",
      label: "Implementation Time",
      delay: "0.2s"
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      delay: "0.4s"
    },
    {
      value: "500+",
      label: "SMEs Transformed",
      delay: "0.6s"
    }
  ];

  return (
    <section id="stats-section" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            We aim for
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-blue to-brand-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className={`bg-gray-800/50 border-gray-700 p-8 text-center backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: stat.delay }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
