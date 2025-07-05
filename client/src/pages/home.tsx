import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import profileImage from "@assets/ChatGPT_Image_Jul_5__2025__04_01_59_AM-removebg-preview_1751713470041.png";

export default function Home() {
  const techSkills = ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Node.js"];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "GitHub", icon: Github, href: "https://github.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="w-full py-6 px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white transform rotate-45"></div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm">
            <a href="#about" className="hover:text-gray-300 transition-colors">about</a>
            <a href="#learn" className="hover:text-gray-300 transition-colors">learn</a>
            <a href="#portfolio" className="hover:text-gray-300 transition-colors">portfolio</a>
            <a href="#blog" className="hover:text-gray-300 transition-colors">blog</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">contact</a>
          </nav>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <Twitter className="w-4 h-4 hover:text-gray-300 transition-colors cursor-pointer" />
            <Linkedin className="w-4 h-4 hover:text-gray-300 transition-colors cursor-pointer" />
            <div className="w-4 h-4 hover:text-gray-300 transition-colors cursor-pointer">f</div>
            <div className="w-4 h-4 hover:text-gray-300 transition-colors cursor-pointer">@</div>
          </div>
        </div>
      </header>

      {/* Main Portfolio Section */}
      <main className="flex-1 py-20">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center min-h-[500px]">
            
            {/* Left Column - Designer */}
            <div className="text-left space-y-6">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-normal text-gray-400">
                  designer
                </h1>
                <p className="text-base text-gray-400 max-w-xs leading-relaxed">
                  Product designer specialising in UI design and design systems.
                </p>
              </div>
            </div>

            {/* Center Column - Profile Image */}
            <div className="flex justify-center">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Profile Image */}
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Evans Profile" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Code elements overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-10 right-4 text-xs text-gray-400 font-mono">&lt;html&gt;</div>
                  <div className="absolute top-20 right-8 text-xs text-gray-400 font-mono">CSS3</div>
                  <div className="absolute bottom-20 left-4 text-xs text-gray-400 font-mono">React</div>
                  <div className="absolute bottom-32 right-12 text-xs text-gray-400 font-mono">HTML5</div>
                  <div className="absolute top-32 left-8 text-xs text-gray-400 font-mono">JavaScript</div>
                  <div className="absolute top-16 left-16 text-xs text-gray-400 font-mono">TypeScript</div>
                </div>
              </div>
            </div>

            {/* Right Column - Coder */}
            <div className="text-right space-y-6">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-normal text-gray-400">
                  &lt;coder&gt;
                </h1>
                <p className="text-base text-gray-400 max-w-xs ml-auto leading-relaxed">
                  Front-end developer who writes clean, elegant and efficient code.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-end">
                {techSkills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>


    </div>
  );
}
