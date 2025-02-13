# CS615
code for Internet Solutions

Step 1: Open Git Bash
Open Git Bash or terminal and navigate to the desired local folder:
cd /d/MU/4Solutions/git

Step 2: Initialize Git (if not already initialized)
If this folder is not already a Git repository, initialize it:
git init

Step 3: Add the Remote Repository
Set the remote origin to GitHub repository:
git remote add origin https://github.com/chnngl/CS615.git

Step 4: Fetch and Set the Default Branch
git fetch origin
git branch -M main  # If your repo uses 'main', adjust if needed
git reset --hard origin/main  # Resets local files to match remote

Step 5: Pull or Push
pull existing files from GitHub:
git pull origin main --allow-unrelated-histories
If the local folder already has files and you want to push them:
git add .
git commit -m "Initial commit"
git push -u origin main
