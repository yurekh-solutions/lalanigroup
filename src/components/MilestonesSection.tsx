import { motion } from "framer-motion";
import { Building2, Home, Users, HardHat } from "lucide-react";

const milestones = [
  { icon: Building2, value: "40", label: "Years Of Experience" },
  { icon: Home, value: "40+", label: "Projects Completed" },
  { icon: Users, value: "4000+", label: "Happy Families" },
  { icon: HardHat, value: "03", label: "Projects Under Construction" },
];

const MilestonesSection = () => {
  return (
    <section id="milestones" className="section-padding relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy-medium" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold gradient-gold-text mb-4">
            Milestones
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {milestones.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-premium rounded-2xl p-6 lg:p-8 text-center group hover:scale-105 transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary/20 to-gold-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-gold-accent/30 transition-all duration-300 shadow-lg">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="font-heading text-4xl lg:text-5xl font-bold gradient-premium-text mb-3">
                {item.value}
              </div>
              <p className="font-body text-sm text-cream-muted">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
