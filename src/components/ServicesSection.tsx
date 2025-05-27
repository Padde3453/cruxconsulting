import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, CheckCircle, Users, Brain, Zap, Shield, Target, BarChart3 } from "lucide-react";

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
            We offer a range of AI-powered solutions tailored to meet the unique needs of your SME.
            From initial consultation to full-scale implementation, we're here to guide you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <Card className="bg-gray-800/70 border-gray-700 p-6 hover:bg-gray-700/70 transition-colors duration-300">
            <div className="mb-4">
              <Brain className="h-8 w-8 text-brand-blue mb-2" />
              <h3 className="text-2xl font-bold text-white mb-2">AI Strategy & Consulting</h3>
              <p className="text-gray-400">
                Develop a clear AI roadmap tailored to your business goals.
                Identify opportunities for AI to drive growth and efficiency.
              </p>
            </div>
            <Button onClick={onBooking} variant="secondary" className="w-full mt-4">
              Learn More
            </Button>
          </Card>

          {/* Service Card 2 */}
          <Card className="bg-gray-800/70 border-gray-700 p-6 hover:bg-gray-700/70 transition-colors duration-300">
            <div className="mb-4">
              <Zap className="h-8 w-8 text-brand-green mb-2" />
              <h3 className="text-2xl font-bold text-white mb-2">Automation Solutions</h3>
              <p className="text-gray-400">
                Automate repetitive tasks and streamline workflows with AI-powered automation.
                Improve efficiency and reduce operational costs.
              </p>
            </div>
            <Button onClick={onBooking} variant="secondary" className="w-full mt-4">
              Explore Automation
            </Button>
          </Card>

          {/* Service Card 3 */}
          <Card className="bg-gray-800/70 border-gray-700 p-6 hover:bg-gray-700/70 transition-colors duration-300">
            <div className="mb-4">
              <Shield className="h-8 w-8 text-brand-blue mb-2" />
              <h3 className="text-2xl font-bold text-white mb-2">Cybersecurity Enhancement</h3>
              <p className="text-gray-400">
                Protect your business from cyber threats with AI-driven security solutions.
                Detect and respond to threats in real-time.
              </p>
            </div>
            <Button onClick={onBooking} variant="secondary" className="w-full mt-4">
              Secure Your Business
            </Button>
          </Card>

          {/* Service Card 4 */}
          <Card className="bg-gray-800/70 border-gray-700 p-6 hover:bg-gray-700/70 transition-colors duration-300">
            <div className="mb-4">
              <Target className="h-8 w-8 text-brand-green mb-2" />
              <h3 className="text-2xl font-bold text-white mb-2">Predictive Analytics</h3>
              <p className="text-gray-400">
                Gain valuable insights into your business with AI-powered predictive analytics.
                Make data-driven decisions and stay ahead of the competition.
              </p>
            </div>
            <Button onClick={onBooking} variant="secondary" className="w-full mt-4">
              Unlock Insights
            </Button>
          </Card>

          {/* Service Card 5 */}
          <Card className="bg-gray-800/70 border-gray-700 p-6 hover:bg-gray-700/70 transition-colors duration-300">
            <div className="mb-4">
              <BarChart3 className="h-8 w-8 text-brand-blue mb-2" />
              <h3 className="text-2xl font-bold text-white mb-2">AI-Driven Marketing</h3>
              <p className="text-gray-400">
                Optimize your marketing campaigns with AI-powered insights.
                Personalize customer experiences and maximize ROI.
              </p>
            </div>
            <Button onClick={onBooking} variant="secondary" className="w-full mt-4">
              Transform Marketing
            </Button>
          </Card>

          {/* Service Card 6 */}
          <Card className="bg-gray-800/70 border-gray-700 p-6 hover:bg-gray-700/70 transition-colors duration-300">
            <div className="mb-4">
              <Users className="h-8 w-8 text-brand-green mb-2" />
              <h3 className="text-2xl font-bold text-white mb-2">Customer Experience (CX)</h3>
              <p className="text-gray-400">
                Improve customer satisfaction and loyalty with AI-powered CX solutions.
                Personalize interactions and provide seamless support.
              </p>
            </div>
            <Button onClick={onBooking} variant="secondary" className="w-full mt-4">
              Enhance CX
            </Button>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Begin Your AI Journey?</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contact us today to schedule a free consultation and discover how AI can transform your business.
          </p>
          <Button onClick={onBooking} size="lg" className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-4 text-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-2xl">
            <span>Book Free Consultation</span>
            <Plus size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
