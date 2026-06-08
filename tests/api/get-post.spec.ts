import { test, expect } from '@playwright/test';
// import { request } from 'node:http';

test('GET post detail - first lesson', async ({ request }) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/posts/2');

    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();
    console.log(body);

    expect(body.userId).toBe(1);
    expect(body.id).toBe(2);
    expect(body.title).toBeTruthy();
    expect(typeof body.title).toBe('string');

});
