import { ScrollAnimation } from "./ScrollAnimation";
import { Code, Trophy, Youtube, Users, Target, Flame } from "lucide-react";

const achievements = [
  {
    icon: Code,
    title: "500+ DSA Problems",
    description: "Solved on LeetCode & GeeksforGeeks",
  },
  {
    icon: Flame,
    title: "160 Days DSA Challenge",
    description: "Completed full challenge streak",
  },
  {
    icon: Trophy,
    title: "Hackathon Finalist ×2",
    description: "National-level hackathon finalist",
  },
  {
    icon: Youtube,
    title: "YouTube Creator",
    description: "Content on DSA, Python & ML",
  },
  {
    icon: Users,
    title: "Swecha Linux Club",
    description: "Core member & community leader",
  },
  {
    icon: Target,
    title: "AI/ML Communities",
    description: "Active contributor & participant",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-4">
            Achievements &{" "}
            <span className="bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent">
              Activities
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-purple mx-auto mb-12 rounded-full" />
        </ScrollAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((item, index) => (
            <ScrollAnimation key={item.title} delay={index * 0.1}>
              <div className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 group">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyber-cyan/20 to-cyber-purple/20 group-hover:from-cyber-cyan/30 group-hover:to-cyber-purple/30 transition-colors mb-4">
                  <item.icon className="w-6 h-6 text-cyber-cyan" />
                </div>
                <h3 className="font-bold font-display mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
