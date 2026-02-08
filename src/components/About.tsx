import { ScrollAnimation } from "./ScrollAnimation";
import { Code, Brain, Trophy, Briefcase } from "lucide-react";

const stats = [
  { icon: Code, label: "DSA Problems", value: "500+" },
  { icon: Brain, label: "ML Projects", value: "4+" },
  { icon: Trophy, label: "Hackathon Finalist", value: "2×" },
  { icon: Briefcase, label: "Internships", value: "3" },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-cyber-blue to-cyber-cyan bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan mx-auto mb-12 rounded-full" />
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate{" "}
                <span className="text-foreground font-medium">
                  3rd-year B.Tech Information Technology
                </span>{" "}
                student at MVGR College of Engineering, specializing in{" "}
                <span className="text-foreground font-medium">Full Stack Development</span> and{" "}
                <span className="text-foreground font-medium">Machine Learning</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience in deep learning, computer vision, NLP, and Generative AI
                systems, I build intelligent applications that solve real-world problems. My
                expertise spans from crafting modern React frontends to training CNN models for
                image classification and developing LLM-powered knowledge systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an active open-source contributor, YouTube content creator covering DSA and ML
                topics, and a two-time national hackathon finalist driven by curiosity and a
                passion for building.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-cyber-cyan" />
                  <div className="text-3xl font-bold font-display bg-gradient-to-r from-cyber-blue to-cyber-cyan bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
