"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AvailabilityZoneMessage = _interopRequireDefault(require("./AvailabilityZoneMessage"));

var _AvailabilityZoneOptInStatus = _interopRequireDefault(require("./AvailabilityZoneOptInStatus"));

var _AvailabilityZoneState = _interopRequireDefault(require("./AvailabilityZoneState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AvailabilityZone model module.
 * @module model/AvailabilityZone
 * @version 1.1.0
 */
var AvailabilityZone =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AvailabilityZone</code>.
   * Describes an Availability Zone or Local Zone.
   * @alias module:model/AvailabilityZone
   */
  function AvailabilityZone() {
    _classCallCheck(this, AvailabilityZone);

    AvailabilityZone.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AvailabilityZone, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AvailabilityZone</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AvailabilityZone} obj Optional instance to populate.
     * @return {module:model/AvailabilityZone} The populated <code>AvailabilityZone</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AvailabilityZone();

        if (data.hasOwnProperty('GroupName')) {
          obj['GroupName'] = _ApiClient["default"].convertToType(data['GroupName'], 'String');
        }

        if (data.hasOwnProperty('Messages')) {
          obj['Messages'] = _ApiClient["default"].convertToType(data['Messages'], [_AvailabilityZoneMessage["default"]]);
        }

        if (data.hasOwnProperty('NetworkBorderGroup')) {
          obj['NetworkBorderGroup'] = _ApiClient["default"].convertToType(data['NetworkBorderGroup'], 'String');
        }

        if (data.hasOwnProperty('OptInStatus')) {
          obj['OptInStatus'] = _AvailabilityZoneOptInStatus["default"].constructFromObject(data['OptInStatus']);
        }

        if (data.hasOwnProperty('RegionName')) {
          obj['RegionName'] = _ApiClient["default"].convertToType(data['RegionName'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _AvailabilityZoneState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('ZoneId')) {
          obj['ZoneId'] = _ApiClient["default"].convertToType(data['ZoneId'], 'String');
        }

        if (data.hasOwnProperty('ZoneName')) {
          obj['ZoneName'] = _ApiClient["default"].convertToType(data['ZoneName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AvailabilityZone;
}();
/**
 * @member {String} GroupName
 */


AvailabilityZone.prototype['GroupName'] = undefined;
/**
 * @member {Array.<module:model/AvailabilityZoneMessage>} Messages
 */

AvailabilityZone.prototype['Messages'] = undefined;
/**
 * @member {String} NetworkBorderGroup
 */

AvailabilityZone.prototype['NetworkBorderGroup'] = undefined;
/**
 * @member {module:model/AvailabilityZoneOptInStatus} OptInStatus
 */

AvailabilityZone.prototype['OptInStatus'] = undefined;
/**
 * @member {String} RegionName
 */

AvailabilityZone.prototype['RegionName'] = undefined;
/**
 * @member {module:model/AvailabilityZoneState} State
 */

AvailabilityZone.prototype['State'] = undefined;
/**
 * @member {String} ZoneId
 */

AvailabilityZone.prototype['ZoneId'] = undefined;
/**
 * @member {String} ZoneName
 */

AvailabilityZone.prototype['ZoneName'] = undefined;
var _default = AvailabilityZone;
exports["default"] = _default;