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
 * The DisableVpcClassicLinkRequest model module.
 * @module model/DisableVpcClassicLinkRequest
 * @version 1.1.0
 */
var DisableVpcClassicLinkRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DisableVpcClassicLinkRequest</code>.
   * @alias module:model/DisableVpcClassicLinkRequest
   * @param vpcId {String} 
   */
  function DisableVpcClassicLinkRequest(vpcId) {
    _classCallCheck(this, DisableVpcClassicLinkRequest);

    DisableVpcClassicLinkRequest.initialize(this, vpcId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DisableVpcClassicLinkRequest, null, [{
    key: "initialize",
    value: function initialize(obj, vpcId) {
      obj['VpcId'] = vpcId;
    }
    /**
     * Constructs a <code>DisableVpcClassicLinkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DisableVpcClassicLinkRequest} obj Optional instance to populate.
     * @return {module:model/DisableVpcClassicLinkRequest} The populated <code>DisableVpcClassicLinkRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DisableVpcClassicLinkRequest();

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

  return DisableVpcClassicLinkRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DisableVpcClassicLinkRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} VpcId
 */

DisableVpcClassicLinkRequest.prototype['VpcId'] = undefined;
var _default = DisableVpcClassicLinkRequest;
exports["default"] = _default;