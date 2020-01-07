"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NetworkAclAssociation = _interopRequireDefault(require("./NetworkAclAssociation"));

var _NetworkAclEntry = _interopRequireDefault(require("./NetworkAclEntry"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NetworkAcl model module.
 * @module model/NetworkAcl
 * @version 1.1.0
 */
var NetworkAcl =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>NetworkAcl</code>.
   * Describes a network ACL.
   * @alias module:model/NetworkAcl
   */
  function NetworkAcl() {
    _classCallCheck(this, NetworkAcl);

    NetworkAcl.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NetworkAcl, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NetworkAcl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkAcl} obj Optional instance to populate.
     * @return {module:model/NetworkAcl} The populated <code>NetworkAcl</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NetworkAcl();

        if (data.hasOwnProperty('Associations')) {
          obj['Associations'] = _ApiClient["default"].convertToType(data['Associations'], [_NetworkAclAssociation["default"]]);
        }

        if (data.hasOwnProperty('Entries')) {
          obj['Entries'] = _ApiClient["default"].convertToType(data['Entries'], [_NetworkAclEntry["default"]]);
        }

        if (data.hasOwnProperty('IsDefault')) {
          obj['IsDefault'] = _ApiClient["default"].convertToType(data['IsDefault'], 'Boolean');
        }

        if (data.hasOwnProperty('NetworkAclId')) {
          obj['NetworkAclId'] = _ApiClient["default"].convertToType(data['NetworkAclId'], 'String');
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

  return NetworkAcl;
}();
/**
 * @member {Array.<module:model/NetworkAclAssociation>} Associations
 */


NetworkAcl.prototype['Associations'] = undefined;
/**
 * @member {Array.<module:model/NetworkAclEntry>} Entries
 */

NetworkAcl.prototype['Entries'] = undefined;
/**
 * @member {Boolean} IsDefault
 */

NetworkAcl.prototype['IsDefault'] = undefined;
/**
 * @member {String} NetworkAclId
 */

NetworkAcl.prototype['NetworkAclId'] = undefined;
/**
 * @member {String} OwnerId
 */

NetworkAcl.prototype['OwnerId'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

NetworkAcl.prototype['Tags'] = undefined;
/**
 * @member {String} VpcId
 */

NetworkAcl.prototype['VpcId'] = undefined;
var _default = NetworkAcl;
exports["default"] = _default;