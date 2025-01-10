import "./models.tsp";
import "./account.tsp";
import "./vat.tsp";

namespace FinancialAPI {

enum DebitOrCredit {
    DEBIT,
    CREDIT
}

model DimensionRef {
    /**
     * Dimension id.
     * 
     * Recommended to be a UUID.
     * Possible to use some fixed ids like '@COSTCENTER', '@PROJECT' etc ?
     */
    @example("123e4567-e89b-12d3-a456-426614174000")
    @example("@COSTCENTER")
    id: string;

    /**
     * Dimension name, in current language.
     */
    @example("Leiritoiminta")
    name: string;
}

/** 
 * One dimension value
 */
model EntryDimensionValue {
    /**
     * Dimension value id.
     * 
     * For example, if we have cost center dimension, the value id is the cost center id.
     */
    @example("123e4567-e89b-12d3-a456-426614174000")
    id?: string;

    /**
     * Dimension value name, in current language     
     */
    @example("Const Center 1")
    name: string;

    /**
     * Dimension value percentage.
     * 
     * Defaults to 100.
     */
    @minValue(0)
    @maxValue(100)
    @example(100)
    percentage?: decimal;
}

/**
 * Dimensions of an entry in one dimension.
 */
model EntryDimension {
    /**
     * Dimension id.
     */
    @example(#{id: "@COSTCENTER", name: "Kustannuspaikka"})
    dimension: DimensionRef;

    /**
     * Dimension values.
     */
    @example(#[#{id: "123e4567-e89b-12d3-a456-426614174000", name: "Kustannuspaikka 1", percentage: 100}, #{id: "123e4567-e89b-12d3-a456-426614174001", name: "Kustannuspaikka 2", percentage: 50}])
    values: EntryDimensionValue[];
}

/**
 * Accounting entry.
 */
model Entry extends BaseDocument {    
    /**
     * Entry date in ISO date format.
     */    
    @example("2024-01-01")
    date: string;
    
    /**
     * Amount of the entry.
     */
    @example(100.00)
    amount: decimal;

    /**
     * Description of the entry.
     */    
    @example("Payment for invoice 123456")
    description: string;

    /**
     * Debit or credit.
     */
    @example(DebitOrCredit.DEBIT)
    debitOrCredit: DebitOrCredit;

    /**
     * Account of the entry.
     */
    @example(#{
        number: "4000",
        name: "Ostot"
    })
    account: AccountRef;

    /**
     * Vat information of the entry.
     */
    @example(#{ 
        mainClass: VatMainClass.SALES, 
        subClass: VatSubClass.NORMAL, 
        goodsOrServices: GoodsOrServices.GOODS, 
        marginalVatReason: MarginalVatReason.SECOND_HAND, 
        vatLevel: VatLevel.HIGH, 
        vatRate: 24 
    })
    vat?: EntryVatInformation;

    /**
     * Dimensions of the entry.
     */
    @example(#[
        #{ 
            dimension: #{ id: "@COSTCENTER", name: "Kustannuspaikka" }, 
            values: #[
                #{ id: "123e4567-e89b-12d3-a456-426614174000", name: "Kustannuspaikka 1", percentage: 50 },
                #{ id: "123e4567-e89b-12d3-a456-426614174001", name: "Kustannuspaikka 2", percentage: 50 }
            ]
        }
    ])
    dimensions: EntryDimension[];

    /**
     * Partner of the entry.
     */
    @example(#{ id: "123e4567-e89b-12d3-a456-426614174000", name: "Laskupiste Oy" })
    partner?: PartnerRef;

    /**
     * Id of the document that created the entry.
     */
    @example("123e4567-e89b-12d3-a456-426614174000")
    documentId: string;
    
}


}