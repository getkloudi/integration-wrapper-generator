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
 * The NetworkAclAssociation model module.
 * @module model/NetworkAclAssociation
 * @version 1.0.0
 */
var NetworkAclAssociation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>NetworkAclAssociation</code>.
   * Describes an association between a network ACL and a subnet.
   * @alias module:model/NetworkAclAssociation
   */
  function NetworkAclAssociation() {
    _classCallCheck(this, NetworkAclAssociation);

    NetworkAclAssociation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NetworkAclAssociation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NetworkAclAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkAclAssociation} obj Optional instance to populate.
     * @return {module:model/NetworkAclAssociation} The populated <code>NetworkAclAssociation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NetworkAclAssociation();

        if (data.hasOwnProperty('NetworkAclAssociationId')) {
          obj['NetworkAclAssociationId'] = _ApiClient["default"].convertToType(data['NetworkAclAssociationId'], 'String');
        }

        if (data.hasOwnProperty('NetworkAclId')) {
          obj['NetworkAclId'] = _ApiClient["default"].convertToType(data['NetworkAclId'], 'String');
        }

        if (data.hasOwnProperty('SubnetId')) {
          obj['SubnetId'] = _ApiClient["default"].convertToType(data['SubnetId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NetworkAclAssociation;
}();
/**
 * @member {String} NetworkAclAssociationId
 */


NetworkAclAssociation.prototype['NetworkAclAssociationId'] = undefined;
/**
 * @member {String} NetworkAclId
 */

NetworkAclAssociation.prototype['NetworkAclId'] = undefined;
/**
 * @member {String} SubnetId
 */

NetworkAclAssociation.prototype['SubnetId'] = undefined;
var _default = NetworkAclAssociation;
exports["default"] = _default;