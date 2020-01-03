"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _StaleIpPermission = _interopRequireDefault(require("./StaleIpPermission"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The StaleSecurityGroup model module.
 * @module model/StaleSecurityGroup
 * @version 1.0.0
 */
var StaleSecurityGroup =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>StaleSecurityGroup</code>.
   * Describes a stale security group (a security group that contains stale rules).
   * @alias module:model/StaleSecurityGroup
   */
  function StaleSecurityGroup() {
    _classCallCheck(this, StaleSecurityGroup);

    StaleSecurityGroup.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StaleSecurityGroup, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StaleSecurityGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StaleSecurityGroup} obj Optional instance to populate.
     * @return {module:model/StaleSecurityGroup} The populated <code>StaleSecurityGroup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StaleSecurityGroup();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('GroupId')) {
          obj['GroupId'] = _ApiClient["default"].convertToType(data['GroupId'], 'String');
        }

        if (data.hasOwnProperty('GroupName')) {
          obj['GroupName'] = _ApiClient["default"].convertToType(data['GroupName'], 'String');
        }

        if (data.hasOwnProperty('StaleIpPermissions')) {
          obj['StaleIpPermissions'] = _ApiClient["default"].convertToType(data['StaleIpPermissions'], [_StaleIpPermission["default"]]);
        }

        if (data.hasOwnProperty('StaleIpPermissionsEgress')) {
          obj['StaleIpPermissionsEgress'] = _ApiClient["default"].convertToType(data['StaleIpPermissionsEgress'], [_StaleIpPermission["default"]]);
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return StaleSecurityGroup;
}();
/**
 * @member {String} Description
 */


StaleSecurityGroup.prototype['Description'] = undefined;
/**
 * @member {String} GroupId
 */

StaleSecurityGroup.prototype['GroupId'] = undefined;
/**
 * @member {String} GroupName
 */

StaleSecurityGroup.prototype['GroupName'] = undefined;
/**
 * @member {Array.<module:model/StaleIpPermission>} StaleIpPermissions
 */

StaleSecurityGroup.prototype['StaleIpPermissions'] = undefined;
/**
 * @member {Array.<module:model/StaleIpPermission>} StaleIpPermissionsEgress
 */

StaleSecurityGroup.prototype['StaleIpPermissionsEgress'] = undefined;
/**
 * @member {String} VpcId
 */

StaleSecurityGroup.prototype['VpcId'] = undefined;
var _default = StaleSecurityGroup;
exports["default"] = _default;