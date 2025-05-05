# Plus Marketing - Car Dealership Landing Page

A modern, responsive car dealership landing page built with Next.js, TypeScript, and TailwindCSS.

## Features

- Responsive design optimized for mobile, tablet, and desktop
- Server-side rendering with Next.js
- Modern UI with dark/light theme support
- Animated page transitions and scroll effects
- Form validation with React Hook Form
- SEO-friendly metadata

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/plus-marketing.git
cd plus-marketing
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
/app               # Next.js App Router
  /about           # About page
  /contact         # Contact page
  /services        # Services page
  /globals.css     # Global styles
  /layout.tsx      # Root layout
  /page.tsx        # Home page
/components        # React components
  /home            # Home page sections
  /layout          # Layout components (Header, Footer)
  /theme           # Theme provider components
  /ui              # UI components
/hooks             # Custom React hooks
/lib               # Utility functions
/public            # Static assets
```

## Deployment to Vercel

1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Install the Vercel CLI:
```bash
npm install -g vercel
```

3. Deploy the project:
```bash
vercel
```

4. Follow the CLI prompts to complete the deployment.

## Image Optimization

Images are optimized using Next.js Image component with the following configuration:

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};
```

## Built With

- [Next.js](https://nextjs.org/) - React framework for server-side rendering
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component library
- [React Hook Form](https://react-hook-form.com/) - Form validation
- [Lucide React](https://lucide.dev/) - Icon library

## License

This project is licensed under the MIT License