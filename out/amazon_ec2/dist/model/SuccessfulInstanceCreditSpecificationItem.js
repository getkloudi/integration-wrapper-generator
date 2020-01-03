"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SuccessfulInstanceCreditSpecificationItem model module.
 * @module model/SuccessfulInstanceCreditSpecificationItem
 * @version 1.0.0
 */
var SuccessfulInstanceCreditSpecificationItem =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SuccessfulInstanceCreditSpecificationItem</code>.
   * Describes the burstable performance instance whose credit option for CPU usage was successfully modified.
   * @alias module:model/SuccessfulInstanceCreditSpecificationItem
   */
  function SuccessfulInstanceCreditSpecificationItem() {
    _classCallCheck(this, SuccessfulInstanceCreditSpecificationItem);

    SuccessfulInstanceCreditSpecificationItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SuccessfulInstanceCreditSpecificationItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SuccessfulInstanceCreditSpecificationItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SuccessfulInstanceCreditSpecificationItem} obj Optional instance to populate.
     * @return {module:model/SuccessfulInstanceCreditSpecificationItem} The populated <code>SuccessfulInstanceCreditSpecificationItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SuccessfulInstanceCreditSpecificationItem();

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SuccessfulInstanceCreditSpecificationItem;
}();
/**
 * @member {String} InstanceId
 */


SuccessfulInstanceCreditSpecificationItem.prototype['InstanceId'] = undefined;
var _default = SuccessfulInstanceCreditSpecificationItem;
exports["default"] = _default;