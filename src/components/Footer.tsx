
import { Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <a 
            href="https://www.instagram.com/crux_consulting.ai/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <Instagram size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/company/crux-consulting-ai/?viewAsMember=true" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <p className="text-gray-500">
          © 2024 Crux Consulting. Transforming SMEs with AI.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
