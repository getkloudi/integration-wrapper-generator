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
 * The ScheduledInstancesPlacement model module.
 * @module model/ScheduledInstancesPlacement
 * @version 1.0.0
 */
var ScheduledInstancesPlacement =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ScheduledInstancesPlacement</code>.
   * Describes the placement for a Scheduled Instance.
   * @alias module:model/ScheduledInstancesPlacement
   */
  function ScheduledInstancesPlacement() {
    _classCallCheck(this, ScheduledInstancesPlacement);

    ScheduledInstancesPlacement.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScheduledInstancesPlacement, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScheduledInstancesPlacement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduledInstancesPlacement} obj Optional instance to populate.
     * @return {module:model/ScheduledInstancesPlacement} The populated <code>ScheduledInstancesPlacement</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScheduledInstancesPlacement();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('GroupName')) {
          obj['GroupName'] = _ApiClient["default"].convertToType(data['GroupName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScheduledInstancesPlacement;
}();
/**
 * @member {String} AvailabilityZone
 */


ScheduledInstancesPlacement.prototype['AvailabilityZone'] = undefined;
/**
 * @member {String} GroupName
 */

ScheduledInstancesPlacement.prototype['GroupName'] = undefined;
var _default = ScheduledInstancesPlacement;
exports["default"] = _default;