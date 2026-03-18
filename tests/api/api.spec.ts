import { test, expect } from '@playwright/test';
import { request } from 'node:http';

test.describe.parallel("API Testing", () => {    
const baseURL = 'https://reqres.in/api'

    test("Simple API Testing - Get user list | Assert response status", async ({ request }) => {
        const response = await request.get(`${baseURL}/users/2`, {
            headers: {
                'x-api-key': 'pub_4f2c573101070357dc1f6275705d770cb66209937b749d23227c38d3e290317b',
                // 'Accept': 'application/json',
                'Content-Type': 'application/json',
                'User-Agent': 'reqres-qa-tests/1.0',
            },
        });
        
        expect(response.status()).toBe(200);
        const body = await response.json();
        console.log('View list of users')
        console.log(body);

    });

    test('Simple API Testing - JSON Parsing | Get User Details', async ({ request }) => {
        const response = await request.get(`${baseURL}/users/1`, 
        {
            headers: {
                'x-api-key': 'pub_4f2c573101070357dc1f6275705d770cb66209937b749d23227c38d3e290317b',
                'Content-Type': 'application/json',
                'User-Agent': 'reqres-qa-tests/1.0',

            }
        });
        expect(response.status()).toBe(200);

        const responseBody = JSON.parse(await response.text());
        expect(responseBody.data.id).toBe(1);
        expect(responseBody.data.last_name).toBe('Bluth');
        expect(responseBody.data.first_name).toContain('George');
        expect(responseBody.data.email).toBeTruthy;
        expect(responseBody.support.url).toContain('https://benhowdle.im');
        console.log(responseBody);
    });

    test('Simple API Testing  - Create new user | Assert status code', async ({ request }) => {
        const response = await request.post(`${baseURL}/users`, {
            headers: {
                'x-api-key': 'pub_4f2c573101070357dc1f6275705d770cb66209937b749d23227c38d3e290317b',
                'Content-Type': 'application/json',
                'User-Agent': 'reqres-qa-tests/1.0',
            },
            data: {
                name: 'Phạm Phú Vinh',
                job: 'Quality Control Engineer',
            },
        });

        expect(response.status()).toBe(201);
        const body = await response.json();
        expect(body).toMatchObject({
            name: 'Phạm Phú Vinh',
            job: 'Quality Control Engineer',
        });
        console.log('Creat new user success');
        console.log(body);

    }); 
    
    

});