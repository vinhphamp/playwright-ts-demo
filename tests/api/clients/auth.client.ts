import { request } from '@playwright/test';
import fs from 'fs';
import path from 'path';


const envPath = path.resolve(__dirname, '..', 'data', 'env.data.json');
const envData = JSON.parse(fs.readFileSync(envPath,'utf-8'));

const TEST_ENV = envData['Test environment'];


export class AuthClient {

    async login(payload: { email: string; password?: string }) {
        const api = await request.newContext({
            baseURL: TEST_ENV.baseURL,
            extraHTTPHeaders: TEST_ENV.headers
        });


        try {
            const response = await api.post('/api/login', { 
                data: payload 
            });
            
            const body = await response.json();

            return { status: response.status(), body };
        }   finally {
            await api.dispose();
        }
    }
}