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


### Git & GitHub Flow (Terminal):

1. `git branch`
   - Kiểm tra đang ở nhánh nào

2. `git switch mac_codes`
   - Switch sang nhánh mac_codes

3. `git add .`

4. `git commit -m "your message"`

5. `git push origin mac_codes`

6. `gh pr create --base main --head mac_codes --title "Title Text" --body "Body Text"`
   - Tạo Pull Request

7. `gh pr merge --merge`
   - Tự merge PR (solo project)
   - Chọn `Y` nếu muốn xóa branch mac_codes

