import { test, expect } from '@playwright/test';
import { request } from 'node:http';

test.describe('Negative call request', () => {
    const baseURL = 'https://jsonplaceholder.typicode.com';

    test('LOGIN un_success', async({ request }) => {
    const response = await request.post('https://reqres.in/api/login', 
        {
            headers: {
                'x-api-key': 'pub_4f2c573101070357dc1f6275705d770cb66209937b749d23227c38d3e290317b',
                'Content-Type': 'application/json',
                'User-Agent': 'reqres-qa-tests/1.0',                
            },

            data: {
                'email': 'eve.holt@reqres.in',
                // 'password': 'cityslicka',
            }
        }
    )
    expect(response.status()).toBe(400);
    console.log('status code return: ', response.status());
    const body = await response.json();
    expect(body.error).toBe('Missing password');
    console.log('the error message to inform: ', body.error);
    });

    test('Wrong endpoint | return 404', async ({ request }) => {
        const response = await request.get(`${baseURL}/abcxyz`);

        expect(response.status()).toBe(404);
    });

    test('Check post ID not existed', async ({ request }) => {
        const response = await request.get(`${baseURL}/posts/9999`);
        const statusCode = response.status();
        console.log(statusCode);

        const resBody = JSON.parse(await response.text());
        console.log(resBody);        

        // const responseBody = await response.json();        
        // console.log(responseBody);
    });



});
