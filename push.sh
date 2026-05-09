#!/bin/bash

# Thinking Bottle Git Bash Push Script
clear
echo "=================================================="
echo "        Thinking Bottle - GitHub Push Script"
echo "=================================================="
echo ""

# Stage all files
echo "[1/3] Staging all changes..."
git add .
if [ $? -ne 0 ]; then
    echo ""
    echo "[ERROR] Failed to stage changes."
    read -n 1 -s -r -p "Press any key to exit..."
    exit 1
fi

# Prompt for commit message
echo ""
read -p "[2/3] Enter commit message (press Enter for 'update'): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="update"
fi

# Commit changes
echo ""
echo "[3/3] Committing changes..."
git commit -m "$commit_msg"

# Push changes
echo ""
echo "Pushing to GitHub (origin main)..."
git push origin main
if [ $? -ne 0 ]; then
    echo ""
    echo "[ERROR] Push failed. Please check your connection or credentials."
    read -n 1 -s -r -p "Press any key to exit..."
    exit 1
fi

echo ""
echo "=================================================="
echo "  Success! Your blog is now deploying on GitHub!"
echo "=================================================="
echo ""
read -n 1 -s -r -p "Press any key to exit..."
