import { ScrollAnimation } from "./ScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Code, Layout, Server, Brain, Sparkles, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Django", "Flask", "FastAPI"],
  },
  {
    title: "ML / Deep Learning",
    icon: Brain,
    skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Keras"],
  },
  {
    title: "Generative AI",
    icon: Sparkles,
    skills: ["LLMs", "Prompt Engineering", "NLP", "Computer Vision", "Model Fine-tuning"],
  },
  {
    title: "Tools & Cloud",
    icon: Wrench,
    skills: ["Git", "Streamlit", "Jupyter", "Linux", "AWS", "Docker"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto mb-12 rounded-full" />
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollAnimation key={category.title} delay={index * 0.1}>
              <div className="glass-card rounded-2xl p-6 h-full hover:scale-[1.02] transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 group-hover:from-cyber-blue/30 group-hover:to-cyber-purple/30 transition-colors">
                    <category.icon className="w-5 h-5 text-cyber-cyan" />
                  </div>
                  <h3 className="font-semibold font-display text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-foreground border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
