<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# PUNKKA-AOS | Arctic Ecosystem

A Vite + React application for the Arctic wildlife photography ecosystem by Konsta Punkka.

View your app in AI Studio: https://ai.studio/apps/drive/1gibIDNEeOffwfyTNKl-59MG3jnSYcaBq

## Prerequisites

- Node.js >= 18.0.0
- npm or yarn

## Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set the `GEMINI_API_KEY` environment variable:
   - Create a `.env.local` file in the root directory
   - Add: `GEMINI_API_KEY=your_api_key_here`
   - Or: `VITE_GEMINI_API_KEY=your_api_key_here`

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 in your browser

## Build for Production

```bash
npm run build
```

The production build will be output to the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Deploy to Vercel

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Maca2024/konstaaos)

### Manual Deploy

1. Push your code to a GitHub repository
2. Import the project in Vercel dashboard
3. Configure environment variables in Vercel:
   - `VITE_GEMINI_API_KEY` - Your Gemini API key (required for AI features)
4. Deploy!

### Environment Variables

The following environment variables are required:

- `VITE_GEMINI_API_KEY` or `GEMINI_API_KEY` - Your Gemini API key for AI features

**Note:** Without the API key, AI features (chat, image editing, video generation) will not work, but the rest of the application will function normally.

## Project Structure

- `components/` - React components for different views
- `services/` - Service layer for API calls (Gemini AI)
- `pages/` - Page components
- `public/` - Static assets
- `assets.ts` - Image asset definitions
- `types.ts` - TypeScript type definitions
