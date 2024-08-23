#!/bin/bash

# Ensure we're in the Git repository
if [ ! -d ".git" ]; then
    echo "This script must be run from the root of a Git repository."
    exit 1
fi

# Check if there are any local changes
if git status --porcelain | grep -q '^[MADRCU]'; then
    echo "You have uncommitted changes. Please commit or stash them before proceeding."
    exit 1
fi

# Example operation: Pull the latest changes from the remote repository
git pull origin main

# Check if pull was successful
if [ $? -eq 0 ]; then
    echo "Repository updated successfully."
else
    echo "Failed to update repository."
    exit 1
fi