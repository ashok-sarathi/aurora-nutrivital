import { ContactConfig } from '@/types/product';

export const contactConfig: ContactConfig = {
  whatsappNumber: '+917358414163',
  whatsappNumberFormatted: '+91 7358 414 163',
  email: 'auroranutrivital68@gmail.com',
  phone: '+91-7358-414163',
};

export function getWhatsAppLink(productName?: string): string {
  const baseUrl = 'https://wa.me/917358414163';
  if (productName) {
    const message = `Hi! I'm interested in Aurora Nutrivital's ${productName}. Can you provide more information?`;
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return `${baseUrl}?text=${encodeURIComponent('Hi! I am interested in Aurora Nutrivital products.')}`;
}

export function getWhatsAppInquiryLink(productName: string): string {
  const message = `Hi! I'd like to inquire about ${productName}. Can you provide more details?`;
  return `https://wa.me/917358414163?text=${encodeURIComponent(message)}`;
}
