"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UnsuccessfulInstanceCreditSpecificationErrorCode = _interopRequireDefault(require("./UnsuccessfulInstanceCreditSpecificationErrorCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UnsuccessfulInstanceCreditSpecificationItemError model module.
 * @module model/UnsuccessfulInstanceCreditSpecificationItemError
 * @version 1.0.0
 */
var UnsuccessfulInstanceCreditSpecificationItemError =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>UnsuccessfulInstanceCreditSpecificationItemError</code>.
   * Information about the error for the burstable performance instance whose credit option for CPU usage was not modified.
   * @alias module:model/UnsuccessfulInstanceCreditSpecificationItemError
   */
  function UnsuccessfulInstanceCreditSpecificationItemError() {
    _classCallCheck(this, UnsuccessfulInstanceCreditSpecificationItemError);

    UnsuccessfulInstanceCreditSpecificationItemError.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UnsuccessfulInstanceCreditSpecificationItemError, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UnsuccessfulInstanceCreditSpecificationItemError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnsuccessfulInstanceCreditSpecificationItemError} obj Optional instance to populate.
     * @return {module:model/UnsuccessfulInstanceCreditSpecificationItemError} The populated <code>UnsuccessfulInstanceCreditSpecificationItemError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnsuccessfulInstanceCreditSpecificationItemError();

        if (data.hasOwnProperty('Code')) {
          obj['Code'] = _UnsuccessfulInstanceCreditSpecificationErrorCode["default"].constructFromObject(data['Code']);
        }

        if (data.hasOwnProperty('Message')) {
          obj['Message'] = _ApiClient["default"].convertToType(data['Message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UnsuccessfulInstanceCreditSpecificationItemError;
}();
/**
 * @member {module:model/UnsuccessfulInstanceCreditSpecificationErrorCode} Code
 */


UnsuccessfulInstanceCreditSpecificationItemError.prototype['Code'] = undefined;
/**
 * @member {String} Message
 */

UnsuccessfulInstanceCreditSpecificationItemError.prototype['Message'] = undefined;
var _default = UnsuccessfulInstanceCreditSpecificationItemError;
exports["default"] = _default;