// ============================================
// Google Apps Script for Inside AI Signup Form
// ============================================
// 
// SETUP INSTRUCTIONS:
// 1. Create a Google Sheet with these columns in Row 1:
//    Timestamp | Email | Role | Current Project | How They'll Use AI | Feedback Call
//
// 2. In Google Sheets: Extensions → Apps Script
// 3. Copy ALL the code below and paste it into the Apps Script editor
// 4. Click Save (disk icon)
// 5. Click Deploy → New deployment
// 6. Choose "Web app"
// 7. Set "Execute as" to "Me"
// 8. Set "Who has access" to "Anyone"
// 9. Click Deploy
// 10. Copy the Web App URL
// 11. Paste it in your .env file or directly in SignUp.js
//
// ============================================

function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Validate email
    if (!data.email || !data.email.includes('@')) {
      return ContentService
        .createTextOutput(JSON.stringify({ 
          status: 'error',
          message: 'Invalid email address' 
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Create timestamp
    var timestamp = new Date();
    
    // Append data to sheet
    sheet.appendRow([
      Utilities.formatDate(timestamp, Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm:ss"),
      data.email || '',
      data.role || 'Not specified',
      data.project || 'Not specified',
      data.usage || 'Not specified',
      data.feedback || 'Not specified'
    ]);
    
    // Optional: Send email notification to you
    // Uncomment the code below and replace with your email
    /*
    MailApp.sendEmail({
      to: "your@email.com",
      subject: "🎉 New Inside AI Signup: " + data.email,
      body: "New early access signup received!\n\n" +
            "━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
            "Email: " + data.email + "\n" +
            "Role: " + data.role + "\n" +
            "Project: " + data.project + "\n" +
            "How They'll Use AI: " + data.usage + "\n" +
            "Feedback Call: " + data.feedback + "\n\n" +
            "━━━━━━━━━━━━━━━━━━━━━━━━━━\n" +
            "Timestamp: " + timestamp
    });
    */
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'success',
        message: 'Thank you for joining! We\'ll be in touch soon.',
        timestamp: timestamp
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error
    Logger.log('Error: ' + error.toString());
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        status: 'error',
        message: 'Failed to save data. Please try again.' 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test endpoint - visit the Web App URL to test
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: 'success',
      message: 'Inside AI Form Handler is running!',
      timestamp: new Date()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Optional: Function to get all submissions (for admin use)
function getAllSubmissions() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  return data;
}

// Optional: Function to count total submissions
function getTotalSubmissions() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  return sheet.getLastRow() - 1; // Subtract header row
}

