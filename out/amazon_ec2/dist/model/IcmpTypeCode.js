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
 * The IcmpTypeCode model module.
 * @module model/IcmpTypeCode
 * @version 1.0.0
 */
var IcmpTypeCode =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>IcmpTypeCode</code>.
   * Describes the ICMP type and code.
   * @alias module:model/IcmpTypeCode
   */
  function IcmpTypeCode() {
    _classCallCheck(this, IcmpTypeCode);

    IcmpTypeCode.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IcmpTypeCode, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IcmpTypeCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IcmpTypeCode} obj Optional instance to populate.
     * @return {module:model/IcmpTypeCode} The populated <code>IcmpTypeCode</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IcmpTypeCode();

        if (data.hasOwnProperty('Code')) {
          obj['Code'] = _ApiClient["default"].convertToType(data['Code'], 'Number');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _ApiClient["default"].convertToType(data['Type'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return IcmpTypeCode;
}();
/**
 * @member {Number} Code
 */


IcmpTypeCode.prototype['Code'] = undefined;
/**
 * @member {Number} Type
 */

IcmpTypeCode.prototype['Type'] = undefined;
var _default = IcmpTypeCode;
exports["default"] = _default;