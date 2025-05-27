
import { Linkedin, MapPin, Rocket, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FloatingElements from "@/components/FloatingElements";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      <FloatingElements />
      
      {/* Header */}
      <header className="relative z-50 px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/Logotext.png" 
              alt="Crux Consulting" 
              className="h-8 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white font-semibold">
              About Us
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-brand-blue to-brand-green text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </div>
        </nav>
      </header>
      
      {/* Mobile layout - no image */}
      <div className="lg:hidden">
        <div className="px-6 py-12">
          <AboutContent />
        </div>
      </div>

      {/* Desktop layout - fixed image on right */}
      <div className="hidden lg:flex h-screen">
        {/* Content area - left side */}
        <div className="w-1/2 overflow-y-auto">
          <div className="px-12 py-16">
            <AboutContent />
          </div>
        </div>
        
        {/* Fixed image - right side */}
        <div className="w-1/2 fixed right-0 top-0 h-full">
          <img 
            src="/lovable-uploads/Climber%201.png" 
            alt="Climber" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              console.log('Image failed to load:', target.src);
              target.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img 
                src="/lovable-uploads/Logotext.png" 
                alt="Crux Consulting" 
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400">
                Empowering SMEs with AI and automation solutions.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Ready to transform your business with AI?
              </p>
              <Button className="mt-4 bg-gradient-to-r from-brand-blue to-brand-green hover:opacity-90">
                Get Started
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Crux Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const AboutContent = () => {
  const handleApplicationClick = () => {
    window.location.href = 'mailto:careers@crux-consulting.ai?subject=Application%20-%20Join%20Crux%20Consulting';
  };

  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        About Us
      </h1>

      {/* Why CRUX Consulting Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-brand-blue">
          Why 'CRUX Consulting'
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          In climbing, the crux is the most challenging and decisive part of the route — the point that demands focus, skill, and the right strategy to succeed. I believe AI represents the crux moment for businesses today. It holds immense promise, but also complexity. Navigating this shift without the right support can feel like facing a steep wall alone — risky, overwhelming, and easy to fall behind. Crux Consulting is here to guide SMEs through this pivotal climb, helping them harness AI with clarity, confidence, and purpose.
        </p>
      </section>

      {/* Who we are Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-brand-green">
          Who we are
        </h2>

        {/* Patrick Reverchon */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
            <div className="w-32 h-32 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
              [Photo Placeholder]
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Patrick Reverchon</h3>
              <p className="text-brand-blue font-semibold mb-4">(Founder and CEO)</p>
            </div>
          </div>
          
          <blockquote className="text-gray-300 text-lg leading-relaxed mb-4 italic">
            "I founded Crux Consulting to bring the opportunities of automation and AI also to those companies that do not necessarily have the capacity and budget to use their full potential. SMEs are the backbone of our society and economy and I want to strengthen them as much as I can."
          </blockquote>
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-brand-blue">
              <Linkedin size={18} />
              <a 
                href="https://www.linkedin.com/in/patrick-reverchon/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={18} />
              <span>Based in Munich & Sofia</span>
            </div>
          </div>
        </div>

        {/* Nabit Mikan */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
            <div className="w-32 h-32 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
              [Photo Placeholder]
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Nabit Mikan</h3>
              <p className="text-brand-green font-semibold mb-4">Co-Founder & CTO</p>
            </div>
          </div>
          
          <blockquote className="text-gray-300 text-lg leading-relaxed mb-4 italic">
            "I help SMEs streamline business processes with Generative AI & Robotic Process Automation."
          </blockquote>
          
          <div className="text-gray-300 leading-relaxed mb-4">
            <p className="mb-2">I am an AI Automation Specialist and full stack developer with 15 years experience.</p>
            <p className="mb-2">From smart agents to matching systems, I design scalable solutions that cut manual work, boost productivity & drive growth.</p>
            <p className="mb-4">Collaborating with Europe & LATAM.</p>
            <p className="text-brand-blue font-semibold">#GenerativeAI #Automation #RPA #n8n #Voiceflow #WorkflowOptimization</p>
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-brand-blue">
              <Linkedin size={18} />
              <span>[LinkedIn]</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={18} />
              <span>Based in Berlin</span>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Rocket className="text-brand-blue" size={32} />
          <h2 className="text-3xl font-bold text-white">
            How We Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 p-6 group cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden">
            <h3 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-lg transition-all duration-300">
              Tailored First
            </h3>
            <p className="text-gray-300 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300 overflow-hidden">
              No cookie-cutter solutions. We start with your goals.
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 p-6 group cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden">
            <h3 className="text-xl font-bold text-brand-green mb-3 group-hover:text-lg transition-all duration-300">
              Fast, But Thoughtful
            </h3>
            <p className="text-gray-300 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300 overflow-hidden">
              We prioritize speed of execution <em>and</em> quality of outcome.
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 p-6 group cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden">
            <h3 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-lg transition-all duration-300">
              AI-Native, Business-Led
            </h3>
            <p className="text-gray-300 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300 overflow-hidden">
              Every project balances innovation with ROI.
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 p-6 group cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden">
            <h3 className="text-xl font-bold text-brand-green mb-3 group-hover:text-lg transition-all duration-300">
              Privacy and Compliance by Design
            </h3>
            <p className="text-gray-300 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300 overflow-hidden">
              We bake regulatory readiness into every system.
            </p>
          </Card>
        </div>
      </section>

      {/* Want to Join Us Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Users className="text-brand-green" size={32} />
          <h2 className="text-3xl font-bold text-white">
            Want to Join Us?
          </h2>
        </div>

        <div className="p-8">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            We are always interested to work with smart and ambitious people who have their heart in the right place and share the mission with us to support German and European businesses with automation and AI, always focussing on the ideal client outcomes and their ROI in the process.
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            If that sounds like you, just reach out to us via the contact form, we look forward to hearing from you.
          </p>

          <div className="border border-gray-600 rounded-lg p-6 mb-6">
            <p className="text-brand-blue font-semibold mb-2">💡 Are you a developer, consultant, or designer who shares our mission?</p>
            <p className="text-gray-300">Drop us a message and tell us how you'd like to contribute.</p>
          </div>

          <Button 
            onClick={handleApplicationClick}
            className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white rounded-full px-8 py-3 flex items-center space-x-2 transition-all duration-300 transform hover:scale-105"
          >
            <span>Send Us Your Application</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
