import { test, expect } from '@playwright/test';
import { AuthClient } from '../clients/auth.client';
import loginData from '../data/login.data.json';

test.describe('Authentication API - Login', () => {
  test('Login success -> 200 và có token', async () => {
    const auth = new AuthClient();
    const { status, body, contentType } = await auth.login({
      email: loginData.valid.email,
      password: loginData.valid.password
    });

    // Nếu không phải JSON, fail sớm để xem log/chi tiết
    expect(contentType?.toLowerCase()).toContain('application/json');
    expect(status).toBe(200);

    // Kiểm tra token
    // body có dạng { token: string } khi là JSON
    expect((body as any).token).toBeDefined();
    expect(typeof (body as any).token).toBe('string');
  });

  test('Login failed (missing password) -> 400 + error', async () => {
    const auth = new AuthClient();
    const { status, body, contentType } = await auth.login({
      email: loginData.invalid.missingPassword.email
    });

    expect(contentType?.toLowerCase()).toContain('application/json');
    expect(status).toBe(400);
    expect((body as any).error).toContain('Missing password');
  });
});