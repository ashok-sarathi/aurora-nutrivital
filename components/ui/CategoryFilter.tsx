'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { productCategories } from '@/data/products';
import { X } from 'lucide-react';

export function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');

  const handleCategoryChange = (category: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    router.push(`/products?${params.toString()}`);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-zinc-900 dark:text-white">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        {/* All Products */}
        <button
          onClick={() => handleCategoryChange(null)}
          className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
            !selectedCategory
              ? 'bg-emerald-600 text-white'
              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
          }`}
        >
          All Products
        </button>

        {/* Category Buttons */}
        {productCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
              selectedCategory === category.id
                ? 'bg-emerald-600 text-white'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Clear Filter */}
      {selectedCategory && (
        <button
          onClick={() => handleCategoryChange(null)}
          className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
        >
          <X className="w-4 h-4" />
          Clear filters
        </button>
      )}
    </div>
  );
}
