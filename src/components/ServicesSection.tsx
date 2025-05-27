import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Plus, Target, Zap, Shield, Cog } from "lucide-react";

interface ServicesSectionProps {
  onBooking: () => void;
}

const ServicesSection = ({ onBooking }: ServicesSectionProps) => {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer a range of AI-powered solutions designed to transform your SME, streamline operations, and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <Card className="bg-gray-900/80 border-gray-700 p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <Target className="text-brand-blue h-8 w-8" />
              <h3 className="text-2xl font-bold text-white">AI Strategy Consulting</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Develop a tailored AI strategy to align with your business goals and identify key opportunities for implementation.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <CheckCircle className="text-brand-green h-4 w-4" />
              <span>Personalized AI Roadmaps</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <CheckCircle className="text-brand-green h-4 w-4" />
              <span>Opportunity Assessments</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-4">
              <CheckCircle className="text-brand-green h-4 w-4" />
              <span>ROI-Focused Strategies</span>
            </div>
            <Button onClick={onBooking} variant="secondary" className="w-full">
              Learn More <Plus className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          {/* Service Card 2 */}
          <Card className="bg-gray-900/80 border-gray-700 p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <Zap className="text-brand-green h-8 w-8" />
              <h3 className="text-2xl font-bold text-white">AI Implementation</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Seamlessly integrate AI solutions into your existing infrastructure with our expert implementation services.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <CheckCircle className="text-brand-green h-4 w-4" />
              <span>Custom AI Development</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <CheckCircle className="text-brand-green h-4 w-4" />
              <span>System Integration</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-4">
              <CheckCircle className="text-brand-green h-4 w-4" />
              <span>Ongoing Support & Maintenance</span>
            </div>
            <Button onClick={onBooking} variant="secondary" className="w-full">
              Explore Solutions <Plus className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          {/* Service Card 3 */}
          <Card className="bg-gray-900/80 border-gray-700 p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <Shield className="text-brand-blue h-8 w-8" />
              <h3 className="text-2xl font-bold text-white">AI Security & Compliance</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Ensure the security and compliance of your AI systems with our comprehensive security solutions.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <CheckCircle className="text-brand-green h-4 w-4" />
              <span>Data Protection</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <CheckCircle className="text-brand-green h-4 w-4" />
              <span>Risk Management</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-4">
              <CheckCircle className="text-brand-green h-4 w-4" />
              <span>Compliance Audits</span>
            </div>
            <Button onClick={onBooking} variant="secondary" className="w-full">
              Secure Your AI <Plus className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          {/* Service Card 4 */}
          <Card className="bg-gray-900/80 border-gray-700 p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <Cog className="text-brand-green h-8 w-8" />
              <h3 className="text-2xl font-bold text-white">AI Automation</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Automate repetitive tasks and optimize workflows with our AI-powered automation solutions.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <CheckCircle className="text-brand-green h-4 w-4" />
              <span>Process Optimization</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <CheckCircle className="text-brand-green h-4 w-4" />
              <span>Robotic Process Automation (RPA)</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-4">
              <CheckCircle className="text-brand-green h-4 w-4" />
              <span>Custom Automation Tools</span>
            </div>
            <Button onClick={onBooking} variant="secondary" className="w-full">
              Automate Now <Plus className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button onClick={onBooking} size="lg" className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-4 text-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            <span>Explore All Services</span>
            <Plus size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
