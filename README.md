# Khmer Sign Language Translation System - Web

<div align="center">

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![License](https://img.shields.io/badge/license-ISC-green.svg)
![React](https://img.shields.io/badge/React-19.2.0-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)

**A web-based application that translates Khmer sign language gestures into readable text and speech**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Documentation](#-documentation) • [Contributing](#-contributing) • [License](#-license)

</div>

---

## 📖 About

The Khmer Sign Language Translation System is a web-based application developed as a Capstone Project for Year 3 students in the Data Science specialization and Computer Science department. This system assists communication by translating Khmer sign language gestures into readable text and spoken output through a simple web interface.

### Key Highlights

- **Real-time Translation**: Detects and translates sign language gestures in real-time using webcam
- **Text-to-Speech**: Converts translated text into speech for better communication
- **Machine Learning Powered**: Uses fine-tuned deep learning models for accurate gesture recognition
- **User-Friendly Interface**: Responsive, modern web interface accessible through any browser
- **No Installation Required**: Runs entirely in the browser - just open and use

## ✨ Features

### Core Functionality

- 🎥 **Real-Time Gesture Recognition**: Uses MediaPipe for hand landmark detection
- 🤖 **AI-Powered Translation**: Deep learning model fine-tuned with Khmer sign language dataset
- 🔊 **Text-to-Speech Conversion**: Converts translated text into spoken output
- 📱 **Responsive Design**: Works on desktop, laptop, and tablet devices
- 🎨 **Modern UI/UX**: Beautiful, accessible interface with smooth animations

### Additional Features

- 📚 **Comprehensive Documentation**: Detailed documentation page with system overview
- 📝 **Contact Form**: Integrated contact form with EmailJS for user inquiries
- 💬 **Feedback System**: User feedback modal for continuous improvement
- 📊 **Project Statistics**: Real-time stats and metrics display
- 🔄 **Changelog**: Version history and update tracking
- 🌐 **Multi-Page Navigation**: About, Documentation, Changelog, Contact, and Demo pages

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher (comes with Node.js)
- **Modern Web Browser**: Chrome, Firefox, Safari, or Edge (latest versions)
- **Webcam**: For real-time gesture recognition (optional for browsing)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Phal-Sovandy/sign-language-translation-system-web.git
   cd sign-language-translation-system-web
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your EmailJS credentials (optional, for contact form and feedback):

   ```env
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_contact_form_template_id_here
   VITE_EMAILJS_FEEDBACK_TEMPLATE_ID=your_feedback_template_id_here
   ```

   > **Note**: See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for detailed EmailJS configuration instructions.

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

The built files will be in the `dist/` directory, ready for deployment.

## 📖 Usage

### Using the Translation System

1. **Navigate to Demo Page**

   - Click "Try Demo" button on the homepage, or
   - Navigate to `/demo` route

2. **Grant Camera Permissions**

   - Allow browser access to your webcam when prompted

3. **Start Translation**

   - Click "Start Camera" to begin real-time gesture recognition
   - Perform Khmer sign language gestures in front of the camera
   - View translated text in real-time
   - Use "Speak Text" to convert text to speech

4. **Adjust Settings** (Optional)
   - Configure voice gender and buffer size in settings
   - Adjust camera settings as needed

### Navigating the Website

- **Home**: Main landing page with hero section, features, and stats
- **About**: Learn about the project, team, and mission
- **Documentation**: Comprehensive system documentation and technical details
- **Changelog**: Version history and updates
- **Contact**: Get in touch via the contact form
- **Demo**: Try the translation system

## 🏗️ Project Structure

```
src/
├── assets/              # Static assets (images, fonts, videos)
│   ├── fonts/          # Font files
│   ├── images/         # Image files (organized by type)
│   └── videos/         # Video files
│
├── components/          # Reusable React components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── ui/             # UI components
│   └── visuals/        # Visual/decoration components
│
├── config/              # Configuration files
│   ├── changelog.js    # Changelog data
│   ├── emailjs.js      # EmailJS configuration
│   ├── hero.js         # Hero section content
│   └── socialLinks.jsx # Social media links
│
├── constants/           # Application constants
│   └── routes.js       # Route paths
│
├── hooks/               # Custom React hooks
│   ├── useActiveSection.js
│   └── useScrollPosition.js
│
├── pages/               # Page components
│   ├── AboutPage.jsx
│   ├── ChangelogPage.jsx
│   ├── ContactPage.jsx
│   ├── DemoPage.jsx
│   └── DocumentationPage.jsx
│
├── routes/              # Routing configuration
│   └── index.jsx        # AppRoutes component
│
├── sections/            # Page sections/components
│   ├── about/           # About page sections
│   ├── demo/            # Demo sections
│   ├── faq/             # FAQ sections
│   ├── feature/         # Feature showcase
│   ├── feedback/        # Feedback sections
│   ├── hero/            # Hero sections
│   └── ...              # Other sections
│
├── styles/              # Global styles
│   └── fonts.css        # Font definitions
│
├── utils/               # Utility functions
│   ├── date.js         # Date formatting utilities
│   └── scroll.js       # Scroll utilities
│
├── App.jsx              # Main app component
└── main.jsx             # Application entry point
```

For more details, see [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md).

## 🛠️ Tech Stack

### Frontend

- **React** 19.2.0 - UI library
- **React Router DOM** 7.9.6 - Client-side routing
- **Vite** 7.2.4 - Build tool and dev server
- **Tailwind CSS** 4.1.17 - Utility-first CSS framework

### Animation & Effects

- **GSAP** 3.13.0 - Animation library
- **Motion** 12.23.25 - Motion components
- **Scrolly Video** 0.0.24 - Scroll-triggered video effects

### Services

- **EmailJS** 4.4.1 - Email service for contact forms

### Development Tools

- **PostCSS** 8.5.6 - CSS processing
- **Autoprefixer** 10.4.22 - CSS vendor prefixing

## 📚 Documentation

### Available Documentation

- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)**: Detailed project organization and structure
- **[EMAILJS_SETUP.md](./EMAILJS_SETUP.md)**: EmailJS configuration guide for contact forms
- **[EMAILJS_FEEDBACK_TEMPLATE.md](./EMAILJS_FEEDBACK_TEMPLATE.md)**: Feedback template configuration

### In-App Documentation

Visit the `/documentation` page for:

- System overview and objectives
- How it works (technical details)
- Dataset and training information
- Model architecture
- System requirements
- Limitations
- Future work roadmap

## 🤝 Contributing

We welcome contributions! This project is part of academic research and we appreciate any help to improve it.

Please read our [Contributing Guidelines](./CONTRIBUTING.md) for details on:

- Code of conduct
- Development workflow
- Coding standards
- Commit message guidelines
- Pull request process
- Areas for contribution

### Quick Start

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add: amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

For detailed instructions, see [CONTRIBUTING.md](./CONTRIBUTING.md).

## 📝 License

This project is licensed under the **ISC License**.

See [LICENSE.md](./LICENSE.md) for the full license text.

## 👥 Team

This project is developed by **Capstone Group 15** — Year 3 students in the Data Science specialization and Computer Science department as a Capstone Project.

### Team Members

- **Vann Vat** - Team Leader & Data Engineer
- **Chim Panhaprasith** - Frontend Developer
- **Chhi Hangcheav** - Backend Developer
- **Toek Hengsreng** - Dataset & Research Analyst
- **Mony Meakputsoktheara** - Machine Learning Engineer
- **Phal Sovandy** - UI/UX Designer & Content Lead

### Project Information

- **Type**: Capstone Project / Academic Research
- **Group**: Capstone Group 15
- **Department**: Data Science & Computer Science
- **Year**: 2025

## 📧 Contact & Support

### Get in Touch

- **Email**: Contact via the [Contact Form](/contact) on the website
- **GitHub**: [Phal-Sovandy](https://github.com/Phal-Sovandy)
- **Discord**: Check the [Documentation Page](/documentation) for community links
- **Twitter/X**: [@sovandy_phal](https://x.com/sovandy_phal)
- **LinkedIn**: [Sovandy Phal](https://www.linkedin.com/in/sovandy-phal-382069331/)

### Report Issues

Found a bug or have a suggestion? Please [open an issue](https://github.com/Phal-Sovandy/sign-language-translation-system-web/issues) on GitHub.

### Ask Questions

- Check the [Documentation](./PROJECT_STRUCTURE.md) first
- Browse existing [Issues](https://github.com/Phal-Sovandy/sign-language-translation-system-web/issues)
- Contact us via the [Contact Form](/contact) on the website

## 🙏 Acknowledgments

### Technologies & Libraries

- **MediaPipe** - Hand landmark detection
- **PyTorch** - Deep learning framework (backend)
- **React Community** - Amazing ecosystem and support
- **Tailwind CSS** - Beautiful utility-first CSS
- **EmailJS** - Email service integration

### Resources

- Khmer Sign Language dataset contributors
- Open-source machine learning models
- Community feedback and testing

### Special Thanks

- Our academic advisors and mentors
- Beta testers and early users
- Open-source community contributors

## 📊 Project Status

**Current Version**: 0.1.0 (Beta)

### Development Status

- ✅ Web interface
- ✅ Documentation
- ✅ Contact and feedback systems
- 🚧 Core translation functionality (in progress)
- 🚧 Mobile optimization (planned)
- 🚧 Offline functionality (planned)
- 🚧 Expanded gesture vocabulary (planned)

### Roadmap

See the [Documentation Page](./src/pages/DocumentationPage.jsx) for detailed future work plans, including:

- Phase 1: Expand Gesture Vocabulary
- Phase 2: Improve Model Accuracy
- Phase 3: Support Dynamic Gestures
- Phase 4: Two-Hand Gesture Recognition
- Phase 5: Mobile Application Development
- Phase 6: Offline Functionality
- Phase 7: Reverse Translation (Text to Sign)
- Phase 8: Multi-language Support

## ⚠️ Disclaimer

This system is not developed entirely from original code. It utilizes a pre-trained machine learning model provided by third-party sources, which has been fine-tuned, retrained, and adapted using a project-specific dataset to suit the scope, objectives, and experimental design of this academic work. The selection of such models is part of the learning process and does not indicate proprietary ownership of the base architecture.

## 📈 Statistics

- **Supported Gestures**: 120+ Khmer sign language signs
- **Model Accuracy**: Continuously improving
- **Response Time**: Real-time processing
- **Browser Support**: All modern browsers

---

<div align="center">

**Made with ❤️ for the Khmer Sign Language Community**

[⭐ Star us on GitHub](https://github.com/Phal-Sovandy/sign-language-translation-system-web) • [📖 Documentation](./PROJECT_STRUCTURE.md) • [🐛 Report Bug](https://github.com/Phal-Sovandy/sign-language-translation-system-web/issues) • [💡 Request Feature](https://github.com/Phal-Sovandy/sign-language-translation-system-web/issues)

</div>
