!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:cosmic-tichy/portfolio.git master:gh-pages
cd -