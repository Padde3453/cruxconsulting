
import { Linkedin, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Mobile layout - image at top */}
      <div className="lg:hidden">
        <div className="w-full h-64 md:h-80">
          <img 
            src="/lovable-uploads/Climber 1.png" 
            alt="Climber" 
            className="w-full h-full object-cover"
          />
        </div>
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
            src="/lovable-uploads/Climber 1.png" 
            alt="Climber" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const AboutContent = () => {
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
      <section>
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
              <span>[LinkedIn]</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={18} />
              <span>Based in Munich & Sofia</span>
            </div>
          </div>
        </div>

        {/* Nabit Mikan */}
        <div className="mb-12">
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
    </>
  );
};

export default About;
