import { VatLevel, VatMainClass, VatSubClass } from "../../general/vat/VatInformation.js";
import { DebitOrCredit } from "../entry/Entry.js";
import type { File } from "../file/File.js";
import type { Transaction } from "./Transaction.js";
import { TransactionStatus } from "./Transaction.js";

const examples: Transaction[] = [
    // Pankkikorttimaksu, joka tiliöity maksuperusteisesti
    // Perustiedot Enable Banking API:n välityksellä
    {
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
        ],
        statement: {
            account: {
                iban: 'FI212345678901234567',
                accounting: {
                    number: '1910',
                    name: 'Bank account'
                }
            },
            id: '1c1c6c92-62ad-4d97-a36f-19a89d699a18',
            visibleIdentifier: 'T-10/2024'
        }
    },
    // Tilillepano
    {
        identification: {
            servicerReference: '202501155EQEO10251242025-01-15'
        },
        creditOrDebit: DebitOrCredit.CREDIT,
        date: {
            booking: '2025-01-16',
            transaction: '2025-01-16',
            value: '2025-01-16',
        },
        amount: 100.80,
        message: 'Tilillepano',
        accounting: [
            {
                account: {
                    number: '1900',
                    name: 'Käteiskassa'
                },
                amount: 100.80,
            }
        ],
        status: TransactionStatus.BOOKED,
        statement: {
            account: {
                iban: 'FI212345678901234567',
                accounting: {
                    number: '1910',
                    name: 'Bank account'
                }
            },
            id: '1c1c6c92-62ad-4d97-a36f-19a89d699a18',
            visibleIdentifier: 'T-10/2024'
        }   
    }
]