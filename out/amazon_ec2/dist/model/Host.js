"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AllocationState = _interopRequireDefault(require("./AllocationState"));

var _AllowsMultipleInstanceTypes = _interopRequireDefault(require("./AllowsMultipleInstanceTypes"));

var _AutoPlacement = _interopRequireDefault(require("./AutoPlacement"));

var _AvailableCapacity = _interopRequireDefault(require("./AvailableCapacity"));

var _HostInstance = _interopRequireDefault(require("./HostInstance"));

var _HostProperties = _interopRequireDefault(require("./HostProperties"));

var _HostRecovery = _interopRequireDefault(require("./HostRecovery"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Host model module.
 * @module model/Host
 * @version 1.0.0
 */
var Host =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Host</code>.
   * Describes the properties of the Dedicated Host.
   * @alias module:model/Host
   */
  function Host() {
    _classCallCheck(this, Host);

    Host.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Host, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Host</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Host} obj Optional instance to populate.
     * @return {module:model/Host} The populated <code>Host</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Host();

        if (data.hasOwnProperty('AllocationTime')) {
          obj['AllocationTime'] = _ApiClient["default"].convertToType(data['AllocationTime'], 'Date');
        }

        if (data.hasOwnProperty('AllowsMultipleInstanceTypes')) {
          obj['AllowsMultipleInstanceTypes'] = _AllowsMultipleInstanceTypes["default"].constructFromObject(data['AllowsMultipleInstanceTypes']);
        }

        if (data.hasOwnProperty('AutoPlacement')) {
          obj['AutoPlacement'] = _AutoPlacement["default"].constructFromObject(data['AutoPlacement']);
        }

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('AvailabilityZoneId')) {
          obj['AvailabilityZoneId'] = _ApiClient["default"].convertToType(data['AvailabilityZoneId'], 'String');
        }

        if (data.hasOwnProperty('AvailableCapacity')) {
          obj['AvailableCapacity'] = _AvailableCapacity["default"].constructFromObject(data['AvailableCapacity']);
        }

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('HostId')) {
          obj['HostId'] = _ApiClient["default"].convertToType(data['HostId'], 'String');
        }

        if (data.hasOwnProperty('HostProperties')) {
          obj['HostProperties'] = _HostProperties["default"].constructFromObject(data['HostProperties']);
        }

        if (data.hasOwnProperty('HostRecovery')) {
          obj['HostRecovery'] = _HostRecovery["default"].constructFromObject(data['HostRecovery']);
        }

        if (data.hasOwnProperty('HostReservationId')) {
          obj['HostReservationId'] = _ApiClient["default"].convertToType(data['HostReservationId'], 'String');
        }

        if (data.hasOwnProperty('Instances')) {
          obj['Instances'] = _ApiClient["default"].convertToType(data['Instances'], [_HostInstance["default"]]);
        }

        if (data.hasOwnProperty('MemberOfServiceLinkedResourceGroup')) {
          obj['MemberOfServiceLinkedResourceGroup'] = _ApiClient["default"].convertToType(data['MemberOfServiceLinkedResourceGroup'], 'Boolean');
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('ReleaseTime')) {
          obj['ReleaseTime'] = _ApiClient["default"].convertToType(data['ReleaseTime'], 'Date');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _AllocationState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Host;
}();
/**
 * @member {Date} AllocationTime
 */


Host.prototype['AllocationTime'] = undefined;
/**
 * @member {module:model/AllowsMultipleInstanceTypes} AllowsMultipleInstanceTypes
 */

Host.prototype['AllowsMultipleInstanceTypes'] = undefined;
/**
 * @member {module:model/AutoPlacement} AutoPlacement
 */

Host.prototype['AutoPlacement'] = undefined;
/**
 * @member {String} AvailabilityZone
 */

Host.prototype['AvailabilityZone'] = undefined;
/**
 * @member {String} AvailabilityZoneId
 */

Host.prototype['AvailabilityZoneId'] = undefined;
/**
 * @member {module:model/AvailableCapacity} AvailableCapacity
 */

Host.prototype['AvailableCapacity'] = undefined;
/**
 * @member {String} ClientToken
 */

Host.prototype['ClientToken'] = undefined;
/**
 * @member {String} HostId
 */

Host.prototype['HostId'] = undefined;
/**
 * @member {module:model/HostProperties} HostProperties
 */

Host.prototype['HostProperties'] = undefined;
/**
 * @member {module:model/HostRecovery} HostRecovery
 */

Host.prototype['HostRecovery'] = undefined;
/**
 * @member {String} HostReservationId
 */

Host.prototype['HostReservationId'] = undefined;
/**
 * @member {Array.<module:model/HostInstance>} Instances
 */

Host.prototype['Instances'] = undefined;
/**
 * @member {Boolean} MemberOfServiceLinkedResourceGroup
 */

Host.prototype['MemberOfServiceLinkedResourceGroup'] = undefined;
/**
 * @member {String} OwnerId
 */

Host.prototype['OwnerId'] = undefined;
/**
 * @member {Date} ReleaseTime
 */

Host.prototype['ReleaseTime'] = undefined;
/**
 * @member {module:model/AllocationState} State
 */

Host.prototype['State'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

Host.prototype['Tags'] = undefined;
var _default = Host;
exports["default"] = _default;