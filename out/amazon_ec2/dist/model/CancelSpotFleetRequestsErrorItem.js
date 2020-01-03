"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CancelSpotFleetRequestsError = _interopRequireDefault(require("./CancelSpotFleetRequestsError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CancelSpotFleetRequestsErrorItem model module.
 * @module model/CancelSpotFleetRequestsErrorItem
 * @version 1.0.0
 */
var CancelSpotFleetRequestsErrorItem =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CancelSpotFleetRequestsErrorItem</code>.
   * Describes a Spot Fleet request that was not successfully canceled.
   * @alias module:model/CancelSpotFleetRequestsErrorItem
   */
  function CancelSpotFleetRequestsErrorItem() {
    _classCallCheck(this, CancelSpotFleetRequestsErrorItem);

    CancelSpotFleetRequestsErrorItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CancelSpotFleetRequestsErrorItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CancelSpotFleetRequestsErrorItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CancelSpotFleetRequestsErrorItem} obj Optional instance to populate.
     * @return {module:model/CancelSpotFleetRequestsErrorItem} The populated <code>CancelSpotFleetRequestsErrorItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CancelSpotFleetRequestsErrorItem();

        if (data.hasOwnProperty('Error')) {
          obj['Error'] = _CancelSpotFleetRequestsError["default"].constructFromObject(data['Error']);
        }

        if (data.hasOwnProperty('SpotFleetRequestId')) {
          obj['SpotFleetRequestId'] = _ApiClient["default"].convertToType(data['SpotFleetRequestId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CancelSpotFleetRequestsErrorItem;
}();
/**
 * @member {module:model/CancelSpotFleetRequestsError} Error
 */


CancelSpotFleetRequestsErrorItem.prototype['Error'] = undefined;
/**
 * @member {String} SpotFleetRequestId
 */

CancelSpotFleetRequestsErrorItem.prototype['SpotFleetRequestId'] = undefined;
var _default = CancelSpotFleetRequestsErrorItem;
exports["default"] = _default;