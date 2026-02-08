import { ScrollAnimation } from "./ScrollAnimation";
import { GraduationCap, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  "Google Cloud Computing",
  "Intel AI for Youth",
  "IBM AI & Deep Learning",
  "AWS Cloud Foundations",
  "Udemy Machine Learning",
  "Kaggle Generative AI",
  "Hugging Face LLMs",
  "Andrew Ng Deep Learning",
  "GeeksforGeeks CV",
];

export function Education() {
  return (
    <section id="education" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-4">
            Education &{" "}
            <span className="bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-purple to-cyber-blue mx-auto mb-12 rounded-full" />
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education */}
          <ScrollAnimation delay={0.1}>
            <div className="glass-card rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyber-blue/20 to-cyber-cyan/20">
                  <GraduationCap className="w-6 h-6 text-cyber-cyan" />
                </div>
                <h3 className="text-xl font-bold font-display">Education</h3>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">B.Tech in Information Technology</h4>
                <p className="text-cyber-cyan font-medium">MVGR College of Engineering</p>
                <p className="text-muted-foreground">2023 – 2027</p>
                <div className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-cyber-blue/10 to-cyber-cyan/10 border border-cyber-blue/20 rounded-xl px-4 py-2">
                  <span className="text-sm text-muted-foreground">GPA:</span>
                  <span className="text-lg font-bold bg-gradient-to-r from-cyber-blue to-cyber-cyan bg-clip-text text-transparent">
                    8.42/10
                  </span>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Certifications */}
          <ScrollAnimation delay={0.2}>
            <div className="glass-card rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyber-purple/20 to-cyber-blue/20">
                  <Award className="w-6 h-6 text-cyber-purple" />
                </div>
                <h3 className="text-xl font-bold font-display">Certifications</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <Badge
                    key={cert}
                    variant="secondary"
                    className="bg-cyber-purple/10 text-foreground border-cyber-purple/20 hover:bg-cyber-purple/20 transition-colors cursor-default py-1.5 px-3"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
