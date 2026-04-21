# KAVYMS Website - Quick Setup Guide

**Karnataka Arya Vysya Yuvajana Mahasabha**

## STEP 1: Install Dependencies

Open terminal in the project folder and run:

```bash
npm install
```

This will install all required packages (React, TailwindCSS, Leaflet, etc.)

## STEP 2: Run Locally

To view the website on your computer:

```bash
npm run dev
```

Then open your browser to: **http://localhost:5173**

## STEP 3: Make Changes

- Edit files in the `src/` folder
- Changes will appear automatically in your browser
- No need to restart the server

## STEP 4: Update Temple Data

Temple data comes from Google Sheets automatically!
Just edit the spreadsheet and refresh the website.

**Spreadsheet**: https://docs.google.com/spreadsheets/d/1L7XH5_A-4hKAaKIjeFTV9-a99_n5Cl1tvIaenK_yE7g/

## STEP 5: Deploy to GitHub Pages

1. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```

2. **GitHub Actions will automatically deploy the site**

3. **Visit**: https://alwaysharsha.github.io/KAVYMS/

## Troubleshooting

If you see errors:

1. Make sure Node.js is installed (v18 or higher)
2. Delete `node_modules` folder and run: `npm install`
3. Check the `README.md` for detailed help

---

For more details, see [README.md](./README.md)
