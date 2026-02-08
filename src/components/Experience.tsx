import { ScrollAnimation } from "./ScrollAnimation";

const experiences = [
  {
    title: "AI/ML Intern",
    company: "Harsha Perfect Solutions",
    period: "May 2025 – Jul 2025",
    highlights: [
      "Developed and deployed machine learning models for real-world applications",
      "Worked on deep learning pipelines using TensorFlow and PyTorch",
      "Collaborated with cross-functional teams on AI-driven solutions",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "GOATek",
    period: "Jan 2025 – Mar 2025",
    highlights: [
      "Built responsive web applications using React and modern JavaScript",
      "Implemented RESTful APIs with Node.js and Express",
      "Optimized frontend performance and user experience",
    ],
  },
  {
    title: "AI Intern",
    company: "Brainwave Matrix Solutions",
    period: "Sep 2024 – Jan 2025",
    highlights: [
      "Worked on NLP and computer vision projects",
      "Built AI-powered tools for data analysis and insights",
      "Gained hands-on experience with model training and evaluation",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-center mb-4">
            Work{" "}
            <span className="bg-gradient-to-r from-cyber-blue to-cyber-cyan bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyber-blue to-cyber-cyan mx-auto mb-12 rounded-full" />
        </ScrollAnimation>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-blue via-cyber-cyan to-cyber-purple hidden sm:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <ScrollAnimation key={exp.company} delay={index * 0.15}>
                  <div className="flex gap-6">
                    {/* Timeline dot */}
                    <div className="hidden sm:flex flex-shrink-0 w-16 items-start justify-center pt-6">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-cyan border-4 border-background shadow-lg shadow-cyber-blue/30" />
                    </div>

                    {/* Card */}
                    <div className="flex-1 glass-card rounded-2xl p-6 hover:scale-[1.01] transition-transform duration-300">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-bold font-display">{exp.title}</h3>
                          <p className="text-cyber-cyan font-medium">{exp.company}</p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
