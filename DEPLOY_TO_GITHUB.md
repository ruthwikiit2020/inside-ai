# 🚀 Deploy to GitHub - Step by Step

Your code is ready to push to GitHub!

## Option 1: Using GitHub Website (Easiest)

### Step 1: Create Repository on GitHub

1. Go to [github.com](https://github.com)
2. Click **"+"** (top right) → **"New repository"**
3. Fill in:
   - **Repository name**: `inside-ai-landing`
   - **Description**: "Inside AI - Interactive landing page for story world engine"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README (we already have one)
4. Click **"Create repository"**

### Step 2: Push Your Code

GitHub will show you commands. Run these in your terminal:

```bash
cd /Users/rsk/insideai

# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/inside-ai-landing.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 3: Verify

Go to your GitHub repository - all files should be there! ✅

---

## Option 2: Using GitHub CLI (Advanced)

If you have GitHub CLI installed:

```bash
cd /Users/rsk/insideai
gh repo create inside-ai-landing --public --source=. --remote=origin --push
```

---

## Option 3: Using GitHub Desktop (Visual)

1. Open **GitHub Desktop**
2. File → Add Local Repository
3. Choose `/Users/rsk/insideai`
4. Click **Publish repository**
5. Choose name and visibility
6. Click **Publish**

---

## 🎯 What's Included in Your Repository:

### **Source Code:**
- ✅ All React components (22 components)
- ✅ Styling files (CSS)
- ✅ App configuration
- ✅ Package.json with dependencies

### **Features:**
- ✅ 9 full-screen sections
- ✅ Animated beams background
- ✅ Ethereal shadow effects
- ✅ Interactive cursor
- ✅ Scroll animations
- ✅ Form with Google Sheets integration
- ✅ Responsive design

### **Documentation:**
- ✅ README.md - Main documentation
- ✅ QUICKSTART.md - Quick start guide
- ✅ FEATURES.md - All features listed
- ✅ GOOGLE_SHEETS_SETUP.md - Integration guide
- ✅ SETUP_CHECKLIST.md - Setup steps
- ✅ TROUBLESHOOTING.md - Common issues
- ✅ Apps Script files for Google Sheets

### **Ignored Files:**
- ❌ node_modules (too large)
- ❌ build folder
- ❌ .env files
- ❌ logs

---

## 📝 After Pushing to GitHub

### **Add Repository Description:**

On GitHub repository page, click the gear icon ⚙️ and add:
- **Description**: "Interactive landing page for Inside AI - A story world engine for writers and storytellers"
- **Website**: Your deployed URL (once deployed)
- **Topics**: `react`, `landing-page`, `framer-motion`, `interactive`, `storytelling`

### **Update README Badge (Optional):**

Add to top of README.md:
```markdown
![React](https://img.shields.io/badge/React-18.2.0-61dafb?logo=react)
![License](https://img.shields.io/badge/License-MIT-green)
```

---

## 🌐 Deploy to Vercel/Netlify (Next Step)

### **Vercel (Recommended for React):**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd /Users/rsk/insideai
vercel
```

Follow prompts, and your site will be live!

### **Netlify:**

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import from Git"
3. Connect GitHub
4. Select `inside-ai-landing` repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Click **Deploy**

Your site will be live at: `https://inside-ai-landing.netlify.app` 🎉

---

## 🔐 Environment Variables

If deploying to Vercel/Netlify, add this environment variable:

```
REACT_APP_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbys84NooE31wp761EO4MUlOm4ys9ZEHRPomu0k6EFqoOC3ofSK89gEzkoENwR1J_TM/exec
```

---

**Your code is committed and ready to push!** 🚀

Choose your preferred method above and follow the steps.

