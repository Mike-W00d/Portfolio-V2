# Portfolio - Next.js App

## Stack

Next.js 16 (App Router), TypeScript, Tailwind CSS, MongoDB/Mongoose, Clerk auth, Cloudinary, shadcn/ui (Radix + CVA)

## Structure

- `src/app/` — App Router with route groups: `(root)`, `(sections)`, `api/`
- `src/components/` — UI components
- `src/lib/` — DB connection, models, utils, API helpers, validationss

## Commands

- `npm run build` — production build
- `npm run lint` — ESLint

## Conventions

- Use `src/lib/dbConnect.ts` for MongoDB connections
- Styling: Tailwind + `cn()` utility from `src/lib/utils.tsx`
- Components use shadcn/ui patterns (`components.json` config)
