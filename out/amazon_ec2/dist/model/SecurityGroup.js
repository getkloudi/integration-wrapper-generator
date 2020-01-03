"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IpPermission = _interopRequireDefault(require("./IpPermission"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SecurityGroup model module.
 * @module model/SecurityGroup
 * @version 1.0.0
 */
var SecurityGroup =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SecurityGroup</code>.
   * Describes a security group
   * @alias module:model/SecurityGroup
   */
  function SecurityGroup() {
    _classCallCheck(this, SecurityGroup);

    SecurityGroup.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SecurityGroup, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SecurityGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecurityGroup} obj Optional instance to populate.
     * @return {module:model/SecurityGroup} The populated <code>SecurityGroup</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SecurityGroup();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('GroupId')) {
          obj['GroupId'] = _ApiClient["default"].convertToType(data['GroupId'], 'String');
        }

        if (data.hasOwnProperty('GroupName')) {
          obj['GroupName'] = _ApiClient["default"].convertToType(data['GroupName'], 'String');
        }

        if (data.hasOwnProperty('IpPermissions')) {
          obj['IpPermissions'] = _ApiClient["default"].convertToType(data['IpPermissions'], [_IpPermission["default"]]);
        }

        if (data.hasOwnProperty('IpPermissionsEgress')) {
          obj['IpPermissionsEgress'] = _ApiClient["default"].convertToType(data['IpPermissionsEgress'], [_IpPermission["default"]]);
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SecurityGroup;
}();
/**
 * @member {String} Description
 */


SecurityGroup.prototype['Description'] = undefined;
/**
 * @member {String} GroupId
 */

SecurityGroup.prototype['GroupId'] = undefined;
/**
 * @member {String} GroupName
 */

SecurityGroup.prototype['GroupName'] = undefined;
/**
 * @member {Array.<module:model/IpPermission>} IpPermissions
 */

SecurityGroup.prototype['IpPermissions'] = undefined;
/**
 * @member {Array.<module:model/IpPermission>} IpPermissionsEgress
 */

SecurityGroup.prototype['IpPermissionsEgress'] = undefined;
/**
 * @member {String} OwnerId
 */

SecurityGroup.prototype['OwnerId'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

SecurityGroup.prototype['Tags'] = undefined;
/**
 * @member {String} VpcId
 */

SecurityGroup.prototype['VpcId'] = undefined;
var _default = SecurityGroup;
exports["default"] = _default;