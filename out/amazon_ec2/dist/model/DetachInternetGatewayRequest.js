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
 * The DetachInternetGatewayRequest model module.
 * @module model/DetachInternetGatewayRequest
 * @version 1.0.0
 */
var DetachInternetGatewayRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DetachInternetGatewayRequest</code>.
   * @alias module:model/DetachInternetGatewayRequest
   * @param internetGatewayId {String} 
   * @param vpcId {String} 
   */
  function DetachInternetGatewayRequest(internetGatewayId, vpcId) {
    _classCallCheck(this, DetachInternetGatewayRequest);

    DetachInternetGatewayRequest.initialize(this, internetGatewayId, vpcId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DetachInternetGatewayRequest, null, [{
    key: "initialize",
    value: function initialize(obj, internetGatewayId, vpcId) {
      obj['InternetGatewayId'] = internetGatewayId;
      obj['VpcId'] = vpcId;
    }
    /**
     * Constructs a <code>DetachInternetGatewayRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DetachInternetGatewayRequest} obj Optional instance to populate.
     * @return {module:model/DetachInternetGatewayRequest} The populated <code>DetachInternetGatewayRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DetachInternetGatewayRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InternetGatewayId')) {
          obj['InternetGatewayId'] = _ApiClient["default"].convertToType(data['InternetGatewayId'], 'String');
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DetachInternetGatewayRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DetachInternetGatewayRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} InternetGatewayId
 */

DetachInternetGatewayRequest.prototype['InternetGatewayId'] = undefined;
/**
 * @member {String} VpcId
 */

DetachInternetGatewayRequest.prototype['VpcId'] = undefined;
var _default = DetachInternetGatewayRequest;
exports["default"] = _default;