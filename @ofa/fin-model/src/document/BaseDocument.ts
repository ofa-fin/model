/**
 * Base class for document.
 */
export interface BaseDocument {

    /**
     * Document id as GUID.
     * Read-only. Will be generated after creation.
     */
    id?: string;
  
    /**
     * Document creation time in ISO 8601 format. Ex. 2024-12-18T14:32:05Z.
     * May be read-only depending on the implementation.
     */
    createdAt?: string;

   /**
     * Document update time in ISO 8601 format. Ex. 2024-12-18T14:32:05Z.
     * May be read-only depending on the implementation.
     */
    updatedAt?: string;

}