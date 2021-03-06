"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AutoPlacement = _interopRequireDefault(require("./AutoPlacement"));

var _HostRecovery = _interopRequireDefault(require("./HostRecovery"));

var _TagSpecification = _interopRequireDefault(require("./TagSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AllocateHostsRequest model module.
 * @module model/AllocateHostsRequest
 * @version 1.1.0
 */
var AllocateHostsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AllocateHostsRequest</code>.
   * @alias module:model/AllocateHostsRequest
   * @param availabilityZone {String} 
   * @param quantity {Number} 
   */
  function AllocateHostsRequest(availabilityZone, quantity) {
    _classCallCheck(this, AllocateHostsRequest);

    AllocateHostsRequest.initialize(this, availabilityZone, quantity);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AllocateHostsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, availabilityZone, quantity) {
      obj['AvailabilityZone'] = availabilityZone;
      obj['Quantity'] = quantity;
    }
    /**
     * Constructs a <code>AllocateHostsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AllocateHostsRequest} obj Optional instance to populate.
     * @return {module:model/AllocateHostsRequest} The populated <code>AllocateHostsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AllocateHostsRequest();

        if (data.hasOwnProperty('AutoPlacement')) {
          obj['AutoPlacement'] = _AutoPlacement["default"].constructFromObject(data['AutoPlacement']);
        }

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('HostRecovery')) {
          obj['HostRecovery'] = _HostRecovery["default"].constructFromObject(data['HostRecovery']);
        }

        if (data.hasOwnProperty('InstanceFamily')) {
          obj['InstanceFamily'] = _ApiClient["default"].convertToType(data['InstanceFamily'], 'String');
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _ApiClient["default"].convertToType(data['InstanceType'], 'String');
        }

        if (data.hasOwnProperty('Quantity')) {
          obj['Quantity'] = _ApiClient["default"].convertToType(data['Quantity'], 'Number');
        }

        if (data.hasOwnProperty('TagSpecifications')) {
          obj['TagSpecifications'] = _ApiClient["default"].convertToType(data['TagSpecifications'], [_TagSpecification["default"]]);
        }
      }

      return obj;
    }
  }]);

  return AllocateHostsRequest;
}();
/**
 * @member {module:model/AutoPlacement} AutoPlacement
 */


AllocateHostsRequest.prototype['AutoPlacement'] = undefined;
/**
 * @member {String} AvailabilityZone
 */

AllocateHostsRequest.prototype['AvailabilityZone'] = undefined;
/**
 * @member {String} ClientToken
 */

AllocateHostsRequest.prototype['ClientToken'] = undefined;
/**
 * @member {module:model/HostRecovery} HostRecovery
 */

AllocateHostsRequest.prototype['HostRecovery'] = undefined;
/**
 * @member {String} InstanceFamily
 */

AllocateHostsRequest.prototype['InstanceFamily'] = undefined;
/**
 * @member {String} InstanceType
 */

AllocateHostsRequest.prototype['InstanceType'] = undefined;
/**
 * @member {Number} Quantity
 */

AllocateHostsRequest.prototype['Quantity'] = undefined;
/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */

AllocateHostsRequest.prototype['TagSpecifications'] = undefined;
var _default = AllocateHostsRequest;
exports["default"] = _default;