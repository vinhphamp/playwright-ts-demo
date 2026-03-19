import { test, expect } from '@playwright/test';

test('POST new post', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts',
        {
            data: 
            {
                title: 'Playwright',
                body: 'API Testing',
                userId: 1
            },
        }
     );
    expect(response.status()).toBe(201);    
    const body = await response.json();    
    console.log(response.status());
    console.log(body);
    expect(body.title).toBe('Playwright');
    expect(body.userId).toBe(1);
});