#!/bin/bash
next build
rm -rf ../out
mkdir ../out
cp -rf ./out/* ../out
cd ../out
git init
git branch -M main
git remote add origin https://github.com/profitgrowinginnovator/hpp-website.git
git add .
git commit -m "new version"
git push -f -u origin main
cd ../hpp-site
