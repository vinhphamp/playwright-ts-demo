import { test, expect } from '@playwright/test';

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