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
 * The AssociateDhcpOptionsRequest model module.
 * @module model/AssociateDhcpOptionsRequest
 * @version 1.1.0
 */
var AssociateDhcpOptionsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AssociateDhcpOptionsRequest</code>.
   * @alias module:model/AssociateDhcpOptionsRequest
   * @param dhcpOptionsId {String} 
   * @param vpcId {String} 
   */
  function AssociateDhcpOptionsRequest(dhcpOptionsId, vpcId) {
    _classCallCheck(this, AssociateDhcpOptionsRequest);

    AssociateDhcpOptionsRequest.initialize(this, dhcpOptionsId, vpcId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AssociateDhcpOptionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, dhcpOptionsId, vpcId) {
      obj['DhcpOptionsId'] = dhcpOptionsId;
      obj['VpcId'] = vpcId;
    }
    /**
     * Constructs a <code>AssociateDhcpOptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssociateDhcpOptionsRequest} obj Optional instance to populate.
     * @return {module:model/AssociateDhcpOptionsRequest} The populated <code>AssociateDhcpOptionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AssociateDhcpOptionsRequest();

        if (data.hasOwnProperty('DhcpOptionsId')) {
          obj['DhcpOptionsId'] = _ApiClient["default"].convertToType(data['DhcpOptionsId'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AssociateDhcpOptionsRequest;
}();
/**
 * @member {String} DhcpOptionsId
 */


AssociateDhcpOptionsRequest.prototype['DhcpOptionsId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

AssociateDhcpOptionsRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} VpcId
 */

AssociateDhcpOptionsRequest.prototype['VpcId'] = undefined;
var _default = AssociateDhcpOptionsRequest;
exports["default"] = _default;