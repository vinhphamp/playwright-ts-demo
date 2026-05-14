import { APIRequestContext } from "@playwright/test";
import { viewUserDetailEndpoint } from '../view-user-detail/view-user-detail.endpoint';
import { viewUserDetailHeader } from '../view-user-detail/view-user-detail.header';

export class ViewUserDetailR {
    constructor(private request: APIRequestContext) {}

    async getUserDetail(id: number | string) {
        return this.request.get(viewUserDetailEndpoint.viewUserById(id), {
            headers: viewUserDetailHeader,
        });
    }
}