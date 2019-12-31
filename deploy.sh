#!/usr/bin/env sh

# abort on errors
set -e

git init
git add -A
git commit -m "$1"

git push -f https://github.com/kshm2483/TIL.git master

# build
npm run build

# navigate into the build output directory
cd .vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m "$1"

# if you are deploying to https://<USERNAME>.github.io
git push -f https://github.com/kshm2483/kshm2483.github.io.git master

cd -