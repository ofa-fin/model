// Reference models to be used in Entry.
// TODO: Moved next to referenced models ?


/**
 * Some basic information about an account.
 */
export interface AccountReference {

    /** Account number.
     * @pattern ^[0-9]{1,10}$
     * @example "1910"
     */
    number: string;

    /** Account name, in current language.
     * @example "Bank account"
     */
    name: string;
}


/** Some basic information about the document that created the entry. 
 * 
 * Infomation in needef for audit trial (kirjausketju) : Every single entry must be traceable to the original document.
 */
export interface DocumentReference {

    /** Document id in the accounting system, recommended to be a UUID.
     * @example "7bd3ee19-af4b-4afd-b08f-de0646471f54"
     */
    id: string;

    /** Visible identifier for the document. May have eg. a serie, a number and a financial year part 
     * @example "ML-1/2024"
     */
    visibleIdentifier: string;
};


/** Some basic information about the partner of the entry. */
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