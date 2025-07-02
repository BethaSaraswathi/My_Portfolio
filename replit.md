# Portfolio Website - replit.md

## Overview

This is a modern portfolio website built for Saraswathi Betha, a software engineer specializing in AI/ML integration and full-stack development. The application is built using a full-stack architecture with React.js frontend, Express.js backend, and PostgreSQL database with Drizzle ORM.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server:

- **Frontend**: React.js with TypeScript, using Vite as the build tool
- **Backend**: Express.js with TypeScript for API endpoints
- **Database**: PostgreSQL with Drizzle ORM for data persistence
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Build System**: Vite for frontend, esbuild for backend bundling

## Key Components

### Frontend Architecture
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation
- **Theme**: Light/dark mode support with context-based theme provider

### Backend Architecture
- **API Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **PDF Generation**: Custom service for resume PDF generation
- **Middleware**: Custom logging and error handling middleware

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Session Storage**: PostgreSQL-based session management
- **Migration System**: Drizzle migrations for schema version control

### Key Features
1. **Portfolio Sections**: Hero, About, Skills, Experience, Projects, Education, Contact
2. **Resume Download**: PDF generation and download functionality
3. **Contact Form**: Form submission with validation (backend integration ready)
4. **Responsive Design**: Mobile-first approach with adaptive layouts
5. **Dark/Light Theme**: User preference-based theme switching
6. **Particle Background**: Interactive animated background
7. **Smooth Scrolling**: Navigation with scroll spy functionality

## Data Flow

1. **Client-Side Rendering**: React app serves the portfolio content statically
2. **API Requests**: TanStack Query manages server state and API calls
3. **Resume Generation**: Server-side PDF generation from structured data
4. **Contact Form**: Form data flows through validation to backend API
5. **Theme Management**: Client-side theme state with localStorage persistence

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives, Lucide React icons
- **Animations**: Framer Motion for animations
- **Data Fetching**: TanStack Query for server state
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Styling**: Tailwind CSS, Class Variance Authority, clsx
- **Utilities**: date-fns for date formatting

### Backend Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM with Drizzle Zod for schema validation
- **Session**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution, esbuild for bundling

### Development Tools
- **Build**: Vite with React plugin, TypeScript compiler
- **Code Quality**: ESLint configuration, TypeScript strict mode
- **Development**: Hot module replacement, runtime error overlay
- **Deployment**: Production build optimization

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database Migration**: Drizzle push command updates schema
4. **Static Assets**: Served from build output directory

### Environment Configuration
- **Development**: Local development with hot reloading
- **Production**: Optimized builds with environment-specific settings
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Scripts
- `dev`: Development server with hot reloading
- `build`: Production build for both frontend and backend
- `start`: Production server startup
- `db:push`: Database schema migration

## Changelog
- July 01, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.