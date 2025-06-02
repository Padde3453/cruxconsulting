
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Plus, Minus, CheckCircle } from "lucide-react";
import RevenueAnimation from "./animations/RevenueAnimation";
import TimeAnimation from "./animations/TimeAnimation";
import ExperienceAnimation from "./animations/ExperienceAnimation";
import CostAnimation from "./animations/CostAnimation";
import { useTranslation } from 'react-i18next';

interface ValueCardProps {
  index: number;
  title: string;
  subtitle: string;
  animationType: 'revenue' | 'time' | 'experience' | 'cost';
  services: string[];
  isOpen: boolean;
  onToggle: () => void;
}

const ValueCard = ({ 
  index, 
  title, 
  subtitle, 
  animationType, 
  services, 
  isOpen, 
  onToggle 
}: ValueCardProps) => {
  const { t } = useTranslation();
  
  const AnimationComponent = {
    revenue: RevenueAnimation,
    time: TimeAnimation,
    experience: ExperienceAnimation,
    cost: CostAnimation
  }[animationType];

  return (
    <Collapsible open={isOpen} onOpenChange={onToggle}>
      <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
        <CollapsibleTrigger asChild>
          <div className="w-full p-6 cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <AnimationComponent isOpen={isOpen} />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
                  <p className="text-white">{subtitle}</p>
                </div>
              </div>
              <div className="transition-transform duration-300 text-white">
                {isOpen ? <Minus size={24} /> : <Plus size={24} />}
              </div>
            </div>
          </div>
        </CollapsibleTrigger>
        
        <CollapsibleContent className="overflow-hidden transition-all duration-500">
          <div className="px-6 pb-6 border-t border-gray-700 pt-4">
            <h4 className="font-semibold mb-3 text-brand-blue">{t('services.servicesWeOffer')}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="flex items-center text-white">
                  <CheckCircle size={16} className="text-brand-green mr-3 flex-shrink-0" />
                  {service}
                </div>
              ))}
            </div>
          </div>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default ValueCard;
