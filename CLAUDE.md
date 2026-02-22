# CLAUDE.md — Portfolio (mgmwood.com)

Personal portfolio site for Michael Wood. Built with Next.js 15 App Router, TypeScript, Tailwind CSS, MongoDB, and Clerk auth.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint check
```

No test suite is configured.

## Path Alias

`@/*` resolves to `./src/*` (configured in `tsconfig.json`).

## Project Structure

```
src/
  app/
    (root)/          # All page routes (home, blog, projects, gallery, contact, etc.)
    (sections)/      # Homepage section components (hero, about, contact, header, footer, carousels)
    api/             # API route handlers
    providers/       # Client-side providers (Toast, GoogleCaptchaWrapper)
    layout.tsx       # Root layout — Clerk, reCAPTCHA, Toast, Header, SideNav, Analytics
    globals.css      # Tailwind directives + CSS variables for theming
    middleware.ts    # Clerk auth middleware — protects /writePost and /imageUpload
  components/
    ui/              # shadcn/ui components — DO NOT edit or lint these
    forms/           # contact-form.tsx, blogForm.tsx
    blog-components/ # Blog-specific display components
    editor/          # MDX editor (editor.tsx) and preview (Preview.tsx)
    nav/             # side-nav.tsx, signOut.tsx
  lib/
    dbConnect.ts     # MongoDB connection with readyState reuse
    api.ts           # File-system helpers for _posts/ markdown
    markdowntoHTML.ts
    utils.tsx        # cn() — clsx + tailwind-merge
    validations.ts   # Zod: SignInSchema
    constants.ts
    models/          # Mongoose schemas: posts.ts, author.ts, photoSchema.ts, contactSchema.ts, user.model.ts, blogPostSchema.ts
  hooks/
    use-scroll.tsx   # Returns bool based on scroll threshold
  config.tsx         # Nav items for signed-in vs signed-out (uses lucide-react icons)
  instrumentation.ts # Server startup — pre-warms MongoDB connection
_posts/              # Static markdown blog posts (hello.md, test.md)
public/              # Static assets (HERO2.png, CV.pdf, etc.)
```

## Tech Stack

| Category | Library | Notes |
|---|---|---|
| Framework | Next.js 15 | App Router, server components by default |
| Language | TypeScript 5 | Strict mode on |
| Styling | Tailwind CSS 3 | Custom brand palette, dark mode via class |
| Components | shadcn/ui + Radix UI | Lives in `src/components/ui/` |
| Auth | Clerk (`@clerk/nextjs`) | Replaces next-auth for all auth |
| Database | MongoDB + Mongoose | Atlas cloud |
| Forms | react-hook-form + Zod | Resolvers via `@hookform/resolvers` |
| Animations | Framer Motion + tailwindcss-animate | |
| Email | Resend | Contact form via server action |
| Images | Cloudinary + next-cloudinary | Upload preset: `"Blog-Upload"` |
| MDX | next-mdx-remote + @mdxeditor/editor | Rendering + rich editing |
| Code highlighting | bright | Inside MDX Preview component |
| Toasts | Sonner | Wrapped in `src/app/providers/Toast.tsx` |
| Carousels | embla-carousel-react | |
| Gallery | react-photo-album + yet-another-react-lightbox | |
| Analytics | @vercel/analytics + @vercel/speed-insights | Auto-tracked |
| Bot protection | react-google-recaptcha-v3 | v3, score threshold 0.5 |

## Tailwind Custom Colors

Defined in `tailwind.config.ts`:

| Token | Hex | Use |
|---|---|---|
| `fedblue` | `#03045E` | Primary brand (dark navy) |
| `honblue` | `#0077B6` | Secondary |
| `pacific` | `#00B4D8` | Accent |
| `lb` | `#90E0EF` | Light accent |
| `cyan` | `#CAF0F8` | Lightest accent |

Dark mode is class-based (`darkMode: 'class'`).

## Authentication (Clerk)

- Provider wraps the root layout in `src/app/layout.tsx`
- Middleware (`src/middleware.ts`) protects `/writePost(.*)` and `/imageUpload(.*)` — requires sign-in
- Sign-in page: `src/app/(root)/sign-in/[[...sign-in]]/page.tsx`
- Use `useUser()` from `@clerk/nextjs` in client components to check auth state
- Nav items differ for signed-in vs signed-out users — see `src/config.tsx`
- `next-auth` is installed but **not used** — Clerk handles all auth

## Database (MongoDB + Mongoose)

**Connection:** Always use `connectToDB()` from `src/lib/dbConnect.ts` before any Mongoose query. It reuses existing connections (checks `mongoose.connection.readyState`).

**Models:**

| Model | File | Key Fields |
|---|---|---|
| `Post` | `lib/models/posts.ts` | title, date, coverImage, author (ref Author), excerpt, content, slug |
| `Author` | `lib/models/author.ts` | name, picture |
| `Photo` | `lib/models/photoSchema.ts` | src, description, height, width (indexed on createdAt) |
| `User` | `lib/models/user.model.ts` | username, password (bcrypt) |

Post timestamps: `createdAt` → `date`, `updatedAt` → `updated_at`.

## API Routes

| Route | Method | Purpose |
|---|---|---|
| `/api/posts` | GET | List all posts from MongoDB |
| `/api/posts` | POST | Create post (validated with Zod blogPostSchema) |
| `/api/posts/[id]` | GET | Fetch single post by ObjectId |
| `/api/reCaptchaSubmit` | POST | Verify reCAPTCHA v3 token |
| `/api/warmup` | GET | Pre-warm DB connection |

## Forms Pattern

All forms use `react-hook-form` + Zod resolver + server actions or fetch:

1. Zod schema defined in `src/lib/models/` (e.g. `blogPostSchema.ts`, `contactSchema.ts`)
2. `useForm` with `zodResolver(schema)` in the client component
3. Contact form submits via server action (`src/app/api/_actions.ts → sendEmail()`)
4. Blog form submits via `fetch('/api/posts', { method: 'POST' })`
5. Toast notifications (Sonner) for success/error feedback

## Blog Content

Two parallel systems exist:

1. **File-based** — Markdown files in `_posts/`, parsed with `gray-matter`. Accessed via helpers in `src/lib/api.ts` (`getPostBySlug`, `getAllPosts`). Mostly static/legacy.
2. **MongoDB** — Dynamic posts created via the protected `/writePost` page. Rendered at `/blog/post/[id]` using `next-mdx-remote/rsc`. This is the active system.

MDX Preview uses `bright` for code block syntax highlighting.

## Image Uploads (Cloudinary)

- Upload widget: `CldUploadButton` from `next-cloudinary` (used on `/imageUpload` page)
- Upload preset name: `"Blog-Upload"` (configured in Cloudinary dashboard)
- Images served from `res.cloudinary.com` — allowed in `next.config.mjs` remotePatterns
- Uploaded photo metadata stored in MongoDB `Photo` collection

## shadcn/ui

- Components at `src/components/ui/`
- Config at `components.json`
- These files are excluded from ESLint (`ignorePatterns: ["components/ui/**"]`) — do not modify the linting config for them
- Add new shadcn components with `npx shadcn@latest add <component>`

## ESLint Rules

`.eslintrc.json` extends `next/core-web-vitals`, `standard`, `plugin:tailwindcss/recommended`, `prettier`.

Import order rule enforced:
```
builtin → external → internal → parent/sibling → index → object
```
With newlines between groups and alphabetical ordering. Apply this when adding new imports.

## Environment Variables

All required in `.env.local`:

```bash
MONGODB_URI=                           # MongoDB Atlas connection string
CLERK_SECRET_KEY=                      # Clerk backend key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=     # Clerk frontend key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=        # Google reCAPTCHA v3 site key
RECAPTCHA_SECRET_KEY=                  # Google reCAPTCHA v3 secret
RESEND_SECRET_KEY=                     # Resend email API key
NEXT_PUBLIC_API_BASE_URL=              # Full base URL (e.g. https://mgmwood.com or http://localhost:3000)
```

## Conventions & Gotchas

- **Server vs Client**: All components are server components by default. Add `'use client'` only when using hooks, event listeners, or browser APIs.
- **Route groups**: `(root)` and `(sections)` are route groups — the folder name doesn't appear in the URL.
- **No global state**: No Redux/Zustand. Use React state, react-hook-form, or server components.
- **`cn()` utility**: Use `cn()` from `src/lib/utils.tsx` for all conditional Tailwind class merging.
- **Dynamic MDX editor import**: `@mdxeditor/editor` is large — it's dynamically imported in `blogForm.tsx` to avoid SSR issues.
- **DB warmup**: `src/instrumentation.ts` calls `/api/warmup` on server start to avoid Vercel cold-start latency on first DB query.
- **`next-auth` is unused**: Despite being installed, all authentication is handled by Clerk.
- **Two date libraries**: Both `date-fns` and `moment` are installed. Blog posts use `moment` for display formatting.
- **Typewriter text in Hero**: Uses `react-typed` (not `typewriter-effect`, which is also installed).
- **Current branch**: `blog-latest`. Main branch is `main`.
