import type { DebitOrCredit } from "../entry/Entry.js";

export interface StatementTransactionDates {
    /** Date when the transaction was booked to the account (Kirjauspvm).
     * @example 2024-01-01
    */
    booking?: string;
    /** Value date of the transaction (Arvopvm).
     * @example 2024-01-01
    */
    value?: string;
    /** Date when the transaction was executed (Maksupvm).
     * @example 2024-01-01
    */
    transaction?: string;

    /** Date of bank card transaction (Ostopvm).
     * @example 2024-01-01
    */
    buying?: string;
}

export interface StatementTransactionIdentification {
    /** Instruction ID (Maksajan antama).     
    */
    instructionId?: string;
    /** End to end ID (Maksajan antama).
    */
    endToEndId?: string;
    /** Servicer reference (Pankin viite).
    */
    servicerReference?: string;
    /** Batch identifier (Pankin antama).
    */
    batchIdentifier?: string;
}

export interface StatementTransactionPartner {
    /** Name of the partner (Maksajan tai saajannimi).
    */
    name?: string;
    /** IBAN of the partner (saajan IBAN).
    */
    iban?: string;
}

/**
 * Transaction information from bank statement.
 * 
 * TODO: Transaction type ?
 */
export interface StatementTransaction {
    /** Identification of the transaction.
     */
    identification: StatementTransactionIdentification;
    /** Credit or debit of the transaction.
     */
    creditOrDebit: DebitOrCredit;    
    /** Date of the transaction.
     */
    date: StatementTransactionDates;
    /** Amount of the transaction.
     */
    amount: number;
    /** Reference of the transaction.
     */
    reference?: string;
    /** Message of the transaction.
     */
    message?: string;
    /** Partner of the transaction.
     */
    transactionPartner?: StatementTransactionPartner;    
}