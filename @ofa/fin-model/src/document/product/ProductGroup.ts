import type { BaseDocument } from "../index.js";
import type { Product } from "./Product.js";

/**
 * Product group document. // TODO Do we need this?
 */
export interface ProductGroup extends BaseDocument {

    /** Name of the group. */
    name: string;

    /** Products belonging to the group. */
    products?: Product[];

}