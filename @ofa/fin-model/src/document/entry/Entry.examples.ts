import type { Entry } from "@ofa/fin-model";
import { DebitOrCredit, VatEntryType, VatLevel, VatMainClass, VatSubClass } from "@ofa/fin-model";

/** Simple salary */

const salaryContraEntry: Entry = {
    id: '7bd3ee19-af4b-4afd-b08f-de0646471f54',
    date: '2024-01-01',
    description: 'Contra entry',
    amount: 125.50,    
    account: {
        number: '1910',
        name: 'Bank account'
    },
    dimensions: [],
    debitOrCredit: DebitOrCredit.DEBIT,
    document: {
            id: '7bd3ee19-af4b-4afd-b08f-de0646471f54',
            visibleIdentifier: 'ML-1/2024'
        }
    }

const salaryBaseEntry: Entry = {
    id: '3146ba71-d7a2-43ba-93ea-37c3f78887b6',
    description: 'Salary',
    date: '2024-01-01',
    amount: 100.00,
    debitOrCredit: DebitOrCredit.CREDIT,
    account: {
        number: '3000',
        name: 'Sales'
    },
    dimensions: [],
    document: {
        id: '7bd3ee19-af4b-4afd-b08f-de0646471f54',
        visibleIdentifier: 'ML-1/2024'
    },
    vat: {
        mainClass: VatMainClass.SALES,
        subClass: VatSubClass.NORMAL,
        level: VatLevel.HIGH,
        rate: 25.50,     
        bookingType: VatEntryType.BASE,   
    }
}

const salaryVatEntry: Entry = {
    id: '4698d75b-aede-47d4-834b-125e6fed3a1d',
    date: '2024-01-01',
    description: 'SalaryVAT',
    amount: 25.50,
    debitOrCredit: DebitOrCredit.CREDIT,
    account: {
        number: '2939',
        name: 'VAT payable'
    },
    dimensions: [],
    document: {
        id: '7bd3ee19-af4b-4afd-b08f-de0646471f54',
        visibleIdentifier: 'ML-1/2024'
    },
    vat: {
        mainClass: VatMainClass.SALES,
        subClass: VatSubClass.NORMAL,
        level: VatLevel.HIGH,
        rate: 25.50,     
        bookingType: VatEntryType.VAT,   
    }
}

/** Bank deposit */
const bankDepositBankEntry: Entry = {
    id: '7bd3ee19-af4b-4afd-b08f-de0646471f54',
    date: '2024-01-01',
    description: 'Bank deposit',
    amount: 100.00,    
    debitOrCredit: DebitOrCredit.DEBIT,
    account: {
        number: '1910',
        name: 'Bank account'
    },
    dimensions: [],
    document: {
        id: '7bd3ee19-af4b-4afd-b08f-de0646471f54',
        visibleIdentifier: '25/2024'
    },
}

const bankDepositCashEntry: Entry = {
    id: '7bd3ee19-af4b-4afd-b08f-de0646471f54',
    date: '2024-01-01',
    description: 'Bank deposit',
    amount: 100.00,    
    debitOrCredit: DebitOrCredit.CREDIT,
    account: {
        number: '1900',
        name: 'Cash account'
    },
    dimensions: [],
    document: {
        id: '7bd3ee19-af4b-4afd-b08f-de0646471f54',
        visibleIdentifier: '25/2024'
    },
}

