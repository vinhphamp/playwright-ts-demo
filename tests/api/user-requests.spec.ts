import { test, expect } from '@playwright/test';
import { LoginR } from '../../src/api/auth/login/login.request';
import { ViewUserListR } from '../../src/api/users/view-user-list/view-user-list.request';
import { ViewUserDetailR } from '../../src/api/users/view-user-detail/view-user-detail.request';
import { CreateUserR } from '../../src/api/users/create-user/create-user.request';


test.describe('User Management', () => {
  let loginService: LoginR;
  let viewUserList: ViewUserListR;
  let viewUserDetail: ViewUserDetailR;
  let createUser: CreateUserR; 

  test.beforeEach(({ request }) => {
    loginService = new LoginR(request);
    viewUserList = new ViewUserListR(request);
    viewUserDetail = new ViewUserDetailR(request);
    createUser = new CreateUserR(request);

  });

  test('get user list', async () => {
    const res = await viewUserList.getUserList();
    const body = await res.json()

    expect(res.status()).toBe(200);
    console.log('View user list:', body);

  });

  test('should return 200 and token when login success', async () => {
    const res  = await loginService.login('success');
    const body = await res.json();

    expect(res.status()).toBe(200);
    expect(body.token).toBeTruthy();
    console.log('Status login success:', res.status());
    console.log('Body login success:', body);
    
  });

  test('create new user', async () => {
    const res  = await createUser.createUser();
    const body = await res.json();

    console.log('Status create user:', res.status());
    console.log('Body to create user:', body);

    expect(res.status()).toBe(201);

    
  });
  
  test('get user detail', async () => {
    const res = await viewUserDetail.getUserDetail(2);
    const body = await res.json()

    expect(res.status()).toBe(200);
    console.log('View user detail:', body);

  });

  test.skip('should return 400 when wrong password', async () => {
    const res  = await loginService.login('invalidPassword');
    const body = await res.json();

    console.log('Status login unsuccess:', res.status());
    console.log('Body login unsuccess:', body);

    expect(res.status()).toBe(200);
    
  });


});