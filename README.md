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

1. `git add .` then `git commit -m "your message"` then `git push origin new_branch`
   - Commit & push your code first to avoid losing any changes

2. `git switch main`
   - Must switch to main first before pulling
   - If you stay on new_branch and run `git pull origin main` -> main code will be pulled into new_branch, not main branch

3. `git pull origin main`
   - Pull latest code from main

4. `git switch new_branch`

5. `git merge main`
   - Ensures new_branch has the latest code from main before creating PR
   - Avoids conflicts occurring on GitHub after PR is created
   - If teammates pushed to main before you -> new_branch will be outdated

6. Resolve conflict if any (skip if none)
   - If conflict occurs after merge -> fix -> commit & push again:
   - `git add .` then `git commit -m "resolve conflict"` then `git push origin new_branch`

7. Option A - Team project (requires review & approval)
   - `gh pr create --base main --head new_branch --title "Title Text" --body "Body Text"`

8. Option B - Solo project (merge immediately)
   - `gh pr merge --merge`
   - Choose `Y` if you want to delete new_branch branch after merging

