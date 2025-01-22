import { PaginatedResult, VatMainClass, VoucherType, type Voucher } from "@ofa/fin-model";

export const salesInvoices: PaginatedResult<Voucher> = {
    meta: {
        limit: 100,
        offset: 0,
        total: 2
    },
    data: [
        {
            id: "inv-2023-001",
            date: "2024-09-15",
            title: "1001 / Tech Solutions Oy",
            description: "Sales invoice 1001 for Tech Solutions Oy",
            externalId: "SI2023001",
            partner: {
                id: "cust-001",
                name: "Tech Solutions Oy"
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
            type: VoucherType.SALES_INVOICE,
        },
        {
            id: "inv-2023-002",
            date: "2024-09-16",
            title: "1002 / Office Supplies Ltd",
            description: "Sales invoice 1002 for Office Supplies Ltd",
            externalId: "SI2023002",
            partner: {
                id: "cust-002",
                name: "Office Supplies Ltd"
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
        }
    ]
};
