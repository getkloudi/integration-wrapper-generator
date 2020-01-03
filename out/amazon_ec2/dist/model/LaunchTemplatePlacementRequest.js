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
 * The LaunchTemplatePlacementRequest model module.
 * @module model/LaunchTemplatePlacementRequest
 * @version 1.0.0
 */
var LaunchTemplatePlacementRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LaunchTemplatePlacementRequest</code>.
   * Describes the placement of an instance.
   * @alias module:model/LaunchTemplatePlacementRequest
   */
  function LaunchTemplatePlacementRequest() {
    _classCallCheck(this, LaunchTemplatePlacementRequest);

    LaunchTemplatePlacementRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LaunchTemplatePlacementRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LaunchTemplatePlacementRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplatePlacementRequest} obj Optional instance to populate.
     * @return {module:model/LaunchTemplatePlacementRequest} The populated <code>LaunchTemplatePlacementRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LaunchTemplatePlacementRequest();

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

  return LaunchTemplatePlacementRequest;
}();
/**
 * @member {String} Affinity
 */


LaunchTemplatePlacementRequest.prototype['Affinity'] = undefined;
/**
 * @member {String} AvailabilityZone
 */

LaunchTemplatePlacementRequest.prototype['AvailabilityZone'] = undefined;
/**
 * @member {String} GroupName
 */

LaunchTemplatePlacementRequest.prototype['GroupName'] = undefined;
/**
 * @member {String} HostId
 */

LaunchTemplatePlacementRequest.prototype['HostId'] = undefined;
/**
 * @member {String} HostResourceGroupArn
 */

LaunchTemplatePlacementRequest.prototype['HostResourceGroupArn'] = undefined;
/**
 * @member {String} SpreadDomain
 */

LaunchTemplatePlacementRequest.prototype['SpreadDomain'] = undefined;
/**
 * @member {module:model/Tenancy} Tenancy
 */

LaunchTemplatePlacementRequest.prototype['Tenancy'] = undefined;
var _default = LaunchTemplatePlacementRequest;
exports["default"] = _default;