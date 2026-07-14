'use client';

import { Product } from '@/types/product';
import { CheckCircle2, Zap } from 'lucide-react';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="space-y-4">
        <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
          {product.categoryLabel}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
          {product.name}
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-300">{product.tagline}</p>
      </div>

      {/* Main Benefits Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
          <Zap className="w-6 h-6 text-emerald-600" />
          Key Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {product.mainBenefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20">
              <span className="text-2xl">{benefit.icon}</span>
              <span className="font-medium text-zinc-900 dark:text-white">{benefit.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">About This Product</h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">{product.description}</p>
      </div>

      {/* Features */}
      {product.features.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Product Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Usage Instructions */}
      <div className="space-y-4 bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">How to Use</h2>
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-zinc-900 dark:text-white mb-2">Mix with:</p>
            <p className="text-zinc-600 dark:text-zinc-300">{product.usage.mixWith.join(' or ')}</p>
          </div>
          <div>
            <p className="font-semibold text-zinc-900 dark:text-white mb-2">Instructions:</p>
            <ol className="space-y-1 text-zinc-600 dark:text-zinc-300 list-decimal list-inside">
              {product.usage.instructions.map((instruction, idx) => (
                <li key={idx}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Ingredients Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Ingredients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {product.ingredients.map((ingredient, idx) => (
            <div key={idx} className="space-y-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
              <h3 className="font-semibold text-zinc-900 dark:text-white">{ingredient.category}</h3>
              <div className="flex flex-wrap gap-2">
                {ingredient.items.map((item, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="text-xs px-3 py-1 bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full border border-zinc-200 dark:border-zinc-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Target Audience */}
      {product.targetAudience && product.targetAudience.length > 0 && (
        <div className="space-y-4 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Suitable For</h2>
          <div className="flex flex-wrap gap-2">
            {product.targetAudience.map((audience, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-blue-200 rounded-full font-medium text-sm"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
