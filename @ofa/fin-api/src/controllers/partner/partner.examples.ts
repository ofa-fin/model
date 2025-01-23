import type { PaginatedResult, Partner, Result } from "@ofa/fin-model";

export const partnerWithAllData: Result<Partner> = {
    meta: {
        id: "123e4567-e89b-12d3-a456-426614174000",
        queriedAt: new Date().toISOString(),
        createdAt: "2024-12-18T14:32:05Z",
        updatedAt: "2024-12-18T14:32:05Z",
        version: 1,
        type: "PARTNER",
        self: "/api/v1/partners/123e4567-e89b-12d3-a456-426614174000"
    },
    data: {
        code: "PARTNER123",
        name: "Oy Yritys Ab",
        businessId: "1234567-8",
        vatNumber: "FI12345678",
        email: "contact@yritys.fi",
        phone: "+358401234567",
        homepage: "https://yritys.fi",
        language: "fi",
        domicile: "Helsinki",
        country: "FI",
        address: {
            street: "Testikatu 8",
            postalCode: "00100",
            city: "Helsinki",
            countryCode: "FI"
        },
        deliveryAddress: {
            street: "Toimituskatu 3",
            postalCode: "00120",
            city: "Helsinki",
            countryCode: "FI"
        },
        invoiceAddress: {
            street: "Laskutuskatu 5",
            postalCode: "00150",
            city: "Helsinki",
            countryCode: "FI"
        },
        einvoiceAddresses: [
            {
                operator: "E204503",
                address: "003712345678"
            }
        ],
        bankAccounts: [
            {
                iban: "FI1234567890123456",
                bic: "OKOYFIHH"
            }
        ],
        groups: [
            {
                id: "abc78901-d234-56e7-f890-426614174000",
                name: "Suppliers"
            }
        ]
    }
};

export const partnerList: PaginatedResult<Partner> = {
    meta: {
        queriedAt: new Date().toISOString(),
        limit: 100,
        offset: 0,
        total: 2
    },
    data: [
        {
            id: "123e4567-e89b-12d3-a456-426614174000",
            code: "PARTNER123",
            name: "Oy Yritys Ab",
            businessId: "1234567-8",
            vatNumber: "FI12345678",
            email: "contact@yritys.fi",
            language: "fi",
            country: "FI"
        },
        {
            id: "456e7890-f12c-34d5-b678-426614174000",
            code: "PARTNER321",
            name: "Osakeyhtiö Oy",
            businessId: "7654321-0",
            vatNumber: "FI76543210",
            email: "info@yritys.com",
            language: "fi",
            country: "FI"
        }
    ]
};