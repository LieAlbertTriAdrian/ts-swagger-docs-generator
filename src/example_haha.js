/**
 * Create an instance of `CustomClass` with the given `options`.
 *
 * @param {String} options
 * @api public
 */

class CustomClass {
  constructor(options) {
    this.options = options;
  }
  set(type, fn) {
    // do stuff
  }
}

/**
 * Create an instance of `CustomClass2` with the given `options`.
 *
 * @param2 {String} options2
 * @api2 public2
 */

class CustomClass2 {
  constructor(options) {
    this.options = options;
  }
  set2(type, fn) {
    // do stuff
  }
}
/**
 * @Summary GET /payments/{payment_id}
 * @Description Gets the data for one Payment
 * @Tags payments
 * @Accept  json
 * @Produce  json
 * @Param payment_id path string true "The id of payment"
 * @Param PaymentReq body joi.JCreatePaymentRequestParams true "Payment request"
 * @Success 200 {object} actions.Payment
 * @Router /payments/{payment_id} [get]
 */
