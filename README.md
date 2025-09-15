# Cloudflare Workers vs RedwoodSDK Comparison

This repository contains two identical polling applications built with different approaches:

- **Cloudflare Workers** - Built from scratch using raw Cloudflare Workers
- **RedwoodSDK** - Built using the RedwoodSDK framework

Both apps have the same features:
- Real-time voting with live updates
- User authentication
- Poll creation with custom colors
- Vote counting with Durable Objects
- WebSocket connections for live updates

## Structure

```
├── cloudflare-polling-app/    # Raw Cloudflare Workers implementation
└── redwood-polling-app/       # RedwoodSDK implementation
```

## Quick Start

### Cloudflare Workers Version
```bash
cd cloudflare-polling-app
npm install
npm run dev
```

### RedwoodSDK Version
```bash
cd redwood-polling-app
npm install
npm run dev
```

Both apps run on `http://localhost:5173`

## Key Differences

**Cloudflare Workers:**
- Full control over implementation
- Manual authentication system
- Custom WebSocket handling
- Raw SQL database operations
- More code, more configuration

**RedwoodSDK:**
- Framework abstractions
- Built-in authentication
- Automatic real-time updates
- Prisma database operations
- Less code, zero configuration

## Tutorial

See the complete tutorial guide that walks through building both applications step by step at: [Cloudflare's Great DX Gets Even Better: RedwoodSDK's React Abstractions Tested](https://ritza.co/cloudflare-redwood-comparison)