
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
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log("Submitting form data:", formData);

    try {
      // Send to webhook
      const webhookUrl = "https://hooks.zapier.com/hooks/catch/19851234/3abc123/";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: "Crux Consulting Website",
        }),
      });

      console.log("Webhook request sent");
      
      toast({
        title: "Message Sent!",
        description: "We'll respond within 24 hours. Thank you for reaching out!",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending form data:", error);
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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

        {/* Stats Grid - moved to top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-300">Phone Number *</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  required 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400" 
                  placeholder="+49 (0) 89 123456" 
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 min-h-[100px]" 
                  placeholder="Tell us about your project or questions..." 
                  disabled={isSubmitting}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Google Calendar - moved to right column */}
          <div className="border border-gray-700 p-8 backdrop-blur-sm bg-transparent rounded-lg">
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
      </div>

      {/* Footer */}
      
    </section>
  );
};

export default ContactSection;
