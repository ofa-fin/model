/**
 * Payment method.
 */
export interface PaymentMethodReference {

    /** Payment method id, recommended to be a UUID.
     * @example "550e8400-e29b-41d4-a716-446655440000"
     */
    id: string;

    /** Name of the payment method. */
    name: string;

}