import { test, expect } from '@playwright/test';
import { LoginRequest } from '../../src/api/auth/login/login.request';
import { UserService } from '../../src/api/users/user.service'


test.describe('User Management', () => {
  let userService: UserService;
  let loginService: LoginRequest;

  test.beforeEach(({ request }) => {
    userService = new UserService(request);

    loginService = new LoginRequest(request);

  });

  test('get user list', async () => { // success case for user list
    const res = await userService.getUserList();
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
    const res  = await userService.createUser();
    const body = await res.json();

    console.log('Status create user:', res.status());
    console.log('Body to create user:', body);

    expect(res.status()).toBe(201);
    
  });
  
  test('get user detail', async () => {
    const res = await userService.getUserDetail(2);
    const body = await res.json()

    expect(res.status()).toBe(200);
    console.log('View user detail:', body);

  });

  test('should return 400 when wrong email', async () => {
    const res  = await loginService.login('invalidEmail');
    const body = await res.json();

    console.log('Status login unsuccess:', res.status());
    console.log('Body login unsuccess:', body);

    expect(res.status()).toBe(400);
    
  });


});