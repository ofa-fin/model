import { DebitOrCredit } from "../entry/Entry.js";
import { VatEntryType } from "../entry/EntryVatInformation.js";
import { VatLevel, VatMainClass, VatSubClass } from "../../general/vat/VatInformation.js";
import { TransactionStatus } from "./Transaction.js";
import type { Voucher } from "../voucher/Voucher.js";

export const exampleStatement : Voucher  = {
    id: '5f5efc4b-989e-49c4-b5b9-e7fdb21c1987',
    date: '2025-01-31',
    /** Kirjanpidossa näytettävä tositenumero */
    visibleIdentifier: 'T-10/2024',
    // Nämä voisivat olla myös metadata-kentässä.
    createdAt: '2025-02-01T12:00:00Z',
    updatedAt: '2025-02-01T12:00:00Z',
    /** Tositteen tyyppi
     * 
     * Pitäisikö tässä mieluummin käyttää rakenteellisempaa muotoa?
     */
    type: 'VOUCHER/BANK_STATEMENT/ACCOUNT_TRANSACTIONS',
    /** Tietolähde, tähän voidaan liittää esim. id-tietoja yhdistämistä varten */
    source: {
        name: 'Tilitapahtumien nouto',
        channel: 'PSD2/ENABLE_BANKING_API',
    },
    status: {
        /** Onko luonnos, aktiivinen, poistettu ... */
        document: 'ACTIVE',
        /** Kaikki rivit on tiliöity */
        accounting: 'ACCOUNTED',
        // Laskuilla lisäksi maksamisen tila
        // Ostolaskuilla voi olla hyväksynnän tila laskukierrossa
    },    
    title: 'Bank statement for January 2025',
    period: {
        startDate: '2025-01-01',
        endDate: '2025-01-31',
    },
    contraAccount: {
        number: '1910',
        name: 'Bank account',
        iban: 'FI21234567890123456789',
    },
    // Transactions-osio on vain tiliotteille, joilla on transaktiot ikään kuin alidokumentteina.
    // Muilla tositteilla tiliöintitiedot välitetään accounting-osiossa, joiden (ja contraAccount) perusteella viennit generoidaan.
    // Vai olisiko rakenteella
    // Voucher.Statement.Transactions ?
    statement: {
        transactions: [{
            identification: {
                servicerReference: '202501155EQEO10251242025-01-15'
            },
            creditOrDebit: DebitOrCredit.DEBIT,
            date: {
                buying: '2025-01-14',
                booking: '2025-01-15',
                transaction: '2025-01-15',
                value: '2025-01-15',
            },
            transactionPartner: {
                name: 'VR.FI HELSINKI',
            },
            amount: 43.80,
            /** Tiliöintohjeet, joiden perusteella viennit generoidaan */
            accounting: [
                {
                    account: {
                        number: '7800',
                        name: 'Matkaliput'
                    },
                    vat: {
                        mainClass: VatMainClass.PURCHASES,
                        subClass: VatSubClass.NORMAL,
                        level: VatLevel.MEDIUM,
                        rate: 14
                    },
                    amount: 43.80,
                    netAmount: 38.42,
                }
            ],
            status: TransactionStatus.BOOKED,
            files: [
                {
                    id: 'b9ed15d0-855f-451b-a154-32b4be4df190',
                    fileName: 'kuitti.png',
                    mimetype: 'image/png',
                    url: 'https://example.com/files/b9ed15d0-855f-451b-a154-32b4be4df190',
                    type: 'RECEIPT'
                }
            ]            
        }]
    },
    files: [
        {
            // Alkuperäiset tilitiedot Enable Banking API:n välityksellä
            id: 'b9ed15d0-855f-451b-a154-32b4be4df190',
            fileName: 'transactions.json',
            mimetype: 'application/json',
            url: 'https://example.com/files/b9ed15d0-855f-451b-a154-32b4be4df190',
            type: 'ORIGINAL/ENABLE_BANKING_API'
        },
        {
            // Tiedoista generoitu pdf-tiedosto
            id: '19d53113-77a9-4763-8e1e-52968183f5ef',
            fileName: 'transactions.pdf',
            mimetype: 'application/pdf',
            url: 'https://example.com/files/19d53113-77a9-4763-8e1e-52968183f5ef',
            type: 'GENERATED/BANK_STATEMENT_PREVIEW'
        }
    ],
}