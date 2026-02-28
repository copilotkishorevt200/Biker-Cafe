---
description: How to deploy the Biker-Cafe application to Vercel
---

# Deploying to Vercel

Follow these steps to deploy your application to Vercel.

## 1. Install Vercel CLI (Optional but recommended for testing)

If you want to test the deployment from your terminal:

```bash
npm install -g vercel
```

## 2. Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. Push your code to a Git repository (GitHub/GitLab/Bitbucket).
2. Go to the [Vercel Dashboard](https://vercel.com/new).
3. Import your repository.
4. Vercel will auto-detect the settings. Ensure the following:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (Project Root)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`
5. Click **Deploy**.

### Option B: Via Vercel CLI

In your project root, run:

```bash
vercel
```

Follow the prompts to link your project and deploy. For production after the first preview:

```bash
vercel --prod
```

## 3. Post-Deployment Verification

1. Visit the provided URL.
2. Check that the "Menu" and "Contact" sections load correctly.
3. Test a form submission to ensure the backend API is working.
