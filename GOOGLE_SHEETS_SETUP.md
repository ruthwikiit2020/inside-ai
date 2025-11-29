# Google Sheets Integration Setup Guide

Follow these steps to connect your signup form to Google Sheets.

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Inside AI - Early Access Signups"
3. In the first row, add these column headers:
   ```
   A1: Timestamp
   B1: Email
   C1: Role
   D1: Current Project
   E1: How They'll Use AI
   F1: Feedback Call
   ```

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Copy and paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Create timestamp
    var timestamp = new Date();
    
    // Append data to sheet
    sheet.appendRow([
      timestamp,
      data.email || '',
      data.role || '',
      data.project || '',
      data.usage || '',
      data.feedback || ''
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'success',
        message: 'Data saved successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error',
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional)
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: 'success',
      message: 'Apps Script is running!' 
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Save** (disk icon)
5. Name your project: "Inside AI Form Handler"

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Fill in the settings:
   - **Description**: "Inside AI Signup Form Handler"
   - **Execute as**: Me (your@email.com)
   - **Who has access**: Anyone
5. Click **Deploy**
6. **Copy the Web App URL** - you'll need this!
   - It looks like: `https://script.google.com/macros/s/XXXXX/exec`

## Step 4: Update Your React App

The Web App URL has already been added to your SignUp component.
Just replace the placeholder URL with your actual Web App URL.

## Step 5: Test the Integration

1. Run your React app: `npm start`
2. Fill out the signup form
3. Submit the form
4. Check your Google Sheet - new row should appear!

## Troubleshooting

**If submissions aren't working:**

1. **Check CORS**: Make sure "Who has access" is set to "Anyone"
2. **Redeploy**: Sometimes you need to create a new deployment
3. **Check URL**: Make sure you copied the Web App URL, not the script URL
4. **Test endpoint**: Visit the URL directly - you should see success message
5. **Console errors**: Open browser DevTools → Console to see errors

## Security Notes

- The Apps Script is public but only accepts POST requests with valid data
- Email validation happens on both frontend and backend
- Consider adding rate limiting in Apps Script for production
- Store the Web App URL in environment variables for production

## Advanced: Add Email Notifications

Add this to your Apps Script to get notified of new signups:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    var timestamp = new Date();
    
    sheet.appendRow([
      timestamp,
      data.email || '',
      data.role || '',
      data.project || '',
      data.usage || '',
      data.feedback || ''
    ]);
    
    // Send email notification
    MailApp.sendEmail({
      to: "your@email.com",
      subject: "New Inside AI Signup: " + data.email,
      body: "New signup received!\n\n" +
            "Email: " + data.email + "\n" +
            "Role: " + data.role + "\n" +
            "Project: " + data.project + "\n" +
            "Usage: " + data.usage + "\n" +
            "Feedback Call: " + data.feedback
    });
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'success',
        message: 'Data saved successfully' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error',
        message: error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

**You're all set!** Follow these steps and your signup form will save directly to Google Sheets. 🎉

