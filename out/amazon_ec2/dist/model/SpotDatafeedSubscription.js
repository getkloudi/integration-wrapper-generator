"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DatafeedSubscriptionState = _interopRequireDefault(require("./DatafeedSubscriptionState"));

var _SpotInstanceStateFault = _interopRequireDefault(require("./SpotInstanceStateFault"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SpotDatafeedSubscription model module.
 * @module model/SpotDatafeedSubscription
 * @version 1.0.0
 */
var SpotDatafeedSubscription =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SpotDatafeedSubscription</code>.
   * Describes the data feed for a Spot Instance.
   * @alias module:model/SpotDatafeedSubscription
   */
  function SpotDatafeedSubscription() {
    _classCallCheck(this, SpotDatafeedSubscription);

    SpotDatafeedSubscription.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SpotDatafeedSubscription, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SpotDatafeedSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpotDatafeedSubscription} obj Optional instance to populate.
     * @return {module:model/SpotDatafeedSubscription} The populated <code>SpotDatafeedSubscription</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpotDatafeedSubscription();

        if (data.hasOwnProperty('Bucket')) {
          obj['Bucket'] = _ApiClient["default"].convertToType(data['Bucket'], 'String');
        }

        if (data.hasOwnProperty('Fault')) {
          obj['Fault'] = _SpotInstanceStateFault["default"].constructFromObject(data['Fault']);
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('Prefix')) {
          obj['Prefix'] = _ApiClient["default"].convertToType(data['Prefix'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _DatafeedSubscriptionState["default"].constructFromObject(data['State']);
        }
      }

      return obj;
    }
  }]);

  return SpotDatafeedSubscription;
}();
/**
 * @member {String} Bucket
 */


SpotDatafeedSubscription.prototype['Bucket'] = undefined;
/**
 * @member {module:model/SpotInstanceStateFault} Fault
 */

SpotDatafeedSubscription.prototype['Fault'] = undefined;
/**
 * @member {String} OwnerId
 */

SpotDatafeedSubscription.prototype['OwnerId'] = undefined;
/**
 * @member {String} Prefix
 */

SpotDatafeedSubscription.prototype['Prefix'] = undefined;
/**
 * @member {module:model/DatafeedSubscriptionState} State
 */

SpotDatafeedSubscription.prototype['State'] = undefined;
var _default = SpotDatafeedSubscription;
exports["default"] = _default;