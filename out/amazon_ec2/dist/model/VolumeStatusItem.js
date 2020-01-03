"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VolumeStatusAction = _interopRequireDefault(require("./VolumeStatusAction"));

var _VolumeStatusEvent = _interopRequireDefault(require("./VolumeStatusEvent"));

var _VolumeStatusInfo = _interopRequireDefault(require("./VolumeStatusInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VolumeStatusItem model module.
 * @module model/VolumeStatusItem
 * @version 1.0.0
 */
var VolumeStatusItem =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VolumeStatusItem</code>.
   * Describes the volume status.
   * @alias module:model/VolumeStatusItem
   */
  function VolumeStatusItem() {
    _classCallCheck(this, VolumeStatusItem);

    VolumeStatusItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VolumeStatusItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VolumeStatusItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VolumeStatusItem} obj Optional instance to populate.
     * @return {module:model/VolumeStatusItem} The populated <code>VolumeStatusItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VolumeStatusItem();

        if (data.hasOwnProperty('Actions')) {
          obj['Actions'] = _ApiClient["default"].convertToType(data['Actions'], [_VolumeStatusAction["default"]]);
        }

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('Events')) {
          obj['Events'] = _ApiClient["default"].convertToType(data['Events'], [_VolumeStatusEvent["default"]]);
        }

        if (data.hasOwnProperty('OutpostArn')) {
          obj['OutpostArn'] = _ApiClient["default"].convertToType(data['OutpostArn'], 'String');
        }

        if (data.hasOwnProperty('VolumeId')) {
          obj['VolumeId'] = _ApiClient["default"].convertToType(data['VolumeId'], 'String');
        }

        if (data.hasOwnProperty('VolumeStatus')) {
          obj['VolumeStatus'] = _VolumeStatusInfo["default"].constructFromObject(data['VolumeStatus']);
        }
      }

      return obj;
    }
  }]);

  return VolumeStatusItem;
}();
/**
 * @member {Array.<module:model/VolumeStatusAction>} Actions
 */


VolumeStatusItem.prototype['Actions'] = undefined;
/**
 * @member {String} AvailabilityZone
 */

VolumeStatusItem.prototype['AvailabilityZone'] = undefined;
/**
 * @member {Array.<module:model/VolumeStatusEvent>} Events
 */

VolumeStatusItem.prototype['Events'] = undefined;
/**
 * @member {String} OutpostArn
 */

VolumeStatusItem.prototype['OutpostArn'] = undefined;
/**
 * @member {String} VolumeId
 */

VolumeStatusItem.prototype['VolumeId'] = undefined;
/**
 * @member {module:model/VolumeStatusInfo} VolumeStatus
 */

VolumeStatusItem.prototype['VolumeStatus'] = undefined;
var _default = VolumeStatusItem;
exports["default"] = _default;