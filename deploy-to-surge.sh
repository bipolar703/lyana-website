#!/bin/bash

echo "Building the project for production..."
npm run build

echo "Deploying to lyana-previews.surge.sh..."
npx surge dist lyana-previews.surge.sh

echo "Deployment complete!"
echo "Visit: https://lyana-previews.surge.sh"
