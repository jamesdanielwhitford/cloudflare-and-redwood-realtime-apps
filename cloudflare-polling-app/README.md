# Cloudflare Workers Polling Apps

This folder contains polling applications built with raw Cloudflare Workers.

## Apps

### cloudflare-realtime-app
Complete real-time polling application with authentication, vote counting, and live updates.

**Features:**
- User registration and login
- Poll creation with custom colors
- Real-time voting with WebSocket updates
- Durable Objects for fast vote counting
- D1 database for data persistence

**Setup:**
```bash
cd cloudflare-apps/cloudflare-realtime-app
npm install
npm run dev
```

**Key Technologies:**
- Cloudflare Workers
- D1 Database
- Durable Objects
- React + Vite
- WebSockets
- Custom authentication system

## Development Notes

This implementation demonstrates building a full-stack app with raw Cloudflare Workers. You'll write:

- Custom authentication from scratch
- Manual WebSocket connection handling
- Raw SQL database operations
- Custom API routing and middleware
- Manual error handling and response formatting

The code shows both the power and complexity of building directly on Cloudflare Workers without framework abstractions.