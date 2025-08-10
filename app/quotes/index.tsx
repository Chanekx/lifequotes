import { Quote, Sparkles } from "lucide-react";
import { useHooks } from "./hooks";

const LifeQuotes = () => {
  const { quote, handleClick, isLoading } = useHooks();
  return (
     <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat cursor-pointer group"
      style={{ 
        backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(30, 41, 59, 0.9)), url('/2.jpg')` 
      }}
      onClick={handleClick}
    >
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-amber-300 rounded-full opacity-20 animate-bounce delay-500"></div>
      </div>

      <div className="relative min-h-screen flex flex-col items-center justify-center p-8 backdrop-blur-sm">
        
        <div className="text-center mb-20 transform transition-all duration-700 group-hover:scale-105">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent"></div>
            <Sparkles className="mx-4 text-amber-400 w-6 h-6 animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent"></div>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-transparent bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-500 bg-clip-text leading-tight tracking-tight drop-shadow-2xl">
            Embrace Stoicism
          </h1>
          
          <div className="mt-6 w-32 h-1 bg-gradient-to-r from-amber-500/20 via-yellow-400 to-amber-500/20 mx-auto rounded-full shadow-lg shadow-amber-500/25"></div>
        </div>

        
        <div className="max-w-6xl mx-auto text-center">
          <div className={`relative transition-all duration-500 ${isLoading ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            
            <div className="absolute -top-8 -left-8 text-8xl text-amber-500/20 font-serif select-none pointer-events-none">
   
            </div>
            <div className="absolute -bottom-12 -right-8 text-8xl text-amber-500/20 font-serif select-none pointer-events-none rotate-180">
        
            </div>

            
            <div className="relative z-10 mb-12">
              <blockquote className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-relaxed text-white/95 font-serif tracking-wide px-8 py-4">
                {quote?.text}
              </blockquote>
            </div>


            <div className="relative z-10">
              <div className="inline-flex items-center space-x-4 px-8 py-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-2xl">
                <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                <cite className="text-xl md:text-2xl text-amber-300 font-medium uppercase tracking-wider not-italic font-sans">
                  {quote?.author}
                </cite>
                <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </div>

          
          <div className="mt-20">
            <div className="inline-flex items-center justify-center space-x-3 px-6 py-3 bg-slate-800/30 backdrop-blur-sm rounded-full border border-white/10 transition-all duration-300 hover:bg-slate-700/40 hover:scale-105 group-hover:border-amber-500/30">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-200"></div>
              </div>
              
              <span className="text-white/70 font-medium tracking-wide text-sm md:text-base">
                {isLoading ? 'Finding wisdom...' : 'Click anywhere for new wisdom'}
              </span>
              
              <Quote className="w-4 h-4 text-amber-400/70" />
            </div>
          </div>
        </div>

        
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 border-4 border-amber-500/20 border-t-amber-400 rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .bg-grid-white\/\[0\.02\] {
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0);
        }
      `}</style>
    </div>
  );
};
export default LifeQuotes;
