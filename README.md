# KAVYMS Website

**Karnataka Arya Vysya Yuvajana Mahasabha**

[![Deploy to GitHub Pages](https://github.com/alwaysharsha/KAVYMS/actions/workflows/deploy.yml/badge.svg)](https://github.com/alwaysharsha/KAVYMS/actions/workflows/deploy.yml)

🌐 **Live Site**: https://alwaysharsha.github.io/KAVYMS/

A modern, mobile-responsive website for KAVYMS featuring interactive Vasavi temple listings with dynamic Google Sheets integration, map views, and traditional Indian temple aesthetics.

## 🌟 Features

- **5 Pages**: Home, About, History, Team, and Temple List
- **Dynamic Data**: Temple list reads directly from Google Sheets in real-time
- **Interactive Filters**: Filter temples by Country, State, District, and Locality
- **Dual View Modes**: Toggle between List and Map views
- **Interactive Map**: Leaflet-powered map with temple markers and GPS coordinates
- **Search Functionality**: Search across all temple fields
- **Mobile Responsive**: Fully optimized for all device sizes
- **Traditional Design**: Beautiful temple-themed color scheme (orange, gold, maroon)
- **Tree Background**: Subtle opaque background across all pages

## 🚀 Technology Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Routing**: React Router v6
- **Maps**: Leaflet & React-Leaflet
- **Icons**: Lucide React
- **CSV Parsing**: PapaParse
- **Deployment**: GitHub Pages with GitHub Actions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (comes with Node.js)
- Git

## 🛠️ Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/alwaysharsha/KAVYMS.git
cd KAVYMS
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React and React DOM
- React Router
- TailwindCSS
- Leaflet and React-Leaflet
- Lucide React (icons)
- PapaParse (CSV parsing)
- Vite and related plugins

### 3. Start Development Server

```bash
npm run dev
```

The website will open at `http://localhost:5173`

**Features of Dev Server:**
- ⚡ Hot Module Replacement (HMR) - changes reflect instantly
- 🔄 Auto-reload on file changes
- 📱 Test responsive design using browser dev tools

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### 5. Preview Production Build Locally

```bash
npm run preview
```

This serves the production build locally so you can test exactly what will be deployed.

## 📁 Project Structure

```
KAVYMS/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── Layout.jsx         # Main layout with tree background
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Footer.jsx         # Footer component
│   │   ├── TempleCard.jsx     # Temple card for list view
│   │   ├── TempleMap.jsx      # Interactive map component
│   │   └── TempleFilters.jsx  # Filter controls
│   ├── pages/
│   │   ├── Home.jsx           # Home page
│   │   ├── About.jsx          # About page
│   │   ├── History.jsx        # History page
│   │   ├── Team.jsx           # Team page
│   │   └── TempleList.jsx     # Temple directory with filters
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # TailwindCSS configuration
├── postcss.config.js         # PostCSS configuration
└── README.md                 # This file
```

## 🗺️ Temple Data Integration

The temple list dynamically fetches data from Google Sheets:

**Spreadsheet URL**: 
```
https://docs.google.com/spreadsheets/d/1L7XH5_A-4hKAaKIjeFTV9-a99_n5Cl1tvIaenK_yE7g/
```

**Data Structure**:
- Country
- State
- District
- Locality
- Address
- GPS Co-ordinates

**How it Works**:
1. The spreadsheet is exported as CSV via Google Sheets API
2. PapaParse library parses the CSV data
3. Data is displayed in real-time with filtering capabilities
4. GPS coordinates are used for map markers

**To Update Temple Data**:
Simply edit the Google Spreadsheet - changes will reflect automatically on the website!

## 👥 Team Data Integration

The team page also dynamically fetches data from Google Sheets:

**Team Spreadsheet**:
```
https://docs.google.com/spreadsheets/d/1o7ap8DtkO5SDTEzBp_7hzcW2k1zobTdYWls5coWBeuA/
```

**Required Columns for Team Sheet**:
- **Name**: Team member's full name
- **Role**: Position/title (e.g., President, Secretary)
- **Description**: Brief description of responsibilities
- **Photo URL**: Direct link to member's photo (optional)
- **Current Team**: "Yes" or "No" (case-insensitive)
- **Year** or **Period**: Year/period of service (e.g., "2024-2025")

**Features**:
- **Current Team**: Members with "Current Team" = "Yes" are displayed first
- **Past Teams**: Members with "Current Team" = "No" are grouped by Year/Period
- **Photo Display**: If Photo URL is provided, displays the image; otherwise shows default icon
- **Collapsible Past Teams**: Click to expand/collapse past team members
- **Automatic Grouping**: Past teams are automatically organized by year

**To Update Team Data**:
1. Edit the Team spreadsheet directly
2. Add the required column headers (Name, Role, Description, Photo URL, Current Team, Year)
3. Fill in team member information
4. Make sure the spreadsheet is publicly accessible (Anyone with the link can view)
5. Changes reflect automatically on the website!

## 🎨 Design System

### Color Palette
- **Primary**: Orange (#FF6B35, #F7931E) - Temple vibrancy
- **Secondary**: Maroon (#8B0000, #A52A2A) - Traditional richness
- **Accent**: Gold (#FFD700, #DAA520) - Divine elegance
- **Background**: Warm cream/beige (#FFF8DC, #F5F5DC)
- **Text**: Dark brown (#3E2723) - Readability

### Background Image
The tree background image is applied across all pages with 15% opacity to maintain readability while providing visual consistency.

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

The website automatically deploys to GitHub Pages when you push to the `main` branch.

**Setup Steps**:

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: GitHub Actions

2. **Push to Main Branch**:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

3. **Monitor Deployment**:
   - Go to Actions tab in your repository
   - Watch the deployment progress
   - Once complete, visit: `https://alwaysharsha.github.io/KAVYMS/`

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
# Upload the contents of the dist/ folder to your hosting provider
```

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints:
- **Mobile**: < 640px (single column, hamburger menu)
- **Tablet**: 640px - 1024px (2 columns)
- **Desktop**: > 1024px (3+ columns, full navigation)

## 🔧 Configuration

### Updating Base Path

If deploying to a different path, update `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

And update `App.jsx`:

```javascript
<Router basename="/your-repo-name">
```

### Updating Google Sheets URL

To use a different spreadsheet, update the `SHEET_URL` in `src/pages/TempleList.jsx`:

```javascript
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv'
```

**Important**: Make sure the spreadsheet is publicly accessible (Anyone with the link can view).

## 🐛 Troubleshooting

### Issue: CSS not loading properly
**Solution**: Run `npm install` to ensure TailwindCSS is installed correctly.

### Issue: Map not displaying
**Solution**: Check that Leaflet CSS is loaded in `index.html` and GPS coordinates are in correct format (latitude,longitude).

### Issue: Temple data not loading
**Solution**: 
1. Verify the Google Sheet is publicly accessible
2. Check browser console for CORS errors
3. Ensure spreadsheet has correct column headers

### Issue: Build fails
**Solution**: 
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Try `npm run build` again

## 📝 Content Updates

### Updating Page Content
Edit the respective files in `src/pages/`:
- `Home.jsx` - Home page content
- `About.jsx` - About page content
- `History.jsx` - History timeline and content
- `Team.jsx` - Team member information

### Updating Temple Data
Edit the Google Spreadsheet directly - changes reflect automatically!

### Updating Styles
- Global styles: `src/index.css`
- Theme colors: `tailwind.config.js`
- Component-specific styles: Within each component file

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available for use by the Vasavi temple community.

## 📞 Support

For questions or issues, please contact the temple community administrators.

## 🙏 Acknowledgments

- KAVYMS community for their support
- All devotees contributing to temple information
- Open source libraries that made this project possible

---

**Built with ❤️ for KAVYMS - Karnataka Arya Vysya Yuvajana Mahasabha**
