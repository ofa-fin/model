import type { BaseDocument } from "../BaseDocument.js";

/**
 * A file attached to a document.
 */
export interface File extends BaseDocument {    
    /** File name.
     * @example "invoice.pdf"
     */
    fileName: string;

    /** File mime type.
     * @example "application/pdf"
     */ 
    mimetype: string;

    /** File url.
     * @example "https://example.com/files/b9ed15d0-855f-451b-a154-32b4be4df190"
     */
    url: string;    

    /** File type.
     * @example "RECEIPT"
     */
    type?: string;
}