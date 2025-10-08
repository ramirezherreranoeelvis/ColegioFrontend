/**
 * data example: 
 * 
{

      id: '01M69595588479938';

      intent: 'CAPTURE';

      status: 'COMPLETED';

      purchase_units: [

            {

                  reference_id: 'default';

                  amount: {

                        currency_code: 'USD';

                        value: '100.00';

                  };

                  payee: {

                        email_address: 'sb-oiqtt31394508@business.example.com';

                        merchant_id: '9JTMBXDW5R97W';

                  };

                  shipping: {

                        name: {

                              full_name: 'John Doe';

                        };

                        address: {

                              address_line_1: 'Free Trade Zone';

                              admin_area_2: 'Lima';

                              admin_area_1: 'Lima';

                              postal_code: '07001';

                              country_code: 'PE';

                        };

                  };

                  payments: {

                        captures: [

                              {

                                    id: '2W509186VP456871K';

                                    status: 'COMPLETED';

                                    amount: {

                                          currency_code: 'USD';

                                          value: '100.00';

                                    };

                                    final_capture: true;

                                    seller_protection: {

                                          status: 'ELIGIBLE';

                                          dispute_categories: [

                                                'ITEM_NOT_RECEIVED',

                                                'UNAUTHORIZED_TRANSACTION',

                                          ];

                                    };

                                    create_time: '2025-10-08T04:55:34Z';

                                    update_time: '2025-10-08T04:55:34Z';

                              },

                        ];

                  };

            },

      ];

      payer: {

            name: {

                  given_name: 'John';

                  surname: 'Doe';

            };

            email_address: 'sb-69mmk32051721@personal.example.com';

            payer_id: 'KAP6NY5Y8GQAL';

            address: {

                  country_code: 'PE';

            };

      };

      create_time: '2025-10-08T04:55:22Z';

      update_time: '2025-10-08T04:55:34Z';

      links: [

            {

                  href: 'https://api.sandbox.paypal.com/v2/checkout/orders/01M69595588479938';

                  rel: 'self';

                  method: 'GET';

            },

      ];

}
 */
export default interface Deatils {
      id: string;
      intent: string;
      status: string;
      purchase_units: PurchaseUnit[];
      payer: Payer;
      create_time: string;
      update_time: string;
      links: Link[];
}

/**
 * data example:
 *
 * {
 *
 *       address_line_1: 'Free Trade Zone';
 *
 *       admin_area_2: 'Lima';
 *
 *       admin_area_1: 'Lima';
 *
 *       postal_code: '07001';
 *
 *       country_code: 'PE';
 *
 * };
 */
export interface Address {
      address_line_1: string;
      admin_area_2: string;
      admin_area_1: string;
      postal_code: string;
      country_code: string;
}
export interface Shipping {
      name: {
            full_name: string;
      };
      address: Address;
}

/**
 * data example:
 *
 * {
 *
 *      currency_code: 'https://api.sandbox.paypal.com/v2/checkout/orders/01M69595588479938';
 *
 *      value: '100.00';
 *
 *      method: 'GET';
 *
 * }
 */
export interface Amount {
      currency_code: string;
      value: string;
}

export interface SellerProtection {
      status: string;
      dispute_categories: string[];
}
export interface Capture {
      id: string;
      status: string;
      amount: Amount;
      final_capture: boolean;
      seller_protection: SellerProtection;
      create_time: string;
      update_time: string;
}
export interface Payments {
      captures: Capture[];
}

export interface Payee {
      email_address: string;
      merchant_id: string;
}

export interface PurchaseUnit {
      reference_id: string;
      amount: Amount;
      payee: Payee;
      shipping: Shipping;
      payments: Payments;
}

export interface Payer {
      name: {
            given_name: string;
            surname: string;
      };
      email_address: string;
      payer_id: string;
      address: {
            country_code: string;
      };
}

/**
 * data example:
 *
 * {
 *
 *      href: 'https://api.sandbox.paypal.com/v2/checkout/orders/01M69595588479938';
 *
 *      rel: 'self';
 *
 *      method: 'GET';
 *
 * }
 */
export interface Link {
      href: string;
      rel: string;
      method: string;
}
