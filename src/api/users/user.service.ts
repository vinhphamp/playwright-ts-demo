import { test, request, expect, APIRequestContext } from "@playwright/test";
import { viewUserListEndpoint, viewUserDetailEndpoint, createUserEndpoint } from '../../../src/api/users/user.endpoint';
import { viewUserListHeader, createUserHeader, viewUserDetailHeader } from '../../../src/api/users/user.header';
import { buildCreateUserPayLoad } from '../../../src/api/users/user.payload';


export class UserService {
    constructor(private request: APIRequestContext) {}

    async getUserList() {
        return this.request.get(viewUserListEndpoint.view, {
            headers: viewUserListHeader,
            
        });
    }

    async getUserDetail(id: number | string) {
        return this.request.get(viewUserDetailEndpoint.viewUserById(id), {
            headers: viewUserDetailHeader,
        });
    }

    async createUser() {
        const payload = buildCreateUserPayLoad();

        return this.request.post(createUserEndpoint.create, {
            headers: createUserHeader,
            data: payload,

        });
    }

}