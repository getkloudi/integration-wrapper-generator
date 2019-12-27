"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _PipelineSshKeyPairAllOf = _interopRequireDefault(require("./PipelineSshKeyPairAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PipelineSshKeyPair model module.
 * @module model/PipelineSshKeyPair
 * @version 1.1.0
 */
var PipelineSshKeyPair =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PipelineSshKeyPair</code>.
   * @alias module:model/PipelineSshKeyPair
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/PipelineSshKeyPairAllOf
   * @param type {String} 
   */
  function PipelineSshKeyPair(type) {
    _classCallCheck(this, PipelineSshKeyPair);

    _ModelObject["default"].initialize(this, type);

    _PipelineSshKeyPairAllOf["default"].initialize(this);

    PipelineSshKeyPair.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PipelineSshKeyPair, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>PipelineSshKeyPair</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PipelineSshKeyPair} obj Optional instance to populate.
     * @return {module:model/PipelineSshKeyPair} The populated <code>PipelineSshKeyPair</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PipelineSshKeyPair();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _PipelineSshKeyPairAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('private_key')) {
          obj['private_key'] = _ApiClient["default"].convertToType(data['private_key'], 'String');
        }

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _ApiClient["default"].convertToType(data['public_key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PipelineSshKeyPair;
}();
/**
 * The SSH private key. This value will be empty when retrieving the SSH key pair.
 * @member {String} private_key
 */


PipelineSshKeyPair.prototype['private_key'] = undefined;
/**
 * The SSH public key.
 * @member {String} public_key
 */

PipelineSshKeyPair.prototype['public_key'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement PipelineSshKeyPairAllOf interface:

/**
 * The SSH private key. This value will be empty when retrieving the SSH key pair.
 * @member {String} private_key
 */

_PipelineSshKeyPairAllOf["default"].prototype['private_key'] = undefined;
/**
 * The SSH public key.
 * @member {String} public_key
 */

_PipelineSshKeyPairAllOf["default"].prototype['public_key'] = undefined;
var _default = PipelineSshKeyPair;
exports["default"] = _default;