'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Award, Leaf, Beaker } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'Pure ingredients sourced from traditional and sustainable farms. No artificial additives or fillers.',
  },
  {
    icon: CheckCircle,
    title: 'No Preservatives',
    description: 'All products are naturally preserved using traditional methods, keeping them fresh and pure.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Rigorous quality control at every step ensures the highest standards of purity and nutrition.',
  },
  {
    icon: Beaker,
    title: 'Science-Backed',
    description: 'Traditional recipes combined with modern nutritional science for optimal health benefits.',
  },
];

export function FeatureShowcase() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black">
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
            Quality & Purity Guaranteed
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Every Aurora Nutrivital product is crafted with care, combining ancient wisdom with modern standards.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-md transition-all"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Manufacturing Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8 sm:p-12 border border-emerald-200 dark:border-emerald-800"
        >
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
            Our Manufacturing Process
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {['Cleaning', 'Quality Check', 'Roasting', 'Cooling', 'Grinding', 'Sieving', 'Blending', 'Final Mixing', 'Hygienic Packing'].map(
              (step, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center text-white font-semibold text-sm">
                    {idx + 1}
                  </div>
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">{step}</span>
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
