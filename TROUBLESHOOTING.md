# 🔧 Troubleshooting Google Sheets Integration

## Problem: No rows appearing in Google Sheet after form submission

### ✅ Step-by-Step Debugging:

### 1. **Check Your Google Sheet Setup**

Your sheet MUST have these exact headers in Row 1:
```
A1: Timestamp
B1: Email  
C1: Role
D1: Current Project
E1: How They'll Use AI
F1: Feedback Call
```

**Important:** Make sure there are NO extra spaces in the header names.

---

### 2. **Verify Apps Script Code**

In Google Apps Script editor:

1. **Delete ALL code** in Code.gs
2. **Open** `PASTE_THIS_IN_GOOGLE_SCRIPT.txt` from your project
3. **Copy** lines 1-53 (the entire file)
4. **Paste** into Apps Script
5. **Save** (Ctrl+S or Cmd+S)

---

### 3. **Test the Script Manually**

In Apps Script editor:

1. Click the **function dropdown** (top center)
2. Select **doGet**
3. Click **Run** (play button ▶️)
4. **Grant permissions** if asked:
   - Review permissions
   - Choose your account
   - Click Advanced
   - Click "Go to [project] (unsafe)"
   - Allow

5. Check **Execution log** (bottom panel)
   - Should show "Execution completed"
   - No errors

---

### 4. **Verify Deployment Settings**

1. Click **Deploy** → **Manage deployments**
2. Check settings:
   - ✅ Type: Web app
   - ✅ Execute as: **Me** (your email)
   - ✅ Who has access: **Anyone**
3. If settings are wrong:
   - Click ✏️ Edit
   - Fix settings
   - Create **New version**
   - Deploy

---

### 5. **Test the Web App URL**

Visit this URL in your browser:
```
https://script.google.com/macros/s/AKfycbys84NooE31wp761EO4MUlOm4ys9ZEHRPomu0k6EFqoOC3ofSK89gEzkoENwR1J_TM/exec
```

**Expected response:**
```json
{
  "status": "success",
  "message": "Inside AI Form Handler is running!",
  "timestamp": "..."
}
```

**If you see an error:**
- The script has issues
- Go back to Step 2

---

### 6. **Test Form Submission**

Open browser DevTools (F12):

1. Go to **Console** tab
2. Submit the form
3. Look for logs:
   ```
   Submitting form data: {email: "test@test.com", ...}
   Google Script URL: https://script.google.com/...
   Response received: ...
   ```

**If you see errors:**
- CORS errors are NORMAL (expected with Google Apps Script)
- Data should still save

---

### 7. **Manual Test in Apps Script**

Add this temporary function to your Apps Script:

```javascript
function testSubmission() {
  var testData = {
    email: "test@example.com",
    role: "Screenwriter",
    project: "Test project",
    usage: "Testing the integration",
    feedback: "Yes"
  };
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var timestamp = new Date();
  
  sheet.appendRow([
    Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss"),
    testData.email,
    testData.role,
    testData.project,
    testData.usage,
    testData.feedback
  ]);
  
  Logger.log('Test row added successfully');
}
```

Then:
1. Save
2. Select `testSubmission` from function dropdown
3. Click Run
4. Check your sheet - should have a test row

**If this works:** The script is fine, issue is with form submission
**If this fails:** Check sheet structure and permissions

---

### 8. **Common Issues & Fixes**

**Issue: "Reference error" in Apps Script**
- ✅ Make sure you copied ONLY the code (no markdown, no comments with ```javascript```)
- ✅ Use `PASTE_THIS_IN_GOOGLE_SCRIPT.txt` file

**Issue: Permissions denied**
- ✅ Run the script manually first (Step 3)
- ✅ Grant all permissions
- ✅ Make sure "Execute as" is "Me"

**Issue: CORS errors in browser**
- ✅ This is normal and expected
- ✅ Data should still save
- ✅ Google Apps Script doesn't support CORS

**Issue: Wrong sheet receiving data**
- ✅ Make sure Apps Script is bound to correct sheet
- ✅ Check `getActiveSheet()` is getting the right one

**Issue: Data in wrong columns**
- ✅ Verify header order matches exactly
- ✅ Check for extra columns

---

### 9. **Alternative: Test with Postman/cURL**

Test the endpoint directly:

```bash
curl -L -X POST "YOUR_SCRIPT_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@test.com",
    "role": "Screenwriter",
    "project": "Test",
    "usage": "Testing",
    "feedback": "Yes"
  }'
```

---

### 10. **Still Not Working?**

**Create a NEW deployment:**

1. Go to Apps Script
2. **Deploy** → **New deployment**
3. Click gear icon → **Web app**
4. Settings:
   - Description: "Inside AI v2"
   - Execute as: **Me**
   - Who has access: **Anyone**
5. **Deploy**
6. **Copy the NEW URL**
7. **Update** in `src/components/SignUp.js`
8. **Restart** React app: `npm start`

---

## 📊 Expected Result

When working correctly:

1. User fills form
2. Clicks "Join the Early Access List"
3. Button shows "Submitting..."
4. New row appears in Google Sheet with:
   - Timestamp (auto)
   - Email
   - Role
   - Project description
   - How they'll use AI
   - Feedback preference
5. Success modal appears
6. Form resets

---

**Need more help?** Check the Apps Script execution logs for detailed error messages.

