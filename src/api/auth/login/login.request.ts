import { APIRequestContext } from "@playwright/test";
import { loginEndpoint } from '../login/login.endpoint';
import { loginHeader } from '../login/login.header';
import { buildLoginPayload } from '../login/login.payload';

export class LoginRequest {
    constructor(private request: APIRequestContext) {}

    async login(testCase: Parameters<typeof buildLoginPayload>[0]) {
        const payload = buildLoginPayload(testCase);
        return this.request.post(loginEndpoint.login, {
            headers: loginHeader,
            data: payload,

        });
    }
}