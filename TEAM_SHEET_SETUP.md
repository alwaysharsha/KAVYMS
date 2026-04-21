# Team Sheet Setup Guide

This guide explains how to set up the Team data in Google Sheets for the KAVYMS website.

## Step 1: Access Team Spreadsheet

1. Open the Team Google Spreadsheet: https://docs.google.com/spreadsheets/d/1o7ap8DtkO5SDTEzBp_7hzcW2k1zobTdYWls5coWBeuA/
2. This is a dedicated spreadsheet for team data

## Step 2: Add Column Headers

In the first row, add these exact column headers:

| Name | Role | Description | Photo URL | Current Team | Year |
|------|------|-------------|-----------|--------------|------|

## Step 3: Fill in Team Data

### Example Data:

| Name | Role | Description | Photo URL | Current Team | Year |
|------|------|-------------|-----------|--------------|------|
| John Doe | President | Leading the organization with vision and dedication | https://example.com/john.jpg | Yes | 2024-2025 |
| Jane Smith | Secretary | Managing communications and documentation | https://example.com/jane.jpg | Yes | 2024-2025 |
| Bob Johnson | Treasurer | Managing finances and resources | | No | 2022-2023 |
| Alice Williams | Vice President | Supporting operations | https://example.com/alice.jpg | No | 2022-2023 |

### Column Details:

- **Name**: Full name of the team member (required)
- **Role**: Position/title (required)
- **Description**: Brief description of their role (optional)
- **Photo URL**: Direct link to their photo (optional)
  - Use image hosting services like Google Drive, Imgur, or direct URLs
  - For Google Drive: Share image → Get link → Make sure it's publicly accessible
  - Recommended size: 300x300 pixels or larger (square)
- **Current Team**: Type "Yes" for current members, "No" for past members (required)
- **Year**: Period of service like "2024-2025" or "2023" (optional but recommended)

## Step 4: Make Sheet Public

1. Click **Share** button in Google Sheets
2. Change to **"Anyone with the link"** can **view**
3. Click **Done**

## How It Works

### Current Team Display
- All members with "Current Team" = "Yes" are shown first
- Displayed in a grid layout
- Photos are shown if Photo URL is provided

### Past Teams Display
- Members with "Current Team" = "No" are grouped by Year
- Collapsible section (click to expand/collapse)
- Sorted by year (newest first)
- Each year group shows all members from that period

### Photo Handling
- If Photo URL is provided and valid → Shows the photo
- If Photo URL is empty or invalid → Shows default user icon
- Photos are displayed in a circular frame with border

## Tips

### For Photo URLs:

**Using Google Drive:**
1. Upload photo to Google Drive
2. Right-click → Share → Change to "Anyone with the link"
3. Copy the link
4. Convert to direct link format:
   - Original: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
   - Direct: `https://drive.google.com/uc?export=view&id=FILE_ID`

**Using Imgur:**
1. Upload to imgur.com
2. Right-click on image → Copy image address
3. Use that URL

**Best Practices:**
- Use square images (1:1 ratio)
- Minimum 300x300 pixels
- JPG or PNG format
- Keep file size under 500KB for faster loading

## Troubleshooting

### Photos not showing?
- Check if the URL is publicly accessible
- Try opening the URL in an incognito browser window
- Make sure the URL points directly to the image file
- Check for CORS issues (Google Drive links work best)

### Team members not appearing?
- Verify "Current Team" column has exactly "Yes" or "No" (case doesn't matter)
- Check that the sheet is publicly accessible
- Verify the GID in the code matches your Team sheet

### Past teams not grouped correctly?
- Make sure the "Year" column has consistent formatting
- Use formats like "2024-2025" or "2024"
- Empty Year values will be grouped as "Unknown Period"

## Example Sheet Structure

```
Name              | Role        | Description                    | Photo URL                        | Current Team | Year
------------------|-------------|--------------------------------|----------------------------------|--------------|----------
Rajesh Kumar      | President   | Leading with vision            | https://i.imgur.com/abc123.jpg   | Yes          | 2024-2025
Priya Sharma      | Secretary   | Managing communications        | https://i.imgur.com/def456.jpg   | Yes          | 2024-2025
Amit Patel        | Treasurer   | Financial management           |                                  | Yes          | 2024-2025
Suresh Reddy      | President   | Former president               | https://i.imgur.com/ghi789.jpg   | No           | 2022-2023
Lakshmi Iyer      | Secretary   | Former secretary               | https://i.imgur.com/jkl012.jpg   | No           | 2022-2023
```

---

**Need Help?** Contact the technical team or refer to the main README.md for more information.
