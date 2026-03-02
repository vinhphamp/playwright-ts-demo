# playwright-ts-demo

# Generate Allure Report steps:

## Run commands:

1. `rm -rf allure-results allure-report`

2. `npx playwright test --workers=2`

3. `ALLURE_SINGLE_FILE=true npx allure generate ./allure-results -o ./allure-report --clean`
   - Generate report dạng single-file

4. `npm i -D http-server`
   - Serve report bằng http-server (ổn cho Codespaces)

5. `npx http-server ./allure-report -p 9333 -a 0.0.0.0`
   - Open in browser to view report
