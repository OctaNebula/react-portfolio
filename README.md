# React Portfolio

A modern portfolio website built with React.js and Vite, designed for deployment on GitHub Pages.

## Features

- ⚡️ Built with Vite for lightning-fast development
- ⚛️ React 19 with modern hooks
- 📱 Responsive design
- 🎨 Clean and modern UI
- 🚀 Automated deployment to GitHub Pages

## Project Structure

```
react-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/                      # Static assets
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── About.jsx           # About section
│   │   ├── Projects.jsx        # Projects showcase
│   │   └── Contact.jsx         # Contact information
│   ├── App.jsx                 # Main App component
│   ├── App.css                 # App styles
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
└── package.json                # Project dependencies
```

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/OctaNebula/react-portfolio.git
cd react-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

To create a production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

## GitHub Pages Deployment

### Automatic Deployment

This repository is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **Push to main branch**:
   - Every push to the `main` branch triggers automatic deployment
   - The workflow builds the project and deploys to GitHub Pages

3. **Manual Deployment**:
   - Go to the "Actions" tab in your repository
   - Select the "Deploy to GitHub Pages" workflow
   - Click "Run workflow"

### Configuration

The base path in `vite.config.js` is set to `/react-portfolio/`. If your repository name is different, update this line:

```javascript
base: '/your-repo-name/',
```

## Customization

### Personal Information

Update the following files with your information:

- `src/components/About.jsx` - Your bio and introduction
- `src/components/Projects.jsx` - Your projects
- `src/components/Contact.jsx` - Your contact links (email, GitHub, LinkedIn)
- `index.html` - Page title and metadata

### Styling

- `src/index.css` - Global styles
- `src/App.css` - App-level styles
- Individual component CSS files in `src/components/` for component-specific styles

## Technologies

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [GitHub Pages](https://pages.github.com/) - Hosting
- [GitHub Actions](https://github.com/features/actions) - CI/CD

## License

See [LICENSE](LICENSE) file for details.

