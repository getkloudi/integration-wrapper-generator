"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CancelSpotInstanceRequestState = _interopRequireDefault(require("./CancelSpotInstanceRequestState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CancelledSpotInstanceRequest model module.
 * @module model/CancelledSpotInstanceRequest
 * @version 1.0.0
 */
var CancelledSpotInstanceRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CancelledSpotInstanceRequest</code>.
   * Describes a request to cancel a Spot Instance.
   * @alias module:model/CancelledSpotInstanceRequest
   */
  function CancelledSpotInstanceRequest() {
    _classCallCheck(this, CancelledSpotInstanceRequest);

    CancelledSpotInstanceRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CancelledSpotInstanceRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CancelledSpotInstanceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CancelledSpotInstanceRequest} obj Optional instance to populate.
     * @return {module:model/CancelledSpotInstanceRequest} The populated <code>CancelledSpotInstanceRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CancelledSpotInstanceRequest();

        if (data.hasOwnProperty('SpotInstanceRequestId')) {
          obj['SpotInstanceRequestId'] = _ApiClient["default"].convertToType(data['SpotInstanceRequestId'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _CancelSpotInstanceRequestState["default"].constructFromObject(data['State']);
        }
      }

      return obj;
    }
  }]);

  return CancelledSpotInstanceRequest;
}();
/**
 * @member {String} SpotInstanceRequestId
 */


CancelledSpotInstanceRequest.prototype['SpotInstanceRequestId'] = undefined;
/**
 * @member {module:model/CancelSpotInstanceRequestState} State
 */

CancelledSpotInstanceRequest.prototype['State'] = undefined;
var _default = CancelledSpotInstanceRequest;
exports["default"] = _default;