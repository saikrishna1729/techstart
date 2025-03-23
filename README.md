# techstart.cloud Blog

A modern, fast, and responsive blog built with Astro and optimized for performance.

## Features

- ⚡️ **Blazing fast** - Built with Astro for optimal performance
- 📱 **Responsive design** - Looks great on all devices
- 🎨 **Tailwind CSS** - For beautiful and customizable styling
- 📝 **MDX support** - Write blog posts using Markdown with JSX components
- 🔍 **SEO optimized** - Meta tags, Open Graph, and more
- 📊 **Analytics ready** - Easy integration with your favorite analytics tools

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://your-repository-url.git
cd Blog
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

## Project Structure

```
/
├── public/              # Static assets
│   ├── images/          # Image files
│   ├── scripts/         # Client-side scripts
│   └── styles/          # Global CSS overrides
├── src/
│   ├── components/      # UI components
│   │   ├── Footer.astro # Site footer
│   │   ├── Header.astro # Site header
│   │   └── BaseLayout.astro # Base layout template
│   ├── content/         # Blog posts and content collections
│   ├── layouts/         # Page layouts
│   ├── pages/           # Pages and routes
│   └── styles/          # CSS styles
├── astro.config.mjs     # Astro configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

## Usage

### Creating Blog Posts

1. Add a new Markdown file to `src/content/blog/`
2. Include the required frontmatter:
```yaml
---
title: "Your Post Title"
description: "Brief description of your post"
pubDate: "Jun 12 2023"
heroImage: "/images/your-image.jpg"
---
```
3. Write your content below the frontmatter using Markdown or MDX

### Customization

- **Styling**: Modify `src/styles/global.css` for global styles
- **Layout**: Update layout components in `src/components/` and `src/layouts/`
- **Configuration**: Adjust settings in `astro.config.mjs` and `tailwind.config.js`

## Deployment

### Build for Production

```bash
npm run build
```

This generates a static site in the `dist/` directory.

### Preview the Production Build

```bash
npm run preview
```

### Deployment Options

This site can be deployed on any static hosting platform:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- Any other static site hosting

## Known Issues & Solutions

- If the footer text is not displaying correctly, the client-side script in `public/scripts/footer-override.js` will automatically correct it

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or feedback, please reach out to support@techstart.cloud
