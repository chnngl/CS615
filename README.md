# CS615

Configuration Steps

Step 1: Open Git Bash
Open Git Bash or terminal and navigate to the desired local folder

Step 2: Initialize Git (if not already initialized)
If the folder is not already a Git repository, initialize it:
git init

Step 3: Add the Remote Repository
Set the remote origin to GitHub repository:
git remote add origin https://github.com/chnngl/CS615.git

Step 4: Fetch the Default Branch
git fetch origin

Step 5: Pull (the latest changes)
pull existing files from GitHub:
git pull origin main

Step 6: Push
push the updated files:
git add .
git commit -m "Initial commit"
git push -u origin main
