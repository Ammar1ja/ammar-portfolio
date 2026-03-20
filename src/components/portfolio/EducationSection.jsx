import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Israa University",
    period: "2021 - 2025 ",
    description:
      "I focused heavily on core Computer Science subjects, including C# programming, Object-Oriented Programming (OOP) principles, Data Structures and Algorithms, as well as database design and management. I also gained a solid understanding of computer networks, covering essential networking concepts, protocols, and system communication. These foundations strengthened my problem-solving skills and prepared me for building efficient, scalable software solutions.",
    // gpa: "3.9/4.0",
  },
];

const EducationSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <GraduationCap className="w-6 h-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Education
          </h2>
        </motion.div>

        {/* Education List */}
        <div className="grid gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-gradient p-6 rounded-xl border border-border shadow-card hover:shadow-glow transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.school}</p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  {/* <span className="text-sm font-medium bg-primary/10 text-primary px-2 py-0.5 rounded">
                    GPA: {edu.gpa}
                  </span> */}
                </div>
              </div>

              <p className="text-muted-foreground">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
