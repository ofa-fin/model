namespace FinancialAPI {

    enum VatMainClass {
        SALES,
        PURCHASES,
        NO_VAT
    }

    enum VatSubClass {
        NORMAL,
        MARGINAL,
        EU,
        BUILDING,
        IMPORT
    }

    enum GoodsOrServices {
        GOODS,
        SERVICES
    }

    enum VatLevel {
        HIGH,
        MEDIUM,
        LOW,
        ZERO
    }

    enum MarginalVatReason {
        SECOND_HAND,
        COLLECTION,
        ART
    }

    model VatInformation {
        mainClass: VatMainClass;
        subClass?: VatSubClass;
        goodsOrServices?: GoodsOrServices;
        marginalVatReason?: MarginalVatReason;
        vatLevel?: VatLevel;
        vatRate: decimal;
    }

    /**
     * Type of VAT related accounting entry.
     */
    enum VatEntryType {
        /** Base amount (vat excluded). Informational. */
        BASE,
        /** Vat amount, accounted to Arvonlisäverovelka. */
        VAT,
        /** Return amount, accounted to Arvonlisäverosaamiset. */    
        RETURN,
        /** In reverse VAT, if no rights to VAT return, the VAT part will be accounted to salary account. */
        NO_RETURN_PART
    }

    model EntryVatInformation extends VatInformation {
        bookingType?: VatEntryType;
    }

}