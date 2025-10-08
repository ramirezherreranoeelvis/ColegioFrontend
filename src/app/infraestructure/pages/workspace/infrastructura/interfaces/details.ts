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

export interface Link {
      href: string;
      rel: string;
      method: string;
}
