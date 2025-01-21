/**
 * Payment method.
 */
export interface PaymentMethodReference {

    /** Payment method id, recommended to be a UUID.
     * @example "123e4567-e89b-12d3-a456-426614174000"
     */
    id: string;

    /** Name of the payment method. */
    name: string;

}