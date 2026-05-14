import { APIRequestContext } from "@playwright/test";
import { createUserEndpoint } from '../create-user/create-user.endpoint';
import { createUserHeader } from '../create-user/create-user.header';
import { buildCreateUserPayLoad } from '../create-user/create-user.payload';

export class CreateUserR {
    constructor(private request: APIRequestContext) {}

    async createUser() {
        const payload = buildCreateUserPayLoad();

        return this.request.post(createUserEndpoint.create, {
            headers: createUserHeader,
            data: payload,

        });
    }
}