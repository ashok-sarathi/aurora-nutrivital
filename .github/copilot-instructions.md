# Copilot Instructions for Aurora Nutrivital

## Build, Test, and Lint Commands

### Development
```bash
npm run dev          # Start dev server on http://localhost:3000
```

### Production
```bash
npm run build        # Build for production
npm run start        # Start production server
```

### Linting
```bash
npm run lint         # Run ESLint (powered by eslint-config-next)
```

**Note:** No test suite is currently configured. Future test setup should use Jest or Vitest.

## Architecture Overview

This is a **Next.js 16.2.10 project** with React 19.2.4 using the **App Router** pattern.

### Key Tech Stack
- **Framework:** Next.js 16.2.10 (with breaking changes from v15 - see note below)
- **Language:** TypeScript 5 (strict mode enabled)
- **Styling:** Tailwind CSS v4 with @tailwindcss/postcss
- **UI Components:** shadcn/ui (component library)
- **Utilities:** clsx, tailwind-merge, class-variance-authority
- **Icons:** Lucide React
- **Animation:** Framer Motion (use sparingly, only when needed)
- **Theme:** next-themes (supports light/dark mode)

### Project Structure
```
.
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   └── ui/                # shadcn/ui components
├── lib/
│   └── utils.ts           # Utility functions (exports cn() for Tailwind merging)
├── public/                # Static assets
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript config (baseUrl: "@/*" → root)
├── eslint.config.mjs      # ESLint rules (ESM format)
└── postcss.config.mjs     # PostCSS/Tailwind config
```

### Import Aliases
- `@/*` resolves to the project root (e.g., `@/lib/utils`, `@/components/ui/button`)

## Key Conventions

### 1. Component Strategy
- **Server Components by default** (the App Router pattern)
- Use `"use client"` directive sparingly—only for interactivity (state, event handlers, hooks)
- Keep components functional and use arrow functions

### 2. Styling
- Use **Tailwind CSS** for all styling (no CSS-in-JS)
- Use the `cn()` utility from `@/lib/utils` to safely merge Tailwind classes:
  ```tsx
  import { cn } from "@/lib/utils"
  
  export function MyComponent({ className }) {
    return <div className={cn("px-4 py-2", className)}>Content</div>
  }
  ```
- This utility handles class conflicts (e.g., conflicting padding or display properties)

### 3. TypeScript
- **Strict mode enabled** — no `any` types
- Define reusable types and interfaces (future location: `/types` directory)
- Use typed imports where available

### 4. Images and Links
- Always use **Next.js `Image` component** for images (optimization, lazy loading)
- Always use **Next.js `Link` component** for internal navigation
- Set `priority={true}` only for above-the-fold images

### 5. Data Management
- **Static data:** Store in `/data` directory as TypeScript files (see CLAUDE.md for future structure)
- **Future backend:** Planned .NET Web API integration with PostgreSQL
- Data structure is currently type-safe with TypeScript interfaces

### 6. Fonts
- Uses `next/font/google` to load Geist, Geist Mono, and Inter fonts
- Fonts are automatically optimized and don't require external network requests

### 7. Code Quality
- Write comments **only when they improve clarity**—not for obvious code
- Prefer self-documenting code with clear names
- Avoid duplication; extract reusable components and utilities

### 8. Dark Mode
- next-themes handles light/dark mode
- Use Tailwind's `dark:` prefix for dark mode styles
- Theme is stored in localStorage and synced with system preference

## Important Next.js Version Notes

**This project uses Next.js 16.2.10 with breaking changes from your training data.** Before writing any code:
1. Check the official [Next.js 16 documentation](https://nextjs.org/docs)
2. Read release notes for major API changes
3. Pay attention to deprecation warnings in the output

Key areas that may differ:
- App Router behavior and conventions
- Image optimization settings
- Environment variable handling
- API route patterns (if added)

## Linting Configuration

- Uses **ESLint 9** with `eslint-config-next` and TypeScript support
- Enforces Next.js core web vitals and best practices
- Config file is ESM format (`eslint.config.mjs`)
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Future Integration Points

- **Backend:** .NET Web API planned
- **Database:** PostgreSQL planned
- **Authentication:** To be implemented
- **Testing:** No test framework configured yet (recommend Jest or Vitest)
- **Admin Dashboard:** Planned feature

See CLAUDE.md for the complete roadmap and feature list.

## Resources

- [CLAUDE.md](../CLAUDE.md) — Project overview, technology stack, and roadmap
- [AGENTS.md](../AGENTS.md) — General AI agent instructions
- [Next.js Documentation](https://nextjs.org/docs) — Official docs
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) — Tailwind reference
- [shadcn/ui](https://ui.shadcn.com) — Component library documentation
