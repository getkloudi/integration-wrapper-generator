"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CancelSpotFleetRequestsErrorItem = _interopRequireDefault(require("./CancelSpotFleetRequestsErrorItem"));

var _CancelSpotFleetRequestsSuccessItem = _interopRequireDefault(require("./CancelSpotFleetRequestsSuccessItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CancelSpotFleetRequestsResponse model module.
 * @module model/CancelSpotFleetRequestsResponse
 * @version 1.0.0
 */
var CancelSpotFleetRequestsResponse =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CancelSpotFleetRequestsResponse</code>.
   * Contains the output of CancelSpotFleetRequests.
   * @alias module:model/CancelSpotFleetRequestsResponse
   */
  function CancelSpotFleetRequestsResponse() {
    _classCallCheck(this, CancelSpotFleetRequestsResponse);

    CancelSpotFleetRequestsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CancelSpotFleetRequestsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CancelSpotFleetRequestsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CancelSpotFleetRequestsResponse} obj Optional instance to populate.
     * @return {module:model/CancelSpotFleetRequestsResponse} The populated <code>CancelSpotFleetRequestsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CancelSpotFleetRequestsResponse();

        if (data.hasOwnProperty('SuccessfulFleetRequests')) {
          obj['SuccessfulFleetRequests'] = _ApiClient["default"].convertToType(data['SuccessfulFleetRequests'], [_CancelSpotFleetRequestsSuccessItem["default"]]);
        }

        if (data.hasOwnProperty('UnsuccessfulFleetRequests')) {
          obj['UnsuccessfulFleetRequests'] = _ApiClient["default"].convertToType(data['UnsuccessfulFleetRequests'], [_CancelSpotFleetRequestsErrorItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CancelSpotFleetRequestsResponse;
}();
/**
 * @member {Array.<module:model/CancelSpotFleetRequestsSuccessItem>} SuccessfulFleetRequests
 */


CancelSpotFleetRequestsResponse.prototype['SuccessfulFleetRequests'] = undefined;
/**
 * @member {Array.<module:model/CancelSpotFleetRequestsErrorItem>} UnsuccessfulFleetRequests
 */

CancelSpotFleetRequestsResponse.prototype['UnsuccessfulFleetRequests'] = undefined;
var _default = CancelSpotFleetRequestsResponse;
exports["default"] = _default;