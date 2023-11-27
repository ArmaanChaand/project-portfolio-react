git checkout dev
git add .
git commit -m "changes"
git push origin dev
git checkout main
git merge dev
git push origin main
git checkout dev