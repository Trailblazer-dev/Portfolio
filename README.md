# Rich Kariuki - Portfolio

![Portfolio Preview](./src/assets/portfolio-preview.png)

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0.5-38B2AC.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0.3-ED4290.svg)](https://www.framer.com/motion/)

A modern, responsive portfolio website built with React, Framer Motion, and TailwindCSS, featuring dark mode, interactive animations, and project filtering.

## 🔍 Preview

You can view the live portfolio at: [portfolio.richkariuki.com](https://portfolio.richkariuki.com)

## ✨ Features

- **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Dark/Light Mode** - Theme toggle with persistent user preference storage
- **Interactive UI** - Smooth animations and transitions using Framer Motion
- **Project Filtering** - Filter projects by technology with intuitive controls
- **Accessibility** - ARIA attributes, keyboard navigation, and screen reader support
- **Performance Optimized** - Lazy loading, optimized animations, and efficient rendering

## 🛠️ Technologies

- [React](https://react.dev/) - Frontend framework
- [TailwindCSS 4](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide Icons](https://lucide.dev/) - SVG icons
- [React Slick](https://react-slick.neostack.com/) - Carousel components
- [Vite](https://vitejs.dev/) - Build tool

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or with yarn
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or with yarn
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser

## 📁 Project Structure

```
/src
├── assets/                      # Images, icons, and other static files
│   ├── icons/                   # Icon images for UI elements
│   ├── tools/                   # Dark mode tech stack icons
│   ├── toolslighttheme/         # Light mode tech stack icons
│   └── tools2lighttheme/        # Additional light mode tech icons
├── components/                  # Reusable UI components
│   ├── About.jsx                # About section component
│   ├── Button.jsx               # Reusable button component
│   ├── Button.d.ts              # TypeScript definitions for Button
│   ├── Contact.jsx              # Contact section with email functionality
│   ├── DarkModeBtn.jsx          # Theme toggle with animations
│   ├── Footer.jsx               # Page footer component
│   ├── Header.jsx               # Navigation with mobile menu
│   ├── Hero.jsx                 # Hero section with animations
│   ├── Portfolio.jsx            # Projects section with filtering
│   └── Skills.jsx               # Skills showcase with tech icons
├── contexts/                    # React context providers
│   └── theme.js                 # Dark/light mode context provider
├── constraints/                 # Data configuration
│   └── constraint.js            # Content data for all sections
├── App.jsx                      # Main application component
├── main.jsx                     # Entry point
├── index.css                    # Global styles and theme definitions
└── types.d.ts                   # Global TypeScript declarations
```

## 🔧 Configuration

You can customize all content in the portfolio by editing the data in `src/constraints/constraint.js`. This includes:

- Personal information
- Project details
- Skills and technologies
- Experience sections
- Contact information

## 📱 Responsive Design

The portfolio is fully responsive with tailored experiences for:
- Mobile devices (< 640px)
- Tablets (640px - 1024px)
- Desktops (> 1024px)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📬 Contact

Rich Kariuki - [richvictor830@gmail.com](mailto:richvictor830@gmail.com)

Project Link: [https://github.com/Trailblazer-dev/portfolio](https://github.com/Trailblazer-dev/portfolio)