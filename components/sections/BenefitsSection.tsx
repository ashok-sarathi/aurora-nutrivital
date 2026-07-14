'use client';

import { motion } from 'framer-motion';
import { Heart, Brain, Shield, Zap, Leaf, Droplet } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Heart Health',
    description: 'Support cardiovascular wellness with nutrient-rich ingredients that promote healthy blood flow and cholesterol levels.',
  },
  {
    icon: Brain,
    title: 'Cognitive Support',
    description: 'Enhance mental clarity and focus with essential nutrients and traditional superfoods that nourish brain health.',
  },
  {
    icon: Shield,
    title: 'Strong Immunity',
    description: 'Build natural defenses with antioxidants, vitamins, and minerals that strengthen your body\'s immune system.',
  },
  {
    icon: Zap,
    title: 'Sustained Energy',
    description: 'Experience all-day vitality with balanced nutrition that provides steady, sustainable energy without crashes.',
  },
  {
    icon: Leaf,
    title: 'Digestive Health',
    description: 'Support gut wellness with high-fiber, probiotic-friendly ingredients that promote healthy digestion.',
  },
  {
    icon: Droplet,
    title: 'Natural Hydration',
    description: 'Maintain optimal mineral balance with nutrients that support hydration and cellular health at every level.',
  },
];

export function BenefitsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white">
            Why Choose Aurora Nutrivital?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Discover the proven benefits of natural nutrition crafted from ancient recipes and modern science.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group p-8 rounded-xl bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/50 transition-colors">
                  <Icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
