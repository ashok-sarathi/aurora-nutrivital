'use client';

import { products, getProductById, productCategories } from '@/data/products';
import { ProductDetails } from '@/components/products/ProductDetails';
import { getWhatsAppInquiryLink } from '@/config/contact';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductDetailsViewProps {
  id: string;
}

export function ProductDetailsView({ id }: ProductDetailsViewProps) {
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-4">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Product Not Found</h1>
          <p className="text-zinc-600 dark:text-zinc-400">The product you're looking for doesn't exist.</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Get next and previous products
  const currentIndex = products.findIndex((p) => p.id === id);
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : products[products.length - 1];
  const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : products[0];

  const whatsappLink = getWhatsAppInquiryLink(product.name);
  const categoryLabel = productCategories.find((c) => c.id === product.category)?.label;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-8">
        <Link href="/products" className="hover:text-zinc-900 dark:hover:text-white">
          Products
        </Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-white font-medium">{product.name}</span>
      </div>

      {/* Back Button */}
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium hover:underline mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Products
      </Link>

      {/* Product Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        {/* Main Product Details */}
        <div className="lg:col-span-2">
          <ProductDetails product={product} />
        </div>

        {/* Sidebar - Quick Actions */}
        <div className="lg:col-span-1 space-y-6">
          {/* Product Image Placeholder */}
          <div className="w-full h-64 bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30 rounded-xl flex items-center justify-center sticky top-24">
            <div className="text-6xl">{product.mainBenefits[0]?.icon || '🌾'}</div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3 sticky top-96">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Inquire on WhatsApp
            </a>
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 font-semibold rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Product Meta */}
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4 space-y-3">
            <div>
              <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase">Category</p>
              <p className="text-sm font-medium text-zinc-900 dark:text-white">{categoryLabel}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase">Key Benefits</p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                {product.mainBenefits.slice(0, 3).map((b) => b.name).join(', ')}
              </p>
            </div>
            {product.targetAudience && product.targetAudience.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase">
                  Suitable For
                </p>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  {product.targetAudience.slice(0, 2).join(', ')}
                  {product.targetAudience.length > 2 && `, +${product.targetAudience.length - 2} more`}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation - Related Products */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 pt-12">
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">Explore Other Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Previous Product */}
          <Link
            href={`/products?id=${prevProduct.id}`}
            className="group p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="text-5xl">{prevProduct.mainBenefits[0]?.icon || '🌾'}</div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-1">Previous</p>
                <h4 className="font-semibold text-zinc-900 dark:text-white truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {prevProduct.name}
                </h4>
              </div>
              <ChevronLeft className="w-5 h-5 text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex-shrink-0" />
            </div>
          </Link>

          {/* Next Product */}
          <Link
            href={`/products?id=${nextProduct.id}`}
            className="group p-6 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-emerald-400 dark:hover:border-emerald-500 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase mb-1">Next</p>
                <h4 className="font-semibold text-zinc-900 dark:text-white truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {nextProduct.name}
                </h4>
              </div>
              <div className="text-5xl">{nextProduct.mainBenefits[0]?.icon || '🌾'}</div>
              <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex-shrink-0" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
