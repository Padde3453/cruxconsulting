
const EinsteinQuoteSection = () => {
  return (
    <section 
      className="py-32 relative overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/d16b31db-483d-4b20-ada8-7a255c2ec5b5.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <blockquote className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
          "We can't solve problems by using the same kind of thinking we used when we created them."
        </blockquote>
        <cite className="text-xl md:text-2xl text-gray-300 font-medium">
          Albert Einstein
        </cite>
      </div>
    </section>
  );
};

export default EinsteinQuoteSection;
