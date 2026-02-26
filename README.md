# playwright-ts-demo


# Generate Allure Report steps:
Run command: 
1. ALLURE_SINGLE_FILE=true npx allure generate ./allure-results -o ./allure-report --clean -> generate report dạng single-file
2. npm i -D http-server -> serve report bằng http-server (ổn cho Codespaces)
3. npx http-server ./allure-report -p 9333 -a 0.0.0.0 -> open in browser to view report