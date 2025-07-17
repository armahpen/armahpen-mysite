# Evans - Designer & Developer Portfolio

## Overview

This is a modern portfolio website built for Evans Armah (HeaVans), showcasing expertise as a Web Developer and Data Analyst. The project has been restructured as a static website optimized for GitHub Pages hosting, featuring responsive design, interactive elements, and professional presentation of skills and experience.

## System Architecture

### Static Website Architecture
- **Structure**: Standard HTML5 with semantic markup
- **Styling**: Modern CSS3 with Flexbox, Grid, and responsive design
- **JavaScript**: Vanilla ES6+ for interactive functionality
- **Assets**: Organized in dedicated directories (css/, js/, assets/)
- **Fonts**: Google Fonts integration (DM Sans, Inter)
- **Images**: Optimized web formats (WebP, JPEG, PNG)

### GitHub Pages Optimization
- **Entry Point**: index.html in root directory for GitHub Pages
- **File Structure**: Organized directories for easy maintenance
- **Relative Paths**: All links and resources use relative paths
- **Mobile-First**: Responsive design with mobile navigation
- **SEO Ready**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant with ARIA labels

### Development Setup
- **Static Files**: No build process required
- **Local Testing**: Can run directly in browser or with simple HTTP server
- **Version Control**: Git-ready with proper .gitignore
- **Deployment**: Direct push to GitHub Pages main branch

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

- July 17, 2025: **FIXED ALL IMAGE PATHS AND ROUTING FOR GITHUB PAGES**
  - Fixed "Did you forget to add the page to the router?" error by implementing proper routing structure
  - Created 404.html file for GitHub Pages SPA routing support to handle direct navigation
  - Updated all asset paths to use relative references (./assets/) for GitHub Pages compatibility
  - Fixed ALL image paths throughout the application: logo, profile images, portfolio previews, background textures
  - Copied all image assets to root directory for GitHub Pages accessibility
  - Updated CV/resume path to use relative reference (./Evans_Armah_CV.pdf)
  - Removed Replit-specific scripts and banners for clean deployment
  - Fixed React hooks order issue that was causing console errors
  - Updated NotFound page to match portfolio's dark theme and styling
  - Standardized menu spacing between home and contact pages (16px font, 0.75rem gap)
  - Created comprehensive README.md and DEPLOYMENT.md with deployment instructions
  - All routing now works correctly: Home, About, Evans, Experience, Contact, Portfolio, Poetry
  - All images now display correctly on GitHub Pages with proper relative paths
  - Website ready for GitHub Pages deployment with complete image and routing support

- July 18, 2025: **RESTRUCTURED TO STATIC WEBSITE FOR GITHUB PAGES**
  - Converted React-based portfolio to static HTML/CSS/JS structure
  - Created proper GitHub Pages-optimized file structure with index.html in root
  - Organized assets in css/, js/, and assets/images/ directories
  - Implemented mobile-first responsive design with hamburger navigation
  - Added comprehensive contact form with client-side validation
  - Included proper SEO meta tags and accessibility features
  - Created README.md with deployment instructions for GitHub Pages
  - Added MIT License and comprehensive .gitignore file
  - All files use relative paths and are GitHub Pages compatible
  - Ready for deployment to https://armahpen.github.io/armahpen-mysite/

- July 08, 2025: Made entire site mobile-friendly with responsive design
  - Updated poetry page copyright to "All poems are the original work of Evans Armah (Heavans) © 2025. Reproduction or use without permission is prohibited."
  - Added back arrow icon (SVG chevron-left) to poetry detail pages for better navigation
  - Implemented comprehensive mobile responsiveness across all pages using clamp() for fluid typography and spacing
  - Added mobile-first CSS utilities in index.css for responsive containers, navigation, and layout
  - Updated all navigation paddings and font sizes to scale smoothly from mobile to desktop
  - Enhanced hero section, headers, and content areas with responsive padding and margin values
  - All 10 poems updated with authentic original content by Evans Armah covering spirituality, technology, friendship, motivation

- July 08, 2025: Updated Poetry page with itssharl.ee-inspired minimalist design
  - Replaced immersive space/nature theme with clean, minimal aesthetic matching itssharl.ee/work
  - Implemented "Materializing verses..." loading animation with fade effect
  - Created clean list-style poetry showcase with arrow indicators and hover effects
  - Added individual poem detail view with elegant typography and back navigation
  - Used light gray (#fafafa) background with white header section and subtle borders
  - Organized poems with categories (Self-Reflection, Technology, Inspiration, etc.)
  - Maintained responsive design with professional Inter + Georgia font pairing
  - Added portfolio-style "Designed and coded by HeaVans © 2025" credit
  
- July 08, 2025: Previously created immersive dedicated Poetry page with nature and space themes
  - Built interactive poetry showcase with 8 curated poems including "Being You", "The Coder's Journey", "In the Air", "I Live Again"
  - Implemented dynamic nature/space theme switching based on poem content with animated gradients
  - Added floating particle animations, mouse-following gradients, and glassmorphism effects
  - Created auto-advancing poem display with manual navigation controls and progress indicators
  - Integrated responsive design with beautiful typography combinations (Inter + Georgia)
  - Updated portfolio preview card to navigate to dedicated /poetry route instead of external Behance
  - Enhanced brand identity with "Heavans Haven" as portfolio title replacement for "Selected Work"

- July 07, 2025: Redesigned landing page with p5aholic.me-inspired background and minimalist aesthetic
  - Removed previous background image and implemented animated WebGL-style background using grain and blur textures
  - Created interactive mouse-following gradient effects and subtle animated overlays
  - Simplified navigation with clean Inter font styling and subtle hover effects
  - Implemented minimalist hero section with large typography and single CTA button
  - Added floating particle elements for depth and visual interest
  - Maintained mobile responsiveness while achieving modern, professional aesthetic
  - Background features multiple animated layers: grain texture, blur gradients, noise patterns, and mouse-responsive elements

- July 07, 2025: Updated Experience page navigation and standardized footer format
  - Replaced Collections button with Contact button in Experience page navigation menu
  - Standardized all footer text to "@2020 HeaVans. All rights reserved. | Designed & Developed by Evans"
  - Updated footer format across all pages for consistency

- July 06, 2025: Created Evans (Heavans) dedicated page and optimized layout
  - Built professional Evans profile page with golden gradient styling matching sun theme
  - Added proper routing from About page button to new Evans page (/evans)
  - Removed excess spacing under footers on all pages (reduced container heights from 1400px to 1230px)
  - Implemented quick navigation grid to all 6 skill planet pages from Evans page
  - Optimized footer positioning to be the final visible element without extra scrolling space
  - Applied 1-inch spacing between navigation menu items and removed Skills button across all pages
  - Removed problematic SVG overlay that was creating dark bar on right side of home page

- July 05, 2025: Implemented orbital galaxy-style About page with interactive planet system
  - Created immersive space-themed background with animated star field
  - Built 6 orbiting planets representing different skillsets (Creative Projects, Poetry, UI/UX, Development, Motion Graphics, Collaboration)
  - Added central glowing sun labeled "Evans (Heavans)" with pulsing animation
  - Implemented smooth orbital rotations with varying speeds (20s-45s per orbit)
  - Created hover tooltips and click-to-expand modals for each planet
  - Added responsive design for mobile and desktop viewing
  - Integrated galaxy particle effects and subtle orbital ring animations

- July 05, 2025: Completed portfolio layout and logo implementation
  - Replaced text logo with modern styled logo component (100x30px, top-left positioning)
  - Added clickable logo functionality for homepage navigation
  - Organized HeaDesign Work Collection section with proper hierarchy and spacing
  - Updated Frame 7 container with exact Figma specifications (1434x989px)
  - Repositioned Start Work button and content elements to match latest Figma coordinates
  - Applied proper footer with professional sections (contact, links, social media)
  - Fixed overlapping elements and created professional layout structure

- July 05, 2025: Successfully replaced Work Collection image with exact Figma HTML/CSS code
  - Extracted and implemented precise text elements, SVG dividers, and positioning
  - Improved text readability and moved section positioning per user request
  - Portfolio now matches Figma design specifications exactly

## Changelog

- July 05, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.