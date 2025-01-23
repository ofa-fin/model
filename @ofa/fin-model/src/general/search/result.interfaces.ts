/**
 * Pagination metadata.
 */
export interface PaginationMeta {
    /**
     * Query time in ISO 8601 format
     * @example "2024-12-25T18:27:03Z"
     */
    queriedAt: string;

    /**
     * Number of items (possible limited) in the result set.
     * @example "100"
     */
    limit: number;

    /**
     * Offset of the result set.
     * @example "0"
     */
    offset: number;

    /**
     * Total number of matching items in the database.
     * @example "1485"
     */
    total: number;
}

/**
 * Paginated items result.
 */
export interface PaginatedResult<T> {
    /** Metadata of the result set. */
    meta: PaginationMeta;

    /** Data in the result set. */
    data: T[];
}

/**
 * Metadata for single result.
 */
export interface SingleMeta {
    /**
     * Resource identifier
     * @example "123e4567-e89b-12d3-a456-426614174000"
     */
    id: string;

    /**
     * Query time in ISO 8601 format.
     * @example "2025-01-12T18:27:03Z"
     */
    queriedAt: string;

    /**
     * Resource creation time in ISO 8601 format.
     * @example "2024-12-18T14:32:05Z"
     */
    createdAt: string;

    /**
     * Resource update time in ISO 8601 format.
     * @example "2024-12-18T14:32:05Z"
     */
    updatedAt: string;

    /**
     * Version number of the resource
     * @example "1"
     */
    version: number;

    /**
     * Resource type identifier
     * @example "PARTNER"
     */
    type: string;

    /**
     * Self link to the resource
     * @example "/api/v1/partners/123e4567-e89b-12d3-a456-426614174000"
     */
    self?: string;
}

/**
 * Single item result.
 */
export interface Result<T> {
    /** Metadata of the single result. */
    meta: SingleMeta;

    /** Data in the single result. */
    data: T;
}