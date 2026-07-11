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
- Referent information to utilize the strength of playwright (https://software-testing-tutorials-automation.com/2026/04/playwright-typescript-tutorial.html)


```bash

# Rules (locator syntax of CSS selector)
- '.' -> class -> '.demo-frame'
- '#' -> id -> #gallery
- '[]' -> generic attribute -> [title="Delete"]
- plain text -> tag -> div
```
# Playwright Locator Reference

This section provides practical examples of common Playwright locators. Each locator type is grouped separately so beginners can identify and apply the correct syntax easily.

---

## 1. Locator by Role

Use `getByRole()` when the element has an accessible role such as:

- `button`
- `link`
- `checkbox`
- `heading`
- `textbox`

This is one of the most recommended locator strategies in Playwright.

### Button

#### DOM

```html
<button type="submit">
  Login
</button>
```

#### Playwright Locator

```ts
const loginButton = page.getByRole('button', {
  name: 'Login',
});
```

#### Action

```ts
await loginButton.click();
```

---

### Link

#### DOM

```html
<a href="/account">
  My Account
</a>
```

#### Playwright Locator

```ts
const myAccountLink = page.getByRole('link', {
  name: 'My Account',
});
```

#### Action

```ts
await myAccountLink.click();
```

---

### Checkbox

#### DOM

```html
<label>
  <input type="checkbox">
  Remember Me
</label>
```

#### Playwright Locator

```ts
const rememberMeCheckbox = page.getByRole('checkbox', {
  name: 'Remember Me',
});
```

#### Action

```ts
await rememberMeCheckbox.check();
```

To uncheck the checkbox:

```ts
await rememberMeCheckbox.uncheck();
```

---

### Heading

#### DOM

```html
<h1>User Dashboard</h1>
```

#### Playwright Locator

```ts
const dashboardHeading = page.getByRole('heading', {
  name: 'User Dashboard',
});
```

#### Assertion

```ts
await expect(dashboardHeading).toBeVisible();
```

---

### Textbox

#### DOM

```html
<label for="username">Username</label>
<input id="username" type="text">
```

#### Playwright Locator

```ts
const usernameInput = page.getByRole('textbox', {
  name: 'Username',
});
```

#### Action

```ts
await usernameInput.fill('testuser');
```

---

## 2. Locator by Text

Use `getByText()` when the element can be identified by its visible text.

### Exact Text

#### DOM

```html
<span>
  My Account
</span>
```

#### Playwright Locator

```ts
const myAccount = page.getByText('My Account', {
  exact: true,
});
```

#### Action

```ts
await myAccount.click();
```

---

### Partial Text

#### DOM

```html
<div>
  Welcome back, Test User
</div>
```

#### Playwright Locator

```ts
const welcomeMessage = page.getByText('Welcome back');
```

#### Assertion

```ts
await expect(welcomeMessage).toBeVisible();
```

---

### Text with Regular Expression

#### DOM

```html
<p>
  Welcome back, Test User
</p>
```

#### Playwright Locator

```ts
const welcomeMessage = page.getByText(/welcome back/i);
```

The `i` flag makes the locator case-insensitive.

#### Assertion

```ts
await expect(welcomeMessage).toBeVisible();
```

---

## 3. Locator by Label

Use `getByLabel()` when an input is associated with a `<label>` element.

### Username Input

#### DOM

```html
<label for="username">
  Username
</label>

<input
  id="username"
  type="text">
```

#### Playwright Locator

```ts
const usernameInput = page.getByLabel('Username');
```

#### Action

```ts
await usernameInput.fill('testuser');
```

---

### Password Input

#### DOM

```html
<label for="password">
  Password
</label>

<input
  id="password"
  type="password">
```

#### Playwright Locator

```ts
const passwordInput = page.getByLabel('Password');
```

#### Action

```ts
await passwordInput.fill('Password123');
```

---

## 4. Locator by Placeholder

Use `getByPlaceholder()` when the input has a `placeholder` attribute.

### Email Input

#### DOM

```html
<input
  type="email"
  placeholder="Enter your email">
```

#### Playwright Locator

```ts
const emailInput = page.getByPlaceholder('Enter your email');
```

#### Action

```ts
await emailInput.fill('user@example.com');
```

---

### Search Input

#### DOM

```html
<input
  type="search"
  placeholder="Search products">
```

#### Playwright Locator

```ts
const searchInput = page.getByPlaceholder('Search products');
```

#### Action

```ts
await searchInput.fill('Product name');
```

---

## 5. Locator by Test ID

Use `getByTestId()` when the development team provides a stable `data-testid` attribute.

### Login Button

#### DOM

```html
<button data-testid="login-button">
  Login
</button>
```

#### Playwright Locator

```ts
const loginButton = page.getByTestId('login-button');
```

#### Action

```ts
await loginButton.click();
```

---

### User Menu

#### DOM

```html
<div data-testid="user-menu">
  My Account
</div>
```

#### Playwright Locator

```ts
const userMenu = page.getByTestId('user-menu');
```

#### Assertion

```ts
await expect(userMenu).toBeVisible();
```

---

# CSS Selector Locators

Playwright supports standard CSS selectors through:

```ts
page.locator('CSS_SELECTOR');
```

---

## 6. Class Selector

Use `.` to locate an element by class.

### Single Class

#### DOM

```html
<div class="demo-frame">
  Demo content
</div>
```

#### CSS Selector

```css
.demo-frame
```

#### Playwright Locator

```ts
const demoFrame = page.locator('.demo-frame');
```

#### Assertion

```ts
await expect(demoFrame).toBeVisible();
```

---

### Multiple Classes

#### DOM

```html
<button class="btn btn-primary login-button">
  Login
</button>
```

#### CSS Selector

```css
.btn.btn-primary.login-button
```

#### Playwright Locator

```ts
const loginButton = page.locator(
  '.btn.btn-primary.login-button'
);
```

#### Action

```ts
await loginButton.click();
```

There is no space between the class names when all classes belong to the same element.

Correct:

```css
.btn.btn-primary
```

The following selector has a different meaning:

```css
.btn .btn-primary
```

It means an element with class `.btn-primary` located inside an element with class `.btn`.

---

## 7. ID Selector

Use `#` to locate an element by its `id`.

### Username Input

#### DOM

```html
<input
  id="username"
  type="text">
```

#### CSS Selector

```css
#username
```

#### Playwright Locator

```ts
const usernameInput = page.locator('#username');
```

#### Action

```ts
await usernameInput.fill('testuser');
```

An `id` should normally be unique on the page.

---

## 8. Attribute Selector

Use `[]` to locate an element by an HTML attribute.

### Attribute: `name`

#### DOM

```html
<input
  name="email"
  type="email">
```

#### CSS Selector

```css
[name="email"]
```

#### Playwright Locator

```ts
const emailInput = page.locator('[name="email"]');
```

#### Action

```ts
await emailInput.fill('user@example.com');
```

---

### Attribute: `title`

#### DOM

```html
<button title="Delete">
  Delete
</button>
```

#### CSS Selector

```css
[title="Delete"]
```

#### Playwright Locator

```ts
const deleteButton = page.locator('[title="Delete"]');
```

#### Action

```ts
await deleteButton.click();
```

---

### Attribute: `type`

#### DOM

```html
<button type="submit">
  Save
</button>
```

#### CSS Selector

```css
button[type="submit"]
```

#### Playwright Locator

```ts
const saveButton = page.locator('button[type="submit"]');
```

#### Action

```ts
await saveButton.click();
```

---

## 9. Tag Selector

Use the HTML tag name directly.

### Button Tag

#### DOM

```html
<button>
  Submit
</button>
```

#### CSS Selector

```css
button
```

#### Playwright Locator

```ts
const button = page.locator('button');
```

#### Action

```ts
await button.click();
```

Using only a tag name is usually not recommended because a page may contain many elements of the same type.

Examples that may match multiple elements:

```ts
page.locator('div');
page.locator('button');
page.locator('input');
```

---

## 10. Tag and Class Selector

Combine the tag name and class name to create a more specific locator.

### Login Button

#### DOM

```html
<button class="login-button">
  Login
</button>
```

#### CSS Selector

```css
button.login-button
```

#### Playwright Locator

```ts
const loginButton = page.locator('button.login-button');
```

#### Action

```ts
await loginButton.click();
```

---

## 11. Tag and ID Selector

Combine the tag name and element ID.

### Submit Button

#### DOM

```html
<button id="submit-button">
  Submit
</button>
```

#### CSS Selector

```css
button#submit-button
```

#### Playwright Locator

```ts
const submitButton = page.locator('button#submit-button');
```

A shorter version can also be used:

```ts
const submitButton = page.locator('#submit-button');
```

#### Action

```ts
await submitButton.click();
```

---

## 12. Tag and Attribute Selector

Combine the tag name and attribute.

### Email Input

#### DOM

```html
<input
  type="email"
  name="email">
```

#### CSS Selector

```css
input[type="email"]
```

#### Playwright Locator

```ts
const emailInput = page.locator('input[type="email"]');
```

#### Action

```ts
await emailInput.fill('user@example.com');
```

---

## 13. Class and Attribute Selector

Combine a class selector and an attribute selector.

### Save Button

#### DOM

```html
<button
  class="action-button"
  type="submit">
  Save
</button>
```

#### CSS Selector

```css
.action-button[type="submit"]
```

#### Playwright Locator

```ts
const saveButton = page.locator(
  '.action-button[type="submit"]'
);
```

#### Action

```ts
await saveButton.click();
```

---

## 14. Attribute Contains Value

Use `*=` when an attribute contains part of a value.

### User Icon

#### DOM

```html
<span class="medium pmi pmi-icon-user css-abcd">
</span>
```

#### CSS Selector

```css
[class*="pmi-icon-user"]
```

#### Playwright Locator

```ts
const userIcon = page.locator(
  '[class*="pmi-icon-user"]'
);
```

A tag can be added to make the locator more specific:

```ts
const userIcon = page.locator(
  'span[class*="pmi-icon-user"]'
);
```

#### Action

```ts
await userIcon.click();
```

---

## 15. Attribute Starts with Value

Use `^=` when an attribute starts with a specific value.

### Dynamic User ID

#### DOM

```html
<div id="user-profile-12345">
  User Profile
</div>
```

#### CSS Selector

```css
[id^="user-profile-"]
```

#### Playwright Locator

```ts
const userProfile = page.locator(
  '[id^="user-profile-"]'
);
```

#### Assertion

```ts
await expect(userProfile).toBeVisible();
```

---

## 16. Attribute Ends with Value

Use `$=` when an attribute ends with a specific value.

### Logout Link

#### DOM

```html
<a href="/account/logout">
  Logout
</a>
```

#### CSS Selector

```css
[href$="/logout"]
```

#### Playwright Locator

```ts
const logoutLink = page.locator(
  '[href$="/logout"]'
);
```

#### Action

```ts
await logoutLink.click();
```

---

# Relationship Selectors

---

## 17. Descendant Selector

Use a space to locate an element inside another element.

The child element does not need to be a direct child.

### Username Inside Login Form

#### DOM

```html
<div class="login-form">
  <div class="form-group">
    <input id="username">
  </div>
</div>
```

#### CSS Selector

```css
.login-form #username
```

#### Playwright Locator

```ts
const usernameInput = page.locator(
  '.login-form #username'
);
```

#### Action

```ts
await usernameInput.fill('testuser');
```

---

## 18. Direct Child Selector

Use `>` to locate a direct child element.

### Menu Item

#### DOM

```html
<ul class="menu">
  <li>
    <a href="/account">
      My Account
    </a>
  </li>
</ul>
```

#### CSS Selector

```css
.menu > li
```

#### Playwright Locator

```ts
const menuItem = page.locator('.menu > li');
```

To locate the link:

```ts
const accountLink = page.locator(
  '.menu > li > a'
);
```

#### Action

```ts
await accountLink.click();
```

---

## 19. Parent Containing a Specific Child

Use `:has()` to locate a parent element containing a specific child.

### Button Containing a User Icon

#### DOM

```html
<button class="account-button">
  <span class="pmi-icon-user"></span>
  <span>My Account</span>
</button>
```

#### Playwright Locator

```ts
const accountButton = page.locator(
  'button:has(.pmi-icon-user)'
);
```

#### Action

```ts
await accountButton.click();
```

---

## 20. Element Containing Text

Use `:has-text()` to locate an element containing specific text.

### Logout Button

#### DOM

```html
<button class="menu-button">
  Logout
</button>
```

#### Playwright Locator

```ts
const logoutButton = page.locator(
  'button:has-text("Logout")'
);
```

#### Action

```ts
await logoutButton.click();
```

> `:has-text()` is a Playwright selector extension. It is not a standard browser CSS selector.

---

# Position-Based Locators

---

## 21. First Element

### DOM

```html
<button class="action-button">Edit</button>
<button class="action-button">Delete</button>
```

#### Playwright Locator

```ts
const firstButton = page
  .locator('.action-button')
  .first();
```

#### Action

```ts
await firstButton.click();
```

---

## 22. Last Element

### Playwright Locator

```ts
const lastButton = page
  .locator('.action-button')
  .last();
```

#### Action

```ts
await lastButton.click();
```

---

## 23. Element by Index

Use `.nth()` to select an element by its position.

```ts
const secondButton = page
  .locator('.action-button')
  .nth(1);
```

The index starts from `0`:

```text
nth(0) = first element
nth(1) = second element
nth(2) = third element
```

#### Action

```ts
await secondButton.click();
```

> Use `.nth()` only when a more stable locator is not available.

---

# Practical Examples

---

## 24. My Account Element

### DOM

```html
<span class="user-account__category-span">
  My Account
</span>
```

### Locator by Text

```ts
const myAccount = page.getByText('My Account', {
  exact: true,
});
```

### Locator by CSS Class

```ts
const myAccount = page.locator(
  '.user-account__category-span'
);
```

### Action

```ts
await myAccount.click();
```

If the `<span>` is inside a `<button>`:

```html
<button class="account-button">
  <span class="user-account__category-span">
    My Account
  </span>
</button>
```

Prefer locating the clickable button:

```ts
const myAccountButton = page.getByRole('button', {
  name: 'My Account',
});
```

```ts
await myAccountButton.click();
```

---

## 25. Logout Button

### DOM

```html
<button class="MuiLink-root">
  <div>
    <span class="pmi-icon-logout"></span>
    <p>Logout</p>
  </div>
</button>
```

### Locator by Role

```ts
const logoutButton = page.getByRole('button', {
  name: 'Logout',
});
```

### Locator by Text

```ts
const logoutButton = page.locator(
  'button:has-text("Logout")'
);
```

### Locator by Icon

```ts
const logoutButton = page.locator(
  'button:has(.pmi-icon-logout)'
);
```

### Action

```ts
await logoutButton.click();
```

---

## 26. Filter Locator

Use `.filter()` when multiple elements have similar attributes but different text or child elements.

### DOM

```html
<ul class="account-menu">
  <li class="menu-item">My Account</li>
  <li class="menu-item">My Orders</li>
  <li class="menu-item">Logout</li>
</ul>
```

### Filter by Text

```ts
const logoutOption = page
  .locator('.menu-item')
  .filter({
    hasText: 'Logout',
  });
```

### Action

```ts
await logoutOption.click();
```

---

### Filter by Child Element

#### DOM

```html
<button class="menu-button">
  <span class="pmi-icon-logout"></span>
  <span>Logout</span>
</button>
```

#### Playwright Locator

```ts
const logoutButton = page
  .locator('button')
  .filter({
    has: page.locator('.pmi-icon-logout'),
  });
```

#### Action

```ts
await logoutButton.click();
```

---

## 27. Chained Locator

Use locator chaining to search inside a specific parent element.

### DOM

```html
<div class="login-form">
  <input name="username">
  <input name="password">
  <button>Login</button>
</div>
```

### Playwright Locator

```ts
const loginForm = page.locator('.login-form');

const usernameInput = loginForm.locator(
  '[name="username"]'
);

const passwordInput = loginForm.locator(
  '[name="password"]'
);

const loginButton = loginForm.getByRole('button', {
  name: 'Login',
});
```

### Actions

```ts
await usernameInput.fill('testuser');
await passwordInput.fill('Password123');
await loginButton.click();
```

---

# Recommended Locator Priority

Use the following priority when selecting Playwright locators:

1. `getByRole()`
2. `getByLabel()`
3. `getByPlaceholder()`
4. `getByText()`
5. `getByTestId()`
6. CSS selector
7. XPath

Example DOM:

```html
<button type="submit">
  Login
</button>
```

A CSS selector can be used:

```ts
page.locator('button[type="submit"]');
```

However, the recommended Playwright locator is:

```ts
page.getByRole('button', {
  name: 'Login',
});
```

The role locator is easier to read and represents how a user identifies the element.

---

# Locator Best Practices

- Prefer user-facing locators such as `getByRole()`, `getByLabel()`, and `getByText()`.
- Use stable attributes such as `data-testid`, `name`, `id`, or `aria-label`.
- Avoid dynamic classes such as `css-1abcxyz`.
- Avoid long CSS selectors that depend heavily on DOM structure.
- Avoid long XPath expressions when a role, text, attribute, or CSS locator can be used.
- Avoid `.nth()` when a stable text, role, label, or attribute is available.
- A locator should normally identify exactly one element.
- Locate the actual interactive element such as `<button>`, `<a>`, `<input>`, or `<select>`.
- Avoid clicking a `<span>` or `<p>` when it only contains text inside a clickable button.
- Use `exact: true` when the text must match exactly.
- Do not add unnecessary hard waits such as `waitForTimeout()`.
- Use Playwright assertions because they automatically wait for the expected condition.

Example:

```ts
await expect(loginButton).toBeVisible();
await loginButton.click();
```

---

# Checking Locator Uniqueness

Use `toHaveCount()` to confirm that a locator identifies the expected number of elements.

```ts
const loginButton = page.getByRole('button', {
  name: 'Login',
});

await expect(loginButton).toHaveCount(1);
```

You can also inspect the count during debugging:

```ts
console.log(await loginButton.count());
```

---

# Debugging Locators

Use `page.pause()` to open Playwright Inspector:

```ts
await page.pause();
```

Run the test in headed mode:

```bash
npx playwright test --headed
```

Run the test with Playwright Inspector:

```bash
npx playwright test --debug
```

Use Playwright Codegen to generate locator suggestions:

```bash
npx playwright codegen https://example.com
```

---

# Example Page Object Model

```ts
import {
  Page,
  Locator,
  expect,
} from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly rememberMeCheckbox: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.getByLabel('Username');

    this.passwordInput = page.getByLabel('Password');

    this.rememberMeCheckbox = page.getByRole(
      'checkbox',
      {
        name: 'Remember Me',
      }
    );

    this.loginButton = page.getByRole('button', {
      name: 'Login',
    });

    this.errorMessage = page.getByText(
      'Invalid credentials',
      {
        exact: true,
      }
    );
  }

  async login(
    username: string,
    password: string
  ): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async loginWithRememberMe(
    username: string,
    password: string
  ): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.rememberMeCheckbox.check();
    await this.loginButton.click();
  }

  async verifyInvalidCredentials(): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
  }
}
```

---

# Quick Syntax Summary

## Class

```ts
page.locator('.class-name');
```

## ID

```ts
page.locator('#element-id');
```

## Attribute

```ts
page.locator('[name="username"]');
```

## Tag

```ts
page.locator('button');
```

## Tag and Class

```ts
page.locator('button.login-button');
```

## Tag and Attribute

```ts
page.locator('button[type="submit"]');
```

## Attribute Contains

```ts
page.locator('[class*="icon-user"]');
```

## Attribute Starts With

```ts
page.locator('[id^="user-"]');
```

## Attribute Ends With

```ts
page.locator('[href$="/logout"]');
```

## Descendant

```ts
page.locator('.login-form input');
```

## Direct Child

```ts
page.locator('.menu > li');
```

## Parent Containing Child

```ts
page.locator('button:has(.logout-icon)');
```

## Element Containing Text

```ts
page.locator('button:has-text("Logout")');
```

## Role

```ts
page.getByRole('button', {
  name: 'Login',
});
```

## Label

```ts
page.getByLabel('Username');
```

## Placeholder

```ts
page.getByPlaceholder('Enter username');
```

## Text

```ts
page.getByText('My Account', {
  exact: true,
});
```

## Test ID

```ts
page.getByTestId('login-button');
```
