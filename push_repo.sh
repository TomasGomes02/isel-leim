#!/bin/bash

# Ensure we're in the Git repository
if [ ! -d ".git" ]; then
    echo "This script must be run from the root of a Git repository."
    exit 1
fi

# Add all changes to staging
git add .

# Commit the changes with a default message
git commit -m "Update repository"

# Push changes to the remote repository
git push origin main

# Check if push was successful
if [ $? -eq 0 ]; then
    echo "Changes pushed successfully."
else
    echo "Failed to push changes."
    exit 1
fi
