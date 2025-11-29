# Inside AI - React Landing Page

A professional React landing page for Inside AI, a story world engine that lets writers, filmmakers, and storytellers interact with their characters as if they're real.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### Google Sheets Integration

To connect the signup form to Google Sheets:

1. Follow the detailed instructions in `GOOGLE_SHEETS_SETUP.md`
2. Copy the Apps Script code from `google-apps-script.js`
3. Deploy as Web App and get your URL
4. Update `GOOGLE_SCRIPT_URL` in `src/components/SignUp.js`

**Quick Setup:**
- See `GOOGLE_SHEETS_SETUP.md` for step-by-step guide
- See `google-apps-script.js` for the backend code

### Build for Production

```bash
npm run build
```

Builds the app for production to the `build` folder.

## 📁 Project Structure

```
insideai/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Header.js       # Navigation header
│   │   ├── Hero.js         # Hero section with chat demo
│   │   ├── HowItWorks.js   # Three-act explanation
│   │   ├── WhatIsInsideAI.js
│   │   ├── CharacterReality.js
│   │   ├── KnowCharacters.js
│   │   ├── WhatCanDo.js
│   │   ├── TargetAudience.js
│   │   ├── EarlyAccess.js
│   │   ├── SignUp.js       # Form with state management
│   │   └── Footer.js
│   ├── App.js              # Main app component
│   ├── App.css             # Global app styles
│   ├── index.js            # React entry point
│   └── index.css           # Global CSS variables
├── package.json
└── README.md
```

## 🎨 Features

### Component-Based Architecture
- **Modular Design** - Each section is a separate React component
- **Reusable Components** - Clean, maintainable code structure
- **CSS Modules** - Scoped styling per component

### Interactive Elements
- **State Management** - React hooks for form handling
- **Smooth Scrolling** - Navigation to sections
- **Success Messages** - Form submission feedback
- **Responsive Design** - Mobile-first approach

### Sections Included

1. **Header** - Sticky navigation with CTA button
2. **Hero** - Two-column layout with chat example on the right
3. **How It Works** - Three-act process explanation
4. **What is Inside AI** - Feature highlights
5. **Character Reality** - Core capabilities
6. **Know Your Characters** - Value proposition
7. **What Can You Do** - Use cases grid
8. **Target Audience** - Four key user groups
9. **Early Access** - Development status
10. **Sign Up Form** - Multi-field registration with validation
11. **Footer** - Branding

## 🛠 Technology Stack

- **React 18** - Latest React with functional components
- **React Hooks** - useState for form management
- **CSS3** - Modern styling with CSS variables
- **No External Dependencies** - Pure React implementation

## 🎨 Customization

### Colors

Edit CSS variables in `src/index.css`:

```css
:root {
    --primary: #6366f1;
    --accent: #8b5cf6;
    --bg-dark: #0a0e1a;
    /* ... more variables */
}
```

### Components

Each component is self-contained in `src/components/`:
- Modify content directly in component files
- Styles are in corresponding `.css` files
- Easy to add/remove sections from `App.js`

### Form Integration

To connect the form to a backend API:

1. Open `src/components/SignUp.js`
2. Update the `handleSubmit` function:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setShowSuccess(true);
      // Reset form...
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## 📱 Responsive Breakpoints

- **Desktop**: > 968px (Two-column hero layout)
- **Tablet**: 768px - 968px (Stacked layout)
- **Mobile**: < 768px (Mobile-optimized)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 Available Scripts

### `npm start`
Runs the app in development mode with hot reload

### `npm build`
Creates optimized production build

### `npm test`
Launches the test runner

### `npm eject`
Ejects from Create React App (one-way operation)

## 🎯 Key Features

- ✅ Fully responsive design
- ✅ Component-based architecture
- ✅ Form state management
- ✅ Smooth scrolling navigation
- ✅ Success message modal
- ✅ Dark theme with gradients
- ✅ Hover animations
- ✅ Mobile-first approach

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'build' folder to Netlify
```

## 📄 License

This project is open source and available for personal and educational use.

## 🤝 Credits

Design inspired by [Inside AI on Lovable](https://inside-story-engine.lovable.app)

Built with React for writers, filmmakers, and storytellers.

---

**Ready to develop?** Run `npm install` then `npm start`! 🎉
