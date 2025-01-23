import { Tags } from "@tsoa/runtime";
import { Controller } from "@tsoa/runtime";
import { Get, Queries, Route, SuccessResponse } from "tsoa";
import { AccountingAccountTypeFlag, AccountingAccountStatus, PaginatedResult, BaseQuery } from "@ofa/fin-model"
import { AccountingAccountItem, AccountingAccountDetailedItem } from "@ofa/fin-model";
import { HttpUtil } from "../../util/HttpCodeReponse.js";
import { emptyResults } from "../common/search.examples.js";

interface GetAccountQuery extends BaseQuery {
    /** Account type */
    type?: AccountingAccountTypeFlag[],
    /** Include headers */
    headers?: boolean,
    /** Include detailed items */
    details?: boolean,
    /** Status */  
    status?: AccountingAccountStatus[],
}

@Route("api/v1/accounts")
@Tags("Accounts")
export class AccountController extends Controller {

    constructor() {
        super();
    }

    @Get()
    @SuccessResponse(200, HttpUtil.CODE_200)
    public async getAccounts(
        @Queries() query: GetAccountQuery
    ): Promise<PaginatedResult<AccountingAccountItem|AccountingAccountDetailedItem>> {
        return emptyResults;
    }
}