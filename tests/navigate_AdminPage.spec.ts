import { AdminPage } from '../pages/adminPage';
import { UIHelper } from '../helpers/uiHelper';
import loginData from '../test-data/users/login.data.json';
import envData from '../test-data/environment/urls.data.json';
import { test, expect } from '../fixtures/baseFixture';

test.describe('Checking UI of Admin Page', () => {
    let adminpage: AdminPage;

    test.beforeEach(async ({ loggedInPage}) => {
        adminpage = new AdminPage(loggedInPage);
        console.log('logged already');
    });

    test('Verify Admin Page', async () => {
        await UIHelper.wait(5000);
        await adminpage.navigateToUserManagementPage();
        // await adminpage.navigateToJobPage();
        // await adminpage.navigateToOrganizationPage();
    });





});

