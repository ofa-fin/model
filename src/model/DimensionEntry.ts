

/**
 * Dimension entry.
 * 
 * A dimension entry is a single dimension value.
 * 
 * Is it better to use array of dimensions carrying multiple dimension values?
 * eg { dimensionId, dimensionName, values: [{valueId, valueName, percentage}] }
 * 
 */
export interface DimensionEntry {

    /** Dimension id 
     * 
     * Recommended to be a UUID.
     * Shall we use some fixed ids like '@COSTCENTER', '@PROJECT' etc ?
     * 
     */
    dimensionId: string;

    /** Dimension name. 
     * eg. 'Customer', 'Product', 'Project', 'Employee', etc.
    */
    dimensionName: string;

    /** Dimension value id. 
     * 
     * Recommended to be a UUID.
     * 
     * eg. if of cost center
     * 
     */
    valueId: string;

    /** Dimension value name. 
     * 
     * eg. name of cost center
     * 
     */
    valueName: string

    /** Dimension value percentage. 
     * Value between 0 and 100, defaults to 100.
     * 
     * eg. percentage of cost center
     * 
     */
    percentage: number;
}