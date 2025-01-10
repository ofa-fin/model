import "./models.tsp";
import "./vat.tsp";
namespace FinancialAPI {

    /**
     * Multi-lingual string.
     * 
     * language ISO 639-1 code as key and string as value.
     */    
    alias MultiLingualString = Record<string>;


    /**
     * Accounting account.
     */
    model Account extends BaseDocument {
        /**
         * Account name (in multiple languages).
         */
        @example(#{ fi: "Pankkitili", en: "Bank account" })
        name: MultiLingualString;

        /**
         * Account number.
         */
        @example("1910")
        number: string;

        /**
         * Default VAT information.
         */
        @example(#{ mainClass: VatMainClass.SALES, subClass: VatSubClass.NORMAL, vatRate: 24 })
        defaultVat?: VatInformation; 

        // ... lots of more fields
    }

    /**
     * Reference to an account.
     * 
     * Used in another models to reference an account.
     */
    model AccountRef {
        /**
         * Account number.
         */
        @example("1910")
        number: string;

        /**
         * Account name (in current language).
         */
        @example("Pankkitili")
        name: string;
    }

}