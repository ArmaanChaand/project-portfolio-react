# Prompt user for commit message
$commitMessage = Read-Host "Enter commit message"

# Perform Git operations
git checkout dev
git add .
git commit -m "$commitMessage"
git push origin dev
git checkout main
git merge dev
git push origin main
git checkout dev
