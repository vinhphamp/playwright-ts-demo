import { test, expect } from '@playwright/test';

test('GET post detail - first lesson', async ({ request }) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();
    console.log(body);

    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('name');
    expect(body).toHaveProperty('email');

    expect(body.id).toBe(1);
    expect(body.name).toBeTruthy();
    expect(body.email).toBeTruthy();
    expect(typeof body.name).toBe('string');
    expect(body.email).toContain('@');

});

