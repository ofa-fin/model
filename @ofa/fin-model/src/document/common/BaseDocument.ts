/**
 * Base class for document.
 */
export interface BaseDocument {

    /**
     * Document id as GUID.
     * Read-only. Will be generated after creation.
     * @example "7bd3ee19-af4b-4afd-b08f-de0646471f54"
     */
    id?: string;
  
    /**
     * Document creation time in ISO 8601 format. Ex. 2024-12-18T14:32:05Z.
     * May be read-only depending on the implementation.
     * @example 2024-12-18T14:32:05Z
     */
    createdAt?: string;

   /**
     * Document update time in ISO 8601 format. Ex. 2024-12-18T14:32:05Z.
     * May be read-only depending on the implementation.
     * @example 2024-12-18T14:32:05Z
     */
    updatedAt?: string;

}