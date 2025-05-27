
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Brain, Cog, Target, Shield } from "lucide-react";
import { useEffect, useState } from "react";

interface ServicesSectionProps {
  onBooking: () => void;
}

const ServicesSection = ({ onBooking }: ServicesSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('services-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const whyChooseUs = [
    { text: "Vendor-agnostic: we recommend what's best for you – not what earns us a kickback", icon: Target },
    { text: "Full focus on ROI: we identify quick wins without compromising long-term scalability", icon: ArrowRight },
    { text: "Practical mindset: we translate complex tech into clear business outcomes", icon: Brain },
    { text: "European expertise: compliance-first thinking, including the EU AI Act", icon: Shield }
  ];

  const strategyServices = [
    { title: "AI Opportunity Workshop", desc: "Uncover where AI can drive the biggest wins in your organization – fast." },
    { title: "Process & Data Audit", desc: "We analyze your internal workflows to surface automation gaps, bottlenecks, and low-hanging fruit." },
    { title: "AI Tool Recommendation", desc: "Stop drowning in tools. Get a curated shortlist of AI software that fits your stack, needs, and budget." },
    { title: "EU AI Act Readiness", desc: "Don't get caught off guard. We ensure you're aligned with the latest regulatory requirements." }
  ];

  const implementationServices = [
    { title: "Workflow Automation", desc: "Streamline repetitive processes across departments – from HR to operations." },
    { title: "Email & Document Parsing", desc: "Use AI to extract and process information from emails and attachments instantly." },
    { title: "Auto-Reporting & Dashboard Automation", desc: "Ditch spreadsheets. Get real-time business insights delivered automatically." },
    { title: "Client Follow-Up Automation", desc: "No more missed leads or dropped conversations. Let AI keep your pipeline alive." },
    { title: "AI Chatbots & Agents (RAG + Actions)", desc: "Build custom bots that answer questions, retrieve documents, or even trigger workflows." },
    { title: "AI Agent Creation", desc: "From internal helpers to client-facing assistants – we design smart agents tailored to your workflows." },
    { title: "Data Cleansing & Enrichment", desc: "Fix messy databases and unlock smarter decisions with structured, clean data." },
    { title: "Custom solution for you", desc: "You have a specific challenge? If you have a solution in mind or not, we'd love to discuss it with you." }
  ];

  return (
    <section id="services-section" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-fade-in-up">
            AI Solutions Built Around Your Business
            <br />
            <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              Not the Other Way Around
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            From strategy to automation, we help small and medium-sized businesses harness the power of AI to drive growth, streamline operations, and stay competitive – without technical headaches.
          </p>
          
          <Button 
            onClick={onBooking}
            size="lg"
            className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-12 py-6 text-xl flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-2xl animate-fade-in-up mx-auto"
            style={{ animationDelay: '0.4s' }}
          >
            <span>→ Get Your Free Strategy Call</span>
          </Button>
        </div>

        {/* Why Crux Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Every Business is Unique. So Are Our Solutions.
            </h2>
            <p className="text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed">
              At Crux Consulting, we don't push off-the-shelf tools or rigid frameworks. Instead, we start by deeply understanding your processes, goals, and challenges – only if a change is beneficial for you we build AI and automation solutions tailored to fit. Whether you're AI-curious or ready to scale intelligent systems across your business, we meet you where you are and deliver measurable value fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card 
                  key={index}
                  className={`bg-gray-800/50 border-gray-700 p-8 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-green rounded-full flex items-center justify-center">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <p className="text-gray-300 leading-relaxed">{item.text}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Two Core Areas */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Two Core Areas of Value
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI Strategy & Enablement */}
            <Card className="bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 border-brand-blue/30 p-8 backdrop-blur-sm">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-blue/80 rounded-full flex items-center justify-center mb-4">
                  <Brain size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">AI Strategy & Enablement</h3>
                <p className="text-brand-blue text-lg italic mb-4">Turn hype into clarity. Build a confident AI roadmap.</p>
                <p className="text-gray-300 mb-8">
                  We guide your leadership and teams through the maze of possibilities and risks with tailored strategy sessions and compliance know-how.
                </p>
              </div>

              <div className="space-y-4">
                {strategyServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check size={20} className="text-brand-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">{service.title}</h4>
                      <p className="text-gray-400 text-sm italic">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Automation & AI Implementation */}
            <Card className="bg-gradient-to-br from-brand-green/20 to-brand-green/5 border-brand-green/30 p-8 backdrop-blur-sm">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-green to-brand-green/80 rounded-full flex items-center justify-center mb-4">
                  <Cog size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Automation & AI Implementation</h3>
                <p className="text-brand-green text-lg italic mb-4">Build real solutions. Save time. Boost efficiency.</p>
                <p className="text-gray-300 mb-8">
                  Once we've defined your needs, we implement intelligent systems that automate manual tasks, improve client experience, and empower your team.
                </p>
              </div>

              <div className="space-y-4">
                {implementationServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check size={20} className="text-brand-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">{service.title}</h4>
                      <p className="text-gray-400 text-sm italic">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Button 
            onClick={onBooking}
            size="lg"
            className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-12 py-6 text-xl flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-2xl mx-auto"
          >
            <span>Ready to Transform Your Business?</span>
            <ArrowRight size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
