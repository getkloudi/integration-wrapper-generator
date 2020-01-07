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
 * The ReleaseAddressRequest model module.
 * @module model/ReleaseAddressRequest
 * @version 1.1.0
 */
var ReleaseAddressRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ReleaseAddressRequest</code>.
   * @alias module:model/ReleaseAddressRequest
   */
  function ReleaseAddressRequest() {
    _classCallCheck(this, ReleaseAddressRequest);

    ReleaseAddressRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReleaseAddressRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReleaseAddressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReleaseAddressRequest} obj Optional instance to populate.
     * @return {module:model/ReleaseAddressRequest} The populated <code>ReleaseAddressRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReleaseAddressRequest();

        if (data.hasOwnProperty('AllocationId')) {
          obj['AllocationId'] = _ApiClient["default"].convertToType(data['AllocationId'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('NetworkBorderGroup')) {
          obj['NetworkBorderGroup'] = _ApiClient["default"].convertToType(data['NetworkBorderGroup'], 'String');
        }

        if (data.hasOwnProperty('PublicIp')) {
          obj['PublicIp'] = _ApiClient["default"].convertToType(data['PublicIp'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ReleaseAddressRequest;
}();
/**
 * @member {String} AllocationId
 */


ReleaseAddressRequest.prototype['AllocationId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ReleaseAddressRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} NetworkBorderGroup
 */

ReleaseAddressRequest.prototype['NetworkBorderGroup'] = undefined;
/**
 * @member {String} PublicIp
 */

ReleaseAddressRequest.prototype['PublicIp'] = undefined;
var _default = ReleaseAddressRequest;
exports["default"] = _default;