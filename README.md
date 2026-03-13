# Talent Rank Landing Page

A modern, responsive landing page for Talent Rank - a tech talent recruitment platform. Built with React, Vite, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design based on Figma specifications
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- **Interactive Elements**: 
  - Mobile-responsive navigation menu
  - Interactive role selection
  - Hover effects and transitions
- **Performance Optimized**: Built with Vite for fast development and production builds
- **TypeScript**: Full TypeScript support for better developer experience

## Tech Stack

- **React 19** - Latest React version with concurrent features
- **Vite** - Next-generation frontend tooling
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful & consistent icons

## Project Structure

```
src/
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
├── index.css           # Global styles
├── components/
│   └── RatingStars.tsx # Reusable rating component
└── utils/
    └── cn.ts           # Class name utility
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Design Features

### Navigation
- Sticky navigation bar with backdrop blur
- Mobile-responsive hamburger menu
- Gradient logo and CTA buttons

### Hero Section
- Gradient backgrounds and subtle animations
- Interactive talent search form
- Company statistics and social proof

### Features Section
- Four key features with gradient icons
- Hover effects and shadow transitions

### Testimonials
- Customer testimonials with ratings
- Profile images and company information

### CTA Section
- Prominent call-to-action with gradient background
- Multiple action buttons

### Footer
- Comprehensive footer with links
- Social media icons
- Legal information

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT