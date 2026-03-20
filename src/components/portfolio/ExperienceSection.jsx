import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Part-time Wordpress Developer",
    company: "Azrar Media",
    location: "Amman, JO",
    period: "March 2021 - March 2023",
    description:
      "Collaborating with an amazing team to build fast, clean, and modern static websites using WordPress and Elementor, ensuring responsive design and smooth user experience.",
    technologies: ["wordpress", "php", "js", "html", "css"],
    link: "https://www.azrarmedia.com/",
  },
  {
    title: "Front-end Developer",
    company: "Token Masters",
    location: "Remote",
    period: "April 2023 - April 2024",
    description:
      "Delivering high-quality front-end websites using React, jQuery, and Bootstrap, with a focus on clean UI, responsive design, reusable components, and smooth user interactions.",
    technologies: ["Vue.js", "Python", "Django", "Docker", "Redis"],
    link: "https://www.token-masters.com/",
  },
  {
    title: "Frontend Developer",
    company: "Full Stack Developer",
    location: "Amman, JO",
    period: "August 2025 - present",
    description:
      "Architected a high-performance web platform for an automotive ecosystem with 100,000+ active users and 50,000+ monthly visits. I engineered a multi-lingual interface (Arabic, English, Urdu) that successfully onboarded users from 2+ primary Gulf markets (KSA & UAE), resulting in a 40% increase in cross-border accessibility for international traders.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind",
      "Laravel",
      "php",
      "mySQL",
    ],
    link: "https://www.token-masters.com/",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24">
      <div className="container max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <Briefcase className="w-6 h-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-glow" />

                <div className="card-gradient p-6 rounded-xl border border-border shadow-card hover:shadow-glow transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary font-medium flex items-center gap-2">
                        {exp.company}
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
