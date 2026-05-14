import { APIRequestContext } from "@playwright/test";
import { loginEndpoint } from "../endpoints/loginEndpoint";
import { loginHeader } from "../headers/loginHeader";
import { buildLoginPayload } from '../payloads/loginPayloadBuilder';

export class LoginService {
    constructor(private request: APIRequestContext) {}

    async login(testCase: Parameters<typeof buildLoginPayload>[0]) {
        const payload = buildLoginPayload(testCase);
        return this.request.post(loginEndpoint.login, {
            headers: loginHeader,
            data: payload,

        });
    }
}