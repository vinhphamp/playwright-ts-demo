import { test, expect } from '@playwright/test';
import { title } from 'node:process';

test('PUT update full post', async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1',
        {
            data: {
                title: 'put title',
                body: 'put body',
                userId: 1
            }
        }
    );
    expect(response.status()).toBe(200);
    const body = await response.json();

    expect(body.title).toBe('put title');
    expect(body.body).toBe('put body');
    console.log(body);
});