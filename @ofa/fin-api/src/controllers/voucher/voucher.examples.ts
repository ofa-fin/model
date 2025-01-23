import { PaginatedResult, Result, VatMainClass, VoucherType, type Voucher } from "@ofa/fin-model";

const salesInvoice1: Voucher = {
    id: "8f47aa9c-21e3-4b8b-9f1d-a504f5871f3b",
    date: "2024-09-15",
    title: "1001 / Oy Yritys Ab",
    description: "Sales invoice 1001 for Oy Yritys Ab",
    externalId: "SI2023001",
    partner: {
        id: "123e4567-e89b-12d3-a456-426614174000",
        name: "Oy Yritys Ab"
    },
    invoice: {
        invoiceDate: "2023-09-15",
        dueDate: "2023-10-15",
        reference: "1234567890",
        number: 1001,
        rows: [
            {
                amount: 1000.00,
                vat: {
                    mainClass: VatMainClass.SALES,
                    rate: 25.5
                }
            },
            {
                amount: 500.00,
                vat: {
                    mainClass: VatMainClass.SALES,
                    rate: 25.5
                }
            }
        ]
    },
    type: VoucherType.SALES_INVOICE
};

const salesInvoice2: Voucher = {
    id: "123e4567-e89b-12d3-a456-426614174001",
    date: "2024-09-16",
    title: "1002 / Osakeyhtiö Oy",
    description: "Sales invoice 1002 for Osakeyhtiö Oy",
    externalId: "SI2023002",
    partner: {
        id: "456e7890-f12c-34d5-b678-426614174000",
        name: "Osakeyhtiö Oy"
    },
    invoice: {
        invoiceDate: "2023-09-16",
        dueDate: "2023-10-16",
        reference: "2345678901",
        number: 1002,
        rows: [
            {
                amount: 750.00,
                vat: {
                    mainClass: VatMainClass.SALES,
                    rate: 25.5
                }
            },
            {
                amount: 250.00,
                vat: {
                    mainClass: VatMainClass.SALES,
                    rate: 25.5
                }
            }
        ]
    },
    type: VoucherType.SALES_INVOICE
};

export const salesInvoiceResult: Result<Voucher> = {
    meta: {
        id: "8f47aa9c-21e3-4b8b-9f1d-a504f5871f3b",
        queriedAt: new Date().toISOString(),
        createdAt: "2024-10-18T14:32:05Z",
        updatedAt: "2024-10-18T14:32:05Z",
        version: 1,
        type: "VOUCHER",
        self: "/api/v1/voucher/8f47aa9c-21e3-4b8b-9f1d-a504f5871f3b"
    },
    data: salesInvoice1
};

export const salesInvoicesResult: PaginatedResult<Voucher> = {
    meta: {
        queriedAt: new Date().toISOString(),
        limit: 100,
        offset: 0,
        total: 2
    },
    data: [
        salesInvoice1,
        salesInvoice2
    ]
};
