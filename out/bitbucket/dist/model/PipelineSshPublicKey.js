"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _PipelineSshPublicKeyAllOf = _interopRequireDefault(require("./PipelineSshPublicKeyAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineSshPublicKey model module.
 * @module model/PipelineSshPublicKey
 * @version 1.0.0
 */
var PipelineSshPublicKey =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineSshPublicKey</code>.
   * @alias module:model/PipelineSshPublicKey
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/PipelineSshPublicKeyAllOf
   * @param type {String} 
   */
  function PipelineSshPublicKey(type) {
    _classCallCheck(this, PipelineSshPublicKey);

    _ModelObject["default"].initialize(this, type);

    _PipelineSshPublicKeyAllOf["default"].initialize(this);

    PipelineSshPublicKey.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineSshPublicKey, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>PipelineSshPublicKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineSshPublicKey} obj Optional instance to populate.
     * @return {module:model/PipelineSshPublicKey} The populated <code>PipelineSshPublicKey</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineSshPublicKey();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _PipelineSshPublicKeyAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('key_type')) {
          obj['key_type'] = _ApiClient["default"].convertToType(data['key_type'], 'String');
        }

        if (data.hasOwnProperty('md5_fingerprint')) {
          obj['md5_fingerprint'] = _ApiClient["default"].convertToType(data['md5_fingerprint'], 'String');
        }

        if (data.hasOwnProperty('sha256_fingerprint')) {
          obj['sha256_fingerprint'] = _ApiClient["default"].convertToType(data['sha256_fingerprint'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PipelineSshPublicKey;
}();
/**
 * The base64 encoded public key.
 * @member {String} key
 */


PipelineSshPublicKey.prototype['key'] = undefined;
/**
 * The type of the public key.
 * @member {String} key_type
 */

PipelineSshPublicKey.prototype['key_type'] = undefined;
/**
 * The MD5 fingerprint of the public key.
 * @member {String} md5_fingerprint
 */

PipelineSshPublicKey.prototype['md5_fingerprint'] = undefined;
/**
 * The SHA-256 fingerprint of the public key.
 * @member {String} sha256_fingerprint
 */

PipelineSshPublicKey.prototype['sha256_fingerprint'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement PipelineSshPublicKeyAllOf interface:

/**
 * The base64 encoded public key.
 * @member {String} key
 */

_PipelineSshPublicKeyAllOf["default"].prototype['key'] = undefined;
/**
 * The type of the public key.
 * @member {String} key_type
 */

_PipelineSshPublicKeyAllOf["default"].prototype['key_type'] = undefined;
/**
 * The MD5 fingerprint of the public key.
 * @member {String} md5_fingerprint
 */

_PipelineSshPublicKeyAllOf["default"].prototype['md5_fingerprint'] = undefined;
/**
 * The SHA-256 fingerprint of the public key.
 * @member {String} sha256_fingerprint
 */

_PipelineSshPublicKeyAllOf["default"].prototype['sha256_fingerprint'] = undefined;
var _default = PipelineSshPublicKey;
exports["default"] = _default;