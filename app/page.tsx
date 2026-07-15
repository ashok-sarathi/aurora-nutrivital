import { HeroSection } from '@/components/sections/HeroSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { FeatureShowcase } from '@/components/sections/FeatureShowcase';
import { ProductsShowcase } from '@/components/sections/ProductsShowcase';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <BenefitsSection />
      <FeatureShowcase />
      <ProductsShowcase />

      {/* CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-emerald-600 dark:bg-emerald-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Ready to Transform Your Health?
          </h2>
          <p className="text-lg text-emerald-50">
            Explore our complete range of natural health mixes designed for every stage of life.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 hover:bg-emerald-50 font-semibold rounded-lg transition-colors group"
          >
            Explore All Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
