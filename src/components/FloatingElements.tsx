
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Geometric shapes floating in background */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-brand-blue/20 rotate-45 animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-brand-green/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-3 h-8 bg-brand-blue/15 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-brand-green/25 rotate-45 animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-5 w-2 h-2 bg-white/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/3 right-5 w-8 h-1 bg-brand-blue/20 animate-float" style={{ animationDelay: '5s' }}></div>
    </div>
  );
};

export default FloatingElements;
