# RedwoodSDK Polling App

Complete real-time polling application built with RedwoodSDK framework. Same features as the Cloudflare Workers version, but with framework abstractions.

**Features:**
- Poll creation with custom colors
- Real-time voting with automatic page updates
- Durable Objects for fast vote counting
- Prisma database integration
- Built-in authentication (WebAuthn/passkeys)

**Setup:**
```bash
cd redwood-polling-app
npm install
npm run dev
```

**Key Technologies:**
- RedwoodSDK framework
- Prisma ORM
- Durable Objects
- React Server Components
- Automatic real-time client updates
- Built-in authentication system

## Development Notes

This implementation shows how RedwoodSDK simplifies full-stack development:

- Zero-config authentication with passkeys
- Automatic real-time updates via `renderRealtimeClients()`
- Declarative database schema with Prisma
- Server functions with `"use server"` directive
- Framework-managed WebSocket connections

The same functionality as the raw Cloudflare Workers version, but with significantly less code and configuration.