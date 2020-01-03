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
 * The DisassociateAddressRequest model module.
 * @module model/DisassociateAddressRequest
 * @version 1.0.0
 */
var DisassociateAddressRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DisassociateAddressRequest</code>.
   * @alias module:model/DisassociateAddressRequest
   */
  function DisassociateAddressRequest() {
    _classCallCheck(this, DisassociateAddressRequest);

    DisassociateAddressRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DisassociateAddressRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DisassociateAddressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DisassociateAddressRequest} obj Optional instance to populate.
     * @return {module:model/DisassociateAddressRequest} The populated <code>DisassociateAddressRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DisassociateAddressRequest();

        if (data.hasOwnProperty('AssociationId')) {
          obj['AssociationId'] = _ApiClient["default"].convertToType(data['AssociationId'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('PublicIp')) {
          obj['PublicIp'] = _ApiClient["default"].convertToType(data['PublicIp'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DisassociateAddressRequest;
}();
/**
 * @member {String} AssociationId
 */


DisassociateAddressRequest.prototype['AssociationId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DisassociateAddressRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} PublicIp
 */

DisassociateAddressRequest.prototype['PublicIp'] = undefined;
var _default = DisassociateAddressRequest;
exports["default"] = _default;