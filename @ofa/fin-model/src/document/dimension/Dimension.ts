import type { BaseDocument } from "../index.js";

/**
 * Dimension.
 * 
 * Dimensions are used to categorize entries.
 * 
 */
export interface Dimension extends BaseDocument {
    /** Name of the dimension, language as key and name as value.
     * @example { "fi": "Kerhotoiminta", "en": "Club activities" }
     */
    name: Record<string, string>;

    /** Parent dimension id.
     * @example "7382a2ed-2edf-46d1-b5f5-e6b1ec151d38"
     * 
     * Accounting system can use fixed id for some dimensions.
     * For example, fixed id '@COST_CENTER' can be used for cost center dimension category, and id '@PROJECT' for project dimension category.
     * Dimensions without parent are dimension categories, children are dimension values.
     */
    parent?: string;

    /** First date when dimension is available.
     * @example "2024-01-01"
     */
    startDate?: string;

    /** Last date when dimension is available.
     * @example "2024-12-31"
     */
    endDate?: string;
}