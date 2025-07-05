import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

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
                {/* Placeholder for profile image - will be replaced with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-red-400 via-yellow-400 to-blue-400 rounded-full overflow-hidden">
                  {/* This will be replaced with the actual profile image */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 text-lg">
                    Profile Image
                  </div>
                </div>
                
                {/* Code elements overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-10 right-4 text-xs text-gray-500 font-mono">&lt;html&gt;</div>
                  <div className="absolute top-20 right-8 text-xs text-gray-500 font-mono">CSS3</div>
                  <div className="absolute bottom-20 left-4 text-xs text-gray-500 font-mono">React</div>
                  <div className="absolute bottom-32 right-12 text-xs text-gray-500 font-mono">HTML5</div>
                  <div className="absolute top-32 left-8 text-xs text-gray-500 font-mono">JavaScript</div>
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

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-black">About Me</h2>
            <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
              I'm a versatile creative professional who bridges the gap between design and development. 
              With a passion for creating intuitive user experiences and writing clean, maintainable code, 
              I bring ideas to life from concept to deployment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <p className="text-gray-500">Years of Design Experience</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <p className="text-gray-500">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-black">Let's Work Together</h2>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
              Ready to bring your ideas to life? Whether you need design, development, or both, 
              I'm here to help create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-black hover:bg-gray-800 transition-colors"
                onClick={() => window.location.href = 'mailto:hello@evans.dev'}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-black bg-white hover:bg-gray-50 transition-colors border-gray-300"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="text-2xl font-bold text-black">Evans</div>
            <p className="text-gray-500">Designer & Developer</p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black transition-colors inline-flex items-center space-x-1"
                >
                  <social.icon className="h-4 w-4" />
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
            <Separator className="my-6" />
            <p className="text-sm text-gray-500">&copy; 2024 Evans. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
