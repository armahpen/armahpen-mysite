# Evans - Designer & Developer Portfolio

## Overview

This is a modern portfolio website built for Evans, showcasing their dual expertise as a product designer and front-end developer. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with a PostgreSQL database integration using Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Built-in session handling with connect-pg-simple
- **API Pattern**: RESTful API design with `/api` prefix

### Development Setup
- **Monorepo Structure**: Client and server code in separate directories
- **Shared Types**: Common schemas and types in `shared/` directory
- **Hot Reloading**: Vite dev server with HMR for frontend development
- **Database Migrations**: Drizzle Kit for schema management

## Key Components

### Directory Structure
```
├── client/          # React frontend application
│   ├── src/
│   │   ├── components/  # UI components (shadcn/ui)
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utilities and query client
│   │   └── pages/       # Route components
├── server/          # Express.js backend
│   ├── index.ts     # Server entry point
│   ├── routes.ts    # API route definitions
│   ├── storage.ts   # Database abstraction layer
│   └── vite.ts      # Vite integration for development
├── shared/          # Shared types and schemas
│   └── schema.ts    # Database schema definitions
└── migrations/      # Database migration files
```

### Frontend Components
- **Home Page**: Portfolio showcase with designer/developer sections
- **UI Components**: Complete shadcn/ui component library
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Theme Support**: Light/dark mode capability built-in

### Backend Services
- **Storage Layer**: Abstracted database operations with memory fallback
- **User Management**: Basic user schema with authentication ready
- **API Routes**: Structured route handling with error middleware
- **Development Tools**: Request logging and error handling

## Data Flow

### Client-Server Communication
1. **Frontend**: React components use TanStack Query for API calls
2. **API Layer**: Express.js handles HTTP requests with JSON middleware
3. **Storage**: Database operations abstracted through storage interface
4. **Response**: Structured JSON responses with error handling

### Database Schema
- **Users Table**: Basic user structure with username and password fields
- **Extensible Design**: Schema designed for easy extension with additional entities
- **Type Safety**: Full TypeScript integration with Drizzle ORM

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with comprehensive Radix UI components
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with Zod validation
- **Date Handling**: date-fns for date manipulation

### Backend Dependencies
- **Database**: Neon Database (PostgreSQL) with Drizzle ORM
- **Session Storage**: PostgreSQL session store
- **Development**: tsx for TypeScript execution
- **Build**: esbuild for production bundling

### Development Tools
- **Replit Integration**: Custom plugins for Replit environment
- **Error Overlay**: Runtime error modal for development
- **Code Mapping**: Source map support for debugging

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds optimized static assets
2. **Backend Build**: esbuild bundles server code for production
3. **Database Setup**: Drizzle migrations handle schema deployment
4. **Asset Serving**: Express serves static files in production

### Environment Configuration
- **Development**: Hot reloading with Vite dev server
- **Production**: Optimized builds with static file serving
- **Database**: Environment-based database URL configuration

### Scripts
- `dev`: Development server with hot reloading
- `build`: Production build for both frontend and backend
- `start`: Production server startup
- `db:push`: Database schema deployment

## Recent Changes

- July 05, 2025: Completed full multi-page planet system with Adham Dannaway-inspired layout
  - Created 7 individual pages: Evans (Heavans), Creative Builder, Poet & Sound Explorer, Design Thinker, Full-Stack Developer, Motion Creator, Creative Collaborator
  - Integrated user's profile photo and workspace image with proper styling and hover effects
  - Built clean portfolio layouts inspired by Adham Dannaway's design approach
  - Added skills progress bars, image placeholders, and featured work sections
  - Implemented color-coded themes for each planet matching original About page colors
  - Updated complete routing system with all planet pages properly linked
  - Maintained consistent #1E1E1E background and professional footer across all pages

- July 05, 2025: Enhanced About page navigation and user experience
  - Converted all planet buttons to direct page links using React Router
  - Removed hamburger menu for cleaner header design
  - Positioned planet navigation buttons 1 inch above footer as requested
  - Fixed all planet links to match correct route names (/creative-builder, /poet, etc.)
  - Maintained interactive orbital system with hover tooltips and animations

- July 05, 2025: Implemented orbital galaxy-style About page with interactive planet system
  - Created immersive space-themed background with animated star field
  - Built 6 orbiting planets representing different skillsets (Creative Projects, Poetry, UI/UX, Development, Motion Graphics, Collaboration)
  - Added central glowing sun labeled "Evans (Heavans)" with pulsing animation
  - Implemented smooth orbital rotations with varying speeds (20s-45s per orbit)
  - Created hover tooltips and click-to-expand modals for each planet
  - Added responsive design for mobile and desktop viewing
  - Integrated galaxy particle effects and subtle orbital ring animations

## Changelog

- July 05, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.