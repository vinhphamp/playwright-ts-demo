import { test, request, APIRequestContext } from "@playwright/test";
import { expect } from "@playwright/test";
import { viewUserListE } from '../endpoints/viewUserListEndpoint';
import { viewUserListH } from '../headers/viewUserListHeader';
import { commonHeader } from "../headers/commonHeader";

export class ViewUserListR {
    constructor(private request: APIRequestContext) {}

    async getUserList() {
        return this.request.get(viewUserListE.view, {
            // headers: viewUserListH,
            headers: commonHeader,
        });
    }

}