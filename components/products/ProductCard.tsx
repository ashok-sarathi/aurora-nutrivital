import Link from 'next/link';
import { Product } from '@/types/product';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="group h-full bg-white dark:bg-zinc-800 rounded-xl shadow-sm hover:shadow-lg dark:shadow-zinc-900/30 dark:hover:shadow-emerald-500/20 transition-all duration-300 overflow-hidden hover:border-emerald-200 dark:hover:border-emerald-900 border border-zinc-200 dark:border-zinc-700">
        {/* Product Image / Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 overflow-hidden flex items-center justify-center">
          <div className="text-5xl opacity-30 group-hover:scale-110 transition-transform duration-300">
            {product.mainBenefits[0]?.icon || '🌾'}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5 space-y-3">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
              {product.categoryLabel}
            </p>
            <h3 className="font-semibold text-lg text-zinc-900 dark:text-white line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {product.name}
            </h3>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
            {product.tagline}
          </p>

          {/* Key Benefits Preview */}
          <div className="flex flex-wrap gap-1 pt-2">
            {product.mainBenefits.slice(0, 3).map((benefit, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full"
              >
                {benefit.icon} {benefit.name}
              </span>
            ))}
            {product.mainBenefits.length > 3 && (
              <span className="text-xs px-2 py-1 text-zinc-500 dark:text-zinc-400">
                +{product.mainBenefits.length - 3} more
              </span>
            )}
          </div>

          {/* CTA */}
          <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium text-sm pt-2 group-hover:gap-2 gap-1 transition-all">
            View Details
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
