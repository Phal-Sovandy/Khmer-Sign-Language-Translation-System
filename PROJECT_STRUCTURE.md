# Project Structure

This document describes the organization of the Sign Language Translation System web application.

## Directory Structure

```
src/
├── assets/                    # Static assets (images, fonts, videos)
│   ├── fonts/                 # Font files (Inter, Lexend, JetBrains Mono, etc.)
│   ├── images/                # Image files (organized by type)
│   │   ├── dataset/          # Dataset showcase images
│   │   ├── how-it-work/      # How it works illustrations
│   │   ├── misc/             # Miscellaneous images
│   │   ├── signs/            # Sign language gesture images
│   │   ├── story/             # Story section images
│   │   ├── team/              # Team member photos
│   │   ├── about-cover.webp
│   │   ├── demo-qr.webp
│   │   ├── favicon.png
│   │   └── wall_break.webp
│   └── videos/               # Video files
│       ├── about-cover.mp4
│       └── breaking_wall.mp4
│
├── components/                # Reusable React components
│   ├── layout/                # Layout components
│   │   ├── Footer.jsx        # Site footer
│   │   └── Header.jsx        # Site header/navigation
│   ├── seo/                   # SEO components
│   │   ├── SEO.jsx           # Dynamic SEO meta tags component
│   │   └── index.js          # Centralized exports
│   ├── ui/                    # UI components
│   │   ├── MediaWrapper.jsx  # Media loading wrapper
│   │   ├── Tooltip.jsx        # Tooltip component
│   │   └── index.jsx          # Centralized exports
│   ├── visuals/               # Visual/decoration components
│   │   ├── BackgroundGrid.jsx # Background grid pattern
│   │   ├── DatasetCollage.jsx # Dataset image collage
│   │   ├── LogoLoop.jsx       # Logo animation loop
│   │   └── TitledCard.jsx     # 3D tilted card component
│   └── ScrollToTop.jsx        # Scroll to top utility component
│
├── config/                    # Configuration files
│   ├── changelog.js           # Changelog data
│   ├── emailjs.js             # EmailJS configuration
│   ├── hero.js                # Hero section content
│   ├── socialLinks.jsx        # Social media links
│   ├── team.js                # Team member data
│   └── index.js               # Centralized exports
│
├── constants/                  # Application constants
│   ├── routes.js              # Route paths
│   └── index.js               # Centralized exports
│
├── hooks/                      # Custom React hooks
│   ├── useActiveSection.js    # Active section tracking hook
│   ├── useScrollPosition.js   # Scroll position tracking hook
│   └── index.js               # Centralized exports
│
├── pages/                       # Page components
│   ├── AboutPage.jsx          # About page
│   ├── ChangelogPage.jsx      # Changelog page
│   ├── ContactPage.jsx        # Contact page
│   ├── DemoPage.jsx           # Demo/translation page
│   └── DocumentationPage.jsx  # Documentation page
│
├── routes/                      # Routing configuration
│   └── index.jsx               # AppRoutes component with lazy loading
│
├── sections/                    # Page sections/components
│   ├── about/                   # About page sections
│   │   ├── AboutHero.jsx
│   │   ├── AboutStats.jsx
│   │   ├── ImpactStatement.jsx
│   │   ├── JoinCommunitySection.jsx
│   │   ├── MissionSection.jsx
│   │   ├── OurStorySection.jsx
│   │   ├── QuoteSection.jsx
│   │   ├── TeamSection.jsx
│   │   ├── VoicesSection.jsx
│   │   └── index.js
│   ├── contact/                 # Contact sections
│   │   ├── ContactSection.jsx
│   │   └── index.jsx
│   ├── demo/                    # Demo sections
│   │   ├── TryDemoSection.jsx
│   │   └── index.jsx
│   ├── documentation/           # Documentation sections
│   │   ├── components/          # Documentation-specific components
│   │   │   ├── DocHeader.jsx   # Documentation page header
│   │   │   ├── MobileSidebar.jsx # Mobile navigation sidebar
│   │   │   ├── Sidebar.jsx     # Desktop navigation sidebar
│   │   │   └── index.js
│   │   ├── config/              # Documentation configuration
│   │   │   └── sections.js     # Documentation sections config
│   │   ├── Community.jsx
│   │   ├── DatasetTraining.jsx
│   │   ├── Demo.jsx
│   │   ├── FutureWork.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Limitations.jsx
│   │   ├── Objectives.jsx
│   │   ├── ProjectOverview.jsx
│   │   ├── SystemRequirements.jsx
│   │   └── index.js
│   ├── faq/                     # FAQ sections
│   │   ├── FAQSection.jsx
│   │   └── index.jsx
│   ├── feature/                 # Feature showcase
│   │   ├── components/          # Feature-specific components
│   │   │   ├── DemoImage.jsx
│   │   │   ├── FeatureInfo.jsx
│   │   │   ├── FloatingTextBoxes.jsx
│   │   │   ├── SecurityIcons.jsx
│   │   │   └── index.js
│   │   ├── config/              # Feature configuration
│   │   │   └── features.jsx     # Features data
│   │   ├── FeatureShowcase.jsx
│   │   └── index.jsx
│   ├── feedback/                # Feedback sections
│   │   ├── FeedbackSection.jsx
│   │   └── index.jsx
│   ├── hero/                    # Hero sections
│   │   ├── HeroContent.jsx
│   │   ├── HeroSection.jsx
│   │   ├── HeroVisual.jsx
│   │   └── index.jsx
│   ├── interface/               # Interface showcase
│   │   ├── InterfaceShowcase.jsx
│   │   └── index.jsx
│   ├── motion/                  # Motion sections
│   │   ├── MotionSection.jsx
│   │   └── index.jsx
│   ├── stats/                    # Statistics sections
│   │   ├── StatsSection.jsx
│   │   └── index.jsx
│   ├── story/                   # Story sections
│   │   ├── StorySection.jsx
│   │   └── index.jsx
│   └── workflow/                # Workflow sections
│       ├── WorkflowSection.jsx
│       └── index.jsx
│
├── styles/                      # Global styles
│   └── fonts.css                # Font definitions and imports
│
├── utils/                       # Utility functions
│   ├── date.js                 # Date formatting utilities
│   ├── scroll.js               # Scroll utilities
│   └── index.js                # Centralized exports
│
├── App.jsx                      # Main app component (homepage)
├── index.css                    # Global CSS and Tailwind imports
└── main.jsx                     # Application entry point
```

## Key Principles

1. **Separation of Concerns**: Components, utilities, configs, and pages are clearly separated
2. **Reusability**: Common utilities and hooks are extracted for reuse
3. **Centralized Configuration**: Config files are organized and exported from index files
4. **Consistent Naming**: Files follow consistent naming conventions (PascalCase for components, camelCase for utilities)
5. **Modular Structure**: Each feature/section has its own folder with its own components and config
6. **Component Organization**: Components are grouped by purpose (layout, ui, visuals, seo)
7. **Lazy Loading**: Pages are lazy-loaded for better performance

## Component Categories

### Layout Components (`components/layout/`)

- **Header.jsx**: Main navigation header with responsive menu
- **Footer.jsx**: Site footer with links and information

### SEO Components (`components/seo/`)

- **SEO.jsx**: Dynamic SEO component for page-specific meta tags, Open Graph, and Twitter Cards

### UI Components (`components/ui/`)

- **MediaWrapper.jsx**: Wrapper component for lazy-loading images and videos
- **Tooltip.jsx**: Tooltip component for interactive elements

### Visual Components (`components/visuals/`)

- **BackgroundGrid.jsx**: Animated background grid pattern
- **DatasetCollage.jsx**: Collage display for dataset images
- **LogoLoop.jsx**: Animated logo loop component
- **TitledCard.jsx**: 3D tilted card with overlay effects

## Section Organization

Each section in `sections/` follows a consistent pattern:

- Main section component (e.g., `FeatureShowcase.jsx`)
- Sub-components in `components/` folder (if needed)
- Configuration in `config/` folder (if needed)
- `index.js` for centralized exports

### Documentation Section Structure

The documentation section has a unique structure:

- **components/**: Documentation-specific UI components (Sidebar, DocHeader)
- **config/**: Section configuration (sections.js)
- Individual section components (ProjectOverview, Objectives, etc.)

## Import Guidelines

- Use centralized exports from `index.js` files when available
- Import utilities from `utils/` folder
- Import hooks from `hooks/` folder
- Import constants from `constants/` folder
- Import config from `config/` folder
- Use relative imports for components within the same section
- Use absolute imports from `src/` for cross-section imports

### Example Imports

```javascript
// Centralized exports
import { sections } from "../sections/documentation/config/sections";
import { SEO } from "../components/seo";

// Utilities
import { scrollToElement } from "../utils/scroll";
import { formatDate } from "../utils/date";

// Hooks
import { useActiveSection } from "../hooks";

// Config
import { heroCopy } from "../config";
```

## Adding New Features

### Adding a New Page

1. Create component in `pages/` (e.g., `NewPage.jsx`)
2. Add route to `routes/index.jsx` with lazy loading
3. Add SEO component with appropriate title and keywords
4. Update navigation in `components/layout/Header.jsx` if needed

### Adding a New Section

1. Create folder in `sections/[section-name]/`
2. Create main section component
3. Create `index.js` for exports
4. Add sub-components in `components/` folder if needed
5. Add configuration in `config/` folder if needed
6. Import and use in the appropriate page

### Adding a New Utility

1. Create file in `utils/` (e.g., `newUtility.js`)
2. Export from `utils/index.js`
3. Use throughout the application

### Adding a New Hook

1. Create file in `hooks/` (e.g., `useNewHook.js`)
2. Export from `hooks/index.js`
3. Use in components that need the functionality

### Adding a New Constant

1. Create file in `constants/` or add to existing file
2. Export from `constants/index.js`
3. Import where needed

## File Naming Conventions

- **Components**: PascalCase (e.g., `Header.jsx`, `FeatureShowcase.jsx`)
- **Utilities**: camelCase (e.g., `scroll.js`, `date.js`)
- **Config files**: camelCase (e.g., `hero.js`, `changelog.js`)
- **Index files**: `index.js` or `index.jsx`
- **Styles**: kebab-case (e.g., `fonts.css`)

## Asset Organization

- **Fonts**: Organized by font family in `assets/fonts/`
- **Images**: Organized by purpose/feature in subdirectories
- **Videos**: Stored in `assets/videos/`
- Use WebP format for images when possible for better performance

## Performance Considerations

- Pages are lazy-loaded using React's `lazy()` function
- Components use `React.memo()` for performance optimization
- Images use `MediaWrapper` for lazy loading
- Code splitting is configured in `vite.config.js`
