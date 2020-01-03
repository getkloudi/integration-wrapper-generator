"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CapacityReservationInstancePlatform = _interopRequireDefault(require("./CapacityReservationInstancePlatform"));

var _CapacityReservationState = _interopRequireDefault(require("./CapacityReservationState"));

var _CapacityReservationTenancy = _interopRequireDefault(require("./CapacityReservationTenancy"));

var _EndDateType = _interopRequireDefault(require("./EndDateType"));

var _InstanceMatchCriteria = _interopRequireDefault(require("./InstanceMatchCriteria"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CapacityReservation model module.
 * @module model/CapacityReservation
 * @version 1.0.0
 */
var CapacityReservation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CapacityReservation</code>.
   * Describes a Capacity Reservation.
   * @alias module:model/CapacityReservation
   */
  function CapacityReservation() {
    _classCallCheck(this, CapacityReservation);

    CapacityReservation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CapacityReservation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CapacityReservation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CapacityReservation} obj Optional instance to populate.
     * @return {module:model/CapacityReservation} The populated <code>CapacityReservation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CapacityReservation();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('AvailabilityZoneId')) {
          obj['AvailabilityZoneId'] = _ApiClient["default"].convertToType(data['AvailabilityZoneId'], 'String');
        }

        if (data.hasOwnProperty('AvailableInstanceCount')) {
          obj['AvailableInstanceCount'] = _ApiClient["default"].convertToType(data['AvailableInstanceCount'], 'Number');
        }

        if (data.hasOwnProperty('CapacityReservationArn')) {
          obj['CapacityReservationArn'] = _ApiClient["default"].convertToType(data['CapacityReservationArn'], 'String');
        }

        if (data.hasOwnProperty('CapacityReservationId')) {
          obj['CapacityReservationId'] = _ApiClient["default"].convertToType(data['CapacityReservationId'], 'String');
        }

        if (data.hasOwnProperty('CreateDate')) {
          obj['CreateDate'] = _ApiClient["default"].convertToType(data['CreateDate'], 'Date');
        }

        if (data.hasOwnProperty('EbsOptimized')) {
          obj['EbsOptimized'] = _ApiClient["default"].convertToType(data['EbsOptimized'], 'Boolean');
        }

        if (data.hasOwnProperty('EndDate')) {
          obj['EndDate'] = _ApiClient["default"].convertToType(data['EndDate'], 'Date');
        }

        if (data.hasOwnProperty('EndDateType')) {
          obj['EndDateType'] = _EndDateType["default"].constructFromObject(data['EndDateType']);
        }

        if (data.hasOwnProperty('EphemeralStorage')) {
          obj['EphemeralStorage'] = _ApiClient["default"].convertToType(data['EphemeralStorage'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceMatchCriteria')) {
          obj['InstanceMatchCriteria'] = _InstanceMatchCriteria["default"].constructFromObject(data['InstanceMatchCriteria']);
        }

        if (data.hasOwnProperty('InstancePlatform')) {
          obj['InstancePlatform'] = _CapacityReservationInstancePlatform["default"].constructFromObject(data['InstancePlatform']);
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _ApiClient["default"].convertToType(data['InstanceType'], 'String');
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _CapacityReservationState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('Tenancy')) {
          obj['Tenancy'] = _CapacityReservationTenancy["default"].constructFromObject(data['Tenancy']);
        }

        if (data.hasOwnProperty('TotalInstanceCount')) {
          obj['TotalInstanceCount'] = _ApiClient["default"].convertToType(data['TotalInstanceCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CapacityReservation;
}();
/**
 * @member {String} AvailabilityZone
 */


CapacityReservation.prototype['AvailabilityZone'] = undefined;
/**
 * @member {String} AvailabilityZoneId
 */

CapacityReservation.prototype['AvailabilityZoneId'] = undefined;
/**
 * @member {Number} AvailableInstanceCount
 */

CapacityReservation.prototype['AvailableInstanceCount'] = undefined;
/**
 * @member {String} CapacityReservationArn
 */

CapacityReservation.prototype['CapacityReservationArn'] = undefined;
/**
 * @member {String} CapacityReservationId
 */

CapacityReservation.prototype['CapacityReservationId'] = undefined;
/**
 * @member {Date} CreateDate
 */

CapacityReservation.prototype['CreateDate'] = undefined;
/**
 * @member {Boolean} EbsOptimized
 */

CapacityReservation.prototype['EbsOptimized'] = undefined;
/**
 * @member {Date} EndDate
 */

CapacityReservation.prototype['EndDate'] = undefined;
/**
 * @member {module:model/EndDateType} EndDateType
 */

CapacityReservation.prototype['EndDateType'] = undefined;
/**
 * @member {Boolean} EphemeralStorage
 */

CapacityReservation.prototype['EphemeralStorage'] = undefined;
/**
 * @member {module:model/InstanceMatchCriteria} InstanceMatchCriteria
 */

CapacityReservation.prototype['InstanceMatchCriteria'] = undefined;
/**
 * @member {module:model/CapacityReservationInstancePlatform} InstancePlatform
 */

CapacityReservation.prototype['InstancePlatform'] = undefined;
/**
 * @member {String} InstanceType
 */

CapacityReservation.prototype['InstanceType'] = undefined;
/**
 * @member {String} OwnerId
 */

CapacityReservation.prototype['OwnerId'] = undefined;
/**
 * @member {module:model/CapacityReservationState} State
 */

CapacityReservation.prototype['State'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

CapacityReservation.prototype['Tags'] = undefined;
/**
 * @member {module:model/CapacityReservationTenancy} Tenancy
 */

CapacityReservation.prototype['Tenancy'] = undefined;
/**
 * @member {Number} TotalInstanceCount
 */

CapacityReservation.prototype['TotalInstanceCount'] = undefined;
var _default = CapacityReservation;
exports["default"] = _default;