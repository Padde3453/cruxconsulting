import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactSectionProps {
  onBooking: () => void;
}

const ContactSection = ({ onBooking }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll respond within 24 hours. Thank you for reaching out!"
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ready to Transform?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            More efficiency, more focus, more revenue, more available time. 
            Let's find out together how.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="border border-gray-700 p-8 backdrop-blur-sm bg-transparent rounded-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
              <p className="text-gray-300 mb-4">
                Fill out the form below or email us directly at{" "}
                <a href="mailto:contact@crux-consulting.ai" className="text-brand-blue hover:text-brand-green transition-colors">
                  contact@crux-consulting.ai
                </a>
              </p>
              <p className="text-sm text-gray-400">
                We respond within 24 hours maximum.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-300">Name *</Label>
                <Input 
                  id="name" 
                  name="name" 
                  type="text" 
                  required 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400" 
                  placeholder="Your name" 
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-300">Email *</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400" 
                  placeholder="your@email.com" 
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-gray-300">Company</Label>
                <Input 
                  id="company" 
                  name="company" 
                  type="text" 
                  value={formData.company} 
                  onChange={handleInputChange} 
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400" 
                  placeholder="Your company name" 
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-300">Message *</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  required 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 min-h-[120px]" 
                  placeholder="Tell us about your project or questions..." 
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white">
                Send Message
              </Button>
            </form>
          </div>

          {/* Stats Grid - moved here between form and calendar */}
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

        {/* Google Calendar */}
        <div className="border border-gray-700 p-8 backdrop-blur-sm bg-transparent rounded-lg mb-16">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-4">Book a Free Call</h3>
            <p className="text-gray-300">
              Schedule your free consultation directly in our calendar.
            </p>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden">
            <iframe 
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1CvWlWHmw2s_eiyyKGgTLaQt26VWP1pB2vD5dc3HbUeCGwCDoSqq7n96brdFeh3kRFgKff0cd7?gv=true" 
              style={{ border: 0 }} 
              width="100%" 
              height="500" 
              frameBorder="0" 
              title="Book a consultation" 
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 pt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500">
            © 2024 Crux Consulting. Transforming SMEs with AI.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
