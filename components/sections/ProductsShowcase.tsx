import Image from 'next/image';
import { publicPath } from '@/lib/public-path';

export function ProductsShowcase() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
          <Image
            src={publicPath('/5-products.jpeg')}
            alt="Aurora Nutrivital — 5 premium health mixes"
            width={1600}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
