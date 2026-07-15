import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 'premium-33-ingredients',
    slug: 'premium-33-ingredients-health-mix',
    name: 'Premium 33 Ingredients Health Mix',
    category: 'family-health',
    categoryLabel: 'Family Nutrition',
    tagline: 'Complete daily nutrition from 33 natural ingredients',
    description: 'A complete daily nutrition mix made from 33 carefully selected natural ingredients including millets, grains, pulses, legumes, nuts, seeds, and functional spices. Perfect for the entire family.',
    mainBenefits: [
      { name: 'High Protein', icon: '💪' },
      { name: 'High Fiber', icon: '🌾' },
      { name: 'Rich in Vitamins', icon: '✨' },
      { name: 'Rich in Minerals', icon: '⛰️' },
      { name: 'Boosts Immunity', icon: '🛡️' },
      { name: 'Supports Digestion', icon: '🔄' },
      { name: 'Provides Energy', icon: '⚡' },
      { name: 'Strengthens Bones', icon: '🦴' },
    ],
    features: [
      '100% Natural',
      'No Added Sugar',
      'No Added Salt',
      'No Preservatives',
      'Made from 33 Ingredients',
    ],
    ingredients: [
      {
        category: 'Millets & Grains',
        items: ['Pearl Millet (Kambu)', 'Finger Millet (Ragi)', 'Foxtail Millet (Thinai)', 'Little Millet (Samai)', 'Kodo Millet (Varagu)', 'Barnyard Millet', 'White Sorghum', 'Red Sorghum', 'Maize', 'Barley', 'Black Kavuni Rice', 'Red Rice', 'Samba Wheat'],
      },
      {
        category: 'Pulses & Legumes',
        items: ['Green Gram', 'Yellow Moong Dal', 'Black Gram', 'Soybean', 'Horse Gram', 'Red Cowpea', 'Black Chickpeas', 'Bengal Gram', 'Toor Dal'],
      },
      {
        category: 'Nuts & Seeds',
        items: ['Almond', 'Cashew', 'White Sesame', 'Black Sesame', 'Flax Seeds', 'Sabja Seeds', 'Pumpkin Seeds', 'Makhana (Fox Nuts)'],
      },
      {
        category: 'Functional Ingredients',
        items: ['Dry Ginger', 'Cinnamon', 'Cardamom'],
      },
    ],
    usage: {
      mixWith: ['Hot Water', 'Hot Milk'],
      instructions: ['Mix with hot water or hot milk', 'Boil for approximately 2 minutes', 'Sweetener can be added if required'],
    },
    targetAudience: ['Children', 'Adults', 'Senior Citizens', 'Entire Family'],
    nutritionalHighlights: ['High Protein', 'High Fiber', 'Rich in Vitamins', 'Rich in Minerals', 'Supports Overall Health'],
  },
  {
    id: 'family-health-mix',
    slug: 'family-health-mix',
    name: 'Family Health Mix',
    category: 'family-health',
    categoryLabel: 'Family Nutrition',
    tagline: 'Complete nutrition for the whole family',
    description: 'A balanced nutritional blend designed to support the health and wellness of the entire family. Contains essential vitamins, minerals, and proteins from natural sources.',
    mainBenefits: [
      { name: 'Complete Daily Nutrition', icon: '🥗' },
      { name: 'Supports Immunity', icon: '🛡️' },
      { name: 'Good for Heart Health', icon: '❤️' },
      { name: 'Strengthens Bones', icon: '🦴' },
      { name: 'Builds Muscles', icon: '💪' },
      { name: 'Rich in Fiber', icon: '🌾' },
      { name: 'Rich in Protein', icon: '🥚' },
      { name: 'Rich in Vitamins', icon: '✨' },
    ],
    features: [
      '100% Natural',
      'No Added Sugar',
      'No Preservatives',
      'Family Friendly',
    ],
    ingredients: [
      {
        category: 'Base Ingredients',
        items: ['Millets', 'Grains', 'Pulses', 'Seeds', 'Nuts'],
      },
      {
        category: 'Functional Ingredients',
        items: ['Spices', 'Herbs'],
      },
    ],
    usage: {
      mixWith: ['Water', 'Milk'],
      instructions: ['Mix 2-3 tablespoons with water or milk', 'Stir well', 'Serve warm or cold'],
    },
    targetAudience: ['Entire Family'],
  },
  {
    id: 'kids-growth-mix',
    slug: 'kids-growth-mix',
    name: 'Kids Growth Mix',
    category: 'kids-growth',
    categoryLabel: 'Kids Nutrition',
    tagline: 'Natural nutrition for healthy child development',
    description: 'A specially formulated mix for children aged 3+ years, designed to support healthy growth, brain development, and strong immunity. Contains essential nutrients for child development.',
    mainBenefits: [
      { name: 'Healthy Growth', icon: '📈' },
      { name: 'Brain Development', icon: '🧠' },
      { name: 'Better Immunity', icon: '🛡️' },
      { name: 'Strong Bones', icon: '🦴' },
      { name: 'Rich Calcium', icon: '🥛' },
      { name: 'Rich Iron', icon: '🔴' },
      { name: 'Rich Protein', icon: '💪' },
      { name: 'Natural Energy', icon: '⚡' },
    ],
    features: [
      'No Artificial Colours',
      'No Artificial Flavours',
      'No Preservatives',
      '100% Natural',
      'Kid-Friendly Taste',
    ],
    ingredients: [
      {
        category: 'Millets',
        items: ['Sprouted Ragi', 'Foxtail Millet', 'Little Millet'],
      },
      {
        category: 'Grains',
        items: ['Brown Rice', 'Oats', 'Red Rice'],
      },
      {
        category: 'Pulses',
        items: ['Green Gram', 'Bengal Gram', 'Masoor Dal'],
      },
      {
        category: 'Legumes',
        items: ['Chickpea', 'Green Peas'],
      },
      {
        category: 'Nuts',
        items: ['Almond', 'Walnut', 'Cashew'],
      },
      {
        category: 'Seeds',
        items: ['White Sesame', 'Pumpkin Seeds'],
      },
      {
        category: 'Functional Ingredients',
        items: ['Banana Powder', 'Dates Powder'],
      },
    ],
    usage: {
      mixWith: ['Milk', 'Water'],
      instructions: ['Mix 2 tablespoons with warm milk', 'Stir well', 'Add honey if desired'],
    },
    targetAudience: ['Children 3+ Years'],
  },
  {
    id: 'weight-management-mix',
    slug: 'weight-management-mix',
    name: 'Weight Management Mix',
    category: 'weight-management',
    categoryLabel: 'Weight Management',
    tagline: 'Natural support for healthy weight management',
    description: 'A low-calorie, high-fiber mix designed to support healthy weight management. Rich in plant protein and functional ingredients that keep you full longer while providing complete nutrition.',
    mainBenefits: [
      { name: 'High Fiber', icon: '🌾' },
      { name: 'Keeps You Full Longer', icon: '😋' },
      { name: 'Low Glycemic Index', icon: '📊' },
      { name: 'Plant Protein', icon: '🌱' },
      { name: 'Better Digestion', icon: '🔄' },
      { name: 'Gut Health', icon: '💚' },
      { name: 'Rich in Antioxidants', icon: '🍇' },
    ],
    features: [
      'No Added Sugar',
      'Plant Based',
      'High Fiber',
      '100% Natural Ingredients',
      'Supports Weight Management',
    ],
    ingredients: [
      {
        category: 'Millets',
        items: ['Foxtail Millet', 'Little Millet', 'Barnyard Millet', 'Kodo Millet', 'Pearl Millet'],
      },
      {
        category: 'Grains',
        items: ['Oats', 'Barley'],
      },
      {
        category: 'Pulses',
        items: ['Horse Gram', 'Green Gram', 'Chickpeas'],
      },
      {
        category: 'Seeds',
        items: ['Flax Seeds', 'Chia Seeds', 'Pumpkin Seeds', 'Sunflower Seeds'],
      },
      {
        category: 'Nuts',
        items: ['Almond'],
      },
      {
        category: 'Functional Ingredients',
        items: ['Psyllium Husk', 'Dry Ginger', 'Cinnamon', 'Cumin', 'Black Pepper', 'Fenugreek'],
      },
    ],
    usage: {
      mixWith: ['Water', 'Milk'],
      instructions: ['Mix 2 tablespoons with warm water or milk', 'Stir well', 'Consume in the morning'],
    },
    targetAudience: ['Adults', 'Weight Conscious Individuals'],
  },
  {
    id: 'weight-gain-mix',
    slug: 'weight-gain-mix',
    name: 'Weight Gain Mix',
    category: 'weight-gain',
    categoryLabel: 'Weight Gain',
    tagline: 'Natural nutrition for healthy weight gain',
    description: 'A high-protein, high-calorie mix designed to support healthy weight gain and muscle building. Contains nutrient-dense ingredients with natural dates powder for sustained energy.',
    mainBenefits: [
      { name: 'Healthy Weight Gain', icon: '📈' },
      { name: 'High Protein', icon: '💪' },
      { name: 'High Energy', icon: '⚡' },
      { name: 'Muscle Building', icon: '🏋️' },
      { name: 'Strength Improvement', icon: '💯' },
      { name: 'Rich Calories', icon: '🔥' },
      { name: 'Vitamins & Minerals', icon: '✨' },
    ],
    features: [
      'No Artificial Colours',
      'No Artificial Flavours',
      'No Refined Sugar',
      '100% Natural Ingredients',
      'High Calorie Density',
    ],
    ingredients: [
      {
        category: 'Base Millets',
        items: ['Sprouted Ragi', 'Pearl Millet', 'Foxtail Millet', 'Kodo Millet', 'Little Millet', 'Wheat'],
      },
      {
        category: 'Rice',
        items: ['Red Rice'],
      },
      {
        category: 'Pulses',
        items: ['Green Gram', 'Bengal Gram', 'Black Gram', 'Horse Gram'],
      },
      {
        category: 'Nuts',
        items: ['Groundnut', 'Almond', 'Cashew', 'Pistachio'],
      },
      {
        category: 'Seeds',
        items: ['Pumpkin Seeds', 'Sesame', 'Flax Seeds'],
      },
      {
        category: 'Natural Sweeteners',
        items: ['Dates Powder'],
      },
      {
        category: 'Spices',
        items: ['Cardamom', 'Dry Ginger'],
      },
    ],
    usage: {
      mixWith: ['Milk', 'Water'],
      instructions: ['Mix 3 tablespoons with warm milk', 'Stir well', 'Add dates powder or honey for extra calories'],
    },
    targetAudience: ['People Seeking Healthy Weight Gain'],
  },
  {
    id: 'diabetic-friendly-mix',
    slug: 'diabetic-friendly-mix',
    name: 'Diabetic Friendly Health Mix',
    category: 'diabetic-friendly',
    categoryLabel: 'Diabetic Care',
    tagline: 'Carefully formulated for blood sugar support',
    description: 'A specially formulated mix for diabetic individuals and those conscious of sugar intake. Low glycemic index, high fiber, and rich in minerals that support blood sugar balance.',
    mainBenefits: [
      { name: 'Low Glycemic Index', icon: '📊' },
      { name: 'High Fiber', icon: '🌾' },
      { name: 'Plant Protein', icon: '🌱' },
      { name: 'Blood Sugar Support', icon: '💉' },
      { name: 'Heart Friendly', icon: '❤️' },
      { name: 'Rich Magnesium', icon: '✨' },
      { name: 'Rich Zinc', icon: '⭐' },
      { name: 'Rich Antioxidants', icon: '🍇' },
    ],
    features: [
      'Refined Flour Free',
      'Added Sugar Free',
      'Artificial Sweeteners Free',
      'No Preservatives',
      'No Artificial Additives',
      'Diabetic Friendly',
    ],
    ingredients: [
      {
        category: 'Millets',
        items: ['Foxtail Millet', 'Little Millet', 'Barnyard Millet', 'Kodo Millet'],
      },
      {
        category: 'Grains',
        items: ['Steel Cut Oats', 'Barley'],
      },
      {
        category: 'Pulses',
        items: ['Green Gram', 'Horse Gram', 'Bengal Gram', 'Masoor Dal', 'Soybean'],
      },
      {
        category: 'Nuts',
        items: ['Almond', 'Walnut'],
      },
      {
        category: 'Seeds',
        items: ['Flax Seed', 'Chia Seed', 'Pumpkin Seed', 'White Sesame'],
      },
      {
        category: 'Functional Ingredients',
        items: ['Fenugreek', 'Cinnamon', 'Moringa Powder', 'Dry Ginger'],
      },
    ],
    usage: {
      mixWith: ['Water', 'Milk'],
      instructions: ['Mix 2-3 tablespoons with warm water or unsweetened milk', 'Stir well', 'Consume in the morning or as per diabetologist advice'],
    },
    targetAudience: ['Diabetic Individuals', 'Sugar Conscious Individuals'],
  },
];

export const productCategories = [
  { id: 'family-health', label: 'Family Health' },
  { id: 'kids-growth', label: 'Kids Growth' },
  { id: 'weight-management', label: 'Weight Management' },
  { id: 'weight-gain', label: 'Weight Gain' },
  { id: 'diabetic-friendly', label: 'Diabetic Friendly' },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getAllProductCategories() {
  return productCategories;
}
