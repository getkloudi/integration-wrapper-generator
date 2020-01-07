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
 * The MoveAddressToVpcRequest model module.
 * @module model/MoveAddressToVpcRequest
 * @version 1.1.0
 */
var MoveAddressToVpcRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>MoveAddressToVpcRequest</code>.
   * @alias module:model/MoveAddressToVpcRequest
   * @param publicIp {String} 
   */
  function MoveAddressToVpcRequest(publicIp) {
    _classCallCheck(this, MoveAddressToVpcRequest);

    MoveAddressToVpcRequest.initialize(this, publicIp);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MoveAddressToVpcRequest, null, [{
    key: "initialize",
    value: function initialize(obj, publicIp) {
      obj['PublicIp'] = publicIp;
    }
    /**
     * Constructs a <code>MoveAddressToVpcRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MoveAddressToVpcRequest} obj Optional instance to populate.
     * @return {module:model/MoveAddressToVpcRequest} The populated <code>MoveAddressToVpcRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MoveAddressToVpcRequest();

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

  return MoveAddressToVpcRequest;
}();
/**
 * @member {Boolean} DryRun
 */


MoveAddressToVpcRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} PublicIp
 */

MoveAddressToVpcRequest.prototype['PublicIp'] = undefined;
var _default = MoveAddressToVpcRequest;
exports["default"] = _default;