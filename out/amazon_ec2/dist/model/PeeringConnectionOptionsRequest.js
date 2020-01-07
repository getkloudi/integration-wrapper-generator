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
 * The PeeringConnectionOptionsRequest model module.
 * @module model/PeeringConnectionOptionsRequest
 * @version 1.1.0
 */
var PeeringConnectionOptionsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PeeringConnectionOptionsRequest</code>.
   * The VPC peering connection options.
   * @alias module:model/PeeringConnectionOptionsRequest
   */
  function PeeringConnectionOptionsRequest() {
    _classCallCheck(this, PeeringConnectionOptionsRequest);

    PeeringConnectionOptionsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PeeringConnectionOptionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PeeringConnectionOptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PeeringConnectionOptionsRequest} obj Optional instance to populate.
     * @return {module:model/PeeringConnectionOptionsRequest} The populated <code>PeeringConnectionOptionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PeeringConnectionOptionsRequest();

        if (data.hasOwnProperty('AllowDnsResolutionFromRemoteVpc')) {
          obj['AllowDnsResolutionFromRemoteVpc'] = _ApiClient["default"].convertToType(data['AllowDnsResolutionFromRemoteVpc'], 'Boolean');
        }

        if (data.hasOwnProperty('AllowEgressFromLocalClassicLinkToRemoteVpc')) {
          obj['AllowEgressFromLocalClassicLinkToRemoteVpc'] = _ApiClient["default"].convertToType(data['AllowEgressFromLocalClassicLinkToRemoteVpc'], 'Boolean');
        }

        if (data.hasOwnProperty('AllowEgressFromLocalVpcToRemoteClassicLink')) {
          obj['AllowEgressFromLocalVpcToRemoteClassicLink'] = _ApiClient["default"].convertToType(data['AllowEgressFromLocalVpcToRemoteClassicLink'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return PeeringConnectionOptionsRequest;
}();
/**
 * @member {Boolean} AllowDnsResolutionFromRemoteVpc
 */


PeeringConnectionOptionsRequest.prototype['AllowDnsResolutionFromRemoteVpc'] = undefined;
/**
 * @member {Boolean} AllowEgressFromLocalClassicLinkToRemoteVpc
 */

PeeringConnectionOptionsRequest.prototype['AllowEgressFromLocalClassicLinkToRemoteVpc'] = undefined;
/**
 * @member {Boolean} AllowEgressFromLocalVpcToRemoteClassicLink
 */

PeeringConnectionOptionsRequest.prototype['AllowEgressFromLocalVpcToRemoteClassicLink'] = undefined;
var _default = PeeringConnectionOptionsRequest;
exports["default"] = _default;