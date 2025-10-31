interface HeroProps {
  imageUrl: string;
}

export default function Hero({ imageUrl }: HeroProps) {
  return (
    <section id="home" className="relative h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${imageUrl})`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-white mb-4">Welcome to Little Lemon</h1>
        <p className="text-white mb-8 opacity-90">
          Fresh flavors. Cozy ambiance.
        </p>
        <button 
          className="px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          style={{ backgroundColor: '#F4D03F', color: '#334D2F' }}
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Reserve a Table
        </button>
      </div>
    </section>
  );
}
