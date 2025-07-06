export default function Home() {
  return (
    <div 
      className="relative w-full min-h-screen" 
      style={{backgroundColor: '#1E1E1E'}}
    >
      {/* Left Border - Hidden on mobile */}
      <div 
        className="hidden md:block"
        style={{
          width: '130px',
          height: '100vh',
          borderRight: '1px solid rgba(255, 255, 255, 0.12)',
          position: 'absolute',
          left: '0px',
          top: '0px'
        }}
      />
      
      {/* HeaVans Logo - Responsive */}
      <div className="absolute top-4 left-4 md:left-16 z-20 cursor-pointer" onClick={() => window.location.href = '/'}>
        <img
          src="/logo.png"
          alt="HeaVans Logo"
          className="w-24 h-8 md:w-32 md:h-10 object-contain mt-8 md:mt-12"
        />
      </div>

      {/* Navigation Menu - Responsive */}
      <nav className="absolute top-20 md:top-16 right-4 md:right-16 z-20">
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-right md:text-left">
          <div 
            className="text-white/80 text-sm md:text-lg font-medium cursor-pointer hover:text-white transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Home
          </div>
          <div 
            className="text-white/65 text-sm md:text-lg font-normal cursor-pointer hover:text-white transition-colors"
            onClick={() => window.location.href = '/about'}
          >
            About
          </div>
          <div 
            className="text-white/65 text-sm md:text-lg font-normal cursor-pointer hover:text-white transition-colors"
            onClick={() => alert('Experience section coming soon!')}
          >
            Experience
          </div>
          <div 
            className="text-white/65 text-sm md:text-lg font-normal cursor-pointer hover:text-white transition-colors"
            onClick={() => alert('Skills section coming soon!')}
          >
            Skills
          </div>
          <div 
            className="text-white/65 text-sm md:text-lg font-normal cursor-pointer hover:text-white transition-colors"
            onClick={() => alert('Contact section coming soon!')}
          >
            Contact
          </div>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-32 md:pt-40">
        {/* HeaDesign Work Collection Section */}
        <div className="w-full max-w-md mx-auto md:mx-0 md:ml-16 lg:ml-32 mb-16">
          {/* Decorative Icon */}
          <div className="relative mb-8">
            <img 
              className="w-16 h-16 md:w-20 md:h-20 mx-auto md:mx-0 transform rotate-[131deg]" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdae1da462e182cde4834fff2e3bde1f5bbefa26?width=142" 
              alt="" 
            />
          </div>
          
          {/* Section Title */}
          <div className="text-center md:text-left mb-6">
            <h2 className="text-white text-xl md:text-2xl font-normal">HeaDesign</h2>
          </div>

          {/* Main Heading */}
          <div className="text-center md:text-left mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
              Explore 3D Art Creations
            </h1>
          </div>

          {/* Description */}
          <div className="text-center md:text-left mb-12">
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl">
              Discover a universe of creative possibilities through immersive digital experiences and artistic innovations.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center md:text-left">
            <button 
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors"
              onClick={() => window.location.href = '/about'}
            >
              Explore Planets
            </button>
          </div>
        </div>

        {/* Featured Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-24 md:ml-16 lg:ml-32">
          {/* Work Item 1 */}
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <div className="w-full h-48 bg-white/10 rounded-lg mb-4"></div>
            <h3 className="text-white text-lg font-medium mb-2">Creative Project 1</h3>
            <p className="text-white/70">Innovative design solution</p>
          </div>

          {/* Work Item 2 */}
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <div className="w-full h-48 bg-white/10 rounded-lg mb-4"></div>
            <h3 className="text-white text-lg font-medium mb-2">Creative Project 2</h3>
            <p className="text-white/70">Digital art exploration</p>
          </div>

          {/* Work Item 3 */}
          <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
            <div className="w-full h-48 bg-white/10 rounded-lg mb-4"></div>
            <h3 className="text-white text-lg font-medium mb-2">Creative Project 3</h3>
            <p className="text-white/70">Interactive experience</p>
          </div>
        </div>

        {/* Footer Space */}
        <div className="h-24"></div>
      </div>
    </div>
  );
}