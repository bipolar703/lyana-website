@echo off
echo Building the project for production...
call npm run build

echo Deploying to lyana-previews.surge.sh...
call npx surge dist lyana-previews.surge.sh

echo Deployment complete!
echo Visit: https://lyana-previews.surge.sh
