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
 * The PatchOrg model module.
 * @module model/PatchOrg
 * @version 1.4.1
 */
var PatchOrg =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PatchOrg</code>.
   * @alias module:model/PatchOrg
   */
  function PatchOrg() {
    _classCallCheck(this, PatchOrg);

    PatchOrg.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PatchOrg, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PatchOrg</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchOrg} obj Optional instance to populate.
     * @return {module:model/PatchOrg} The populated <code>PatchOrg</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PatchOrg();

        if (data.hasOwnProperty('billing_email')) {
          obj['billing_email'] = _ApiClient["default"].convertToType(data['billing_email'], 'String');
        }

        if (data.hasOwnProperty('company')) {
          obj['company'] = _ApiClient["default"].convertToType(data['company'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PatchOrg;
}();
/**
 * Billing email address. This address is not publicized.
 * @member {String} billing_email
 */


PatchOrg.prototype['billing_email'] = undefined;
/**
 * @member {String} company
 */

PatchOrg.prototype['company'] = undefined;
/**
 * Publicly visible email address.
 * @member {String} email
 */

PatchOrg.prototype['email'] = undefined;
/**
 * @member {String} location
 */

PatchOrg.prototype['location'] = undefined;
/**
 * @member {String} name
 */

PatchOrg.prototype['name'] = undefined;
var _default = PatchOrg;
exports["default"] = _default;