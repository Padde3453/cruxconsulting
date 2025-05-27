import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";
interface ContactSectionProps {
  onBooking: () => void;
}
const ContactSection = ({
  onBooking
}: ContactSectionProps) => {
  return <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Card className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-gray-700 p-16 text-center backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-green/10"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Transform?
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join 50+ SMEs already revolutionizing their business with AI. 
              Your consultation is completely free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button onClick={onBooking} size="lg" className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-12 py-6 text-xl flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <span>Book Free Consultation</span>
                <Plus size={24} />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-blue mb-2">Free</div>
                <div className="text-gray-400">Initial Consultation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-green mb-2">24h</div>
                <div className="text-gray-400">Response Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">ROI</div>
                <div className="text-gray-400">Guaranteed Results</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-gray-800 pt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <p className="text-gray-500">
            © 2024 Crux Consulting. Transforming SMEs with AI.
          </p>
        </div>
      </footer>
    </section>;
};
export default ContactSection;