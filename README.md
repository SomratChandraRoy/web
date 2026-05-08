# Building Design Studio Web

A professional, production-ready web application for a building and interior design studio built with React Router v7, Hono backend, and TailwindCSS.

## 🎯 Features

- **React Router v7 SSR**: Server-side rendering with filesystem-based routing
- **Hono Backend**: Lightweight, fast API server
- **PostgreSQL Database**: Powered by NeonDB serverless database
- **Authentication**: Built-in auth with Auth.js/Hono Auth
- **SEO Optimized**: Meta tags, canonical URLs, structured data, and sitemap
- **Premium Design**: Modern, responsive UI with TailwindCSS v4
- **Production Ready**: Optimized builds, error handling, and security

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Setup environment variables (copy from .env.example)
cp .env.example .env
# Edit .env with your configuration
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:4000
```

### Production Build

```bash
# Build for production
npm run build

# This will:
# 1. Build React Router app
# 2. Generate server bundle
# 3. Prerender static pages
# 4. Copy to dist/ for deployment

# Test production build locally
npm start
```

## 📁 Project Structure

```
├── src/
│   ├── app/              # React Router file-based routes
│   │   ├── layout.jsx    # Root layout wrapper
│   │   ├── page.jsx      # Homepage
│   │   ├── routes.ts     # Dynamic route generation
│   │   ├── api/          # API routes (/api/*)
│   │   └── [route]/      # Nested routes
│   ├── components/       # Reusable components
│   ├── utils/           # Utility functions (SEO, auth, etc.)
│   ├── data/            # Static data (site config, projects, etc.)
│   ├── client.d.ts      # Client-side types
│   └── global.d.ts      # Global type definitions
│
├── __create/            # Build-time generation
│   ├── index.ts         # Hono server setup
│   ├── route-builder.ts # Dynamic API route registration
│   └── ...
│
├── public/              # Static assets
│   ├── logo.png         # Logo image
│   ├── favicon.svg      # Favicon
│   ├── robots.txt       # SEO robots directive
│   └── manifest.webmanifest
│
├── dist/                # Production build output
│   ├── client/          # Static files
│   └── server/          # SSR entry point
│
├── build/               # React Router build output (before copying to dist/)
├── scripts/
│   └── setup-dist.js    # Post-build setup script
│
├── package.json         # Dependencies & scripts
├── vite.config.ts       # Vite build config
├── react-router.config.ts    # React Router config
├── tailwind.config.js   # Tailwind styling
├── tsconfig.json        # TypeScript config
│
├── .env.example         # Environment variables template
├── DEPLOYMENT.md        # Deployment guide (Appwrite, Docker, etc.)
├── PRODUCTION_CHECKLIST.md
└── README.md            # This file
```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# Database
DATABASE_URL=postgresql://user:password@host:5432/dbname

# Authentication
AUTH_SECRET=your-random-secret-32-chars-minimum

# Site
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# CORS
CORS_ORIGINS=https://yourdomain.com

# Optional: Enable design mode in dev
NEXT_PUBLIC_ENABLE_DESIGN_MODE=true
```

### Business Details

Edit `src/data/site.ts`:

```typescript
export const site = {
  name: "Building Design Studio",
  phone: "01323-273110",
  whatsapp: "01323-273110",
  email: "contact@example.com",
  logo: "/logo.png",
  address: "Your address",
  // ... more config
};
```

### Branding

- Update `public/logo.png` with your logo
- Update colors in `tailwind.config.js`
- Update favicon in `public/favicon.svg`
- Customize components in `src/components/`

## 📊 Available Scripts

```bash
# Development
npm run dev              # Start dev server (http://localhost:4000)

# Building
npm run build            # Build for production
npm run post-build       # Copy build to dist/ (runs automatically)

# Production
npm start                # Start production server

# Type Checking
npm run typecheck        # Check TypeScript & generate types
```

## 🌐 Pages

- `/` - Homepage
- `/about` - About page
- `/services` - Services showcase
- `/portfolio` - Project portfolio
- `/portfolio/[id]` - Individual project details
- `/contact` - Contact form
- `/errors/*` - Error demonstration pages (dev only)

## 🔌 API Routes

- `GET /api/sitemap` - XML sitemap for SEO
- `POST /api/contact` - Contact form submission
- `GET /api/auth/session` - Check auth session
- `POST /api/auth/signin` - Sign in endpoint
- `POST /api/auth/signup` - Sign up endpoint

## 🎨 Styling

- **Framework**: TailwindCSS v4
- **Approach**: Utility-first CSS
- **Responsive**: Mobile-first breakpoints
- **Dark Mode**: Pre-configured, can be enabled

## 🔐 Security

- Environment variables not exposed to client (NEXT*PUBLIC* prefix required)
- CORS properly configured
- Auth.js prevents CSRF attacks
- Content Security Policy ready
- XSS protection via React

## 📈 SEO

- Meta tags on all pages
- OpenGraph & Twitter Card support
- JSON-LD structured data
- Canonical URLs
- Sitemap generation
- robots.txt
- Mobile-responsive design

## 🚀 Deployment

### Appwrite

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete instructions.

```bash
# Build
npm run build

# Deploy to Appwrite (via CLI or console)
# Appwrite will run: npm start
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Other Platforms

- **Vercel**: [React Router on Vercel](https://reactrouter.com/start/deployment/vercel)
- **Netlify**: [React Router on Netlify](https://reactrouter.com/start/deployment/netlify)
- **Any Node.js Host**: Run `npm start`

## 🧪 Testing

```bash
# Run tests
npm run test

# Watch mode
npm run test:watch
```

## 🐛 Troubleshooting

### Build Issues

```bash
# Clear cache and rebuild
rm -rf node_modules dist build
npm install
npm run build
```

### Development Server Won't Start

- Check port 4000 is not in use
- Verify Node.js version: `node --version` (need 18+)
- Check environment variables in `.env`

### Database Connection Failed

- Verify `DATABASE_URL` in `.env`
- Check NeonDB is running
- Ensure firewall allows connections

### SSR Issues

- Check server logs in `/build/server`
- Verify all imports are ES modules compatible
- Check for circular dependencies

## 📚 Documentation

- [React Router Docs](https://reactrouter.com)
- [Hono Docs](https://hono.dev)
- [TailwindCSS Docs](https://tailwindcss.com)
- [Auth.js Docs](https://authjs.dev)
- [NeonDB Docs](https://neon.tech/docs)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a PR

## 📝 License

[Add your license here]

## 📞 Support

- Email: contact@example.com
- Phone: 01323-273110
- WhatsApp: 01323-273110

---

**Status**: ✅ Production Ready
**Last Updated**: May 2026
**Version**: 1.0.0
