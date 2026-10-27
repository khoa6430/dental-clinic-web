<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md — Nha Khoa Thu Mảnh (`dental-clinic-web`)

Operational instructions for AI coding agents (Antigravity, Claude Code, Cursor, GitHub Copilot, Codex).

## 1. Project Context
- **Domain:** Dental clinic marketing & appointment booking web application for **Nha Khoa Thu Mảnh**.
- **Clinic Info (Single Source of Truth in `src/lib/constants/site.ts`):**
  - **Name:** Nha Khoa Thu Mảnh (`BS. Thu Mảnh`)
  - **Website:** `https://nhakhoathumanh.com` (`https://www.nhakhoathumanh.com`)
  - **Address:** Số 11, Đường số 20, khu phố Hưng Thịnh, Đồng Nai (Google Maps Plus Code: `W3RG+CR2`)
  - **Phone:** `0941 829 179` (`tel:0941829179`)
  - **Hours:** Mở cửa phục vụ 24/7 (`Cả tuần, 24 giờ mỗi ngày (24/7)`)
  - **Rating:** `4.7/5` sao trên Google Maps

## 2. Setup, Build & Verification Commands
- **Install dependencies:** `npm install` (or `yarn install`)
- **Start dev server:** `npm run dev`
- **Type-check (Always run after edits):** `npx tsc --noEmit`
- **Lint check:** `npm run lint`
- **Production build:** `npm run build`

## 3. Tech Stack & Coding Conventions
- **Framework:** Next.js `16.2.1` (App Router, `src/app/`), React `19.2`, TypeScript `5` (strict mode, no `any`).
- **Styling & UI:** Tailwind CSS `v4` (`@import "tailwindcss"` in `src/app/globals.css`) + `shadcn/ui` (`src/components/ui/`) + `lucide-react` icons.
- **Animations:** `framer-motion` (`v12`) for scroll-reveal (`whileInView`, `viewport={{ once: true }}`) and micro-interactions.
- **Forms & Validation:** `react-hook-form` (`v7`) + `zod` (`v4`) + `@hookform/resolvers`.
- **State & Data Fetching:** `@tanstack/react-query` (`v5`, wrapped in `QueryProvider`) + `zustand` (`v5`) + `apiClient` (`src/lib/api/client.ts`) targeting the C# ASP.NET Core Web API (`NEXT_PUBLIC_API_URL`).
- **Path Aliases:** Always use `@/*` (mapped to `./src/*`) instead of deep relative imports.
- **Page Architecture:** Keep `src/app/<route>/page.tsx` as a Server Component exporting `metadata: Metadata`, and compose modular section components from `src/components/pages/<feature>/` or `src/components/sections/`.

## 4. Boundaries & Safety Guardrails (Never Do)
- **Never** hardcode clinic contact details (phone, address, hours) in components; always import `siteConfig` from `@/lib/constants/site`.
- **Never** use legacy Tailwind v3 `tailwind.config.js` syntax; configure theme tokens in `src/app/globals.css` under `:root` and `@theme inline`.
- **Never** commit `.env` or secret credentials (only `.env.example` is tracked).
- **Always** read `node_modules/next/dist/docs/` when working with Next.js 16 APIs (e.g., async `params`/`searchParams`, metadata conventions).
- **Always** ensure forms gracefully handle offline backend state during frontend preview before closing/showing confirmation dialogs.

## 5. Documentation Map (`docs/`)
Read these detailed references inside `docs/` when working on specific areas:
- [`docs/README.md`](./docs/README.md) — Project overview, clinic profile, completed features & roadmap phases.
- [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) — System architecture, directory tree, route map & component breakdown.
- [`docs/DESIGN_SYSTEM.md`](./docs/DESIGN_SYSTEM.md) — Color palette (`--brand-*`), typography, layout classes & UI patterns.
- [`docs/API_SPEC.md`](./docs/API_SPEC.md) — Frontend ↔ C# ASP.NET Core 9 Web API contract, DTOs & database schema.
- [`docs/DEPLOYMENT_AND_DOMAIN.md`](./docs/DEPLOYMENT_AND_DOMAIN.md) — Domain registrar (Spaceship), Cloudflare DNS nameservers, Workers static export CI/CD & custom domain routing (`nhakhoathumanh.com`).
