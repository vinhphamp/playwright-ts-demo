import { test, expect } from '@playwright/test';
import { request } from 'node:http';

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

test.only('POST create post', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts',
        {
            data: {
                title: 'Playwright',
                body: 'API Testing',
                userId: 1
            }
        }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();

    console.log(response.status());

    console.log(body);

    expect(body.title).toBe('Playwright');
    expect(body.userId).toBe(1);


});