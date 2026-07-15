'use client';

import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function Logo({ size = 'md', showText = false }: LogoProps) {
  const sizeMap = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 64, height: 64 },
  } as const;

  const size_px = sizeMap[size];

  return (
    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
      <div className="flex-shrink-0">
        <Image
          src="/logo.png"
          alt="Aurora Nutrivital Logo"
          width={size_px.width}
          height={size_px.height}
          priority
          className="object-contain"
        />
      </div>
      {showText && (
        <div className="hidden sm:block">
          <h1 className="font-bold text-sm md:text-lg text-zinc-900 dark:text-white leading-tight">
            Aurora<span className="text-emerald-600 dark:text-emerald-400">Nutrivital</span>
          </h1>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">Ancient Nutrition for Modern Life</p>
        </div>
      )}
    </Link>
  );
}
