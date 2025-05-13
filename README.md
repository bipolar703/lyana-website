# Lyana Travel Website

A modern, responsive travel website for Lyana Travel Services, specializing in visa services and flight bookings.

## Features

- Fully responsive design for all device sizes
- Modern UI with smooth animations and transitions
- Optimized image loading for better performance
- Touch-friendly interactions for mobile devices

## Responsive Destinations Section

The "Explore Global Destinations" section has been enhanced with:

- Permanently visible destination names and overlays on mobile
- Improved text readability against background images
- Proper spacing and sizing across all device sizes
- Optimized image loading

## Development

Follow these steps to set up the project locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd lyana-website

# Step 3: Install the necessary dependencies
npm install

# Step 4: Start the development server
npm run dev
```

## Deployment

### Deploy to Surge

The project is configured for easy deployment to Surge. You can deploy it using one of the following methods:

#### Using npm script

```bash
npm run deploy
```

This will build the project and deploy it to [lyana-previews.surge.sh](https://lyana-previews.surge.sh).

#### Using deployment scripts

For Windows:

```bash
./deploy-to-surge.bat
```

For macOS/Linux:

```bash
chmod +x ./deploy-to-surge.sh
./deploy-to-surge.sh
```

### Manual Deployment

If you prefer to deploy manually:

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy to Surge:

   ```bash
   npx surge dist lyana-previews.surge.sh
   ```

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- React Router
- Lucide React (for icons)
