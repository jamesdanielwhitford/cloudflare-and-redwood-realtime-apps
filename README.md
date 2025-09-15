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
├── cloudflare-apps/           # Raw Cloudflare Workers implementations
├── rwsdk-apps/               # RedwoodSDK implementations
└── writing/                  # Tutorial guide and documentation
```

## Quick Start

### Cloudflare Workers Version
```bash
cd cloudflare-apps/cloudflare-realtime-app
npm install
npm run dev
```

### RedwoodSDK Version
```bash
cd rwsdk-apps/real-time-app
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

See the complete tutorial guide in `writing/guide.md` that walks through building both applications step by step.