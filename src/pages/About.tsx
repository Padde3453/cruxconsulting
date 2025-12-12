
import { Rocket, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FloatingElements from "@/components/FloatingElements";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useTranslation } from 'react-i18next';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      <FloatingElements />
      
      <Header />
      
      {/* Mobile layout - no image */}
      <div className="lg:hidden">
        <div className="px-6 py-12 pt-32">
          <AboutContent />
        </div>
      </div>

      {/* Desktop layout - fixed image on right with adjusted proportions */}
      <div className="hidden lg:flex min-h-screen">
        {/* Content area - left side (60% width) */}
        <div className="w-3/5 overflow-y-auto relative z-10">
          <div className="px-12 py-16 pt-32 pb-24">
            <AboutContent />
          </div>
        </div>
        
        {/* Fixed image - right side (40% width) */}
        <div className="w-2/5 fixed right-0 top-0 h-screen z-0 overflow-hidden">
          <div className="relative w-full h-full">
            <img 
              src="/lovable-uploads/Climber1.png" 
              alt="Mountain climber reaching the summit" 
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 1
              }}
              onLoad={() => console.log('Climber image loaded successfully')}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.error('Climber image failed to load:', target.src);
                // Try alternative path
                target.src = '/lovable-uploads/Climber1.png';
              }}
            />
          </div>
        </div>
      </div>

      {/* Footer with higher z-index to stay in front */}
      <div className="relative z-30 bg-gray-900">
        <Footer />
      </div>
    </div>
  );
};

const AboutContent = () => {
  const { t } = useTranslation();
  const titleRef = useScrollAnimation();
  const whyCruxRef = useScrollAnimation();
  const whoWeAreRef = useScrollAnimation();
  const patrickRef = useScrollAnimation();
  const teamRef = useScrollAnimation();
  const howWeWorkRef = useScrollAnimation();
  const joinUsRef = useScrollAnimation();

  const handleApplicationClick = () => {
    window.location.href = 'mailto:careers@crux-consulting.ai?subject=Application%20-%20Join%20Crux%20Consulting';
  };

  return (
    <>
      <div 
        ref={titleRef.elementRef}
        className={`transition-all duration-1000 ${
          titleRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {t('about.title')}
        </h1>
      </div>

      {/* Why CRUX Consulting Section */}
      <section className="mb-16">
        <div 
          ref={whyCruxRef.elementRef}
          className={`transition-all duration-1000 ${
            whyCruxRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 text-brand-blue">
            {t('about.whyCrux.title')}
          </h2>
          <p className="text-gray-300 text-lg leading-loose">
            {t('about.whyCrux.description')}
          </p>
        </div>
      </section>

      {/* Who we are Section */}
      <section className="mb-16">
        <div 
          ref={whoWeAreRef.elementRef}
          className={`transition-all duration-1000 ${
            whoWeAreRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl font-bold mb-8 text-brand-green">
            {t('about.whoWeAre.title')}
          </h2>
        </div>

        {/* Team Members Grid */}
        <div 
          ref={patrickRef.elementRef}
          className={`mb-12 transition-all duration-1000 ${
            patrickRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {(() => {
              const teamData = t('about.whoWeAre.team', { returnObjects: true });
              const teamArray = Array.isArray(teamData) ? teamData : [];
              return teamArray.map((member: any, index: number) => (
                <TeamMemberCard
                  key={index}
                  name={member.name}
                  position={member.position}
                  photo={member.photo}
                  photoWaving={member.photoWaving}
                  overlayText={member.overlayText}
                  linkedIn={member.linkedIn}
                  location={member.location}
                />
              ));
            })()}
          </div>
        </div>

        {/* Team and CTO Section */}
        <div 
          ref={teamRef.elementRef}
          className={`mb-16 transition-all duration-1000 ${
            teamRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-brand-green">{t('about.team.title')}</h3>
            
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p>
                {t('about.team.description')}
              </p>
              
              <div className="border-l-4 border-brand-blue pl-6 bg-gray-900/50 p-4 rounded-r-lg">
                <p className="text-brand-blue font-semibold mb-2">{t('about.team.ctoSearch')}</p>
                <p>
                  {t('about.team.ctoDescription')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="mb-16">
        <div 
          ref={howWeWorkRef.elementRef}
          className={`transition-all duration-1000 ${
            howWeWorkRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <Rocket className="text-brand-blue" size={32} />
            <h2 className="text-3xl font-bold text-white">
              {t('about.howWeWork.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 p-6 group cursor-pointer transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-brand-blue mb-3 transition-colors duration-300">
                {t('about.howWeWork.tailoredFirst.title')}
              </h3>
              <p className="text-gray-300 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden">
                {t('about.howWeWork.tailoredFirst.description')}
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 p-6 group cursor-pointer transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-brand-green mb-3 transition-colors duration-300">
                {t('about.howWeWork.fastButThoughtful.title')}
              </h3>
              <p className="text-gray-300 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden">
                {t('about.howWeWork.fastButThoughtful.description')}
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 p-6 group cursor-pointer transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-brand-blue mb-3 transition-colors duration-300">
                {t('about.howWeWork.aiNativeBusinessLed.title')}
              </h3>
              <p className="text-gray-300 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden">
                {t('about.howWeWork.aiNativeBusinessLed.description')}
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 p-6 group cursor-pointer transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-brand-green mb-3 transition-colors duration-300">
                {t('about.howWeWork.privacyCompliance.title')}
              </h3>
              <p className="text-gray-300 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden">
                {t('about.howWeWork.privacyCompliance.description')}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Want to Join Us Section */}
      <section className="mb-16">
        <div 
          ref={joinUsRef.elementRef}
          className={`transition-all duration-1000 ${
            joinUsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <Users className="text-brand-green" size={32} />
            <h2 className="text-3xl font-bold text-white">
              {t('about.joinUs.title')}
            </h2>
          </div>

          <div className="p-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t('about.joinUs.description')}
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t('about.joinUs.encouragement')}
            </p>

            <div className="border border-gray-600 rounded-lg p-6 mb-6">
              <p className="text-brand-blue font-semibold mb-2">{t('about.joinUs.developerQuestion')}</p>
              <p className="text-gray-300">{t('about.joinUs.developerDescription')}</p>
            </div>

            <Button 
              onClick={handleApplicationClick}
              variant="gradient"
              enableMouseGradient
              className="rounded-full px-8 py-3 flex items-center space-x-2"
            >
              <span>{t('about.joinUs.sendApplication')}</span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
