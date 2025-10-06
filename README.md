# Martian OS

A custom web-based operating system interface built with React and Vite. Martian OS provides a sleek, tabbed interface for managing and accessing multiple web applications from a single dashboard.

## Features

- **Tabbed Interface**: Clean, vertical tab navigation for easy access to different applications
- **Real-time Clock**: Displays current time in a 12-hour format
- **Customizable Apps**: Easy to add, remove, or modify applications through configuration
- **Responsive Design**: Built with styled-components for a modern, responsive UI
- **Dark Theme**: Sleek black background with white text for a futuristic look

## Current Applications

- **Martians On Air** (Ciorapel & Gansito): Live streaming applications
- **Home Assistant**: Smart home control interface
- **Satellite Map**: Real-time satellite tracking visualization

## Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Styled Components** - CSS-in-JS styling
- **ESLint** - Code linting and formatting

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd martian-os
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
martian-os/
├── public/                 # Static assets
│   ├── *.png              # Application icons
│   ├── *.svg              # Vector icons
│   └── manifest.json      # PWA manifest
├── src/
│   ├── Components/        # React components
│   │   ├── Nav.jsx        # Main navigation component
│   │   ├── Tab.jsx        # Individual tab component
│   │   └── TabContent.jsx # Content display component
│   ├── App.jsx            # Main application component
│   ├── tabs.js            # Application configuration
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

## Adding New Applications

To add a new application to Martian OS:

1. Add the application icon to the `public/` directory
2. Update the `src/tabs.js` file with the new application configuration:

```javascript
{
    id: "unique-identifier",
    title: "Application Name",
    icon: "icon-filename.png",
    url: "https://your-app-url.com"
}
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

This project uses ESLint for code linting. Make sure to run `npm run lint` before committing changes.

## License

This project is private and proprietary.

## Author

Created by Dan Zaharia
