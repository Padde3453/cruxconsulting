import { useState } from "react";
import { Linkedin, MapPin } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  position: string;
  photo: string;
  photoWaving: string;
  overlayText: string;
  linkedIn: string;
  location: string;
}

export const TeamMemberCard = ({
  name,
  position,
  photo,
  photoWaving,
  overlayText,
  linkedIn,
  location,
}: TeamMemberCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="flex flex-col">
      {/* Image container with 9:16 aspect ratio */}
      <div
        className="relative w-full overflow-hidden rounded-lg cursor-pointer mb-4"
        style={{ aspectRatio: "9/16" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Regular photo */}
        <img
          src={photo}
          alt={name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-0 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
        
        {/* Waving photo with overlay text */}
        <div
          className={`absolute inset-0 transition-opacity duration-0 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={photoWaving}
            alt={`${name} waving`}
            className="w-full h-full object-cover"
          />
          
          {/* Text overlay */}
          <div className="absolute inset-0 flex items-end justify-center p-6">
            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 w-full">
              <p className="text-white text-sm md:text-base italic leading-relaxed text-center">
                "{overlayText}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Info section */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-brand-blue font-semibold">{position}</p>
        
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex items-center gap-2 text-brand-blue">
            <Linkedin size={18} />
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors text-sm"
            >
              Connect on LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <MapPin size={18} />
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
