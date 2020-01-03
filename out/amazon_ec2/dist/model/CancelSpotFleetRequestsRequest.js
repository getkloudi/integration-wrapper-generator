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
 * The CancelSpotFleetRequestsRequest model module.
 * @module model/CancelSpotFleetRequestsRequest
 * @version 1.0.0
 */
var CancelSpotFleetRequestsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CancelSpotFleetRequestsRequest</code>.
   * Contains the parameters for CancelSpotFleetRequests.
   * @alias module:model/CancelSpotFleetRequestsRequest
   * @param spotFleetRequestIds {Array.<String>} 
   * @param terminateInstances {Boolean} 
   */
  function CancelSpotFleetRequestsRequest(spotFleetRequestIds, terminateInstances) {
    _classCallCheck(this, CancelSpotFleetRequestsRequest);

    CancelSpotFleetRequestsRequest.initialize(this, spotFleetRequestIds, terminateInstances);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CancelSpotFleetRequestsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, spotFleetRequestIds, terminateInstances) {
      obj['SpotFleetRequestIds'] = spotFleetRequestIds;
      obj['TerminateInstances'] = terminateInstances;
    }
    /**
     * Constructs a <code>CancelSpotFleetRequestsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CancelSpotFleetRequestsRequest} obj Optional instance to populate.
     * @return {module:model/CancelSpotFleetRequestsRequest} The populated <code>CancelSpotFleetRequestsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CancelSpotFleetRequestsRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('SpotFleetRequestIds')) {
          obj['SpotFleetRequestIds'] = _ApiClient["default"].convertToType(data['SpotFleetRequestIds'], ['String']);
        }

        if (data.hasOwnProperty('TerminateInstances')) {
          obj['TerminateInstances'] = _ApiClient["default"].convertToType(data['TerminateInstances'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CancelSpotFleetRequestsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


CancelSpotFleetRequestsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} SpotFleetRequestIds
 */

CancelSpotFleetRequestsRequest.prototype['SpotFleetRequestIds'] = undefined;
/**
 * @member {Boolean} TerminateInstances
 */

CancelSpotFleetRequestsRequest.prototype['TerminateInstances'] = undefined;
var _default = CancelSpotFleetRequestsRequest;
exports["default"] = _default;