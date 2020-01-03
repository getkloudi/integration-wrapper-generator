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
 * The AttachInternetGatewayRequest model module.
 * @module model/AttachInternetGatewayRequest
 * @version 1.0.0
 */
var AttachInternetGatewayRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AttachInternetGatewayRequest</code>.
   * @alias module:model/AttachInternetGatewayRequest
   * @param internetGatewayId {String} 
   * @param vpcId {String} 
   */
  function AttachInternetGatewayRequest(internetGatewayId, vpcId) {
    _classCallCheck(this, AttachInternetGatewayRequest);

    AttachInternetGatewayRequest.initialize(this, internetGatewayId, vpcId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AttachInternetGatewayRequest, null, [{
    key: "initialize",
    value: function initialize(obj, internetGatewayId, vpcId) {
      obj['InternetGatewayId'] = internetGatewayId;
      obj['VpcId'] = vpcId;
    }
    /**
     * Constructs a <code>AttachInternetGatewayRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachInternetGatewayRequest} obj Optional instance to populate.
     * @return {module:model/AttachInternetGatewayRequest} The populated <code>AttachInternetGatewayRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AttachInternetGatewayRequest();

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

  return AttachInternetGatewayRequest;
}();
/**
 * @member {Boolean} DryRun
 */


AttachInternetGatewayRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} InternetGatewayId
 */

AttachInternetGatewayRequest.prototype['InternetGatewayId'] = undefined;
/**
 * @member {String} VpcId
 */

AttachInternetGatewayRequest.prototype['VpcId'] = undefined;
var _default = AttachInternetGatewayRequest;
exports["default"] = _default;