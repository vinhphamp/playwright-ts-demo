import { test, expect } from '@playwright/test';
import { request } from 'node:http';

test.describe.parallel("API Testing", () => {
const baseURL = 'https://reqres.in/api'
    test("Simple API Testing - Assert response status", async ({ request }) => {
        const response = request.get(`${baseURL}/users/2`);
        expect((await response).status()).toBe(200);
    });

    test('Simple API Testing  - Assert ForBidden status code', async ({ request }) => {
        const response = request.get(`${baseURL}/users/200`);
        expect((await response).status()).toBe(403)
    });

});