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
 * The SecurityGroupReference model module.
 * @module model/SecurityGroupReference
 * @version 1.1.0
 */
var SecurityGroupReference =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SecurityGroupReference</code>.
   * Describes a VPC with a security group that references your security group.
   * @alias module:model/SecurityGroupReference
   */
  function SecurityGroupReference() {
    _classCallCheck(this, SecurityGroupReference);

    SecurityGroupReference.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SecurityGroupReference, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SecurityGroupReference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecurityGroupReference} obj Optional instance to populate.
     * @return {module:model/SecurityGroupReference} The populated <code>SecurityGroupReference</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SecurityGroupReference();

        if (data.hasOwnProperty('GroupId')) {
          obj['GroupId'] = _ApiClient["default"].convertToType(data['GroupId'], 'String');
        }

        if (data.hasOwnProperty('ReferencingVpcId')) {
          obj['ReferencingVpcId'] = _ApiClient["default"].convertToType(data['ReferencingVpcId'], 'String');
        }

        if (data.hasOwnProperty('VpcPeeringConnectionId')) {
          obj['VpcPeeringConnectionId'] = _ApiClient["default"].convertToType(data['VpcPeeringConnectionId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SecurityGroupReference;
}();
/**
 * @member {String} GroupId
 */


SecurityGroupReference.prototype['GroupId'] = undefined;
/**
 * @member {String} ReferencingVpcId
 */

SecurityGroupReference.prototype['ReferencingVpcId'] = undefined;
/**
 * @member {String} VpcPeeringConnectionId
 */

SecurityGroupReference.prototype['VpcPeeringConnectionId'] = undefined;
var _default = SecurityGroupReference;
exports["default"] = _default;