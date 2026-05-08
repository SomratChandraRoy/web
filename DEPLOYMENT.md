# Deployment Guide - Appwrite

This guide covers deploying the Building Design Studio web application to Appwrite.

## Prerequisites

- Appwrite Cloud or Self-Hosted Appwrite instance
- Node.js 18+ (Appwrite handles this)
- Environment variables configured

## Quick Start

### 1. Environment Variables

Create the following environment variables in your Appwrite project:

```env
# Database
DATABASE_URL=postgresql://user:password@host:port/database

# Authentication
AUTH_SECRET=your-secret-key-min-32-chars

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# CORS
CORS_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

### 2. Build Command

The build is automated in `package.json`:

```bash
npm run build
```

This will:

1. Build the application with React Router
2. Generate client and server bundles
3. Copy everything to the `dist/` folder for deployment

### 3. Start Command

```bash
npm start
```

This starts the React Router server on port 3000 (Appwrite will handle port mapping).

## Appwrite Deployment

### Using Appwrite CLI

```bash
# Initialize Appwrite
appwrite init

# Deploy
appwrite deploy functions --functionId=web
```

### Using Docker (Self-Hosted)

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

## Environment Variables Setup

### In Appwrite Console:

1. Go to your Function settings
2. Under **Environment Variables**, add:
   - `DATABASE_URL` - Your NeonDB or PostgreSQL connection string
   - `AUTH_SECRET` - A random 32+ character secret
   - `NEXT_PUBLIC_SITE_URL` - Your public domain
   - `CORS_ORIGINS` - Allowed domains

### Security Notes:

- Never commit `.env` files
- Keep `AUTH_SECRET` confidential
- Use strong, unique secrets in production
- Enable HTTPS only for production

## Database Setup

If using NeonDB:

1. Create a NeonDB project
2. Get the connection string
3. Run initial migrations if needed
4. Add `DATABASE_URL` to Appwrite environment variables

## Troubleshooting

### Build Failures

- Check Node.js version: `node --version` (should be 18+)
- Clear cache: `rm -rf node_modules dist build && npm install`
- Check logs: Review build output for specific errors

### Runtime Errors

- Check environment variables are set
- Verify database connection
- Check logs in Appwrite console
- Ensure all required secrets are configured

### Port Issues

- Appwrite assigns ports automatically
- The app listens on port 3000 by default
- Use environment variable `PORT` to override if needed

## Performance Tips

1. **Caching Headers**: Client assets have long-term caching enabled
2. **Compression**: GZip compression is automatic
3. **Code Splitting**: React Router automatically splits route bundles
4. **Database**: Use connection pooling (NeonDB handles this)

## Monitoring

Monitor your deployment via:

- Appwrite Console logs
- Error tracking (integrate Sentry if needed)
- Performance metrics
- Database query performance

## Rollback Procedure

1. Deploy previous version to new function
2. Update function routing
3. Test thoroughly
4. Switch traffic back if needed

## Support

For issues specific to:

- **Appwrite**: Check [Appwrite Docs](https://appwrite.io/docs)
- **React Router**: See [React Router Docs](https://reactrouter.com)
- **Hono**: Visit [Hono Docs](https://hono.dev)
