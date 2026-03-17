# playwright-ts-demo

# Generate Allure Report steps:

## Run commands

### Codespaces environment:

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

x-api-key : 'reqres_fcfcbaf3a6444460b5522fc74a7a5d24'

const response = await request.get(
  'https://reqres.in/api/users?page=1',
  { headers: { 'x-api-key': 'pro_12d4cea97e131c06e06349619d292d2247571be865c1b4a4be5c9206b8f06f86' }}
);

