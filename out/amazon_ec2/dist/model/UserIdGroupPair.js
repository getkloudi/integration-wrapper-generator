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
 * The UserIdGroupPair model module.
 * @module model/UserIdGroupPair
 * @version 1.1.0
 */
var UserIdGroupPair =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>UserIdGroupPair</code>.
   * Describes a security group and AWS account ID pair.
   * @alias module:model/UserIdGroupPair
   */
  function UserIdGroupPair() {
    _classCallCheck(this, UserIdGroupPair);

    UserIdGroupPair.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserIdGroupPair, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserIdGroupPair</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserIdGroupPair} obj Optional instance to populate.
     * @return {module:model/UserIdGroupPair} The populated <code>UserIdGroupPair</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserIdGroupPair();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('GroupId')) {
          obj['GroupId'] = _ApiClient["default"].convertToType(data['GroupId'], 'String');
        }

        if (data.hasOwnProperty('GroupName')) {
          obj['GroupName'] = _ApiClient["default"].convertToType(data['GroupName'], 'String');
        }

        if (data.hasOwnProperty('PeeringStatus')) {
          obj['PeeringStatus'] = _ApiClient["default"].convertToType(data['PeeringStatus'], 'String');
        }

        if (data.hasOwnProperty('UserId')) {
          obj['UserId'] = _ApiClient["default"].convertToType(data['UserId'], 'String');
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }

        if (data.hasOwnProperty('VpcPeeringConnectionId')) {
          obj['VpcPeeringConnectionId'] = _ApiClient["default"].convertToType(data['VpcPeeringConnectionId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserIdGroupPair;
}();
/**
 * @member {String} Description
 */


UserIdGroupPair.prototype['Description'] = undefined;
/**
 * @member {String} GroupId
 */

UserIdGroupPair.prototype['GroupId'] = undefined;
/**
 * @member {String} GroupName
 */

UserIdGroupPair.prototype['GroupName'] = undefined;
/**
 * @member {String} PeeringStatus
 */

UserIdGroupPair.prototype['PeeringStatus'] = undefined;
/**
 * @member {String} UserId
 */

UserIdGroupPair.prototype['UserId'] = undefined;
/**
 * @member {String} VpcId
 */

UserIdGroupPair.prototype['VpcId'] = undefined;
/**
 * @member {String} VpcPeeringConnectionId
 */

UserIdGroupPair.prototype['VpcPeeringConnectionId'] = undefined;
var _default = UserIdGroupPair;
exports["default"] = _default;