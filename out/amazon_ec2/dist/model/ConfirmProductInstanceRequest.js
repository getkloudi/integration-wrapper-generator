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
 * The ConfirmProductInstanceRequest model module.
 * @module model/ConfirmProductInstanceRequest
 * @version 1.0.0
 */
var ConfirmProductInstanceRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ConfirmProductInstanceRequest</code>.
   * @alias module:model/ConfirmProductInstanceRequest
   * @param instanceId {String} 
   * @param productCode {String} 
   */
  function ConfirmProductInstanceRequest(instanceId, productCode) {
    _classCallCheck(this, ConfirmProductInstanceRequest);

    ConfirmProductInstanceRequest.initialize(this, instanceId, productCode);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConfirmProductInstanceRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instanceId, productCode) {
      obj['InstanceId'] = instanceId;
      obj['ProductCode'] = productCode;
    }
    /**
     * Constructs a <code>ConfirmProductInstanceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfirmProductInstanceRequest} obj Optional instance to populate.
     * @return {module:model/ConfirmProductInstanceRequest} The populated <code>ConfirmProductInstanceRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConfirmProductInstanceRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('ProductCode')) {
          obj['ProductCode'] = _ApiClient["default"].convertToType(data['ProductCode'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConfirmProductInstanceRequest;
}();
/**
 * @member {Boolean} DryRun
 */


ConfirmProductInstanceRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} InstanceId
 */

ConfirmProductInstanceRequest.prototype['InstanceId'] = undefined;
/**
 * @member {String} ProductCode
 */

ConfirmProductInstanceRequest.prototype['ProductCode'] = undefined;
var _default = ConfirmProductInstanceRequest;
exports["default"] = _default;