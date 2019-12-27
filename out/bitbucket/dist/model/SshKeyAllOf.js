"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchingModelSettingsAllOfLinks = _interopRequireDefault(require("./BranchingModelSettingsAllOfLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SshKeyAllOf model module.
 * @module model/SshKeyAllOf
 * @version 1.1.0
 */
var SshKeyAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SshKeyAllOf</code>.
   * Base type for representing SSH public keys.
   * @alias module:model/SshKeyAllOf
   */
  function SshKeyAllOf() {
    _classCallCheck(this, SshKeyAllOf);

    SshKeyAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SshKeyAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SshKeyAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SshKeyAllOf} obj Optional instance to populate.
     * @return {module:model/SshKeyAllOf} The populated <code>SshKeyAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SshKeyAllOf();

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('created_on')) {
          obj['created_on'] = _ApiClient["default"].convertToType(data['created_on'], 'Date');
        }

        if (data.hasOwnProperty('last_used')) {
          obj['last_used'] = _ApiClient["default"].convertToType(data['last_used'], 'Date');
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _BranchingModelSettingsAllOfLinks["default"].constructFromObject(data['links']);
        }
      }

      return obj;
    }
  }]);

  return SshKeyAllOf;
}();
/**
 * The SSH key's immutable ID.
 * @member {String} uuid
 */


SshKeyAllOf.prototype['uuid'] = undefined;
/**
 * The SSH public key value in OpenSSH format.
 * @member {String} key
 */

SshKeyAllOf.prototype['key'] = undefined;
/**
 * The comment parsed from the SSH key (if present)
 * @member {String} comment
 */

SshKeyAllOf.prototype['comment'] = undefined;
/**
 * The user-defined label for the SSH key
 * @member {String} label
 */

SshKeyAllOf.prototype['label'] = undefined;
/**
 * @member {Date} created_on
 */

SshKeyAllOf.prototype['created_on'] = undefined;
/**
 * @member {Date} last_used
 */

SshKeyAllOf.prototype['last_used'] = undefined;
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */

SshKeyAllOf.prototype['links'] = undefined;
var _default = SshKeyAllOf;
exports["default"] = _default;