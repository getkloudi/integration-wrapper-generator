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
 * The DeleteInternetGatewayRequest model module.
 * @module model/DeleteInternetGatewayRequest
 * @version 1.0.0
 */
var DeleteInternetGatewayRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteInternetGatewayRequest</code>.
   * @alias module:model/DeleteInternetGatewayRequest
   * @param internetGatewayId {String} 
   */
  function DeleteInternetGatewayRequest(internetGatewayId) {
    _classCallCheck(this, DeleteInternetGatewayRequest);

    DeleteInternetGatewayRequest.initialize(this, internetGatewayId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteInternetGatewayRequest, null, [{
    key: "initialize",
    value: function initialize(obj, internetGatewayId) {
      obj['InternetGatewayId'] = internetGatewayId;
    }
    /**
     * Constructs a <code>DeleteInternetGatewayRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteInternetGatewayRequest} obj Optional instance to populate.
     * @return {module:model/DeleteInternetGatewayRequest} The populated <code>DeleteInternetGatewayRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteInternetGatewayRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InternetGatewayId')) {
          obj['InternetGatewayId'] = _ApiClient["default"].convertToType(data['InternetGatewayId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteInternetGatewayRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteInternetGatewayRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} InternetGatewayId
 */

DeleteInternetGatewayRequest.prototype['InternetGatewayId'] = undefined;
var _default = DeleteInternetGatewayRequest;
exports["default"] = _default;