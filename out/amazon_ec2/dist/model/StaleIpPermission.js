"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserIdGroupPair = _interopRequireDefault(require("./UserIdGroupPair"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The StaleIpPermission model module.
 * @module model/StaleIpPermission
 * @version 1.0.0
 */
var StaleIpPermission =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>StaleIpPermission</code>.
   * Describes a stale rule in a security group.
   * @alias module:model/StaleIpPermission
   */
  function StaleIpPermission() {
    _classCallCheck(this, StaleIpPermission);

    StaleIpPermission.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StaleIpPermission, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StaleIpPermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StaleIpPermission} obj Optional instance to populate.
     * @return {module:model/StaleIpPermission} The populated <code>StaleIpPermission</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StaleIpPermission();

        if (data.hasOwnProperty('FromPort')) {
          obj['FromPort'] = _ApiClient["default"].convertToType(data['FromPort'], 'Number');
        }

        if (data.hasOwnProperty('IpProtocol')) {
          obj['IpProtocol'] = _ApiClient["default"].convertToType(data['IpProtocol'], 'String');
        }

        if (data.hasOwnProperty('IpRanges')) {
          obj['IpRanges'] = _ApiClient["default"].convertToType(data['IpRanges'], ['String']);
        }

        if (data.hasOwnProperty('PrefixListIds')) {
          obj['PrefixListIds'] = _ApiClient["default"].convertToType(data['PrefixListIds'], ['String']);
        }

        if (data.hasOwnProperty('ToPort')) {
          obj['ToPort'] = _ApiClient["default"].convertToType(data['ToPort'], 'Number');
        }

        if (data.hasOwnProperty('UserIdGroupPairs')) {
          obj['UserIdGroupPairs'] = _ApiClient["default"].convertToType(data['UserIdGroupPairs'], [_UserIdGroupPair["default"]]);
        }
      }

      return obj;
    }
  }]);

  return StaleIpPermission;
}();
/**
 * @member {Number} FromPort
 */


StaleIpPermission.prototype['FromPort'] = undefined;
/**
 * @member {String} IpProtocol
 */

StaleIpPermission.prototype['IpProtocol'] = undefined;
/**
 * @member {Array.<String>} IpRanges
 */

StaleIpPermission.prototype['IpRanges'] = undefined;
/**
 * @member {Array.<String>} PrefixListIds
 */

StaleIpPermission.prototype['PrefixListIds'] = undefined;
/**
 * @member {Number} ToPort
 */

StaleIpPermission.prototype['ToPort'] = undefined;
/**
 * @member {Array.<module:model/UserIdGroupPair>} UserIdGroupPairs
 */

StaleIpPermission.prototype['UserIdGroupPairs'] = undefined;
var _default = StaleIpPermission;
exports["default"] = _default;