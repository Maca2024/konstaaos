<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1gibIDNEeOffwfyTNKl-59MG3jnSYcaBq

## Run Locally

**Prerequisites:**  Node.js 18.x or higher


1. Install dependencies:
   ```bash
   npm install
   ```
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   ```bash
   npm run dev
   ```

## Build and Preview

To test the production build locally:

1. Build the application:
   ```bash
   npm run build
   ```
2. Preview the production build:
   ```bash
   npm run preview
   ```
3. Open http://localhost:4173 to verify the app loads correctly

## Deploy to Vercel

This app is configured for deployment on Vercel with the following setup:

### Required Environment Variables

Set these in your Vercel project settings:
- `GEMINI_API_KEY` - Your Gemini API key from Google AI Studio

### Deployment Configuration

The repository includes:
- `vercel.json` - Vercel deployment configuration with SPA routing
- `.vercelignore` - Files to exclude from deployment
- `vite.config.ts` - Vite build configuration optimized for production

### Deploy Steps

1. Connect your GitHub repository to Vercel
2. Set the `GEMINI_API_KEY` environment variable in Vercel project settings
3. Deploy - Vercel will automatically run `npm run vercel-build`

The app will be built and deployed as a static single-page application with proper routing for client-side navigation.
