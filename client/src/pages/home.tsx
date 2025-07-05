import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";

export default function Home() {
  const designSkills = [
    "UI Design",
    "UX",
    "Figma",
    "Design Systems",
    "Prototyping"
  ];

  const techSkills = [
    { name: "HTML5", color: "bg-orange-100 text-orange-800 hover:bg-orange-200" },
    { name: "CSS3", color: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
    { name: "JavaScript", color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200" },
    { name: "React", color: "bg-cyan-100 text-cyan-800 hover:bg-cyan-200" },
    { name: "TypeScript", color: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
    { name: "Node.js", color: "bg-green-100 text-green-800 hover:bg-green-200" }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "GitHub", icon: Github, href: "https://github.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full py-8">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center">
            <div className="text-sm font-medium text-gray-500">Portfolio</div>
          </nav>
        </div>
      </header>

      {/* Main Portfolio Section */}
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-center min-h-[600px]">
            
            {/* Left Column - Designer */}
            <div className="text-center lg:text-left space-y-6">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-black text-black">
                  designer
                </h1>
                <p className="text-lg text-gray-500 max-w-sm mx-auto lg:mx-0 leading-relaxed">
                  Product designer specialising in UI design and design systems.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {designSkills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Center Column - Name Card */}
            <div className="flex justify-center">
              <Card className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm">
                <div className="text-center">
                  <div className="space-y-2">
                    <div className="text-8xl lg:text-9xl font-black leading-none text-black">
                      <div>H</div>
                      <div className="flex items-center justify-center space-x-4">
                        <span>I</span>
                        <span className="text-4xl">'</span>
                        <span>M</span>
                      </div>
                    </div>
                    <div className="text-4xl lg:text-5xl font-black mt-4 text-black">
                      EVANS
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Coder */}
            <div className="text-center lg:text-right space-y-6">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-black text-black">
                  &lt;coder&gt;
                </h1>
                <p className="text-lg text-gray-500 max-w-sm mx-auto lg:mx-0 lg:ml-auto leading-relaxed">
                  Front-end developer who writes clean, elegant and efficient code.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
                {techSkills.map((skill) => (
                  <Badge 
                    key={skill.name}
                    variant="secondary"
                    className={`px-3 py-1 text-sm font-medium transition-colors ${skill.color}`}
                  >
                    {skill.name}
                  </Badge>
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
