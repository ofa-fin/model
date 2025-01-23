import { Controller, Example, Get, Path, Response, Route, Tags } from "tsoa";
import { FinancialYear } from "@ofa/fin-model";


@Route("financial-years")
@Tags("Financial Years")
export class FinancialYearController extends Controller {
    
    @Get()
    @Response<FinancialYear[]>(200, "List of financial years")
    @Example<FinancialYear[]>([
        {            
            startDate: "2024-01-01",
            endDate: "2024-12-31",
            lockedAt: "2024-01-01T00:00:00Z"
        }
    ], "List of financial years")
    public async getFinancialYears(): Promise<FinancialYear[]> {
        // Implementation here
        return [];
    }

}