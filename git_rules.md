# Git Workflow Rules for Development

## Introduction
This guide outlines the Git practices for our development workflow, focusing on the use of a `staging` branch as the main integration branch for development.

### Before You Start
Ensure Git is installed on your machine and you have access to our repository.

## Workflow Steps

### 1. Starting with a New Issue
Before beginning work on a new issue, make sure your local repository is up-to-date.

#### Update Your Local Repository
- **Fetch remote changes**:
- **Switch to `staging` branch**:
- **Pull latest changes from `staging`**:

### 2. Creating a New Branch
For each new issue, create a branch off the `staging` branch. Name your branch meaningfully, based on the feature or fix.

- **Create and switch to your new branch**:

### 3. Working on Your Branch
Perform your development work on this branch. Regularly save your progress by committing.

#### Adding Changes
- **Stage changes**:
Or add specific files:

#### Committing Changes
- **Commit with a descriptive message**:

### 4. Pushing Changes
After committing your changes, push the branch to the remote repository.

- **Push your branch**:

### 5. Creating a Pull Request (PR)
Once your changes are pushed, create a Pull Request to merge them into the `staging` branch.

- Navigate to the repository page on GitHub/GitLab/Bitbucket.
- Initiate a 'New Pull Request'.
- Set your branch as the source and `staging` as the target branch.
- Complete the PR template detailing your changes.
- Submit the PR for review.

### 6. Code Review
Wait for feedback on your PR. Address any comments or required changes promptly.

### 7. Merging into Staging
Once your PR is approved, it will be merged into the `staging` branch, usually by a senior team member or a designated reviewer.

### 8. Cleaning Up Post-Merge
After merging, clean up your local and remote branches if no longer needed.

- **Delete the local branch**:
- **Delete the remote branch**:

## Conclusion
Following this workflow ensures consistency and organization in our development process. Remember to regularly synchronize your local repository with the `staging` branch and work on separate branches for individual issues.
