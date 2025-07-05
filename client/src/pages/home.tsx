import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Menu, ArrowRight, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#1E1E1E'}}>
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


              {/* 3D Wireframe Portrait */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-80 h-96 lg:w-96 lg:h-[500px] relative">
                  {/* Create more detailed SVG wireframe portrait */}
                  <svg 
                    className="w-full h-full" 
                    viewBox="0 0 320 450" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Head outline - more realistic proportions */}
                    <path 
                      d="M160 60 C190 60, 215 85, 215 125 L215 200 C215 240, 200 265, 180 275 L140 275 C120 265, 105 240, 105 200 L105 125 C105 85, 130 60, 160 60 Z" 
                      stroke="rgba(255,255,255,0.4)" 
                      strokeWidth="1.5" 
                      fill="none"
                    />
                    
                    {/* More detailed grid pattern */}
                    <g stroke="rgba(255,255,255,0.2)" strokeWidth="0.8">
                      {/* Horizontal grid lines */}
                      {Array.from({length: 12}).map((_, i) => (
                        <line key={`h-${i}`} x1="105" y1={80 + i * 16} x2="215" y2={80 + i * 16} />
                      ))}
                      {/* Vertical grid lines */}
                      {Array.from({length: 8}).map((_, i) => (
                        <line key={`v-${i}`} x1={115 + i * 13} y1="80" x2={115 + i * 13} y2="260" />
                      ))}
                    </g>
                    
                    {/* More detailed facial features */}
                    {/* Eyes with more detail */}
                    <ellipse cx="140" cy="135" rx="8" ry="6" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none" />
                    <ellipse cx="180" cy="135" rx="8" ry="6" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none" />
                    <circle cx="140" cy="135" r="3" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" fill="none" />
                    <circle cx="180" cy="135" r="3" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" fill="none" />
                    
                    {/* Eyebrows */}
                    <path d="M130 125 Q140 120 150 125" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
                    <path d="M170 125 Q180 120 190 125" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
                    
                    {/* Nose with more structure */}
                    <path d="M160 145 L155 165 L160 170 L165 165 Z" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
                    <path d="M155 168 Q160 170 165 168" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" fill="none" />
                    
                    {/* Mouth with more detail */}
                    <path d="M145 185 Q160 195 175 185" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
                    <path d="M150 190 Q160 192 170 190" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" fill="none" />
                    
                    {/* Jawline */}
                    <path d="M120 220 Q160 240 200 220" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
                    
                    {/* Neck and shoulders with more structure */}
                    <path 
                      d="M160 275 L160 340 M130 320 L160 340 L190 320 M120 340 Q160 350 200 340" 
                      stroke="rgba(255,255,255,0.4)" 
                      strokeWidth="1.2"
                    />
                    
                    {/* Additional 3D wireframe elements */}
                    <circle cx="160" cy="200" r="90" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="none" />
                    <circle cx="160" cy="200" r="130" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" fill="none" />
                    <circle cx="160" cy="200" r="170" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" fill="none" />
                    
                    {/* 3D depth lines */}
                    <g stroke="rgba(255,255,255,0.15)" strokeWidth="0.5">
                      <line x1="140" y1="135" x2="145" y2="140" />
                      <line x1="180" y1="135" x2="175" y2="140" />
                      <line x1="160" y1="145" x2="162" y2="150" />
                      <line x1="160" y1="185" x2="162" y2="190" />
                    </g>
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
