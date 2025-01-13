import type { BaseDocument } from "./BaseDocument.js";
import type { Partner } from "./Partner.js";

/**
 * Base class for document.
 */
export interface Document extends BaseDocument {
  
    /** Document type. */
    type: string;

    /** Document date in ISO date format. */
    date: string;

    /** Document title. */
    title: string;

    /** Document description. */
    description: string;

    /** Document status. TODO: string -> object */
    status: string;

    partner: Partner;

    /** TODO here as property or own interface extending this document interface? */
    invoice: any;

    /** TODO add Accounting interface */
    accounting: any;

    transactions: any[];

    entries: any[];

    files: any[];

    history: any[];

}