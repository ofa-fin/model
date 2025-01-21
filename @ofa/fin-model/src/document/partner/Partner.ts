import type { BaseDocument } from "../index.js";
import type { PartnerRequest } from "./PartnerRequest.js";

/** Basic information about the referenced partner. */
export interface PartnerReference {

    /** Partner id in the accounting system, recommended to be a UUID.
     * @example "7bd3ee19-af4b-4afd-b08f-de0646471f54"
     */
    id: string;

    /** Partner name. This is stored when document is saved and NOT updated when partner is updated.
     * @example "Oy Yritys Ab"
     */
    name: string;
}

/** Partner document. */
export interface Partner extends PartnerRequest, BaseDocument {

}