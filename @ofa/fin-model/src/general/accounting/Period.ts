export interface Period {
    /** Start date of the period.
     * @pattern ^[0-9]{4}-[0-9]{2}-[0-9]{2}$
     * @example "2024-01-01"
     */
    startDate: string;
    /** End date of the period.
     * @pattern ^[0-9]{4}-[0-9]{2}-[0-9]{2}$
     * @example "2024-01-31"
     */
    endDate: string;
}   