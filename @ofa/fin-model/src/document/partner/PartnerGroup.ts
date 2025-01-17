import type { BaseDocument, Partner } from "../index.js";

/**
 * Partner group document.
 */
export interface PartnerGroup extends BaseDocument {

    /** Name of the group. */
    name: string;

    /** Partners belonging to the group. */
    partners?: Partner[];

}