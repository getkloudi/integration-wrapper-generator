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
 * The DeleteEgressOnlyInternetGatewayRequest model module.
 * @module model/DeleteEgressOnlyInternetGatewayRequest
 * @version 1.0.0
 */
var DeleteEgressOnlyInternetGatewayRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteEgressOnlyInternetGatewayRequest</code>.
   * @alias module:model/DeleteEgressOnlyInternetGatewayRequest
   * @param egressOnlyInternetGatewayId {String} 
   */
  function DeleteEgressOnlyInternetGatewayRequest(egressOnlyInternetGatewayId) {
    _classCallCheck(this, DeleteEgressOnlyInternetGatewayRequest);

    DeleteEgressOnlyInternetGatewayRequest.initialize(this, egressOnlyInternetGatewayId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteEgressOnlyInternetGatewayRequest, null, [{
    key: "initialize",
    value: function initialize(obj, egressOnlyInternetGatewayId) {
      obj['EgressOnlyInternetGatewayId'] = egressOnlyInternetGatewayId;
    }
    /**
     * Constructs a <code>DeleteEgressOnlyInternetGatewayRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteEgressOnlyInternetGatewayRequest} obj Optional instance to populate.
     * @return {module:model/DeleteEgressOnlyInternetGatewayRequest} The populated <code>DeleteEgressOnlyInternetGatewayRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteEgressOnlyInternetGatewayRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('EgressOnlyInternetGatewayId')) {
          obj['EgressOnlyInternetGatewayId'] = _ApiClient["default"].convertToType(data['EgressOnlyInternetGatewayId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteEgressOnlyInternetGatewayRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteEgressOnlyInternetGatewayRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} EgressOnlyInternetGatewayId
 */

DeleteEgressOnlyInternetGatewayRequest.prototype['EgressOnlyInternetGatewayId'] = undefined;
var _default = DeleteEgressOnlyInternetGatewayRequest;
exports["default"] = _default;