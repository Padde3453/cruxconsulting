
import { Card } from "@/components/ui/card";

const WhyCruxSection = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Why Crux Consulting?
            </h2>
            <div className="text-lg text-gray-300 leading-relaxed space-y-6">
              <p>
                Small and medium-sized enterprises (SMEs) are the backbone of the European Union's economy, 
                playing a pivotal role in employment, revenue generation, and overall economic health.
              </p>
              <p>
                At the same time, they do often not have the capacity to invest heavily in AI. This is where 
                we come in to support you fast and efficiently and give you all the upside potential AI and 
                automation enables us with today.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Card className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-gray-700 p-8 backdrop-blur-sm">
              <img 
                src="/lovable-uploads/09abf764-8eec-4d74-9f6a-9483d4e0f84f.png" 
                alt="European SMEs and AI Innovation" 
                className="w-full h-auto rounded-lg"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCruxSection;
