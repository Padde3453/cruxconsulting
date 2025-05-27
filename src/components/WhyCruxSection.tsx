
import { Card } from "@/components/ui/card";

const WhyCruxSection = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-center">
          {/* Text Content - 70% width */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent py-[5px] text-center md:text-5xl">
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

          {/* Image - 30% width */}
          <div className="lg:col-span-3 flex justify-center">
            <img 
              src="/lovable-uploads/europe_flag.png" 
              alt="European Union Flag" 
              className="w-full h-auto max-w-sm object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCruxSection;
