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
 * The PipelineSshPublicKeyAllOf model module.
 * @module model/PipelineSshPublicKeyAllOf
 * @version 1.0.0
 */
var PipelineSshPublicKeyAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineSshPublicKeyAllOf</code>.
   * A Pipelines known host public key.
   * @alias module:model/PipelineSshPublicKeyAllOf
   */
  function PipelineSshPublicKeyAllOf() {
    _classCallCheck(this, PipelineSshPublicKeyAllOf);

    PipelineSshPublicKeyAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineSshPublicKeyAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PipelineSshPublicKeyAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineSshPublicKeyAllOf} obj Optional instance to populate.
     * @return {module:model/PipelineSshPublicKeyAllOf} The populated <code>PipelineSshPublicKeyAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineSshPublicKeyAllOf();

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

  return PipelineSshPublicKeyAllOf;
}();
/**
 * The base64 encoded public key.
 * @member {String} key
 */


PipelineSshPublicKeyAllOf.prototype['key'] = undefined;
/**
 * The type of the public key.
 * @member {String} key_type
 */

PipelineSshPublicKeyAllOf.prototype['key_type'] = undefined;
/**
 * The MD5 fingerprint of the public key.
 * @member {String} md5_fingerprint
 */

PipelineSshPublicKeyAllOf.prototype['md5_fingerprint'] = undefined;
/**
 * The SHA-256 fingerprint of the public key.
 * @member {String} sha256_fingerprint
 */

PipelineSshPublicKeyAllOf.prototype['sha256_fingerprint'] = undefined;
var _default = PipelineSshPublicKeyAllOf;
exports["default"] = _default;