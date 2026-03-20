import { motion } from "framer-motion";
import {
  Heart,
  Camera,
  Mountain,
  Gamepad2,
  BookOpen,
  Music,
  Plane,
  Coffee,
} from "lucide-react";

const interests = [
  // { name: "Photography", icon: Camera, color: "bg-rose-500/10 text-rose-500" },
  {
    name: "Hiking",
    icon: Mountain,
    color: "bg-emerald-500/10 text-emerald-500",
  },
  { name: "Gaming", icon: Gamepad2, color: "bg-violet-500/10 text-violet-500" },
  { name: "Reading", icon: BookOpen, color: "bg-amber-500/10 text-amber-500" },
  { name: "Travel", icon: Plane, color: "bg-cyan-500/10 text-cyan-500" },
  { name: "Coffee", icon: Coffee, color: "bg-orange-500/10 text-orange-500" },
  // { name: "Music", icon: Music, color: "bg-blue-500/10 text-blue-500" },
];

const InterestsSection = () => {
  return (
    <section className="py-24">
      <div className="container max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <Heart className="w-6 h-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Interests
          </h2>
        </motion.div>

        {/* Interests Pills */}
        <div className="flex flex-wrap gap-4 justify-center">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="card-gradient px-6 py-4 rounded-full border border-border shadow-soft flex items-center gap-3 cursor-default"
              >
                <div className={`p-2 rounded-full ${interest.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-medium">{interest.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
