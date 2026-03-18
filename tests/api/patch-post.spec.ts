import { test, expect } from '@playwright/test';

test('PATCH update post title', async ({ request })=> {
    const response = await request.patch('https://jsonplaceholder.typicode.com/posts/1', 
    {
        data: {
            title: 'update title',
        }
    }
    
    );
    console.log('Status:', response.status());
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log('body:', body);

    expect(body.title).toBe('update title');
    expect(body.id).toBe(1);

});