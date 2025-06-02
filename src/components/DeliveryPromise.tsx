
import { Card } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Clock, Users, DollarSign } from "lucide-react";
import { useTranslation } from 'react-i18next';

const DeliveryPromise = () => {
  const { t } = useTranslation();

  const deliveryPromises = [
    {
      icon: CheckCircle,
      title: t('services.deliveryPromise.promises.fastDevelopment.title'),
      description: t('services.deliveryPromise.promises.fastDevelopment.description')
    },
    {
      icon: TrendingUp,
      title: t('services.deliveryPromise.promises.clientsFirst.title'),
      description: t('services.deliveryPromise.promises.clientsFirst.description')
    },
    {
      icon: Users,
      title: t('services.deliveryPromise.promises.measuredPerformance.title'),
      description: t('services.deliveryPromise.promises.measuredPerformance.description')
    },
    {
      icon: Clock,
      title: t('services.deliveryPromise.promises.seamlessIntegration.title'),
      description: t('services.deliveryPromise.promises.seamlessIntegration.description')
    },
    {
      icon: DollarSign,
      title: t('services.deliveryPromise.promises.payForResults.title'),
      description: t('services.deliveryPromise.promises.payForResults.description')
    }
  ];

  return (
    <>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
          {t('services.deliveryPromise.title')}
        </h2>
        <p className="text-xl text-white max-w-2xl mx-auto">
          {t('services.deliveryPromise.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {deliveryPromises.slice(0, 3).map((promise, index) => {
          const IconComponent = promise.icon;
          
          return (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
              <div className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-green group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={24} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{promise.title}</h3>
                <p className="text-white">{promise.description}</p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Bottom row with 2 centered items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-2xl mx-auto">
        {deliveryPromises.slice(3).map((promise, index) => {
          const IconComponent = promise.icon;
          
          return (
            <Card key={index + 3} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
              <div className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-green group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={24} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{promise.title}</h3>
                <p className="text-white">{promise.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default DeliveryPromise;
