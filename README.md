# 🦏 Rhino - Enterprise Blockchain Infrastructure

A modern Next.js website for Rhinostake (RHINO), the premier blockchain infrastructure provider for enterprises building the future of Web3.

## 🚀 Overview

This website showcases RHINO's enterprise-grade blockchain infrastructure services, including:

- **Validator Operations** - Enterprise-grade staking with institutional security
- **RPC Infrastructure** - High-performance API endpoints with global load balancing
- **Cross-Chain Connectivity** - IBC channel support and interoperability solutions
- **Investment Services** - Strategic funding for Web3 projects
- **Public Resources** - Free blockchain APIs and developer tools

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/) with custom design system
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + custom components
- **Typography**: Cal Sans + Manrope fonts
- **Animations**: Custom CSS animations and transitions
- **Form Handling**: React Hook Form with Zod validation
- **Environment**: TypeScript with strict configuration

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact-us/        # Contact form page
│   ├── investment/        # Investment services
│   ├── networks/          # Supported blockchain networks
│   ├── resources/         # API documentation & resources
│   └── page.tsx           # Homepage
├── components/
│   ├── sections/          # Page sections (Hero, StandardSection, etc.)
│   └── ui/                # Reusable UI components
├── styles/
│   └── globals.css        # Global styles and design tokens
├── util/
│   ├── types.ts           # TypeScript interfaces
│   └── validations.ts     # Form validation schemas
└── env.js                 # Environment variable validation
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **Colors**: Cool Gray (primary) + Bright Red (accent) palettes
- **Typography**: Cal Sans headings + Manrope body text
- **Components**: Consistent button variants, cards, and interactive elements
- **Responsive**: Mobile-first design with breakpoints for tablet/desktop

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rhino-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Add your environment variables
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)**

## 📋 Available Scripts

- `npm run dev` - Start development server with Turbo
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run typecheck` - Run TypeScript type checking
- `npm run format:check` - Check code formatting
- `npm run format:write` - Format code with Prettier

## 🏗️ Key Features

### Interactive Components
- **Blockchain Grid** - Hover effects for supported networks
- **Service Cards** - Animated service showcases
- **Contact Forms** - Multi-step form with validation
- **Navigation** - Responsive navbar with mobile menu

### Performance Optimizations
- Next.js App Router for optimal routing
- Image optimization with Next.js Image component
- CSS custom properties for consistent theming
- Responsive design patterns

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast color ratios

## 🔧 Configuration Files

- [`tsconfig.json`](tsconfig.json) - TypeScript configuration
- [`tailwind.config.js`](postcss.config.js) - Tailwind CSS setup via PostCSS
- [`components.json`](components.json) - shadcn/ui configuration
- [`eslint.config.js`](eslint.config.js) - ESLint rules
- [`prettier.config.js`](prettier.config.js) - Code formatting

## 🌐 Deployment

The project is optimized for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- Railway
- Docker containers

Build the project with:
```bash
npm run build
```


---
