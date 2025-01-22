import { PaginatedResult } from "@ofa/fin-model";

export const emptyResults: PaginatedResult<any> = {
    meta: {
        limit: 0,
        offset: 0,
        total: 0
    },
    data: []
}
