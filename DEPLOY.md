# Student Quick Finds - Deployment Guide

## 🚀 Deploying to Vercel

### 1. **Install Vercel CLI** (optional)
```bash
npm install -g vercel
```

### 2. **Set up Environment Variables in Vercel Dashboard**

1. Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on **Settings** → **Environment Variables**
3. Add the following variable:
   - **Key**: `GOOGLE_MAPS_API_KEY`
   - **Value**: `AIzaSyDH2oAs9HoUj5BueJRfrAfeZiSkhmMWCok`
   - **Environment**: Select all (Production, Preview, Development)

### 3. **Deploy**

#### Option A: Deploy via GitHub (Recommended)
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel will auto-detect and deploy
5. Done! Your site is live at `https://your-project.vercel.app`

#### Option B: Deploy via CLI
```bash
vercel
```

### 4. **Update Google Maps API Restrictions**
In [Google Cloud Console](https://console.cloud.google.com/apis/credentials):
- Add your Vercel domain: `https://your-project.vercel.app/*`
- Add preview domains: `https://*-your-username.vercel.app/*`

---

## 🌐 How It Works

### For Production (Vercel)
- HTML files fetch API key directly from `/api/maps-key` serverless function
- The key is stored as an environment variable in Vercel
- Never exposed in source code or GitHub

### For Local Development
- `.env` file stores the key locally (gitignored)
- Serverless function reads from `.env` when running locally
- Use `vercel dev` to test locally with serverless functions

---

## 📁 Project Structure
```
student-quick-finds/
├── api/
│   └── maps-key.js          # Serverless function for API key
├── .env                     # Local environment variables (gitignored)
├── vercel.json              # Vercel configuration
├── map-*.html               # Map pages (fetch key from API)
└── ...
```

---

## 🔒 Security Notes
- `config.js` and `.env` are in `.gitignore` - never committed
- A.env` is in `.gitignore` - never committed to GitHub
- Serverless function controls access via CORS
- Always monitor API usage in Google Cloud Console

---

## 🛠️ Local Development

For local testing with Vercel functions:
```bash
vercel dev
```

This will start a local server that simulates Vercel's serverless functions, allowing your HTML files to fetch the API key from `/api/maps-key`.
