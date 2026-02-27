# playwright-ts-demo


# Generate Allure Report steps:
## Run command: 
`> 'rm -rf allure-results allure-report' `
`> 'npx playwright test --workers=2' `
`> 'ALLURE_SINGLE_FILE=true npx allure generate ./allure-results -o ./allure-report --clean' -> generate report dạng single-file
`> 'npm i -D http-server' -> serve report bằng http-server (ổn cho Codespaces)`
`> 'npx http-server ./allure-report -p 9333 -a 0.0.0.0' -> open in browser to view report``