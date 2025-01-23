import type { VatInformation } from "../../general/index.js";
import type { AccountReference, BaseDocument } from "../index.js";
import type { DimensionItem } from "../index.js";



/**
 * Account type flags
 * 
 * Flags that can be used to describe the account.
 * All combinations are allowed ;) 
 */
export enum AccountingAccountTypeFlag {    
    /** Vastaavaa */
    ASSETS = "ASSETS",
    /** Vastattavaa */
    LIABILITIES = "LIABILITIES",    
    /** Tulot */
    INCOME = "INCOME",
    /** Menot */
    EXPENSE = "EXPENSE",
    /** Otsikko */
    HEADER = "HEADER",    
    /** Pysyvät (vastaava tai vastattava) */
    NON_CURRENT = "NON_CURRENT",
    /** Poistettava omaisuus */
    DEPRECIABLE = "DEPRECIABLE",
    /** Vaihtuvat (vastaava tai vastattava) */
    CURRENT = "CURRENT",
    /** Myyntisaamiset */
    ACCOUNTS_RECEIVABLE = "ACCOUNTS_RECEIVABLE",
    /** Siirtosaamiset */
    PREPAYMENT_AND_ACCRUED = "PREPAYMENT_AND_ACCRUED",
    /** ALV-saamiset */
    VAT_RECEIVABLE = "VAT_RECEIVABLE",
    /** Maksuperusteisen alv:n kohdentamaton */
    UNALLOCATED_FOR_CASH_BASIS_VAT = "UNALLOCATED_FOR_CASH_BASIS_VAT",
    /** Käteinen */
    CASH = "CASH",
    /** Pankkisaamiset */
    BANK_ACCOUNT = "BANK_ACCOUNT",
    /** Oma pääoma */
    CAPITAL = "CAPITAL",
    /** Edellisten tilikausien voitto/tappio */
    RETAINED_EARNINGS = "RETAINED_EARNINGS",
    /** Tilikauden tulos */
    PROFIT_OR_LOSS = "PROFIT_OR_LOSS",
    /** Yksityistili */
    PRIVATE_ACCOUNT = "PRIVATE_ACCOUNT",
    /** Ostovelat */
    ACCOUNTS_PAYABLE = "ACCOUNTS_PAYABLE",
    /** Siirtovelat */
    ACCRUED_LIABILITIES = "ACCRUED_LIABILITIES",
    /** ALV-velat */
    VAT_PAYABLE = "VAT_PAYABLE",
    /** Verotus */
    TAXES = "TAXES",
    /** Lasketaan liikevaihtoon */
    IN_SALES = "IN_SALES",
    /** Ei huomioida tuloverotuksessa */
    NOT_IN_TAXES = "NOT_IN_TAXES",
    /** Huomioidaan tuloverotuksessa vain puoliksi */
    HALF_IN_TAXES = "HALF_IN_TAXES",
    /** Tuloveron ennakko */
    PRE_PAYMENT_OF_TAXES = "PRE_PAYMENT_OF_TAXES",    
}

export enum AccountDeprecationMethod {
    /** Menojäännöspoisto  */
    BALANCE = "BALANCE",
    /** Tasaeräpoisto */
    STRAIGHT_LINE = "STRAIGHT_LINE",
}

export interface AccountDeprecationInstruction {
    method: AccountDeprecationMethod,
    /** Menojäännöspoistossa käytettävä vuosittainen poistoprosentti. */
    yearlyPercentage?: number,
    /** Tasaeräpoistossa käytettävä poistoaika (vuosina). */
    deprecationYears?: number,
    /** Tili, jolle poistot kirjataan */
    account: AccountReference,
}

interface AccountingBankAccountReference {    
    /** IBAN */
    iban: string;
    /** BIC */
    bic: string; 
    /** Bank name */
    bankName: string;
}



export interface AccountingBankAccount extends Omit<AccountingBankAccountReference, "bankName"> {
    /** Bank name, in all languages */
    bankName: Record<string, string>;
}   

export interface AccountingAccountItem {
    /** Account number */
    number: string;
    /** Account name, in current language */
    name: string;
    /** Header level */
    headerLevel?: number;
}



export enum AccountingAccountStatus {
    /** Inactive - Account is not used */
    INACTIVE = "INACTIVE",
    /** Active - Account can be used, but not preferred (can be hidden in some lists) */
    ACTIVE = "ACTIVE",
    /** Preferred - Account is preferred and will be shown in lists */
    PREFERRED = "PREFERRED",
    /** Starred - Account is starred and will be shown in lists */
    STARRED = "STARRED",
}

export interface AccountingAccountDetailedItem extends AccountingAccountItem {    
    /** Account types */
    types: AccountingAccountTypeFlag[],
    /** Default VAT information */
    defaultVat?: VatInformation,
    /** Deprecation instruction */
    deprecation?: AccountDeprecationInstruction,    
    /** Default dimensions */
    defaultDimensions?: DimensionItem[],
    /** Status */
    status?: AccountingAccountStatus,
    /** Bank account */
    bankAccount?: AccountingBankAccountReference,
    /** Instruction for accountor, in current language */
    instruction?: string,
    // Standard account number ?
}



export interface AccountingAccount extends Omit<AccountingAccountDetailedItem, "name" | "instruction" | "bankAccount"> {
    /** Account name, in all languages */
    name: Record<string, string>;
    /** Instruction, in all languages */
    instruction?: Record<string, string>;
    /** Bank account */
    bankAccount?: AccountingBankAccountReference,
}