"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tenancy = _interopRequireDefault(require("./Tenancy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Placement model module.
 * @module model/Placement
 * @version 1.1.0
 */
var Placement =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Placement</code>.
   * Describes the placement of an instance.
   * @alias module:model/Placement
   */
  function Placement() {
    _classCallCheck(this, Placement);

    Placement.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Placement, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Placement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Placement} obj Optional instance to populate.
     * @return {module:model/Placement} The populated <code>Placement</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Placement();

        if (data.hasOwnProperty('Affinity')) {
          obj['Affinity'] = _ApiClient["default"].convertToType(data['Affinity'], 'String');
        }

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('GroupName')) {
          obj['GroupName'] = _ApiClient["default"].convertToType(data['GroupName'], 'String');
        }

        if (data.hasOwnProperty('HostId')) {
          obj['HostId'] = _ApiClient["default"].convertToType(data['HostId'], 'String');
        }

        if (data.hasOwnProperty('HostResourceGroupArn')) {
          obj['HostResourceGroupArn'] = _ApiClient["default"].convertToType(data['HostResourceGroupArn'], 'String');
        }

        if (data.hasOwnProperty('PartitionNumber')) {
          obj['PartitionNumber'] = _ApiClient["default"].convertToType(data['PartitionNumber'], 'Number');
        }

        if (data.hasOwnProperty('SpreadDomain')) {
          obj['SpreadDomain'] = _ApiClient["default"].convertToType(data['SpreadDomain'], 'String');
        }

        if (data.hasOwnProperty('Tenancy')) {
          obj['Tenancy'] = _Tenancy["default"].constructFromObject(data['Tenancy']);
        }
      }

      return obj;
    }
  }]);

  return Placement;
}();
/**
 * @member {String} Affinity
 */


Placement.prototype['Affinity'] = undefined;
/**
 * @member {String} AvailabilityZone
 */

Placement.prototype['AvailabilityZone'] = undefined;
/**
 * @member {String} GroupName
 */

Placement.prototype['GroupName'] = undefined;
/**
 * @member {String} HostId
 */

Placement.prototype['HostId'] = undefined;
/**
 * @member {String} HostResourceGroupArn
 */

Placement.prototype['HostResourceGroupArn'] = undefined;
/**
 * @member {Number} PartitionNumber
 */

Placement.prototype['PartitionNumber'] = undefined;
/**
 * @member {String} SpreadDomain
 */

Placement.prototype['SpreadDomain'] = undefined;
/**
 * @member {module:model/Tenancy} Tenancy
 */

Placement.prototype['Tenancy'] = undefined;
var _default = Placement;
exports["default"] = _default;