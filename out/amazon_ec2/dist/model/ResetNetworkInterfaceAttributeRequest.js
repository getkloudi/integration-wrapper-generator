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
 * The ResetNetworkInterfaceAttributeRequest model module.
 * @module model/ResetNetworkInterfaceAttributeRequest
 * @version 1.1.0
 */
var ResetNetworkInterfaceAttributeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ResetNetworkInterfaceAttributeRequest</code>.
   * Contains the parameters for ResetNetworkInterfaceAttribute.
   * @alias module:model/ResetNetworkInterfaceAttributeRequest
   * @param networkInterfaceId {String} 
   */
  function ResetNetworkInterfaceAttributeRequest(networkInterfaceId) {
    _classCallCheck(this, ResetNetworkInterfaceAttributeRequest);

    ResetNetworkInterfaceAttributeRequest.initialize(this, networkInterfaceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResetNetworkInterfaceAttributeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkInterfaceId) {
      obj['NetworkInterfaceId'] = networkInterfaceId;
    }
    /**
     * Constructs a <code>ResetNetworkInterfaceAttributeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResetNetworkInterfaceAttributeRequest} obj Optional instance to populate.
     * @return {module:model/ResetNetworkInterfaceAttributeRequest} The populated <code>ResetNetworkInterfaceAttributeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResetNetworkInterfaceAttributeRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }

        if (data.hasOwnProperty('SourceDestCheck')) {
          obj['SourceDestCheck'] = _ApiClient["default"].convertToType(data['SourceDestCheck'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ResetNetworkInterfaceAttributeRequest;
}();
/**
 * @member {Boolean} DryRun
 */


ResetNetworkInterfaceAttributeRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

ResetNetworkInterfaceAttributeRequest.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {String} SourceDestCheck
 */

ResetNetworkInterfaceAttributeRequest.prototype['SourceDestCheck'] = undefined;
var _default = ResetNetworkInterfaceAttributeRequest;
exports["default"] = _default;