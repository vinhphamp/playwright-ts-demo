import { APIRequestContext } from "@playwright/test";
import { viewUserDetailEndpoint } from '../endpoints/viewUserDetailEndpoint';
import { viewUserDetailHeader } from '../headers/viewUserDetailHeader';

export class ViewUserDetailR {
    constructor(private request: APIRequestContext) {}

    async getUserDetail(id: number | string) {
        return this.request.get(viewUserDetailEndpoint.viewUserById(id), {
            headers: viewUserDetailHeader,
        });
    }
}