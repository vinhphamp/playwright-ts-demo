# playwright-ts-demo

# Install Allure Report steps: (https://allurereport.org/docs/v2/view-report/)

## Run commands

### macOS Local Environment

1. `brew install allure`

   * Install new allure report.

2. `allure --version`

   * Check latest version of installed allure report.

3. `npm i -D playwright/test allure-playwright --force`

   * Install from npm.

4. Configure to add allure-playwright into playwright.config.ts

   * reporter: [
         ['line'],
         ['html', { open: 'never' }],
         ['allure-playwright', {
         outputFolder: 'allure-results',  // thư mục kết quả thô cho Allure
         detail: true,                    // log step chi tiết
         suiteTitle: false                // không ép tiêu đề suite
         }],
      ],

### Windows (PowerShell) Local Environment

1. `scoop install allure`

   * Install new allure report.

2. `allure --version`

   * Check latest version of installed allure report.

# Generate Allure Report steps: (https://allurereport.org/docs/v2/view-report/)

## Run commands

### macOS Local Environment

1. `rm -rf allure-results allure-report`

   * Remove previous Allure results and reports to ensure a clean execution.

2. `npx playwright test --workers=2`

   * Execute Playwright tests using 2 parallel workers and generate new Allure raw result files.

3. `ALLURE_SINGLE_FILE=true npx allure generate ./allure-results -o ./allure-report --clean`

   * Generate a fresh Allure report in single-file mode from the raw test results.

4. `npx allure open allure-report`

   * Start a temporary local web server and automatically open the Allure report in the browser.

---

### Windows (PowerShell) Local Environment

1. `Remove-Item -Recurse -Force allure-results, allure-report`

   * Remove previous Allure results and reports to ensure a clean execution.

2. `npx playwright test --workers=2`

   * Execute Playwright tests using 2 parallel workers and generate new Allure raw result files.

3. `$env:ALLURE_SINGLE_FILE="true"`

   * Create an environment variable to enable single-file Allure report generation.

4. `npx allure generate ./allure-results -o ./allure-report --clean`

   * Generate a fresh Allure report in single-file mode from the raw test results.

5. `npx allure open allure-report`

   * Start a temporary local web server and automatically open the Allure report in the browser.

  
### Window environment local:
1. `Remove-Item -Recurse -Force allure-results, allure-report`
   - Remove previous Allure raw results and generated reports to ensure a clean execution.

2. `npx playwright test --workers=2`
   - Execute Playwright tests using 2 parallel workers and generate new Allure result files.

3. `$env:ALLURE_SINGLE_FILE="true"`
   - Create an environment variable to enable single-file Allure report generation.

4. `npx allure generate ./allure-results -o ./allure-report --clean`
   - Generate a fresh Allure report in single-file mode from the raw test results.

5. `npx allure open allure-report`
   - Start a temporary local web server and automatically open the Allure report in the browser.

Optional from step 4 above
5. `npm i -D http-server`
   - Install a lightweight HTTP server for hosting the generated report locally.

6. `npx http-server ./allure-report -p 9333 -a 0.0.0.0`
   - Start a web server and expose the report at port 9333.
7. Open the following URL in your browser:
   - http://localhost:9333
   - View the generated Allure report through a dedicated local web server.

# Git & GitHub Standard Flow (Terminal)

## Core idea
- Always do your work on a **feature branch** like `new_branch`, not directly on `main`.
- `main` is the stable branch of the project.
- Your feature branch is where you code, commit, test, update with latest `main`, and prepare a PR.

---

## 1. Start from the latest `main`
```bash
git switch main
git pull origin main
git switch -c new_branch
```

- **Current branch:** `new_branch`
- Create a new branch from the latest `main`.
- This keeps your work based on the newest code from the team.
- `git switch -c` creates and switches to the new branch in one step.

---

## 2. Work on your branch
```bash
git status
git add .
git commit -m "your message"
git push -u origin new_branch
```

- **Current branch:** `new_branch`
- `git status` checks what changed.
- `git add .` stages your changes.
- `git commit` saves a local snapshot.
- `git push -u origin new_branch` uploads your branch to remote and sets upstream tracking.

---

## 3. Keep your branch updated with the latest `main`
### Option A:
```bash
git switch main
git pull origin main
git switch new_branch
git merge main
```
- **Current branch:** `new_branch`
- `git merge main` means: merge **local `main` into the current branch**.
- This updates your feature branch with the latest changes from `main`.
- Helps reduce conflicts before creating the PR.

### Option B:
```bash
git fetch origin
git log ..origin/main
git merge origin/main
```

- **Current branch:** `new_branch`
- `git merge origin/main` means: merge remote main directly into the current branch.
- This updates your feature branch with the latest changes from the server.
- Helps reduce conflicts and ensures you have the newest code before creating the PR.

---

## 4. Resolve conflict if needed
```bash
git status
# fix conflicted files
git add .
git commit -m "resolve conflict"
git push origin new_branch
```

- **Current branch:** `new_branch`
- Only do this if Git reports a conflict.
- After fixing, stage, commit, and push again.

---

## 5. Create Pull Request
```bash
gh pr create --base main --head new_branch --title "Title Text" --body "Body Text"
```

- **Current branch:** `new_branch`
- Creates a PR from `new_branch` into `main`.
- Use this for team projects that need review and approval.
- If you already created the PR once, you usually do **not** create it again; just keep pushing commits to the same branch.

---

## 6. Merge options

### Option A: Merge on website
- Open the PR on GitHub.
- Review it.
- Click **Merge** on the website.
- In this option, you **do not need** to run `gh pr merge --merge`.

### Option B: Merge on terminal
```bash
gh pr merge --merge
```

- **Current branch:** `new_branch` or any branch linked to the PR.
- Merges the PR on GitHub using the normal merge strategy.
- Use this only if you want to merge from the terminal.
- If your repo requires checks or review, GitHub may only allow merge after those pass.
- You can also use `--squash` or `--rebase` if your team prefers a different merge style.

- 1. Git Merge (Safe & Preserves History)
How it works: Git creates a new "Merge Commit" that ties the history of the main branch and your feature branch together.
Pros: It preserves the complete chronological history of the project. Looking at the Git graph, you can clearly see exactly when a branch started and when it was merged back.
Cons: In large teams with many contributors, the Git graph can become cluttered (the "spider web" effect) due to numerous decorative merge commits.
When to use: Use this when you prioritize safety and transparency, and when having a perfectly straight history line isn't a requirement.

- 2. Git Rebase (Clean & Linear)
How it works: It "lifts" all your new commits, updates the base of your feature branch to the latest main commit, and then "re-applies" your commits on top.
Pros: Keeps a very clean, linear project history. There are no redundant merge commits like "Merge branch main into feature."
Cons: It rewrites commit history (changes the commit hashes). If you rebase a branch that others are also working on, it will cause serious synchronization errors for their local machines.
When to use: Use this when you are working alone on a branch and want your changes to appear neatly at the very top of the main branch.

---

## 7. Sync local `main` after merge
```bash
git switch main
git pull origin main
```

- **Current branch:** `main`
- Updates your local `main` to match the remote `main`.
- Do this after the PR is merged.

---

## 8. Delete branch after merge
```bash
git branch -d new_branch
git push origin --delete new_branch
```

- **Current branch:** `main`
- `git branch -d` deletes the local branch after it has been merged.
- `git push origin --delete` removes the remote branch.
- This keeps the repo clean.

---

## Important rules

### `git merge <branch_name>`
- Always means: merge `<branch_name>` **into the current branch**.
- Example:
  - On `new_branch`:
    ```bash
    git merge main
    ```
    means `main -> new_branch`
  - On `main`:
    ```bash
    git merge new_branch
    ```
    means `new_branch -> main`

### Recommended habit
- Always check your branch before merging:
  ```bash
  git branch
  ```
- Always update local `main` before starting new work:
  ```bash
  git switch main
  git pull origin main
  ```

---
# Git Flow, Pull Request
## 1. đang ở main, sync latest
```bash
git switch main
git pull origin main
```

## 2. tạo branch mới
```bash
git switch -c api-request
```

## 3. code changes
```bash
tạo/sửa file
```
## 4. kiểm tra changes
```bash
git status
```

## 5. add vào staging
```bash
git add .
```
## 6. commit
```bash
git commit -m "add dummy file"
```
## 7. push branch lên remote
```bash
git push -u origin api-request
```
## 8. tạo PR
```bash
gh pr create --base main --head api-request --title "add dummy files" --body "add dummy_file.js"
```
## 9. merge PR
```bash
gh pr merge 1 --merge
```
## 10. sync main local
```bash
git switch main
git pull origin main
```
## 11. xoá branch local
```bash
git branch -d api-request
```
## 12. xoá branch remote
```bash
git push origin --delete api-request
```
---

## Summary
- Create your branch from the latest `main`.
- Commit and push changes on your branch.
- Pull latest `main`, then merge `main` into your branch.
- Create PR from your branch to `main`.
- Merge PR either on the website or on the terminal.
- Sync local `main`, then delete the branch.


```bash

# Rules (locator syntax of CSS selector)
- '.' -> class -> '.demo-frame'
- '#' -> id -> #gallery
- '[]' -> generic attribute -> [title="Delete"]
- plain text -> tag -> div

```