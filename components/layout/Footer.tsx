import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { contactConfig } from '@/config/contact';
import { Logo } from '@/components/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Ancient Nutrition for Modern Life. Pure, natural, and nutritious food products.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-zinc-900 dark:text-white text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-zinc-900 dark:text-white text-sm">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products?category=family-health"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Family Health
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=kids-growth"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Kids Growth
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=weight-management"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Weight Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-zinc-900 dark:text-white text-sm">Contact</h4>
            <div className="space-y-3 text-sm">
              {contactConfig.phone && (
                <a
                  href={`tel:${contactConfig.phone}`}
                  className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {contactConfig.whatsappNumberFormatted}
                </a>
              )}
              {contactConfig.email && (
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {contactConfig.email}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>&copy; {currentYear} Aurora Nutrivital. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">Ancient Nutrition for Modern Life.</p>
        </div>
      </div>
    </footer>
  );
}
