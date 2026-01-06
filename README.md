# ATM10 Modular Base Guide

![Project Banner](https://img.shields.io/badge/Minecraft-ATM10-brightgreen) ![Build Status](https://img.shields.io/badge/build-passing-success) ![License](https://img.shields.io/badge/license-MIT-blue)

A comprehensive, responsive web guide for building modular tech bases in All The Mods 10 (ATM10). This project provides detailed building instructions, interactive material calculators, and 3D visualizations for creating professional-grade Minecraft bases.

## 🌟 Features

- **📱 Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **🏗️ Detailed Build Guides** - Step-by-step instructions for each module
- **🧮 Material Calculator** - Calculate exact material requirements and track progress
- **🎨 Modern UI** - Clean, tech-themed design with smooth animations
- **📊 Progress Tracking** - Save your build progress in your browser
- **📄 Export Options** - Export material lists as text files

## 🚀 Live Demo

Visit the live site: [GitHub Pages URL will go here]

## 📦 Current Modules

### ✅ Central Hub (Complete)
- **Dimensions:** 32×32×19 blocks
- **Features:** Teleportation nexus, ME/RS storage, power distribution
- **Build Time:** 8-12 hours
- **Status:** Fully documented with material lists

### 🔜 Coming Soon
- Power Generation Wing
- Processing Facility
- Storage Warehouse
- Agriculture Module

## 🛠️ Installation & Setup

### Option 1: GitHub Pages (Recommended)
1. Fork this repository
2. Go to Settings → Pages
3. Select `main` branch as source
4. Your site will be live at `https://[username].github.io/Minecraft/`

### Option 2: Local Development
```bash
# Clone the repository
git clone https://github.com/Techmechanik/Minecraft.git

# Navigate to the directory
cd Minecraft

# Open index.html in your browser
# Or use a local server:
python -m http.server 8000
# Then visit http://localhost:8000
```

## 📁 Project Structure

```
minecraft-base-guide/
├── index.html              # Homepage
├── css/
│   ├── styles.css         # Main stylesheet
│   ├── module-page.css    # Module detail page styles
│   └── calculator.css     # Calculator page styles
├── js/
│   ├── main.js           # Core navigation and animations
│   └── calculator.js     # Material calculator logic
├── modules/
│   ├── central-hub.html  # Central Hub detail page
│   ├── calculator.html   # Material calculator
│   └── [other modules]   # Coming soon
├── images/               # Screenshots and assets
└── README.md            # This file
```

## 🎯 Usage

### For Players
1. **Browse Modules** - Explore different base modules on the homepage
2. **View Details** - Click any module to see detailed build instructions
3. **Calculate Materials** - Use the calculator to determine what you need
4. **Track Progress** - Check off build phases as you complete them
5. **Export Lists** - Download material lists for offline reference

### For Developers
```javascript
// Adding a new module to the calculator
const moduleMaterials = {
  'your-module': {
    name: 'Your Module Name',
    buildTime: 10,
    materials: {
      'Category Name': {
        'Material Name': amount
      }
    }
  }
};
```

## 🎨 Customization

### Color Scheme
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #00d4ff;    /* Main accent color */
    --secondary-color: #ff006e;  /* Secondary accent */
    --accent-color: #ffbe0b;     /* Highlight color */
    --dark-bg: #0a0e27;         /* Background */
}
```

### Fonts
The project uses:
- **Orbitron** - For headers and technical elements
- **Roboto** - For body text

## 📸 Screenshots

### Homepage
![Homepage Preview](images/homepage-preview.png)

### Material Calculator
![Calculator Preview](images/calculator-preview.png)

### Module Detail Page
![Module Detail Preview](images/module-preview.png)

*Screenshots coming soon!*

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Add New Modules** - Document additional base modules
2. **Improve Designs** - Enhance UI/UX
3. **Add Features** - Interactive 3D viewers, more calculators, etc.
4. **Fix Bugs** - Report or fix any issues
5. **Update Content** - Keep material lists accurate with mod updates

### Development Guidelines
```bash
# Create a new branch
git checkout -b feature/your-feature-name

# Make your changes
# Test thoroughly

# Commit with descriptive message
git commit -m "Add: Description of your changes"

# Push and create PR
git push origin feature/your-feature-name
```

## 📝 Roadmap

- [x] Central Hub documentation
- [x] Material calculator
- [x] Progress tracker
- [ ] Interactive 3D module viewer
- [ ] Power Generation module
- [ ] Processing Facility module
- [ ] Storage Warehouse module
- [ ] Video tutorials integration
- [ ] Litematica schematic downloads
- [ ] Dark/Light theme toggle

## 🐛 Known Issues

- 3D viewer placeholder (coming in future update)
- Mobile menu animation could be smoother
- Print styles need refinement

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **All The Mods Team** - For creating ATM10
- **Minecraft Community** - For inspiration and feedback
- **Anthropic's Claude** - For assistance in development

## 📧 Contact

- **GitHub:** [@Techmechanik](https://github.com/Techmechanik)
- **Issues:** [Report a bug](https://github.com/Techmechanik/Minecraft/issues)

## ⭐ Show Your Support

If this guide helped you build your dream base, please consider:
- ⭐ Starring this repository
- 🍴 Forking and contributing
- 📢 Sharing with fellow ATM10 players

---

**Built with ❤️ for the Minecraft community**

*Last Updated: January 2026*
