#!/bin/bash
rm -rf ./out
mkdir ./out
cp -rf hpp-site/out ./out
cd ./out
git init
git remote add origin https://github.com/profitgrowinginnovator/hpp-website.git
git add .
git commit -m "new version"
git push -f -u origin main
