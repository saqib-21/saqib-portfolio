# Saqib Khan - Portfolio Website

A modern, responsive portfolio website showcasing my projects, experience, and skills as a Software Engineering student at McMaster University.

## 🚀 Features

- **Responsive Design**: Beautiful, modern UI that works seamlessly on all devices
- **Interactive Sections**: About, Projects, Experience, and Contact sections
- **Dark Mode Support**: Elegant dark theme with smooth transitions
- **Performance Optimized**: Built with Vite for fast loading and development
- **Type-Safe**: Fully typed with TypeScript

## 🛠️ Technologies

This portfolio is built with:

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **shadcn/ui** - Beautiful, accessible component library
- **React Router** - Client-side routing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

## 🏃 Getting Started

### Installation

1. Clone the repository:
```sh
git clone <your-repo-url>
cd saqib-portfolio
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```sh
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```sh
npm run preview
```

## 📁 Project Structure

```
saqib-portfolio/
├── public/           # Static assets (images, resume, etc.)
├── src/
│   ├── components/   # React components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ui/       # shadcn/ui components
│   ├── config/       # Configuration files
│   │   └── site.ts   # Main site configuration
│   ├── pages/        # Page components
│   ├── App.tsx       # Main app component
│   └── main.tsx      # Entry point
├── index.html
└── package.json
```

## ⚙️ Configuration

All site content is configured in `src/config/site.ts`. Update this file to:

- Change personal information (name, email, phone, location)
- Update social media links
- Modify projects and experience
- Update skills and education information
- Add or change the profile picture path

### Adding Your Profile Picture

1. Add your profile picture to the `public` folder as `profile.jpg`
2. The image will automatically be displayed in the About section
3. If no image is found, a placeholder icon will be shown

## 🎨 Customization

### Colors and Styling

The site uses Tailwind CSS with custom theme colors defined in `tailwind.config.ts`. The primary color scheme uses emerald/green tones which can be customized.

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the section to `src/pages/Index.tsx`
3. Update navigation links if needed in `src/components/Navbar.tsx`

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

**Saqib Khan**

- Email: khans416@mcmaster.ca
- Phone: (+1)289-783-1055
- GitHub: [@saqib-21](https://github.com/saqib-21)
- LinkedIn: [saqib-khan](https://www.linkedin.com/in/saqib-khan-aa127b275/)

---

**McMaster University** | Bachelor of Software Engineering | Expected Graduation: April 2027
