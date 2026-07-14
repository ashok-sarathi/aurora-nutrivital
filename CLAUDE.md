
# CLAUDE.md

# Use this @AGENTS.md

# Aurora Nutrivital

## Project Overview

Aurora Nutrivital is a premium Indian health and nutrition brand focused on creating natural, millet-based nutritional food products using traditional ingredients combined with modern nutritional science.

The objective of this project is to build a modern, premium, responsive company website that showcases Aurora Nutrivital's products, brand story, ingredients, health benefits, manufacturing quality, and contact information.

The website should communicate trust, purity, nutrition, and premium quality while maintaining a clean, elegant, and modern design similar to high-end health food brands.

The website is currently frontend-only using static TypeScript data files. It should be designed in a way that allows seamless migration to a future .NET Web API without major UI changes.

---

# Business Domain

Industry

- Health Foods
- Nutrition
- Millets
- Functional Foods
- Natural Wellness
- Traditional Indian Superfoods

---

# Brand Identity

Brand Name

Aurora Nutrivital

Tagline

Ancient Nutrition for Modern Life

Core Values

- Natural Ingredients
- Traditional Nutrition
- Scientific Formulation
- Family Wellness
- Honest Manufacturing
- Premium Quality
- Sustainable Lifestyle

Brand Personality

- Premium
- Trustworthy
- Modern
- Healthy
- Natural
- Elegant
- Informative
- Family Friendly

---

# Design Philosophy

The website should feel like a premium wellness brand rather than an e-commerce website.

Design inspiration should be similar to:

- Apple
- Vercel
- Notion
- Patagonia
- Whole Foods
- Organic India
- Tata Soulfull

Focus on

- Large whitespace
- Beautiful typography
- Smooth animations
- Soft shadows
- Rounded corners
- Premium cards
- Elegant gradients
- Minimal UI
- High quality photography

Avoid

- Clutter
- Flashy animations
- Bright saturated colors
- Cheap looking UI
- Busy layouts

---

# Color Palette

Primary Green

Represents nature, agriculture, wellness and nutrition.

Accent Gold

Represents premium quality and tradition.

Cream / Off White

Represents purity and organic food.

Earth Brown

Represents grains, millets and agriculture.

Supporting Colors

- White
- Zinc
- Stone
- Emerald
- Olive
- Warm Gray

---

# Typography

Use clean modern fonts.


## Technology Stack

  Technology      Package
  --------------- ---------------
  Framework       Next.js
  UI Library      React
  Language        TypeScript
  Styling         Tailwind CSS
  UI Components   shadcn/ui
  Animation       Framer Motion
  Icons           Lucide React
  Theme           next-themes

## Installed Packages

### Core

-   next
-   react
-   react-dom
-   typescript

### Styling

-   tailwindcss
-   @tailwindcss/postcss

### UI

-   shadcn/ui

Recommended components:

-   button
-   card
-   badge
-   input
-   textarea
-   dialog
-   sheet
-   accordion
-   carousel
-   navigation-menu
-   dropdown-menu
-   tooltip
-   separator
-   avatar

### Animation

-   framer-motion

### Icons

-   lucide-react

### Theme

-   next-themes

### Utilities

-   clsx
-   tailwind-merge
-   class-variance-authority

### Linting

-   eslint
-   eslint-config-next

## Folder Structure

``` text
src/
├── app/
├── components/
│   ├── common/
│   ├── layout/
│   ├── products/
│   └── ui/
├── data/
├── hooks/
├── lib/
├── providers/
├── styles/
└── types/
```

## Data Source

Current:

-   src/data/products.ts
-   src/data/upcoming.ts

Future:

-   .NET Web API
-   PostgreSQL

## Current Features

-   Product Showcase
-   Upcoming Products
-   About Page
-   Contact Page
-   Responsive Layout
-   Dark / Light Mode
-   SEO Ready
-   Static TypeScript Data

## Future Roadmap

-   .NET Backend
-   PostgreSQL
-   Authentication
-   Admin Dashboard
-   CMS
-   Blog
-   Search
-   Product Filters
-   Analytics

## Coding Standards

-   Use TypeScript everywhere.
-   Prefer Server Components.
-   Use Client Components only when necessary.
-   Use Tailwind CSS for styling.
-   Use shadcn/ui components.
-   Use Lucide React icons.
-   Use Framer Motion only when animations are needed.
-   Keep components reusable.
-   Store static data in `/src/data`.
-   Store interfaces in `/src/types`.
-   Use `@/*` import aliases.
-   Prefer `async/await`.
-   Avoid `any`.

## AI Instructions

When generating code:

-   Follow Next.js App Router conventions.
-   Use functional React components.
-   Use the Next.js `Image` component.
-   Use the Next.js `Link` component.
-   Write reusable and maintainable code.
-   Avoid duplication.
-   Add comments only when they improve clarity.

## Expected Dependencies

### Dependencies

-   next
-   react
-   react-dom
-   framer-motion
-   lucide-react
-   next-themes
-   clsx
-   tailwind-merge
-   class-variance-authority

### Dev Dependencies

-   typescript
-   tailwindcss
-   @tailwindcss/postcss
-   eslint
-   eslint-config-next

## Optional Packages

-   react-hook-form
-   zod
-   @hookform/resolvers
-   embla-carousel-react
-   tw-animate-css
-   recharts
-   react-markdown
-   date-fns
-   @vercel/analytics
