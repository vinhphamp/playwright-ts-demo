import { test, request, APIRequestContext } from "@playwright/test";
import { expect } from "@playwright/test";
import { viewUserListE } from '../view-user-list/view-user-list.endpoint';
import { viewUserListH } from '../view-user-list/view-user-list.header';
import { commonHeader } from '../../users/common.header';
export class ViewUserListR {
    constructor(private request: APIRequestContext) {}

    async getUserList() {
        return this.request.get(viewUserListE.view, {
            // headers: viewUserListH,
            headers: commonHeader,
        });
    }

}