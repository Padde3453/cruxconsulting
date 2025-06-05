
import { Card } from "@/components/ui/card";
import { useTranslation } from 'react-i18next';

const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    {
      value: t('stats.efficiency'),
      label: t('stats.efficiencyLabel'),
      gradient: "from-brand-blue to-brand-green"
    },
    {
      value: t('stats.cost'),
      label: t('stats.costLabel'),
      gradient: "from-brand-green to-brand-blue"
    },
    {
      value: t('stats.revenue'),
      label: t('stats.revenueLabel'),
      gradient: "from-brand-blue to-brand-green"
    },
    {
      value: t('stats.time'),
      label: t('stats.timeLabel'),
      gradient: "from-brand-green to-brand-blue"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          {t('stats.title')}
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 p-6 text-center hover:bg-gray-800/70 transition-all duration-300">
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-white leading-tight">
                {stat.label === "Kundenzufriedenheit" ? (
                  <>
                    Kunden-<br />zufriedenheit
                  </>
                ) : (
                  stat.label
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
