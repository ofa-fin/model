/**
 * Base class for document.
 */
export interface BaseDocument {

    /**
     * Document id as UUID.
     * Read-only. Will be generated after creation.
     * @example "7bd3ee19-af4b-4afd-b08f-de0646471f54"
     */
    id?: string;

    /**
     * Obligatory document id in external system.
     * @example "654321"
     */
    externalId?: string;

}