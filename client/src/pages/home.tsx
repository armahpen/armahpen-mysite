import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Menu, ArrowRight, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation Header */}
      <header className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left - Menu */}
          <div className="flex items-center space-x-4">
            <Menu className="w-5 h-5 text-gray-400" />
            <div className="text-xl font-bold text-teal-400">Heav❤ans.</div>
          </div>
          
          {/* Center - Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm">
            <a href="#" className="text-white hover:text-teal-400 transition-colors">Home</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Experience</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Skills</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </nav>
          
          {/* Right - Search */}
          <div className="flex items-center">
            <Search className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* Left Side - 3D Portrait */}
            <div className="relative">
              {/* Work Collection Section */}
              <div className="absolute top-0 left-0 z-10">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="text-white text-sm font-medium">Fifa Designer</div>
                    <div className="w-4 h-4 bg-teal-400 rounded-sm flex items-center justify-center">
                      <ExternalLink className="w-2 h-2 text-gray-900" />
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Work Collection</div>
                  <div className="text-xs text-gray-500 mt-1">
                    Multidisciplinary designer in UX/UI.<br />
                    Brand design and creative products<br />
                    for 2 years.
                  </div>
                </div>
                
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="text-white text-sm font-medium">&lt; DevHan /&gt;</div>
                    <div className="w-4 h-4 bg-teal-400 rounded-sm flex items-center justify-center">
                      <ExternalLink className="w-2 h-2 text-gray-900" />
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Work Collection</div>
                  <div className="text-xs text-gray-500 mt-1">
                    Full stack developer blending ideas<br />
                    design with front and backend<br />
                    for 3 years.
                  </div>
                </div>
              </div>

              {/* 3D Wireframe Portrait */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-80 h-96 lg:w-96 lg:h-[500px] relative">
                  {/* Create SVG wireframe portrait */}
                  <svg 
                    className="w-full h-full" 
                    viewBox="0 0 300 400" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Head outline */}
                    <path 
                      d="M150 50 C180 50, 200 80, 200 120 L200 200 C200 240, 180 260, 150 260 C120 260, 100 240, 100 200 L100 120 C100 80, 120 50, 150 50 Z" 
                      stroke="rgba(255,255,255,0.3)" 
                      strokeWidth="1" 
                      fill="none"
                    />
                    
                    {/* Grid lines across face */}
                    <g stroke="rgba(255,255,255,0.2)" strokeWidth="0.5">
                      {Array.from({length: 8}).map((_, i) => (
                        <line key={i} x1="100" y1={80 + i * 20} x2="200" y2={80 + i * 20} />
                      ))}
                      {Array.from({length: 6}).map((_, i) => (
                        <line key={i} x1={110 + i * 15} y1="80" x2={110 + i * 15} y2="220" />
                      ))}
                    </g>
                    
                    {/* Eyes */}
                    <circle cx="130" cy="120" r="5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
                    <circle cx="170" cy="120" r="5" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
                    
                    {/* Nose */}
                    <path d="M150 130 L145 150 L150 155 L155 150 Z" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
                    
                    {/* Mouth */}
                    <path d="M140 170 Q150 180 160 170" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
                    
                    {/* Neck and shoulders */}
                    <path 
                      d="M150 260 L150 320 M120 300 L150 320 L180 300" 
                      stroke="rgba(255,255,255,0.3)" 
                      strokeWidth="1"
                    />
                    
                    {/* Additional wireframe details */}
                    <circle cx="150" cy="200" r="80" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="none" />
                    <circle cx="150" cy="200" r="120" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" fill="none" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Side - Hero Content */}
            <div className="space-y-8">
              <div className="text-right">
                <div className="inline-flex items-center bg-gray-900/50 rounded-full px-4 py-2 text-sm text-gray-300 mb-6">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-2"></div>
                  Explore 3D Art Creations
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Shape the Future<br />
                  <span className="text-teal-400">with Heavan</span>
                </h1>
                
                <p className="text-gray-400 text-lg mb-8 max-w-md ml-auto">
                  Elisis Hossaini is a creative web developer blending design, code, and motion to build digital, impactful digital environments that inspire and engage users.
                </p>
                
                <Button className="bg-teal-500 hover:bg-teal-600 text-gray-900 font-medium px-8 py-3 rounded-lg transition-colors">
                  Start work
                </Button>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left - Latest Work */}
            <div>
              <div className="text-sm text-gray-400 mb-4">Some of my latest work</div>
              <div className="text-2xl font-bold mb-6">• • •</div>
            </div>
            
            {/* Right - News */}
            <div>
              <div className="text-sm text-gray-400 mb-4">NEWS</div>
              <Card className="bg-gray-900/50 border-gray-800 p-4">
                <div className="flex space-x-4">
                  <img 
                    src="/api/placeholder/100/80" 
                    alt="News thumbnail" 
                    className="w-24 h-20 object-cover rounded-lg bg-gray-800"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-medium text-sm mb-2">
                      New Article of The Month: global chain economy insights
                    </h3>
                    <p className="text-gray-400 text-xs mb-2">
                      Opportunity to creating 3D environments with Artoo. Read about all the new features and updates in...
                    </p>
                    <button className="text-teal-400 text-xs hover:text-teal-300 transition-colors">
                      Read More...
                    </button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
