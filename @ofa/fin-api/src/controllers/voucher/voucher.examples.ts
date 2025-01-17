import { VoucherType, type Voucher } from "@ofa/fin-model";
import { PaginatedItems } from "../common/search.interfaces.js";

export const salesInvoices: PaginatedItems<Voucher> = {
    limit: 100,
    offset: 0,
    total: 2,
    items: [
        {
            id: "inv-2023-001",
            externalId: "SI2023001",
            partner: {
                id: "cust-001",
                name: "Tech Solutions Oy"
            },
            invoiceDate: "2023-09-15",
            dueDate: "2023-10-15",
            reference: "1234567890",
            number: 1001,
            type: VoucherType.SALES_INVOICE,
            account: "3000",
            contraAccount: "1701",
            vatCode: "25.5",
            vatPercent: 25.5,
            rows: [
                {
                    accountingValue: 1000.00,
                    account: "3000",
                    vatCode: "25.5",
                    vatPercent: 25.5
                },
                {
                    accountingValue: 500.00,
                    account: "3000",
                    vatCode: "25.5",
                    vatPercent: 25.5
                }
            ]
        },
        {
            id: "inv-2023-002",
            externalId: "SI2023002",
            partner: {
                id: "cust-002",
                name: "Digital Services Ab"
            },
            invoiceDate: "2023-09-16",
            dueDate: "2023-10-16",
            payDate: "2023-10-15",
            reference: "2345678901",
            number: 1002,
            type: VoucherType.SALES_INVOICE,
            account: "3000",
            contraAccount: "1701",
            vatCode: "25.5",
            vatPercent: 24,
            rows: [
                {
                    accountingValue: 2500.00,
                    account: "3000",
                    vatCode: "25.5",
                    vatPercent: 25.5
                }
            ]
        }
    ]
};
