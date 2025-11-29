# ✅ Setup Checklist - Google Sheets Integration

Follow these steps to connect your signup form to Google Sheets:

## Quick Setup (5 minutes)

### Step 1: Create Google Sheet
- [ ] Go to [sheets.google.com](https://sheets.google.com)
- [ ] Create new sheet: "Inside AI - Early Access Signups"
- [ ] Add headers in Row 1:
  ```
  Timestamp | Email | Role | Current Project | How They'll Use AI | Feedback Call
  ```

### Step 2: Add Apps Script
- [ ] Click: **Extensions** → **Apps Script**
- [ ] Open file: `google-apps-script.js` in this project
- [ ] Copy ALL the code
- [ ] Paste into Apps Script editor
- [ ] Click **Save** (💾 icon)

### Step 3: Deploy Web App
- [ ] Click: **Deploy** → **New deployment**
- [ ] Click gear icon ⚙️ next to "Select type"
- [ ] Choose: **Web app**
- [ ] Set **Execute as**: Me
- [ ] Set **Who has access**: Anyone
- [ ] Click **Deploy**
- [ ] **Copy the Web App URL** ✂️

### Step 4: Update Your React App
- [ ] Open: `src/components/SignUp.js`
- [ ] Find line 21: `const GOOGLE_SCRIPT_URL = ...`
- [ ] Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your URL
- [ ] Save the file

### Step 5: Test!
- [ ] Run: `npm start`
- [ ] Fill out signup form
- [ ] Click submit
- [ ] Check your Google Sheet for new row! 🎉

## Alternative: Use Environment Variable

Create `.env` file in project root:
```
REACT_APP_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ID/exec
```

Then restart your dev server.

## Troubleshooting

**Form not submitting?**
1. Check browser console for errors
2. Verify Web App URL is correct
3. Make sure "Who has access" = Anyone
4. Try creating a new deployment

**Data not appearing in sheet?**
1. Check Apps Script logs
2. Verify column headers match exactly
3. Test the Web App URL in browser (should show success message)

**CORS errors?**
- This is normal with `mode: 'no-cors'`
- Data still saves despite the CORS warning
- Google Apps Script doesn't support CORS for Web Apps

## Need Help?

- See `GOOGLE_SHEETS_SETUP.md` for detailed guide
- See `google-apps-script.js` for the backend code
- Check browser console for errors

---

**Once connected, every signup will automatically save to your Google Sheet!** 📊

