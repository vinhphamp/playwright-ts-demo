import { test, expect } from '@playwright/test';

test('DELETE post', async ({ request })=> {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response.status());
    expect(response.status()).toBe(200);

    // const body = await response.json();
    // console.log(body);

    const body = await response.text(); // -> be safe when there is no body return in case the API return 204 No Content
    console.log(body);
    
});

