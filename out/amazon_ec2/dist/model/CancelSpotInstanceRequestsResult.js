"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CancelledSpotInstanceRequest = _interopRequireDefault(require("./CancelledSpotInstanceRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CancelSpotInstanceRequestsResult model module.
 * @module model/CancelSpotInstanceRequestsResult
 * @version 1.0.0
 */
var CancelSpotInstanceRequestsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CancelSpotInstanceRequestsResult</code>.
   * Contains the output of CancelSpotInstanceRequests.
   * @alias module:model/CancelSpotInstanceRequestsResult
   */
  function CancelSpotInstanceRequestsResult() {
    _classCallCheck(this, CancelSpotInstanceRequestsResult);

    CancelSpotInstanceRequestsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CancelSpotInstanceRequestsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CancelSpotInstanceRequestsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CancelSpotInstanceRequestsResult} obj Optional instance to populate.
     * @return {module:model/CancelSpotInstanceRequestsResult} The populated <code>CancelSpotInstanceRequestsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CancelSpotInstanceRequestsResult();

        if (data.hasOwnProperty('CancelledSpotInstanceRequests')) {
          obj['CancelledSpotInstanceRequests'] = _ApiClient["default"].convertToType(data['CancelledSpotInstanceRequests'], [_CancelledSpotInstanceRequest["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CancelSpotInstanceRequestsResult;
}();
/**
 * @member {Array.<module:model/CancelledSpotInstanceRequest>} CancelledSpotInstanceRequests
 */


CancelSpotInstanceRequestsResult.prototype['CancelledSpotInstanceRequests'] = undefined;
var _default = CancelSpotInstanceRequestsResult;
exports["default"] = _default;