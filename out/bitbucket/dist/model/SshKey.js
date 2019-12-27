"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchingModelSettingsAllOfLinks = _interopRequireDefault(require("./BranchingModelSettingsAllOfLinks"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _SshKeyAllOf = _interopRequireDefault(require("./SshKeyAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SshKey model module.
 * @module model/SshKey
 * @version 1.1.2
 */
var SshKey =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SshKey</code>.
   * @alias module:model/SshKey
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/SshKeyAllOf
   * @param type {String} 
   */
  function SshKey(type) {
    _classCallCheck(this, SshKey);

    _ModelObject["default"].initialize(this, type);

    _SshKeyAllOf["default"].initialize(this);

    SshKey.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SshKey, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>SshKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SshKey} obj Optional instance to populate.
     * @return {module:model/SshKey} The populated <code>SshKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SshKey();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _SshKeyAllOf["default"].constructFromObject(data, obj);

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

  return SshKey;
}();
/**
 * The SSH key's immutable ID.
 * @member {String} uuid
 */


SshKey.prototype['uuid'] = undefined;
/**
 * The SSH public key value in OpenSSH format.
 * @member {String} key
 */

SshKey.prototype['key'] = undefined;
/**
 * The comment parsed from the SSH key (if present)
 * @member {String} comment
 */

SshKey.prototype['comment'] = undefined;
/**
 * The user-defined label for the SSH key
 * @member {String} label
 */

SshKey.prototype['label'] = undefined;
/**
 * @member {Date} created_on
 */

SshKey.prototype['created_on'] = undefined;
/**
 * @member {Date} last_used
 */

SshKey.prototype['last_used'] = undefined;
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */

SshKey.prototype['links'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement SshKeyAllOf interface:

/**
 * The SSH key's immutable ID.
 * @member {String} uuid
 */

_SshKeyAllOf["default"].prototype['uuid'] = undefined;
/**
 * The SSH public key value in OpenSSH format.
 * @member {String} key
 */

_SshKeyAllOf["default"].prototype['key'] = undefined;
/**
 * The comment parsed from the SSH key (if present)
 * @member {String} comment
 */

_SshKeyAllOf["default"].prototype['comment'] = undefined;
/**
 * The user-defined label for the SSH key
 * @member {String} label
 */

_SshKeyAllOf["default"].prototype['label'] = undefined;
/**
 * @member {Date} created_on
 */

_SshKeyAllOf["default"].prototype['created_on'] = undefined;
/**
 * @member {Date} last_used
 */

_SshKeyAllOf["default"].prototype['last_used'] = undefined;
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */

_SshKeyAllOf["default"].prototype['links'] = undefined;
var _default = SshKey;
exports["default"] = _default;