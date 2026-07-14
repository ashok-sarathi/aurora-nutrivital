import { Suspense } from 'react';
import { products, getProductsByCategory, productCategories } from '@/data/products';
import { ProductGrid } from '@/components/products/ProductGrid';
import { CategoryFilter } from '@/components/ui/CategoryFilter';
import { SortDropdown } from '@/components/ui/SortDropdown';

interface ProductsPageProps {
  searchParams: Promise<{ category?: string; sort?: string }>;
}

function sortProducts(
  productsToSort: typeof products,
  sort: string | undefined
) {
  const sortType = sort || 'name-asc';

  switch (sortType) {
    case 'name-desc':
      return [...productsToSort].sort((a, b) => b.name.localeCompare(a.name));
    case 'newest':
      return [...productsToSort].reverse();
    case 'name-asc':
    default:
      return [...productsToSort].sort((a, b) => a.name.localeCompare(b.name));
  }
}

export const metadata = {
  title: 'Products | Aurora Nutrivital',
  description: 'Browse our complete range of natural health mixes for family wellness.',
};

async function ProductsContent({ params }: { params: Promise<{ category?: string; sort?: string }> }) {
  const { category, sort } = await params;

  let productsToDisplay = category
    ? getProductsByCategory(category)
    : products;

  productsToDisplay = sortProducts(productsToDisplay, sort);

  const selectedCategory = productCategories.find((c) => c.id === category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
          {selectedCategory ? selectedCategory.label : 'All Products'}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          {selectedCategory
            ? `Discover our ${selectedCategory.label.toLowerCase()} nutrition products`
            : 'Explore our complete range of natural health mixes designed for every family member.'}
        </p>
      </div>

      {/* Filters & Sort */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1">
          <div className="space-y-6 sticky top-20">
            <CategoryFilter />
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3 space-y-6">
          {/* Sort Dropdown */}
          <div className="flex justify-end">
            <SortDropdown />
          </div>

          {/* Products */}
          <ProductGrid
            products={productsToDisplay}
            emptyMessage="No products found in this category."
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-8 border border-emerald-200 dark:border-emerald-800">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
          Need Help Choosing?
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 mb-4">
          All our products are 100% natural with no added sugar, preservatives, or artificial
          additives. Each mix is carefully formulated to provide complete nutrition for different
          life stages and wellness goals.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
        >
          Contact us for personalized recommendations →
        </a>
      </div>
    </div>
  );
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Suspense fallback={<div className="p-8">Loading products...</div>}>
        <ProductsContent params={searchParams} />
      </Suspense>
    </div>
  );
}
