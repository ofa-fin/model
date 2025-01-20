import type { Period } from "./Period.js";

export enum AccountingPeriodMethod {
    /** Monthly period.
     * 
     * Entries are created (splitted) monthly.
     */
    BOOKED_MONTHLY = 'BOOKED_MONTHLY',


    /** Calculated period.
     * 
     * Entries are not created (splitted) automatically. 
     * Periods are calculated by accounting system.
     */
    CALCULATED = 'CALCULATED'
    
}

export interface AccountingPeriod extends Period {
    /** Method of the period.
     */
    method?: AccountingPeriodMethod;    
}