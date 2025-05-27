import { Card } from "@/components/ui/card";
const TestimonialSection = () => {
  return <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Client Success
          </h2>
        </div>

        

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
          company: "RetailMax",
          improvement: "+250% Sales"
        }, {
          company: "LogiCorp",
          improvement: "-60% Costs"
        }, {
          company: "FinanceHub",
          improvement: "+400% Efficiency"
        }].map((result, index) => <Card key={index} className="bg-gray-800/30 border-gray-700 p-6 text-center animate-fade-in-up" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <div className="text-2xl font-bold text-white mb-2">{result.company}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
                {result.improvement}
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default TestimonialSection;