import { motion } from "framer-motion";
import { Languages } from "lucide-react";

const languages = [
  { name: "Arabic", level: "Native", proficiency: 100 },
  { name: "English", level: "Professional", proficiency: 85 },
  { name: "Russian", level: "Intermediate", proficiency: 60 },
  { name: "Mandarin", level: "Basic", proficiency: 30 },
];

const LanguagesSection = () => {
  return (
    <section className="py-24">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <Languages className="w-6 h-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Languages
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-gradient p-6 rounded-xl border border-border shadow-card text-center"
            >
              {/* Circular progress */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Background Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="var(--color-secondary)"
                    strokeWidth="8"
                  />
                  {/* Animated Progress Circle */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={251.2}
                    initial={{ strokeDashoffset: 251.2 }}
                    whileInView={{
                      strokeDashoffset:
                        251.2 - (251.2 * lang.proficiency) / 100,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold">{lang.proficiency}%</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-1">{lang.name}</h3>
              <p className="text-sm text-muted-foreground">{lang.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
