import { ScrollAnimation } from "./ScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Leaf, FileSearch, Map, Lightbulb } from "lucide-react";

const projects = [
  {
    title: "Waste Classifier",
    description:
      "CNN-based image classification system deployed using Streamlit that identifies waste categories and suggests eco-friendly disposal methods.",
    tech: ["Python", "CNN", "Streamlit"],
    icon: Leaf,
    github: "https://github.com/jayasri-88",
    deploy: "https://waste-best.streamlit.app/",
    color: "from-emerald-500/20 to-green-500/20",
  },
  {
    title: "Nutrition Label Analyzer",
    description:
      "Machine learning system that analyzes food nutrition labels from images and extracts key nutritional information using OCR.",
    tech: ["Python", "CNN", "OCR"],
    icon: FileSearch,
    github: "https://github.com/jayasri-88",
    deploy: "https://github.com/jayasri-88",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Ambulance Routing System",
    description:
      "Smart routing system that optimizes ambulance paths using shortest-route algorithms, achieving 23% reduction in emergency response time.",
    tech: ["MERN Stack", "Maps API", "Algorithms"],
    icon: Map,
    github: "https://github.com/jayasri-88",
    deploy: "https://ambulance-routing.streamlit.app/",
    color: "from-rose-500/20 to-red-500/20",
  },
  {
    title: "Generative Knowledge Web",
    description:
      "AI-powered knowledge web application that generates contextual responses with 92% relevance accuracy and connects related information dynamically.",
    tech: ["React", "Node.js", "Generative AI"],
    icon: Lightbulb,
    github: "https://github.com/jayasri-88",
    deploy: "https://genz-wheat.vercel.app/",
    color: "from-cyber-blue/20 to-cyber-purple/20",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto mb-12 rounded-full" />
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ScrollAnimation key={project.title} delay={index * 0.1}>
              <div className="glass-card rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300">
                {/* Icon header */}
                <div className={`p-8 bg-gradient-to-br ${project.color}`}>
                  <project.icon className="w-12 h-12 text-foreground/80" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="text-xs border-cyber-blue/30 text-cyber-cyan"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {/* GitHub Button */}
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-border hover:bg-muted/50"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>

                    {/* Live Demo Button */}
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-muted-foreground"
                      asChild
                      disabled={!project.deploy}
                    >
                      <a
                        href={project.deploy || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${!project.deploy ? "pointer-events-none opacity-50" : ""}`}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
