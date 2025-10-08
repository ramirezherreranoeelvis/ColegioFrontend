/**
 * data example:
 * 
 * {
 
        "orderID": "13D59921KD351125W",

        "payerID": "KAP6NY5Y8GQAL",

        "paymentID": "13D59921KD351125W",

        "billingToken": null,

        "facilitatorAccessToken": "A21AAIyR4vBozObuh38RDy0NVsX1ubtWFSagQqnJ73s_Y1gGJs1NXJy7ccKMrkJhVKVLPQWxaOz__5VJ5Tcw7WhfouqefLWkQ",

        "paymentSource": "paypal"
        
};
 */
export default interface DataPaypal {
      orderID: string;
      payerID: string;
      paymentID: string;
      billingToken: any;
      facilitatorAccessToken: string;
      paymentSource: string;
}
