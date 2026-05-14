import { APIRequestContext } from "@playwright/test";
import { createUserEndpoint } from '../endpoints/createUserEndpoint';
import { createUserHeader } from "../headers/createUserHeader";
import { buildCreateUserPayLoad } from "../payloads/createUserPayloadBuilder";

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