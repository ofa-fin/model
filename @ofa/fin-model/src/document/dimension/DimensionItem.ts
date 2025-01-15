/**
 * Dimensioning item of an entry or other accounting object.
 * 
 * Dimension items form a tree structure, where parent dimension item is the category and children are dimension values.
 */
export interface DimensionItem {
    /** Dimension id
     * 
     * Can be null for 'hot add' dimension values (not stored to dimension list).
     * 
     * @example "7382a2ed-2edf-46d1-b5f5-e6b1ec151d38"
     */
    id?: string;

    /** Dimension name, in current language.
     * @example "Myymälän paikkakunta"
     */
    name?: string;

    /** Percentage of the dimension value.
     * Defaults to equal percentages.
     * @example undefined
     * @minimum 0
     * @maximum 100
     * @example 100
     */
    percentage?: number;

    /** Dimension values.
     * @example [
     *   {
     *     "id": "f04abc48-fd19-49ba-881d-082c232ff62d",
     *     "name": "Kouvola",     
     *     "percentage": 75
     *   },
     *   {
     *     "id": "a72a6d0c-23b4-4a04-b650-d0b73823db22",
     *     "name": "Helsinki",     
     *   }
     * ]
     */
    values?: DimensionItem[];
}