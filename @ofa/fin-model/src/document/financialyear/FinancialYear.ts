import type { BaseDocument } from "../index.js";
import type { Period } from "../../general/index.js";

export interface FinancialYear extends BaseDocument, Period {
    /** Timestam when the period was locked. 
     * 
     * @example "2025-01-01T00:00:00Z"
    */
    lockedAt?: string;    
}