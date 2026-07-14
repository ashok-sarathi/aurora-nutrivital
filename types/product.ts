export type ProductCategory = 
  | 'family-health'
  | 'kids-growth'
  | 'weight-management'
  | 'weight-gain'
  | 'diabetic-friendly';

export interface ProductBenefit {
  name: string;
  icon?: string;
}

export interface Ingredient {
  category: string;
  items: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  mainBenefits: ProductBenefit[];
  features: string[];
  ingredients: Ingredient[];
  usage: {
    mixWith: string[];
    instructions: string[];
  };
  targetAudience?: string[];
  image?: string;
  imageAlt?: string;
  nutritionalHighlights?: string[];
}

export interface ContactConfig {
  whatsappNumber: string;
  whatsappNumberFormatted: string;
  email?: string;
  phone?: string;
}
