"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _BranchingModelSettingsAllOfLinks = _interopRequireDefault(require("./BranchingModelSettingsAllOfLinks"));

var _SshAccountKeyAllOf = _interopRequireDefault(require("./SshAccountKeyAllOf"));

var _SshKey = _interopRequireDefault(require("./SshKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SshAccountKey model module.
 * @module model/SshAccountKey
 * @version 1.2.0
 */
var SshAccountKey = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SshAccountKey</code>.
   * @alias module:model/SshAccountKey
   * @implements module:model/SshKey
   * @implements module:model/SshAccountKeyAllOf
   * @param type {String} 
   */
  function SshAccountKey(type) {
    _classCallCheck(this, SshAccountKey);

    _SshKey["default"].initialize(this, type);

    _SshAccountKeyAllOf["default"].initialize(this);

    SshAccountKey.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SshAccountKey, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>SshAccountKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SshAccountKey} obj Optional instance to populate.
     * @return {module:model/SshAccountKey} The populated <code>SshAccountKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SshAccountKey();

        _SshKey["default"].constructFromObject(data, obj);

        _SshAccountKeyAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

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

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _Account["default"].constructFromObject(data['owner']);
        }
      }

      return obj;
    }
  }]);

  return SshAccountKey;
}();
/**
 * @member {String} type
 */


SshAccountKey.prototype['type'] = undefined;
/**
 * The SSH key's immutable ID.
 * @member {String} uuid
 */

SshAccountKey.prototype['uuid'] = undefined;
/**
 * The SSH public key value in OpenSSH format.
 * @member {String} key
 */

SshAccountKey.prototype['key'] = undefined;
/**
 * The comment parsed from the SSH key (if present)
 * @member {String} comment
 */

SshAccountKey.prototype['comment'] = undefined;
/**
 * The user-defined label for the SSH key
 * @member {String} label
 */

SshAccountKey.prototype['label'] = undefined;
/**
 * @member {Date} created_on
 */

SshAccountKey.prototype['created_on'] = undefined;
/**
 * @member {Date} last_used
 */

SshAccountKey.prototype['last_used'] = undefined;
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */

SshAccountKey.prototype['links'] = undefined;
/**
 * @member {module:model/Account} owner
 */

SshAccountKey.prototype['owner'] = undefined; // Implement SshKey interface:

/**
 * @member {String} type
 */

_SshKey["default"].prototype['type'] = undefined;
/**
 * The SSH key's immutable ID.
 * @member {String} uuid
 */

_SshKey["default"].prototype['uuid'] = undefined;
/**
 * The SSH public key value in OpenSSH format.
 * @member {String} key
 */

_SshKey["default"].prototype['key'] = undefined;
/**
 * The comment parsed from the SSH key (if present)
 * @member {String} comment
 */

_SshKey["default"].prototype['comment'] = undefined;
/**
 * The user-defined label for the SSH key
 * @member {String} label
 */

_SshKey["default"].prototype['label'] = undefined;
/**
 * @member {Date} created_on
 */

_SshKey["default"].prototype['created_on'] = undefined;
/**
 * @member {Date} last_used
 */

_SshKey["default"].prototype['last_used'] = undefined;
/**
 * @member {module:model/BranchingModelSettingsAllOfLinks} links
 */

_SshKey["default"].prototype['links'] = undefined; // Implement SshAccountKeyAllOf interface:

/**
 * @member {module:model/Account} owner
 */

_SshAccountKeyAllOf["default"].prototype['owner'] = undefined;
var _default = SshAccountKey;
exports["default"] = _default;