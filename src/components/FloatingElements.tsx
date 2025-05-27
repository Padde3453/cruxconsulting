
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

      {/* Spider Web Networks */}
      
      {/* Top Left Corner Web */}
      <div className="absolute top-0 left-0 w-96 h-96">
        <svg width="100%" height="100%" className="opacity-30">
          {/* Connection Lines with dynamic opacity */}
          <line x1="0" y1="0" x2="120" y2="80" stroke="#2748E1" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }} />
          <line x1="0" y1="0" x2="200" y2="150" stroke="#01937F" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }} />
          <line x1="0" y1="0" x2="150" y2="200" stroke="#2748E1" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '2s', animationDuration: '3s' }} />
          <line x1="120" y1="80" x2="200" y2="150" stroke="#01937F" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '3s', animationDuration: '6s' }} />
          <line x1="200" y1="150" x2="150" y2="200" stroke="#2748E1" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '4s', animationDuration: '4s' }} />
          <line x1="120" y1="80" x2="300" y2="120" stroke="#01937F" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '5s', animationDuration: '5s' }} />
          
          {/* Animated Nodes */}
          <circle cx="0" cy="0" r="3" fill="#2748E1" className="animate-pulse" style={{ animationDelay: '0s' }} />
          <circle cx="120" cy="80" r="2" fill="#01937F" className="animate-ping" style={{ animationDelay: '1s', animationDuration: '3s' }} />
          <circle cx="200" cy="150" r="2" fill="#2748E1" className="animate-pulse" style={{ animationDelay: '2s' }} />
          <circle cx="150" cy="200" r="3" fill="#01937F" className="animate-ping" style={{ animationDelay: '3s', animationDuration: '4s' }} />
          <circle cx="300" cy="120" r="2" fill="#2748E1" className="animate-pulse" style={{ animationDelay: '4s' }} />
        </svg>
      </div>

      {/* Top Right Corner Web */}
      <div className="absolute top-0 right-0 w-96 h-96">
        <svg width="100%" height="100%" className="opacity-25">
          {/* Connection Lines */}
          <line x1="384" y1="0" x2="264" y2="90" stroke="#01937F" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }} />
          <line x1="384" y1="0" x2="184" y2="140" stroke="#2748E1" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }} />
          <line x1="384" y1="0" x2="234" y2="180" stroke="#01937F" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '3s', animationDuration: '6s' }} />
          <line x1="264" y1="90" x2="184" y2="140" stroke="#2748E1" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '4s', animationDuration: '3s' }} />
          <line x1="184" y1="140" x2="234" y2="180" stroke="#01937F" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '5s', animationDuration: '5s' }} />
          <line x1="264" y1="90" x2="84" y2="110" stroke="#2748E1" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }} />
          
          {/* Animated Nodes */}
          <circle cx="384" cy="0" r="3" fill="#01937F" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="264" cy="90" r="2" fill="#2748E1" className="animate-ping" style={{ animationDelay: '2s', animationDuration: '3s' }} />
          <circle cx="184" cy="140" r="2" fill="#01937F" className="animate-pulse" style={{ animationDelay: '3s' }} />
          <circle cx="234" cy="180" r="3" fill="#2748E1" className="animate-ping" style={{ animationDelay: '4s', animationDuration: '4s' }} />
          <circle cx="84" cy="110" r="2" fill="#01937F" className="animate-pulse" style={{ animationDelay: '5s' }} />
        </svg>
      </div>

      {/* Bottom Left Corner Web */}
      <div className="absolute bottom-0 left-0 w-96 h-96">
        <svg width="100%" height="100%" className="opacity-20">
          {/* Connection Lines */}
          <line x1="0" y1="384" x2="130" y2="304" stroke="#2748E1" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }} />
          <line x1="0" y1="384" x2="210" y2="244" stroke="#01937F" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '3s', animationDuration: '6s' }} />
          <line x1="0" y1="384" x2="160" y2="194" stroke="#2748E1" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '4s', animationDuration: '3s' }} />
          <line x1="130" y1="304" x2="210" y2="244" stroke="#01937F" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '5s', animationDuration: '5s' }} />
          <line x1="210" y1="244" x2="160" y2="194" stroke="#2748E1" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }} />
          <line x1="130" y1="304" x2="310" y2="274" stroke="#01937F" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }} />
          
          {/* Animated Nodes */}
          <circle cx="0" cy="384" r="3" fill="#2748E1" className="animate-pulse" style={{ animationDelay: '2s' }} />
          <circle cx="130" cy="304" r="2" fill="#01937F" className="animate-ping" style={{ animationDelay: '3s', animationDuration: '3s' }} />
          <circle cx="210" cy="244" r="2" fill="#2748E1" className="animate-pulse" style={{ animationDelay: '4s' }} />
          <circle cx="160" cy="194" r="3" fill="#01937F" className="animate-ping" style={{ animationDelay: '5s', animationDuration: '4s' }} />
          <circle cx="310" cy="274" r="2" fill="#2748E1" className="animate-pulse" style={{ animationDelay: '0s' }} />
        </svg>
      </div>

      {/* Bottom Right Corner Web */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <svg width="100%" height="100%" className="opacity-25">
          {/* Connection Lines */}
          <line x1="384" y1="384" x2="254" y2="294" stroke="#01937F" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '3s', animationDuration: '5s' }} />
          <line x1="384" y1="384" x2="174" y2="234" stroke="#2748E1" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '4s', animationDuration: '4s' }} />
          <line x1="384" y1="384" x2="224" y2="184" stroke="#01937F" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '5s', animationDuration: '6s' }} />
          <line x1="254" y1="294" x2="174" y2="234" stroke="#2748E1" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }} />
          <line x1="174" y1="234" x2="224" y2="184" stroke="#01937F" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }} />
          <line x1="254" y1="294" x2="74" y2="264" stroke="#2748E1" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }} />
          
          {/* Animated Nodes */}
          <circle cx="384" cy="384" r="3" fill="#01937F" className="animate-pulse" style={{ animationDelay: '3s' }} />
          <circle cx="254" cy="294" r="2" fill="#2748E1" className="animate-ping" style={{ animationDelay: '4s', animationDuration: '3s' }} />
          <circle cx="174" cy="234" r="2" fill="#01937F" className="animate-pulse" style={{ animationDelay: '5s' }} />
          <circle cx="224" cy="184" r="3" fill="#2748E1" className="animate-ping" style={{ animationDelay: '0s', animationDuration: '4s' }} />
          <circle cx="74" cy="264" r="2" fill="#01937F" className="animate-pulse" style={{ animationDelay: '1s' }} />
        </svg>
      </div>
    </div>
  );
};

export default FloatingElements;
