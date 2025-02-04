/** Basic information about the referenced product. */
export interface ProductReference {

    /** Product id in the accounting system, recommended to be a UUID.
     * @example "7bd3ee19-af4b-4afd-b08f-de0646471f54"
     */
    id: string;

    /** Product name. This is stored when document is saved and NOT updated when product is updated.
     * @example "Office chair, black leather"
     */
    name: string;
}
