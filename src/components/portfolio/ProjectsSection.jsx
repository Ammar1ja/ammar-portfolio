import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github } from "lucide-react";
import turboPayImg from "../../assets/images/projects/turbo_pay.png";
import harajImg from "../../assets/images/projects/haraj.png";
import tajAlsafaImg from "../../assets/images/projects/taj_alsafa.jpg";
import toPortugalImg from "../../assets/images/projects/to_portugal.png";
import totersImg from "../../assets/images/projects/toters.png";
import azrarImg from "../../assets/images/projects/azrar.png";
const projects = [
  {
    title: "Courses Administration System",
    description:
      "A robust educational management platform designed to streamline course scheduling, student registrations, and academic reporting through a centralized administrative dashboard.",
    image: totersImg,
    technologies: ["Tailwind", "React.js", "Prime DataTable", "charts js"],
    liveUrl: "https://www.totersapp.com/",
    // githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Car Trading Platform",
    description:
      "A specialized B2B and B2C automotive marketplace (Caar Station) that connects car dealers and service providers with advanced filtering and inventory management.",
    image: harajImg,
    technologies: ["Tailwind", "React.js", "Socket io", "Laravel", "MySQL"],
    liveUrl: "https://haraj.caarstation.com/",
    // githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "Real Estate Marketplace",
    description:
      "A high-end property portal for Taj Al Safa, showcasing luxury residential projects in Jordan with interactive maps, unit details, and direct inquiry management.",
    image: tajAlsafaImg,
    technologies: ["Tailwind", "Vue.js", "Laravel", "PHP", "MySQL"],
    liveUrl: "https://tajalsafa.com/",
    // githubUrl: "https://github.com",
  },
  {
    title: "QR Payment System",
    description:
      "An innovative fintech solution (TurboPay) that bridges the gap between digital content creation and instant monetization through secure QR code payment processing.",
    image: turboPayImg,
    technologies: ["Tailwind", "React.js"],
    liveUrl: "https://app.turbopay.org/",
    // githubUrl: "https://github.com",
  },
  {
    title: "Travel Guide",
    description:
      "A comprehensive tourism platform for Portugal Discoveries, offering curated travel itineraries, historical insights, and seamless booking experiences for travelers.",
    image: toPortugalImg,
    technologies: ["Tailwind", "React.js", "Laravel", "PHP", "MySQL"],
    liveUrl: "https://www.totersapp.com/",
    // liveUrl: "https://portugaldiscoveries.com/",
    // githubUrl: "https://github.com",
  },
  {
    title: "AR, VR, 3D Solutions",
    description:
      "A corporate portfolio for Azrar Solutions, highlighting cutting-edge software development services in augmented reality and immersive 3D web environments.",
    image: azrarImg,
    technologies: ["Tailwind", "React.js", "Laravel", "PHP", "MySQL"],
    liveUrl: "https://azrarsolutions.com/",
    // githubUrl: "https://github.com",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <FolderGit2 className="w-6 h-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group card-gradient rounded-xl border border-border shadow-card overflow-hidden hover:shadow-glow transition-all duration-300"
            >
              {/* Project Image Area */}
              <div className="relative h-48 overflow-hidden bg-muted">
                {/* Overlay for better text readability and styling */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {project.featured && (
                  <span className="absolute top-4 left-4 z-20 px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground shadow-sm">
                    Featured Project
                  </span>
                )}
              </div>

              {/* Content Area */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-secondary transition-colors"
                        title="View Source"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-secondary transition-colors"
                        title="View Live Site"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
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
    </section>
  );
};

export default ProjectsSection;
