export default function HeroSection() {
    return (
      <section className="relative bg-gray-900 text-white min-h-[80vh] flex items-center justify-center px-6">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/45113/pexels-photo-45113.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
  
        {/* Content Layer */}
        <div className="z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Turn Unused Software Licenses into Instant Cash
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Have extra software licenses you're not using? Sell them securely and get paid fast — it’s simple, legal, and hassle-free.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-3 rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300">
            Sell My Licenses
          </button>
        </div>
      </section>
    );
  }
