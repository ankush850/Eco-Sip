# Eco-Sip

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2.0-38B2AC?logo=tailwind-css)
![Razorpay](https://img.shields.io/badge/Razorpay-Payments-02042B?logo=razorpay)

 Everyday hydration reinvented. Smart reusable bottles made from recycled materials.

 ## Features

###  E-Commerce Functionality
- **Product Showcase** - Three distinct product lines: Core, GoCup, and Pure
- **Shopping Cart** - Persistent cart with localStorage integration
- **Quantity Management** - Add/remove items with real-time updates
- **Responsive Design** - Mobile-first approach with Tailwind CSS

###  Payment Integration
- **Razorpay Payments** - Secure payment processing with multiple payment methods
- **Test & Live Modes** - Easy switching between development and production
- **Order Confirmation** - Real-time payment success handling
- **Tax Calculation** - Automatic 10% tax inclusion

###  Modern UI/UX
- **Component-Based Architecture** - Reusable UI components with Radix UI
- **Dark/Light Theme** - Built-in theme switching capability
- **Smooth Animations** - Interactive hover effects and transitions
- **Accessibility** - Semantic HTML and proper ARIA attributes

###  Sustainability Focus
- **Eco-Friendly Products** - Made from 100% recycled materials
- **Product Ecosystem** - Three specialized hydration solutions
- **Lifestyle Integration** - Designed for modern sustainable living


##  System Architecture

```mermaid
graph TD
    A[User Browser] --> B[Next.js App Router]
    B --> C[React Components]
    C --> D[UI Components]
    C --> E[State Management]
    C --> F[API Calls]
    
    D --> G[Radix UI Primitives]
    D --> H[Tailwind CSS]
    
    E --> I[Cart Context]
    I --> J[localStorage]
    
    F --> K[Razorpay API]
    F --> L[Vercel Analytics]
    
    K --> M[Razorpay Gateway]
    M --> N[Payment Processors]
    
    L --> O[Vercel Analytics Service]
    
    B --> P[Static Assets]
    P --> Q[Images]
    P --> R[Icons]
    
    B --> S[Server-side Rendering]
    S --> T[Metadata Generation]
    S --> U[Route Handling]
    
```

