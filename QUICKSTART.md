# 🚀 Quick Start Guide

## Start the React App

```bash
npm start
```

The app will open automatically at **http://localhost:3000**

## Project Structure

```
src/
├── components/          # All React components
│   ├── Header.js       # Top navigation
│   ├── Hero.js         # Main hero with chat on right
│   ├── SignUp.js       # Form with React state
│   └── ...             # Other sections
├── App.js              # Main component
└── index.css           # Global styles & CSS variables
```

## Key Features

✅ **Component-Based** - Easy to modify individual sections  
✅ **React Hooks** - Modern functional components with useState  
✅ **Responsive** - Mobile-first design  
✅ **Hero Layout** - Chat example positioned on the right side  

## Common Tasks

### Change Colors
Edit `src/index.css`:
```css
:root {
    --primary: #6366f1;
    --accent: #8b5cf6;
}
```

### Modify Content
Edit the component file in `src/components/`

### Add/Remove Sections
Edit `src/App.js`:
```javascript
<Header />
<Hero />
<HowItWorks />
// Add or remove components here
```

### Form Integration
Update `src/components/SignUp.js` → `handleSubmit()` function

## Build for Production

```bash
npm run build
```

Output will be in the `build/` folder.

---

**Having issues?** Make sure all dependencies are installed:
```bash
npm install
```

