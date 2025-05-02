# iPhone Identifier Tool

A React-based web application that helps users identify iPhone models (newer than iPhone 6) based on their physical features.

![iPhone Identifier Tool](/api/placeholder/800/400 "iPhone Identifier Tool")

## Overview

The iPhone Identifier Tool allows users to select various physical features of an iPhone through intuitive sliders and instantly identifies the corresponding iPhone model. Perfect for tech repair shops, buyers of used iPhones, or anyone curious about which model they're looking at.

## Features

- Interactive sliders to select physical characteristics of iPhones
- Real-time model identification based on selected features
- Support for iPhone models newer than iPhone 6
- Responsive design that works on both desktop and mobile devices
- Modern, clean user interface built with React

## Physical Features Included

- Screen size
- Number of cameras
- Notch/Dynamic Island presence
- Button types (Home button vs. no Home button)
- Camera layout (horizontal/vertical)
- Port type (Lightning/USB-C)
- Phone dimensions
- Bezel design

## Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/iphone-identifier-tool.git
   cd iphone-identifier-tool
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
iphone-identifier-tool/
├── public/
│   ├── images/
│   │   └── iphone-models/
├── src/
│   ├── components/
│   │   ├── FeatureSlider.jsx
│   │   ├── ModelIdentifier.jsx
│   │   ├── PhoneVisualizer.jsx
│   │   └── ...
│   ├── data/
│   │   └── iphone-data.js
│   ├── hooks/
│   │   └── useIdentifier.js
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [React Spring](https://react-spring.io/) - For smooth slider animations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Apple Inc. for the iPhone specifications information
- All contributors who help improve this tool

## Contact

Project Link: [(https://github.com/yourusername/iphone-identifier-tool)](https://github.com/Ghosty1667/iphonefinder/edit/main/README.md)

---

Made with ❤️ by Kieran Price
