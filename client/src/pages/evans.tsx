import { Link } from 'wouter';

export default function Evans() {
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
      <Link href="/">
        <div className="absolute top-4 left-4 md:left-16 z-20 cursor-pointer">
          <img
            src="/logo.png"
            alt="HeaVans Logo"
            className="w-24 h-8 md:w-32 md:h-10 object-contain mt-8 md:mt-12"
          />
        </div>
      </Link>
      
      {/* Navigation Menu - Responsive */}
      <nav className="absolute top-16 right-4 md:right-16 z-20">
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-right md:text-left">
          <Link href="/">
            <div className="text-white/65 text-sm md:text-lg font-normal cursor-pointer hover:text-white transition-colors">
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className="text-white/65 text-sm md:text-lg font-normal cursor-pointer hover:text-white transition-colors">
              About
            </div>
          </Link>
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
            onClick={() => alert('Work section coming soon!')}
          >
            Work
          </div>
          <div 
            className="text-white/65 text-sm md:text-lg font-normal cursor-pointer hover:text-white transition-colors"
            onClick={() => alert('Contact section coming soon!')}
          >
            Contact
          </div>
        </div>
      </nav>

      {/* Main Content - Responsive */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-32 md:pt-40 md:ml-16 lg:ml-32">
        <div className="max-w-4xl">
          {/* Hero Section - Responsive */}
          <div className="mb-16 md:mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-yellow-400 mb-6 md:mb-8 leading-tight">
              Evans (Heavans)
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 md:mb-10 max-w-2xl">
              I'm a creative planet builder based in the digital universe. Since starting my journey, I've enjoyed turning complex problems into simple, beautiful and intuitive solutions. When I'm not building digital experiences, you'll find me writing poetry, exploring music, or collaborating with other creatives.
            </p>
          </div>

          {/* Main Profile Image - Responsive */}
          <div className="text-center mb-12 md:mb-16">
            <img
              src="/attached_assets/WhatsApp Image 2025-07-05 at 3.54.30 PM_1751757017392.jpeg"
              alt="Evans (Heavans) - Creative Planet Builder"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-xl border-2 border-yellow-400/30 shadow-2xl mx-auto hover:scale-105 transition-all duration-300"
              style={{
                boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)'
              }}
            />
          </div>

          {/* Image Grid - Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
            {/* Workspace Image */}
            <img
              src="/attached_assets/WhatsApp Image 2025-07-05 at 3.50.33 PM_1751756326013.jpeg"
              alt="Evans Workspace"
              className="aspect-square object-cover rounded-lg border border-yellow-400/20 cursor-pointer transition-all duration-300 hover:scale-105 hover:border-yellow-400/40"
            />
            
            {/* Remaining placeholders */}
            {['Creative Process', 'Projects', 'Collaboration', 'Inspiration', 'Daily Life'].map((item, index) => (
              <div 
                key={index} 
                className="aspect-square bg-yellow-400/10 border border-yellow-400/20 rounded-lg flex items-center justify-center text-sm md:text-base text-yellow-400 cursor-pointer transition-all duration-300 hover:bg-yellow-400/20 hover:border-yellow-400/40"
              >
                {item}
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-8 md:mb-12">Core Skills</h2>
            
            <div className="space-y-6 md:space-y-8">
              {[
                { skill: 'Creative Design', level: 95 },
                { skill: 'Full-Stack Development', level: 90 },
                { skill: 'UI/UX Design', level: 88 },
                { skill: 'Poetry & Writing', level: 85 },
                { skill: 'Project Management', level: 82 },
                { skill: 'Team Collaboration', level: 90 }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/80 text-sm md:text-base">{item.skill}</span>
                    <span className="text-yellow-400 text-sm md:text-base">{item.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Work */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-8 md:mb-12">Featured Work</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="w-full h-48 bg-yellow-400/10 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-yellow-400">Project Preview</span>
                </div>
                <h3 className="text-white text-lg font-medium mb-2">Student Help Platform</h3>
                <p className="text-white/70 mb-4">A comprehensive educational platform connecting students with resources and mentorship.</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded">Node.js</span>
                  <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded">PostgreSQL</span>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="w-full h-48 bg-yellow-400/10 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-yellow-400">Project Preview</span>
                </div>
                <h3 className="text-white text-lg font-medium mb-2">DEMS System</h3>
                <p className="text-white/70 mb-4">Digital Event Management System for organizing and tracking events efficiently.</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded">Vue.js</span>
                  <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded">Express</span>
                  <span className="px-2 py-1 bg-yellow-400/20 text-yellow-400 text-xs rounded">MongoDB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Planet Navigation */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-8">Explore My Planets</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { name: 'Creative Builder', link: '/creative-builder', color: '#4fc3f7' },
                { name: 'Poet & Sound', link: '/poet', color: '#ab47bc' },
                { name: 'Design Thinker', link: '/design-thinker', color: '#66bb6a' },
                { name: 'Developer', link: '/developer', color: '#ef5350' },
                { name: 'Motion Creator', link: '/motion-creator', color: '#ff9800' },
                { name: 'Collaborator', link: '/collaborator', color: '#42a5f5' }
              ].map((planet, index) => (
                <Link key={index} href={planet.link}>
                  <div 
                    className="p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105"
                    style={{ 
                      borderColor: planet.color + '40',
                      backgroundColor: planet.color + '20'
                    }}
                  >
                    <div 
                      className="w-8 h-8 rounded-full mx-auto mb-2"
                      style={{ backgroundColor: planet.color }}
                    ></div>
                    <span className="text-white/80 text-sm">{planet.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Space */}
          <div className="h-24"></div>
        </div>
      </div>
    </div>
  );
}