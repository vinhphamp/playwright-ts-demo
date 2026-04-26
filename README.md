# playwright-ts-demo

# Generate Allure Report steps:

## Run commands

### Codespaces environment: -> run one command 'npm run report:allure' (must configured with commands 'npm i -D http-server' -> 'npm i -D open' and package.json file (report:allure) )

1. `rm -rf allure-results allure-report`

2. `npx playwright test --workers=2`

3. `ALLURE_SINGLE_FILE=true npx allure generate ./allure-results -o ./allure-report --clean`
   - Generate report dạng single-file

4. `npm i -D http-server`
   - Serve report bằng http-server (ổn cho Codespaces)

5. `npx http-server ./allure-report -p 9333 -a 0.0.0.0`
   - Open in browser to view report
  
### Window environment local:
1. `rm -rf allure-results allure-report`

2. `npx playwright test --workers=2`

3. `$env:ALLURE_SINGLE_FILE="true"`
   - Create variable

4. `npx allure generate ./allure-results -o ./allure-report --clean`
   - Generate report dạng single-file

5. `npm i -D http-server`
   - Serve report bằng http-server (ổn cho Codespaces)

6. `npx http-server ./allure-report -p 9333 -a 0.0.0.0`
   - Open in browser to view report


### Git & GitHub Standard Flow (Terminal):

1. `git checkout -b new_branch`
   - **Current branch:** `new_branch`
   - Create a new branch from main to start your work
   - Keeps your changes isolated from main

2. `git add .` then `git commit -m "your message"` then `git push origin new_branch`
   - **Current branch:** `new_branch`
   - Commit & push your code first to avoid losing any changes
   - Push to remote so your branch is available for PR

3. `git switch main`
   - **Current branch:** `main`
   - Must switch to main before pulling latest code

4. `git pull origin main`
   - **Current branch:** `main`
   - Pull latest code from main (including teammates’ changes)
   - Keep your local main up-to-date

5. `git switch new_branch`
   - **Current branch:** `new_branch`
   - Go back to your working branch

6. `git merge main`
   - **Current branch:** `new_branch`
   - Merge latest main into your branch → `main → new_branch`
   - Ensures your branch is up-to-date before creating PR
   - Helps avoid conflicts during PR merge

7. Resolve conflict if any (skip if none)
   - **Current branch:** `new_branch`
   - If conflict occurs after merge → fix → commit & push again:
   - `git add .` then `git commit -m "resolve conflict"` then `git push origin new_branch`
   - Ensures your branch is clean and ready for PR

8. Option A - Team project (requires review & approval)
   - `gh pr create --base main --head new_branch --title "Title Text" --body "Body Text"`
   - **Current branch:** `new_branch` (or any)
   - Create Pull Request for review before merging into main

9. Option B - Solo project (merge immediately)
   - `gh pr merge --merge`
   - **Current branch:** not required (handled on GitHub)
   - Merge your branch into main directly
   - Choose `Y` to delete `new_branch` after merge (if prompted)

10. After merge (sync local main)
   - `git switch main`
   - `git pull origin main`
   - **Current branch:** `main`
   - Ensure your local main is up-to-date with remote after merge
   - Important before starting new work

11. Delete branch manually (if not auto-deleted)

   - Delete local branch:
     `git branch -d new_branch`
     - **Current branch:** `main`
     - Delete local branch after it has been merged

   - Delete remote branch:
     `git push origin --delete new_branch`
     - **Current branch:** `main` (recommended)
     - Remove branch from remote repository (GitHub/GitLab)

   - Why:
     - Keep repository clean
     - Avoid using outdated branches
     - Follow good Git hygiene

### Important Rule:

- `git merge <branch_name>`
  - Always means: merge from `<branch_name>` → into current branch

- Example:
  - On `new_branch` → `git merge main` → `main → new_branch`
  - On `main` → `git merge new_branch` → `new_branch → main`

### Summary:

- Always check current branch before merge
- Update your branch with latest `main` before creating PR
- Use PR flow for team collaboration instead of direct merge
- Sync local main after merge (`switch main + pull`)
- Delete branches after merge to keep repo clean