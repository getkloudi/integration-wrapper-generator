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
 * The ScheduledInstancesEbs model module.
 * @module model/ScheduledInstancesEbs
 * @version 1.1.0
 */
var ScheduledInstancesEbs =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ScheduledInstancesEbs</code>.
   * Describes an EBS volume for a Scheduled Instance.
   * @alias module:model/ScheduledInstancesEbs
   */
  function ScheduledInstancesEbs() {
    _classCallCheck(this, ScheduledInstancesEbs);

    ScheduledInstancesEbs.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScheduledInstancesEbs, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScheduledInstancesEbs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduledInstancesEbs} obj Optional instance to populate.
     * @return {module:model/ScheduledInstancesEbs} The populated <code>ScheduledInstancesEbs</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScheduledInstancesEbs();

        if (data.hasOwnProperty('DeleteOnTermination')) {
          obj['DeleteOnTermination'] = _ApiClient["default"].convertToType(data['DeleteOnTermination'], 'Boolean');
        }

        if (data.hasOwnProperty('Encrypted')) {
          obj['Encrypted'] = _ApiClient["default"].convertToType(data['Encrypted'], 'Boolean');
        }

        if (data.hasOwnProperty('Iops')) {
          obj['Iops'] = _ApiClient["default"].convertToType(data['Iops'], 'Number');
        }

        if (data.hasOwnProperty('SnapshotId')) {
          obj['SnapshotId'] = _ApiClient["default"].convertToType(data['SnapshotId'], 'String');
        }

        if (data.hasOwnProperty('VolumeSize')) {
          obj['VolumeSize'] = _ApiClient["default"].convertToType(data['VolumeSize'], 'Number');
        }

        if (data.hasOwnProperty('VolumeType')) {
          obj['VolumeType'] = _ApiClient["default"].convertToType(data['VolumeType'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScheduledInstancesEbs;
}();
/**
 * @member {Boolean} DeleteOnTermination
 */


ScheduledInstancesEbs.prototype['DeleteOnTermination'] = undefined;
/**
 * @member {Boolean} Encrypted
 */

ScheduledInstancesEbs.prototype['Encrypted'] = undefined;
/**
 * @member {Number} Iops
 */

ScheduledInstancesEbs.prototype['Iops'] = undefined;
/**
 * @member {String} SnapshotId
 */

ScheduledInstancesEbs.prototype['SnapshotId'] = undefined;
/**
 * @member {Number} VolumeSize
 */

ScheduledInstancesEbs.prototype['VolumeSize'] = undefined;
/**
 * @member {String} VolumeType
 */

ScheduledInstancesEbs.prototype['VolumeType'] = undefined;
var _default = ScheduledInstancesEbs;
exports["default"] = _default;