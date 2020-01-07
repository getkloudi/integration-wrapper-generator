"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CapacityReservationInstancePlatform = _interopRequireDefault(require("./CapacityReservationInstancePlatform"));

var _CapacityReservationTenancy = _interopRequireDefault(require("./CapacityReservationTenancy"));

var _EndDateType = _interopRequireDefault(require("./EndDateType"));

var _InstanceMatchCriteria = _interopRequireDefault(require("./InstanceMatchCriteria"));

var _TagSpecification = _interopRequireDefault(require("./TagSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateCapacityReservationRequest model module.
 * @module model/CreateCapacityReservationRequest
 * @version 1.1.0
 */
var CreateCapacityReservationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateCapacityReservationRequest</code>.
   * @alias module:model/CreateCapacityReservationRequest
   * @param instanceCount {Number} 
   * @param instancePlatform {module:model/CapacityReservationInstancePlatform} 
   * @param instanceType {String} 
   */
  function CreateCapacityReservationRequest(instanceCount, instancePlatform, instanceType) {
    _classCallCheck(this, CreateCapacityReservationRequest);

    CreateCapacityReservationRequest.initialize(this, instanceCount, instancePlatform, instanceType);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateCapacityReservationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instanceCount, instancePlatform, instanceType) {
      obj['InstanceCount'] = instanceCount;
      obj['InstancePlatform'] = instancePlatform;
      obj['InstanceType'] = instanceType;
    }
    /**
     * Constructs a <code>CreateCapacityReservationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCapacityReservationRequest} obj Optional instance to populate.
     * @return {module:model/CreateCapacityReservationRequest} The populated <code>CreateCapacityReservationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateCapacityReservationRequest();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('AvailabilityZoneId')) {
          obj['AvailabilityZoneId'] = _ApiClient["default"].convertToType(data['AvailabilityZoneId'], 'String');
        }

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
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

        if (data.hasOwnProperty('InstanceCount')) {
          obj['InstanceCount'] = _ApiClient["default"].convertToType(data['InstanceCount'], 'Number');
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

        if (data.hasOwnProperty('TagSpecifications')) {
          obj['TagSpecifications'] = _ApiClient["default"].convertToType(data['TagSpecifications'], [_TagSpecification["default"]]);
        }

        if (data.hasOwnProperty('Tenancy')) {
          obj['Tenancy'] = _CapacityReservationTenancy["default"].constructFromObject(data['Tenancy']);
        }
      }

      return obj;
    }
  }]);

  return CreateCapacityReservationRequest;
}();
/**
 * @member {String} AvailabilityZone
 */


CreateCapacityReservationRequest.prototype['AvailabilityZone'] = undefined;
/**
 * @member {String} AvailabilityZoneId
 */

CreateCapacityReservationRequest.prototype['AvailabilityZoneId'] = undefined;
/**
 * @member {String} ClientToken
 */

CreateCapacityReservationRequest.prototype['ClientToken'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateCapacityReservationRequest.prototype['DryRun'] = undefined;
/**
 * @member {Boolean} EbsOptimized
 */

CreateCapacityReservationRequest.prototype['EbsOptimized'] = undefined;
/**
 * @member {Date} EndDate
 */

CreateCapacityReservationRequest.prototype['EndDate'] = undefined;
/**
 * @member {module:model/EndDateType} EndDateType
 */

CreateCapacityReservationRequest.prototype['EndDateType'] = undefined;
/**
 * @member {Boolean} EphemeralStorage
 */

CreateCapacityReservationRequest.prototype['EphemeralStorage'] = undefined;
/**
 * @member {Number} InstanceCount
 */

CreateCapacityReservationRequest.prototype['InstanceCount'] = undefined;
/**
 * @member {module:model/InstanceMatchCriteria} InstanceMatchCriteria
 */

CreateCapacityReservationRequest.prototype['InstanceMatchCriteria'] = undefined;
/**
 * @member {module:model/CapacityReservationInstancePlatform} InstancePlatform
 */

CreateCapacityReservationRequest.prototype['InstancePlatform'] = undefined;
/**
 * @member {String} InstanceType
 */

CreateCapacityReservationRequest.prototype['InstanceType'] = undefined;
/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */

CreateCapacityReservationRequest.prototype['TagSpecifications'] = undefined;
/**
 * @member {module:model/CapacityReservationTenancy} Tenancy
 */

CreateCapacityReservationRequest.prototype['Tenancy'] = undefined;
var _default = CreateCapacityReservationRequest;
exports["default"] = _default;