import { motion } from "framer-motion";
import { ArrowDown, Download, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  // Path to the image you provided. Place the image under public/assets/images/profile.jpg
  const LOVEABLE_AVATAR = "src/assets/profile.jpg";
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyber-blue/20 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyber-purple/20 rounded-full blur-[128px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-cyber-cyan/10 rounded-full blur-[128px] animate-glow-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-cyber-cyan font-medium mb-4 text-sm tracking-widest uppercase"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display mb-6 leading-tight"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyber-blue via-cyber-cyan to-cyber-purple bg-clip-text text-transparent">
                Jayasri
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-3 font-medium"
            >
              Full Stack Developer & ML Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Building intelligent web applications using modern web technologies and AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyber-blue to-cyber-cyan text-white border-0 hover:opacity-90 shadow-lg shadow-cyber-blue/25 text-base px-8"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyber-purple/50 text-foreground hover:bg-cyber-purple/10 text-base px-8"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Loveable avatar image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-cyber-blue via-cyber-cyan to-cyber-purple p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <img src={LOVEABLE_AVATAR} alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-cyber-blue/30 to-cyber-purple/30 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
