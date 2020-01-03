"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BatchState = _interopRequireDefault(require("./BatchState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CancelSpotFleetRequestsSuccessItem model module.
 * @module model/CancelSpotFleetRequestsSuccessItem
 * @version 1.0.0
 */
var CancelSpotFleetRequestsSuccessItem =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CancelSpotFleetRequestsSuccessItem</code>.
   * Describes a Spot Fleet request that was successfully canceled.
   * @alias module:model/CancelSpotFleetRequestsSuccessItem
   */
  function CancelSpotFleetRequestsSuccessItem() {
    _classCallCheck(this, CancelSpotFleetRequestsSuccessItem);

    CancelSpotFleetRequestsSuccessItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CancelSpotFleetRequestsSuccessItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CancelSpotFleetRequestsSuccessItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CancelSpotFleetRequestsSuccessItem} obj Optional instance to populate.
     * @return {module:model/CancelSpotFleetRequestsSuccessItem} The populated <code>CancelSpotFleetRequestsSuccessItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CancelSpotFleetRequestsSuccessItem();

        if (data.hasOwnProperty('CurrentSpotFleetRequestState')) {
          obj['CurrentSpotFleetRequestState'] = _BatchState["default"].constructFromObject(data['CurrentSpotFleetRequestState']);
        }

        if (data.hasOwnProperty('PreviousSpotFleetRequestState')) {
          obj['PreviousSpotFleetRequestState'] = _BatchState["default"].constructFromObject(data['PreviousSpotFleetRequestState']);
        }

        if (data.hasOwnProperty('SpotFleetRequestId')) {
          obj['SpotFleetRequestId'] = _ApiClient["default"].convertToType(data['SpotFleetRequestId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CancelSpotFleetRequestsSuccessItem;
}();
/**
 * @member {module:model/BatchState} CurrentSpotFleetRequestState
 */


CancelSpotFleetRequestsSuccessItem.prototype['CurrentSpotFleetRequestState'] = undefined;
/**
 * @member {module:model/BatchState} PreviousSpotFleetRequestState
 */

CancelSpotFleetRequestsSuccessItem.prototype['PreviousSpotFleetRequestState'] = undefined;
/**
 * @member {String} SpotFleetRequestId
 */

CancelSpotFleetRequestsSuccessItem.prototype['SpotFleetRequestId'] = undefined;
var _default = CancelSpotFleetRequestsSuccessItem;
exports["default"] = _default;