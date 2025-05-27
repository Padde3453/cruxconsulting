
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactFormSectionProps {
  onBooking: () => void;
}

const ContactFormSection = ({ onBooking }: ContactFormSectionProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    industry: '',
    websiteUrl: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll respond within 24 hours."
    });
    setFormData({
      fullName: '',
      companyName: '',
      industry: '',
      websiteUrl: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Contact us
          </h2>
          <div className="flex items-center justify-center space-x-8 mb-8">
            <span className="text-gray-400">instagram</span>
            <span className="text-gray-400">linkedin</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Send us a message, we respond within 24 hours</h3>
              <p className="text-gray-400 mb-6">
                Email us directly at:{" "}
                <a href="mailto:contact@crux-consulting.ai" className="text-brand-blue hover:text-brand-green transition-colors">
                  contact@crux-consulting.ai
                </a>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Your full name *"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-brand-blue"
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="companyName"
                  placeholder="Company name *"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-brand-blue"
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="industry"
                  placeholder="What industry do you operate in *"
                  value={formData.industry}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-brand-blue"
                />
              </div>

              <div>
                <Input
                  type="url"
                  name="websiteUrl"
                  placeholder="Your website url"
                  value={formData.websiteUrl}
                  onChange={handleInputChange}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-brand-blue"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="How can we help? *"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-brand-blue resize-none"
                />
              </div>

              <Button 
                type="submit"
                className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
              >
                Send
              </Button>
            </form>
          </div>

          {/* Google Calendar */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Book a call with us</h3>
            <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1CvWlWHmw2s_eiyyKGgTLaQt26VWP1pB2vD5dc3HbUeCGwCDoSqq7n96brdFeh3kRFgKff0cd7?gv=true" 
                style={{ border: 0 }} 
                width="100%" 
                height="600" 
                frameBorder="0"
                title="Book a consultation with Crux Consulting"
              />
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-gray-800 pt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500">
            © 2024 Crux Consulting. Transforming SMEs with AI.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ContactFormSection;
